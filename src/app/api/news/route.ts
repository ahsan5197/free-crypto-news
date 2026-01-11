import { NextRequest, NextResponse } from 'next/server';
import { getLatestNews } from '@/lib/crypto-news';
import { translateArticles, isLanguageSupported, SUPPORTED_LANGUAGES } from '@/lib/translate';

export const runtime = 'edge';
export const revalidate = 300; // 5 minutes

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get('limit') || '10');
  const source = searchParams.get('source') || undefined;
  const from = searchParams.get('from') || undefined;
  const to = searchParams.get('to') || undefined;
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : undefined;
  const perPage = searchParams.get('per_page') ? parseInt(searchParams.get('per_page')!) : undefined;
  const lang = searchParams.get('lang') || 'en';
  
  // Validate language parameter
  if (lang !== 'en' && !isLanguageSupported(lang)) {
    return NextResponse.json(
      { 
        error: 'Unsupported language', 
        message: `Language '${lang}' is not supported`,
        supported: Object.keys(SUPPORTED_LANGUAGES),
      },
      { status: 400 }
    );
  }
  
  try {
    const data = await getLatestNews(limit, source, { from, to, page, perPage });
    
    // Translate articles if language is not English
    let articles = data.articles;
    let translatedLang = 'en';
    
    if (lang !== 'en' && articles.length > 0) {
      try {
        articles = await translateArticles(articles, lang);
        translatedLang = lang;
      } catch (translateError) {
        console.error('Translation failed:', translateError);
        // Continue with original articles on translation failure
      }
    }
    
    return NextResponse.json(
      {
        ...data,
        articles,
        lang: translatedLang,
        availableLanguages: Object.keys(SUPPORTED_LANGUAGES),
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch news', message: String(error) },
      { status: 500 }
    );
  }
}
