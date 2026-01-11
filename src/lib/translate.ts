/**
 * News Translation Service
 * 
 * Translates news articles to different languages using OpenAI.
 * Includes caching to avoid re-translating the same articles.
 * 
 * FEATURE FLAG: Set FEATURE_TRANSLATION=true to enable real-time translation.
 * Default is disabled - translations are done at archive time instead.
 */

interface TranslatedArticle {
  title: string;
  description?: string;
  translatedAt: string;
  lang: string;
}

interface Article {
  title: string;
  description?: string;
  link: string;
  [key: string]: unknown;
}

// Feature flag - disabled by default
const TRANSLATION_ENABLED = process.env.FEATURE_TRANSLATION === 'true';

// In-memory cache for translations
const translationCache = new Map<string, TranslatedArticle>();

// Supported languages with display names
export const SUPPORTED_LANGUAGES: Record<string, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ja: '日本語',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  ko: '한국어',
  ar: 'العربية',
  ru: 'Русский',
  it: 'Italiano',
  nl: 'Nederlands',
  pl: 'Polski',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
  th: 'ไทย',
  id: 'Bahasa Indonesia',
};

/**
 * Check if real-time translation is enabled
 */
export function isTranslationEnabled(): boolean {
  return TRANSLATION_ENABLED;
}

/**
 * Check if a language code is supported
 */
export function isLanguageSupported(lang: string): boolean {
  return lang in SUPPORTED_LANGUAGES;
}

/**
 * Get cache key for an article + language combination
 */
function getCacheKey(articleLink: string, lang: string): string {
  return `${lang}:${articleLink}`;
}

/**
 * Translate text using OpenAI API
 */
async function translateWithOpenAI(
  texts: { title: string; description: string }[],
  targetLang: string
): Promise<{ title: string; description: string }[]> {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY not configured');
  }

  const proxyUrl = process.env.OPENAI_PROXY_URL || 'https://api.openai.com';
  const langName = SUPPORTED_LANGUAGES[targetLang] || targetLang;

  // Batch translate for efficiency
  const prompt = `Translate the following cryptocurrency news titles and descriptions to ${langName}. 
Keep the translations concise and natural. Preserve any ticker symbols like $BTC or $ETH.
Return a JSON array with objects containing "title" and "description" fields.

Input:
${JSON.stringify(texts, null, 2)}`;

  const response = await fetch(`${proxyUrl}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a professional translator specializing in cryptocurrency and finance news. Always respond with valid JSON only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.3,
      response_format: { type: 'json_object' },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error('Empty response from OpenAI');
  }

  try {
    const parsed = JSON.parse(content);
    // Handle both { translations: [...] } and direct array formats
    return Array.isArray(parsed) ? parsed : parsed.translations || parsed.items || [];
  } catch {
    throw new Error(`Failed to parse translation response: ${content}`);
  }
}

/**
 * Translate an array of articles to the target language
 * 
 * Returns original articles if:
 * - FEATURE_TRANSLATION is not enabled
 * - Target language is English
 * - No OPENAI_API_KEY configured
 */
export async function translateArticles<T extends Article>(
  articles: T[],
  targetLang: string
): Promise<T[]> {
  // Feature flag check - return original if disabled
  if (!TRANSLATION_ENABLED) {
    return articles;
  }
  
  // English is the source language, no translation needed
  if (targetLang === 'en') {
    return articles;
  }

  if (!isLanguageSupported(targetLang)) {
    throw new Error(`Unsupported language: ${targetLang}. Supported: ${Object.keys(SUPPORTED_LANGUAGES).join(', ')}`);
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    // Return original articles if no API key configured
    console.warn('OPENAI_API_KEY not set, returning original articles');
    return articles;
  }

  // Separate cached and uncached articles
  const cachedResults: Map<number, TranslatedArticle> = new Map();
  const uncachedArticles: { index: number; article: Article }[] = [];

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const cacheKey = getCacheKey(article.link, targetLang);
    const cached = translationCache.get(cacheKey);

    if (cached) {
      cachedResults.set(i, cached);
    } else {
      uncachedArticles.push({ index: i, article });
    }
  }

  // Translate uncached articles in batches
  const BATCH_SIZE = 10;
  const translatedMap: Map<number, TranslatedArticle> = new Map();

  for (let i = 0; i < uncachedArticles.length; i += BATCH_SIZE) {
    const batch = uncachedArticles.slice(i, i + BATCH_SIZE);
    const textsToTranslate = batch.map(({ article }) => ({
      title: article.title,
      description: article.description || '',
    }));

    try {
      const translations = await translateWithOpenAI(textsToTranslate, targetLang);

      for (let j = 0; j < batch.length; j++) {
        const { index, article } = batch[j];
        const translation = translations[j];

        if (translation) {
          const translated: TranslatedArticle = {
            title: translation.title || article.title,
            description: translation.description || article.description,
            translatedAt: new Date().toISOString(),
            lang: targetLang,
          };

          // Cache the translation
          const cacheKey = getCacheKey(article.link, targetLang);
          translationCache.set(cacheKey, translated);
          translatedMap.set(index, translated);
        }
      }
    } catch (error) {
      console.error('Translation batch failed:', error);
      // On error, use original text for this batch
      for (const { index } of batch) {
        translatedMap.set(index, {
          title: articles[index].title,
          description: articles[index].description,
          translatedAt: new Date().toISOString(),
          lang: 'en', // Mark as not translated
        });
      }
    }
  }

  // Merge cached and newly translated articles
  return articles.map((article, index) => {
    const cached = cachedResults.get(index);
    const translated = translatedMap.get(index);
    const result = cached || translated;

    if (result) {
      return {
        ...article,
        title: result.title,
        description: result.description,
        originalTitle: article.title,
        originalDescription: article.description,
        translatedLang: result.lang,
      } as T;
    }

    return article;
  });
}

/**
 * Get cache statistics
 */
export function getTranslationCacheStats(): { size: number; languages: string[] } {
  const languages = new Set<string>();
  for (const key of translationCache.keys()) {
    const lang = key.split(':')[0];
    languages.add(lang);
  }
  return {
    size: translationCache.size,
    languages: Array.from(languages),
  };
}

/**
 * Clear the translation cache
 */
export function clearTranslationCache(): void {
  translationCache.clear();
}
