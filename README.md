<p align="center">
  <img src="https://img.shields.io/badge/crypto-news-orange?style=for-the-badge&logo=bitcoin&logoColor=white" alt="Crypto News" />
  <img src="https://img.shields.io/badge/100%25-FREE-brightgreen?style=for-the-badge" alt="100% Free" />
  <img src="https://img.shields.io/badge/API_Key-NOT_REQUIRED-blue?style=for-the-badge" alt="No API Key" />
</p>

<h1 align="center">🆓 Free Crypto News API</h1>

<p align="center">
  <strong>The open-source cryptocurrency news aggregator for developers, traders, and AI agents.</strong><br/>
  Real-time news from 7 trusted sources. Zero cost. Zero API keys. Zero rate limits.
</p>

<p align="center">
  <a href="https://github.com/nirholas/free-crypto-news/stargazers"><img src="https://img.shields.io/github/stars/nirholas/free-crypto-news?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/nirholas/free-crypto-news/blob/main/LICENSE"><img src="https://img.shields.io/github/license/nirholas/free-crypto-news" alt="MIT License" /></a>
  <a href="https://github.com/nirholas/free-crypto-news/actions"><img src="https://img.shields.io/github/actions/workflow/status/nirholas/free-crypto-news/ci.yml?branch=main" alt="Build Status" /></a>
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnirholas%2Ffree-crypto-news"><img src="https://img.shields.io/badge/deploy-vercel-black" alt="Deploy to Vercel" /></a>
</p>

---

## ⚡ Quick Start

\`\`\`bash
curl https://free-crypto-news.vercel.app/api/news
\`\`\`

That's it. No signup. No API key. Just works.

**Try it now:** [https://free-crypto-news.vercel.app/api/news](https://free-crypto-news.vercel.app/api/news)

---

## 📋 Table of Contents

- [Why Free Crypto News?](#-why-free-crypto-news)
- [Features](#-features)
- [News Sources](#-news-sources)
- [API Reference](#-api-reference)
- [SDKs & Libraries](#-sdks--libraries)
- [AI & LLM Integration](#-ai--llm-integration)
- [Bot Examples](#-bot-examples)
- [Embeddable Widgets](#-embeddable-widgets)
- [Historical Archive](#-historical-archive)
- [Archive V2: Enhanced Intelligence](#-archive-v2-enhanced-intelligence)
- [Self-Hosting](#-self-hosting)
- [Configuration](#-configuration)
- [Failsafe & Reliability](#-failsafe--reliability)
- [Tech Stack](#-tech-stack)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🤔 Why Free Crypto News?

Every crypto news API charges \$30-300/month and requires API keys. We built a free alternative.

| Feature | Free Crypto News | CryptoPanic | Others |
|---------|------------------|-------------|--------|
| **Price** | 🆓 Free forever | \$29-299/mo | Paid |
| **API Key** | ❌ Not required | Required | Required |
| **Rate Limit** | ∞ Unlimited* | 100-1000/day | Limited |
| **Sources** | 7 trusted outlets | 1 | Varies |
| **Self-host** | ✅ One-click deploy | No | No |
| **Open Source** | ✅ MIT License | No | No |
| **Historical Archive** | ✅ Free access | Paid | Paid |
| **AI/LLM Ready** | ✅ MCP + ChatGPT | No | Limited |

<sub>*Fair use applies. Don't abuse it.</sub>

---

## ✨ Features

### Core API
- **Real-time aggregation** from 7 major crypto news sources
- **Search** by keywords, topics, or date range
- **Filter** by category (DeFi, Bitcoin, Breaking)
- **Trending topics** with sentiment analysis
- **RSS/Atom feeds** for any news reader

### Historical Archive
- **Hourly snapshots** since January 2026
- **Full article metadata** with entities, sentiment, market context
- **JSONL format** for easy processing and streaming
- **Query by** date, source, ticker, sentiment

### AI & Developer Tools
- **Claude Desktop MCP Server** for AI assistants
- **ChatGPT Plugin** with OpenAPI schema
- **LangChain tools** ready to use
- **SDKs** for Python, TypeScript, JavaScript, Go, PHP, React
- **AI training exports** for fine-tuning models

### Embeddable
- **News widgets** for websites
- **Ticker tape** component
- **Carousel** component
- **Zero dependencies**

---

## 📰 News Sources

We aggregate from **7 trusted cryptocurrency news outlets**:

| Source | Focus | Category |
|--------|-------|----------|
| 🟠 **CoinDesk** | General crypto news & analysis | \`general\` |
| 🔵 **The Block** | Institutional & research reports | \`general\` |
| 🟢 **Decrypt** | Web3, culture, & mainstream | \`general\` |
| 🟡 **CoinTelegraph** | Global crypto coverage | \`general\` |
| 🟤 **Bitcoin Magazine** | Bitcoin maximalist perspective | \`bitcoin\` |
| 🟣 **Blockworks** | DeFi & institutional focus | \`defi\` |
| 🔴 **The Defiant** | DeFi native news | \`defi\` |

---

## 📚 API Reference

**Base URL:** \`https://free-crypto-news.vercel.app\`

**Failsafe Mirror:** \`https://nirholas.github.io/free-crypto-news/\`

### Endpoints

| Endpoint | Description | Example |
|----------|-------------|---------|
| \`GET /api/news\` | Latest from all sources | \`?limit=20&lang=es\` |
| \`GET /api/search\` | Search by keywords | \`?q=bitcoin+etf\` |
| \`GET /api/bitcoin\` | Bitcoin-specific news | \`?limit=10\` |
| \`GET /api/defi\` | DeFi-specific news | \`?limit=10\` |
| \`GET /api/breaking\` | Last 2 hours only | \`?limit=5\` |
| \`GET /api/trending\` | Trending topics + sentiment | \`?hours=24\` |
| \`GET /api/analyze\` | News with classification | \`?topic=DeFi&sentiment=bullish\` |
| \`GET /api/stats\` | Analytics & statistics | - |
| \`GET /api/sources\` | List all sources | - |
| \`GET /api/health\` | API & feed health status | - |
| \`GET /api/rss\` | Aggregated RSS feed | \`?feed=defi\` |
| \`GET /api/atom\` | Aggregated Atom feed | \`?feed=bitcoin\` |
| \`GET /api/opml\` | OPML export for readers | - |
| \`GET /api/docs\` | Interactive Swagger docs | - |
| \`GET /api/archive\` | Historical archive (v1) | \`?start_date=2026-01-01\` |
| \`GET /api/archive/v2\` | Enhanced archive (v2) | \`?ticker=BTC&sentiment=positive\` |
| \`GET /api/origins\` | Original source finder | \`?source_type=government\` |
| \`GET /api/portfolio\` | Portfolio news + prices | \`?symbols=BTC,ETH,SOL\` |
| \`POST /api/webhooks\` | Register webhook | JSON body |
| \`POST /api/push\` | Web push subscription | JSON body |

### Query Parameters

| Parameter | Endpoints | Description |
|-----------|-----------|-------------|
| \`limit\` | All news endpoints | Max articles (1-50, default 20) |
| \`source\` | \`/api/news\` | Filter by source key |
| \`from\` | \`/api/news\` | Start date (ISO 8601) |
| \`to\` | \`/api/news\` | End date (ISO 8601) |
| \`page\` | \`/api/news\` | Page number for pagination |
| \`q\` | \`/api/search\` | Search query |
| \`hours\` | \`/api/trending\` | Time window (1-72) |
| \`topic\` | \`/api/analyze\` | Filter by topic |
| \`sentiment\` | \`/api/analyze\`, \`/api/archive/v2\` | bullish/bearish/neutral |
| \`ticker\` | \`/api/archive/v2\` | Filter by cryptocurrency (BTC, ETH) |
| \`tags\` | \`/api/archive/v2\` | Filter by tags (comma-separated) |

### Response Format

\`\`\`json
{
  "articles": [
    {
      "title": "Bitcoin Hits New All-Time High Above \$100K",
      "link": "https://coindesk.com/...",
      "description": "Bitcoin surpassed the \$100,000 mark for the first time...",
      "pubDate": "2026-01-11T12:00:00Z",
      "source": "CoinDesk",
      "sourceKey": "coindesk",
      "category": "bitcoin",
      "timeAgo": "2h ago"
    }
  ],
  "totalCount": 150,
  "fetchedAt": "2026-01-11T14:30:00Z"
}
\`\`\`

### HTTP Status Codes

| Code | Description |
|------|-------------|
| \`200\` | Success |
| \`400\` | Bad request (invalid parameters) |
| \`404\` | Endpoint not found |
| \`500\` | Server error |
| \`503\` | Service temporarily unavailable |

---

## 📦 SDKs & Libraries

Official SDKs for popular languages and frameworks:

| Language | Installation | Docs |
|----------|--------------|------|
| **TypeScript** | \`npm install @nicholasrq/crypto-news\` | [sdk/typescript/](sdk/typescript/) |
| **React** | \`npm install @nicholasrq/crypto-news-react\` | [sdk/react/](sdk/react/) |
| **Python** | \`curl -O .../sdk/python/crypto_news.py\` | [sdk/python/](sdk/python/) |
| **JavaScript** | \`curl -O .../sdk/javascript/crypto-news.js\` | [sdk/javascript/](sdk/javascript/) |
| **Go** | \`go get github.com/nirholas/free-crypto-news/sdk/go\` | [sdk/go/](sdk/go/) |
| **PHP** | \`curl -O .../sdk/php/CryptoNews.php\` | [sdk/php/](sdk/php/) |

### Python Example

\`\`\`python
from crypto_news import CryptoNews

client = CryptoNews()

# Get latest news
for article in client.get_latest(5):
    print(f"📰 {article['title']} - {article['source']}")

# Search
results = client.search("ethereum etf", limit=10)

# Breaking news only
breaking = client.get_breaking(5)
\`\`\`

### TypeScript Example

\`\`\`typescript
import { CryptoNews } from '@nicholasrq/crypto-news';

const client = new CryptoNews();

// Fully typed responses
const articles = await client.getLatest(10);
const health = await client.getHealth();
const trending = await client.getTrending(24);
\`\`\`

### One-Liners

\`\`\`bash
# Bash
curl -s https://free-crypto-news.vercel.app/api/news | jq '.articles[0].title'

# Python
import urllib.request, json; print(json.loads(urllib.request.urlopen("https://free-crypto-news.vercel.app/api/news?limit=1").read())["articles"][0]["title"])

# JavaScript
fetch("https://free-crypto-news.vercel.app/api/news?limit=1").then(r=>r.json()).then(d=>console.log(d.articles[0].title))
\`\`\`

---

## 🤖 AI & LLM Integration

Built for the AI era. Works with ChatGPT, Claude, LangChain, and any LLM agent.

### Claude Desktop (MCP Server)

Add crypto news to Claude Desktop as a native tool:

**1. Install:**
\`\`\`bash
git clone https://github.com/nirholas/free-crypto-news.git
cd free-crypto-news/mcp && npm install
\`\`\`

**2. Configure Claude Desktop:**

Edit \`~/Library/Application Support/Claude/claude_desktop_config.json\` (macOS) or \`%APPDATA%\\Claude\\claude_desktop_config.json\` (Windows):

\`\`\`json
{
  "mcpServers": {
    "crypto-news": {
      "command": "node",
      "args": ["/path/to/free-crypto-news/mcp/index.js"]
    }
  }
}
\`\`\`

**3. Restart Claude and ask:** *"Get me the latest crypto news"*

📖 Full docs: [mcp/README.md](mcp/README.md)

### ChatGPT Custom GPT

Build a crypto news GPT in 2 minutes:

1. Go to [chat.openai.com](https://chat.openai.com) → Create GPT
2. Click **Configure** → **Actions** → **Create new action**
3. Paste the OpenAPI schema from [\`chatgpt/openapi.yaml\`](chatgpt/openapi.yaml)
4. No authentication needed
5. Save and test: *"What's the latest crypto news?"*

### LangChain

\`\`\`python
from langchain.tools import tool
import requests

@tool
def get_crypto_news(limit: int = 5) -> str:
    """Get latest cryptocurrency news from 7 trusted sources including CoinDesk, The Block, and CoinTelegraph."""
    response = requests.get(f"https://free-crypto-news.vercel.app/api/news?limit={limit}")
    articles = response.json()["articles"]
    return "\n".join([f"• {a['title']} ({a['source']})" for a in articles])

@tool  
def search_crypto_news(query: str) -> str:
    """Search cryptocurrency news by keyword. Useful for finding news about specific coins, protocols, or events."""
    response = requests.get(f"https://free-crypto-news.vercel.app/api/search?q={query}")
    articles = response.json()["articles"]
    return "\n".join([f"• {a['title']}" for a in articles])

# Add to your agent
tools = [get_crypto_news, search_crypto_news]
\`\`\`

📖 Full example: [examples/langchain-tool.py](examples/langchain-tool.py)

### OpenAI Function Calling

\`\`\`json
{
  "name": "get_crypto_news",
  "description": "Get the latest cryptocurrency news from trusted sources",
  "parameters": {
    "type": "object",
    "properties": {
      "limit": { "type": "integer", "description": "Number of articles (1-50)" },
      "category": { "type": "string", "enum": ["all", "bitcoin", "defi"] }
    }
  }
}
\`\`\`

---

## 🤖 Bot Examples

Ready-to-deploy bots for popular platforms:

### Discord Bot

\`\`\`javascript
const { Client, EmbedBuilder, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.on('messageCreate', async (msg) => {
  if (msg.content === '!news') {
    const { articles } = await fetch('https://free-crypto-news.vercel.app/api/breaking?limit=5')
      .then(r => r.json());
    
    const embed = new EmbedBuilder()
      .setTitle('🚨 Breaking Crypto News')
      .setColor(0x00ff00)
      .setTimestamp();
    
    articles.forEach(a => embed.addFields({ 
      name: a.source, 
      value: \`[\${a.title}](\${a.link})\` 
    }));
    
    msg.channel.send({ embeds: [embed] });
  }
});

client.login('YOUR_BOT_TOKEN');
\`\`\`

📖 Full bot: [examples/discord-bot.js](examples/discord-bot.js)

### Telegram Bot

\`\`\`python
from telegram import Update
from telegram.ext import Application, CommandHandler
import aiohttp

async def news(update: Update, context):
    async with aiohttp.ClientSession() as session:
        async with session.get('https://free-crypto-news.vercel.app/api/news?limit=5') as r:
            data = await r.json()
    
    msg = "📰 *Latest Crypto News*\n\n"
    for a in data['articles']:
        msg += f"• [{a['title']}]({a['link']})\n"
    
    await update.message.reply_text(msg, parse_mode='Markdown')

app = Application.builder().token("YOUR_TOKEN").build()
app.add_handler(CommandHandler("news", news))
app.run_polling()
\`\`\`

📖 Full bot: [examples/telegram-bot.py](examples/telegram-bot.py)

### Slack Bot

📖 See: [examples/slack-bot.js](examples/slack-bot.js)

---

## 🎨 Embeddable Widgets

Add crypto news to any website with zero dependencies:

### News Ticker

\`\`\`html
<div id="crypto-ticker" class="crypto-ticker" data-auto-init>
  <div class="crypto-ticker-label">📰 CRYPTO</div>
  <div class="crypto-ticker-track"></div>
</div>
<script src="https://nirholas.github.io/free-crypto-news/widget/ticker.js"></script>
\`\`\`

### News Carousel

\`\`\`html
<div id="crypto-carousel" class="crypto-carousel" data-auto-init>
  <div class="crypto-carousel-viewport">
    <div class="crypto-carousel-track"></div>
  </div>
</div>
<script src="https://nirholas.github.io/free-crypto-news/widget/carousel.js"></script>
\`\`\`

### Custom Widget

\`\`\`html
<div id="news"></div>
<script>
async function loadNews() {
  const { articles } = await fetch('https://free-crypto-news.vercel.app/api/news?limit=5')
    .then(r => r.json());
  
  document.getElementById('news').innerHTML = articles.map(a => 
    \`<div class="news-item">
      <a href="\${a.link}" target="_blank">\${a.title}</a>
      <small>\${a.source} • \${a.timeAgo}</small>
    </div>\`
  ).join('');
}
loadNews();
setInterval(loadNews, 300000); // Refresh every 5 minutes
</script>
\`\`\`

📖 Full examples: [widget/](widget/)

---

## 🗄️ Historical Archive

Access the complete historical record of crypto news:

### Archive V1 (Basic)

\`\`\`bash
# Get archive statistics
curl "https://free-crypto-news.vercel.app/api/archive?stats=true"

# Query by date range
curl "https://free-crypto-news.vercel.app/api/archive?start_date=2026-01-01&end_date=2026-01-07"

# Search historical articles
curl "https://free-crypto-news.vercel.app/api/archive?q=bitcoin&limit=50"
\`\`\`

### Archive V2 (Enhanced)

The V2 archive includes enriched metadata for every article:

\`\`\`bash
# Get enriched articles
curl "https://free-crypto-news.vercel.app/api/archive/v2?limit=20"

# Filter by cryptocurrency ticker
curl "https://free-crypto-news.vercel.app/api/archive/v2?ticker=BTC"

# Filter by sentiment
curl "https://free-crypto-news.vercel.app/api/archive/v2?sentiment=positive"

# Get archive statistics
curl "https://free-crypto-news.vercel.app/api/archive/v2?stats=true"

# Get trending tickers (last 24 hours)
curl "https://free-crypto-news.vercel.app/api/archive/v2?trending=true&hours=24"

# Get market history for a month
curl "https://free-crypto-news.vercel.app/api/archive/v2?market=2026-01"
\`\`\`

---

## 📊 Archive V2: Enhanced Intelligence

We're building the most comprehensive open historical archive of cryptocurrency news.

### What's Captured

| Feature | Description |
|---------|-------------|
| **Hourly collection** | New articles captured every hour |
| **Entity extraction** | Tickers (\$BTC, \$ETH), people, companies, protocols |
| **Sentiment analysis** | Every headline scored (positive/negative/neutral) |
| **Market context** | BTC/ETH prices + Fear & Greed Index at capture time |
| **Story clustering** | Related articles grouped together |
| **First-mover tracking** | Which source breaks news first |
| **Content hashing** | SHA256 for integrity verification |
| **Deduplication** | Content-addressed IDs prevent duplicates |

### Enriched Article Schema

\`\`\`json
{
  "id": "a1b2c3d4e5f6g7h8",
  "schema_version": "2.0.0",
  "title": "BlackRock Adds \$900M in Bitcoin to ETF Holdings",
  "link": "https://cointelegraph.com/...",
  "canonical_link": "https://cointelegraph.com/...",
  "description": "BlackRock's iShares Bitcoin Trust sees massive inflows...",
  "source": "CoinTelegraph",
  "source_key": "cointelegraph",
  "category": "bitcoin",
  "pub_date": "2026-01-11T18:05:00.000Z",
  "first_seen": "2026-01-11T18:10:00.000Z",
  "last_seen": "2026-01-11T23:05:00.000Z",
  "fetch_count": 5,
  "tickers": ["BTC"],
  "entities": {
    "people": ["Larry Fink"],
    "companies": ["BlackRock", "iShares"],
    "protocols": ["Bitcoin"]
  },
  "tags": ["institutional", "etf", "inflows"],
  "sentiment": {
    "score": 0.65,
    "label": "positive",
    "confidence": 0.85
  },
  "market_context": {
    "btc_price": 94500,
    "eth_price": 3200,
    "fear_greed_index": 65
  },
  "content_hash": "sha256:abc123...",
  "meta": {
    "word_count": 23,
    "has_numbers": true,
    "is_breaking": false,
    "is_opinion": false
  }
}
\`\`\`

### Archive Directory Structure

\`\`\`
archive/v2/
├── articles/              # JSONL files, one per month
│   └── 2026-01.jsonl      # All articles from January 2026
├── snapshots/             # Hourly trending state
│   └── 2026/01/11/
│       ├── 00.json        # State at midnight UTC
│       ├── 01.json        # State at 1am UTC
│       └── ...
├── market/                # Price and sentiment history
│   └── 2026-01.jsonl      # Market data for January
├── onchain/               # On-chain events
│   └── 2026-01.jsonl      # BTC stats, DEX volumes, bridges
├── social/                # Social signals
│   └── 2026-01.jsonl      # Reddit sentiment, trending
├── predictions/           # Prediction market data
│   └── 2026-01.jsonl      # Polymarket, Manifold odds
├── index/                 # Fast lookups
│   ├── by-source.json     # Article IDs by source
│   ├── by-ticker.json     # Article IDs by ticker
│   └── by-date.json       # Article IDs by date
└── meta/
    ├── schema.json        # Schema definition
    ├── stats.json         # Running statistics
    └── source-stats.json  # Source reliability scores
\`\`\`

### Data Services

The archive collection includes these enrichment services:

| Service | Data Captured |
|---------|---------------|
| **Market Context** | BTC/ETH/SOL prices, market cap, Fear & Greed via CoinGecko |
| **DeFi Metrics** | TVL, protocol rankings, yields via DeFiLlama |
| **On-Chain Events** | Bitcoin network stats, DEX volumes, bridge activity |
| **Social Signals** | Reddit sentiment, trending topics (requires credentials) |
| **X/Twitter Signals** | Influencer activity, trending hashtags via XActions |
| **Prediction Markets** | Polymarket and Manifold crypto prediction odds |
| **Story Clustering** | Groups related articles, identifies first-movers |
| **Source Reliability** | Tracks accuracy and credibility scores |

---

## 🚀 Self-Hosting

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnirholas%2Ffree-crypto-news)

### Manual Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/nirholas/free-crypto-news.git
cd free-crypto-news

# Install dependencies
pnpm install

# Start development server
pnpm dev
\`\`\`

Open [http://localhost:3000/api/news](http://localhost:3000/api/news)

### Production Build

\`\`\`bash
pnpm build
pnpm start
\`\`\`

---

## ⚙️ Configuration

### Environment Variables

**All environment variables are optional.** The project works out of the box with zero configuration.

#### Core Settings

| Variable | Default | Description |
|----------|---------|-------------|
| \`API_URL\` | Vercel URL | Base URL for API calls |
| \`ARCHIVE_DIR\` | \`./archive\` | Archive storage path |

#### AI & Translation

| Variable | Default | Description |
|----------|---------|-------------|
| `OPENAI_API_KEY` | - | Required for real-time translation (if enabled) |
| \`OPENAI_PROXY_URL\` | \`api.openai.com\` | Custom OpenAI endpoint |

#### Social Signals (Optional)

| Variable | Default | Description |
|----------|---------|-------------|
| \`REDDIT_CLIENT_ID\` | - | Reddit OAuth app client ID |
| \`REDDIT_CLIENT_SECRET\` | - | Reddit OAuth app secret |
| \`X_AUTH_TOKEN\` | - | X/Twitter via [XActions](https://github.com/nirholas/XActions) |

#### Feature Flags

| Variable | Default | Description |
|----------|---------|-------------|
| \`FEATURE_TRANSLATION\` | \`false\` | Real-time API translation (18 languages) |
| \`FEATURE_MARKET\` | \`true\` | Market data (CoinGecko, DeFiLlama) |
| \`FEATURE_ONCHAIN\` | \`true\` | On-chain events |
| \`FEATURE_SOCIAL\` | \`true\` | Social signals |
| \`FEATURE_PREDICTIONS\` | \`true\` | Prediction markets |
| \`FEATURE_CLUSTERING\` | \`true\` | Story clustering |
| \`FEATURE_RELIABILITY\` | \`true\` | Source reliability tracking |

### GitHub Secrets

For full CI/CD functionality, add these secrets to your repository:

| Secret | Purpose |
|--------|---------|
| `OPENAI_API_KEY` | Archive translation (future) |
| \`REDDIT_CLIENT_ID\` | Enable Reddit sentiment tracking |
| \`REDDIT_CLIENT_SECRET\` | Enable Reddit sentiment tracking |
| \`X_AUTH_TOKEN\` | Enable X/Twitter signals |

---

## 🛡️ Failsafe & Reliability

The API includes built-in redundancy for high availability.

### Failsafe Mirror

If Vercel is down, use the GitHub Pages backup:

**Failsafe URL:** \`https://nirholas.github.io/free-crypto-news/\`

| Endpoint | Description |
|----------|-------------|
| \`/cache/latest.json\` | Latest news (updated hourly) |
| \`/cache/bitcoin.json\` | Bitcoin news cache |
| \`/cache/defi.json\` | DeFi news cache |
| \`/cache/trending.json\` | Trending topics cache |
| \`/cache/sources.json\` | Source list |
| \`/status.html\` | Real-time status page |

### Client-Side Failover Pattern

\`\`\`javascript
const MAIN_API = 'https://free-crypto-news.vercel.app';
const FAILSAFE = 'https://nirholas.github.io/free-crypto-news';

async function getNews() {
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 5000); // 5s timeout
    
    const response = await fetch(\`\${MAIN_API}/api/news\`, { 
      signal: controller.signal 
    });
    if (response.ok) return response.json();
    throw new Error('API error');
  } catch {
    // Automatic fallback to cached data
    const response = await fetch(\`\${FAILSAFE}/cache/latest.json\`);
    return response.json();
  }
}
\`\`\`

### How Failsafe Works

1. **GitHub Actions** runs hourly to cache data from the main API
2. **GitHub Pages** serves static JSON files as backup
3. **Status page** monitors all endpoints in real-time
4. **Archive workflow** preserves historical data every hour

---

## 🔧 Tech Stack

| Component | Technology |
|-----------|------------|
| **Runtime** | Next.js 14 with Edge Functions |
| **Hosting** | Vercel (free tier) |
| **Data** | Direct RSS parsing (no database) |
| **Cache** | 5-minute edge cache |
| **Archive** | GitHub repository (JSONL format) |
| **Backup** | GitHub Pages (static JSON) |
| **CI/CD** | GitHub Actions |

---

## 🗺️ Roadmap

Building the definitive open crypto intelligence platform.

### ✅ Complete

- [x] Real-time aggregation from 7 sources
- [x] REST API with 20+ endpoints
- [x] RSS/Atom feeds
- [x] SDKs (Python, TypeScript, JavaScript, Go, PHP, React)
- [x] Claude Desktop MCP server
- [x] ChatGPT plugin
- [x] Embeddable widgets
- [x] Archive V2 with full enrichment
- [x] Hourly collection workflow
- [x] Entity/ticker extraction
- [x] Sentiment analysis
- [x] Market context capture
- [x] Story clustering engine
- [x] Source reliability tracking
- [x] On-chain event tracking
- [x] Prediction market tracking
- [x] AI training data exports

### 🔨 In Progress

- [ ] WebSocket real-time streaming
- [ ] LunarCrush / Santiment integration
- [ ] Advanced entity extraction with AI
- [ ] Headline mutation tracking
- [ ] Archive translations (18 languages)

### 📋 Planned

- [ ] Full article extraction (where legal)
- [ ] AI-powered summarization
- [ ] Event classification (funding, hack, regulation)
- [ ] More language sources (Korean, Chinese, Japanese)
- [ ] Mobile app (React Native)
- [ ] Rust / Ruby SDKs

---

## 🤝 Contributing

Contributions are welcome! Here's how to help:

1. **Fork** the repository
2. **Create** a feature branch: \`git checkout -b feature/amazing-feature\`
3. **Commit** your changes: \`git commit -m 'Add amazing feature'\`
4. **Push** to the branch: \`git push origin feature/amazing-feature\`
5. **Open** a Pull Request

### Ideas for Contribution

- Add new news sources
- Improve sentiment analysis
- Add more language SDKs
- Enhance documentation
- Report bugs or suggest features

---

## 📄 License

MIT License © 2025-2026 [Nicholas](https://github.com/nirholas)

Free to use, modify, and distribute. See [LICENSE](LICENSE) for details.

---

<p align="center">
  <strong>Stop paying for crypto news APIs.</strong><br/>
  <sub>Built with 💜 for developers, traders, and AI builders</sub>
</p>

<p align="center">
  <a href="https://github.com/nirholas/free-crypto-news">⭐ Star this repo</a> •
  <a href="https://github.com/nirholas/free-crypto-news/issues">Report Bug</a> •
  <a href="https://github.com/nirholas/free-crypto-news/discussions">Discussions</a>
</p>
