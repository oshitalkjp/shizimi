"use client";

import Image from "next/image";
import { useState } from "react";

type Lang = 'ja' | 'en';

const translations = {
  ja: {
    contractClicked: "COPIED! 熱！",
    contractBtn: "CONTRACT",
    heroTitle: "諦めるな！",
    heroSubtitle: "しじみがトゥルル！",
    buyNow: "購入する",
    chart: "チャート",
    marquee: "DON'T GIVE UP! 諦めるな！ SHIJIMI IS TRULL! しじみがトゥルル！ $SYUZO TO THE MOON! 月まで熱くなれ！ • ",
    caAnnouncement: "🔥 21時 CA公開！ 🔥",
    whyTitle: "WHY SYUZO?",
    whyText1: "多くのコインは「終わり」があるからゼロになる。彼らは止まり、諦める。",
    whyText2: "$SYUZOは絶対に諦めない。",
    whyText3: "チャートが赤くなれば、我々はより大声で叫ぶ。市場がクラッシュすれば、温度を上げる。これは単なるコインではない。",
    whyHighlight: "熱血というライフスタイルだ。",
    tokenomics: "トークノミクス",
    supply: "総発行量",
    tax: "情熱に税金なし",
    locked: "焼却済み流動性",
    roadmap: {
      title: "ROADMAP (熱)",
      commonRules: {
        title: "共通ルール（全フェーズ）",
        items: [
          "達成判定：時価総額（MC）が該当ラインを24時間維持したら達成",
          "達成したら即投票（X + TG）を開始",
          "投票で決まった内容を72時間以内に実行（証拠も公開）",
          "すべて日本時間（JST）基準"
        ]
      },
      buySupport: {
        title: "Buy Support（買い支え）ルール",
        subtitle: "JST終値確定方式",
        items: [
          "基準：各マイルストーン達成後のATH（最高値）",
          "発動条件：日足終値（JST）がATHから -40% 以下でクローズ",
          "実行：翌日（JST）に市場買いでBuy Supportを実行（分割買い）",
          "月間上限：マイルストーンごとに段階的に増額",
          "透明性：トランザクション（TX）を全公開",
          "※価格保証ではありません"
        ]
      },
      donation: {
        title: "寄付（スポンサー収益）ルール",
        subtitle: "投票で最大50%配分",
        items: [
          "原資：スポンサー・協賛・コラボ等でプロジェクトが受け取った収益（SOL/USDC）",
          "投票で「最大50%まで」を、選ばれた宛先（団体/基金/募金口座）へ送金",
          "送金TXを公開",
          "※トークン価格・買い戻しとは無関係（収益の使い道）"
        ]
      },
      milestones: [
        {
          title: "Milestone 1",
          subtitle: "pump.fun卒業ライン（目安 MC $70k）",
          voteTitle: "投票（A/B/C）",
          voteItems: [
            "A) 寄付先候補を決める（3候補）＋「スポンサー収益の最大50%配分」開始",
            "B) 週次ランキング（しじみトゥルル選手権）開始",
            "C) 公式素材パック拡張（英語/テンプレ/注意喚起）"
          ],
          limit: "Buy Support 月間上限：10 SOL"
        },
        {
          title: "Milestone 2",
          subtitle: "MC $250k（24h維持）",
          voteTitle: "投票（A/B/C）",
          voteItems: [
            "A) スポンサー収益の配分率を投票（0〜50%の範囲）＋寄付先決定",
            "B) 週次イベント賞金増（$SYUZO配布枠増やす）",
            "C) 週次透明性レポート開始（寄付/買い支えTXまとめ）"
          ],
          limit: "Buy Support 月間上限：20 SOL"
        },
        {
          title: "Milestone 3",
          subtitle: "MC $1M（24h維持）",
          voteTitle: "投票（A/B/C）",
          voteItems: [
            "A) 寄付先を追加（カテゴリ拡張）＋月次まとめ固定化",
            "B) クリエイター助成（ミーム制作支援）",
            "C) Treasury管理強化（運営事故防止）"
          ],
          limit: "Buy Support 月間上限：35 SOL"
        },
        {
          title: "Milestone 4",
          subtitle: "MC $3M（24h維持）",
          voteTitle: "投票（A/B/C）",
          voteItems: [
            "A) スポンサー収益配分（最大50%）の対象を拡張（複数宛先/基金化）",
            "B) 大型コラボ（月1）",
            "C) シーズン制イベント（4週単位）"
          ],
          limit: "Buy Support 月間上限：50 SOL"
        }
      ]
    },
    footerWealthy: "金持ちになりたいか？",
    footerHot: "なら熱くなれ！",
    footerDisclaimer: "これはエンターテイメント目的のミームコインです。資本にはリスクがありますが、情熱にリスクはないと仮定しましょう。"
  },
  en: {
    contractClicked: "COPIED! HEAT!",
    contractBtn: "CONTRACT",
    heroTitle: "NEVER GIVE UP!",
    heroSubtitle: "SHIJIMI IS TRULL!",
    buyNow: "BUY NOW",
    chart: "CHART",
    marquee: "DON'T GIVE UP! 諦めるな！ SHIJIMI IS TRULL! しじみがトゥルル！ $SYUZO TO THE MOON! 月まで熱くなれ！ • ",
    caAnnouncement: "🔥 CA Release at 21:00 JST! 🔥",
    whyTitle: "WHY SYUZO?",
    whyText1: "Most coins go to zero because they finish. They stop. They give up.",
    whyText2: "$SYUZO NEVER GIVES UP.",
    whyText3: "When the chart is red, we shout louder. When the market crashes, we turn up the heat. This is not just a coin.",
    whyHighlight: "It is a lifestyle of heat.",
    tokenomics: "TOKENOMICS",
    supply: "Total Supply",
    tax: "No Tax on Passion",
    locked: "Liquidity Burnt",
    roadmap: {
      title: "ROADMAP (HEAT)",
      commonRules: {
        title: "Common Rules (All Phases)",
        items: [
          "Achievement: Maintain Market Cap (MC) line for 24 hours.",
          "Action: Immediate voting (X + TG) upon achievement.",
          "Execution: Execute voted content within 72 hours (with proof).",
          "Timezone: All times in JST."
        ]
      },
      buySupport: {
        title: "Buy Support Rule",
        subtitle: "JST Closing Price Method",
        items: [
          "Benchmark: ATH (All Time High) after each milestone.",
          "Trigger: Daily close (JST) is -40% or lower from ATH.",
          "Execution: Market buy (Buy Support) the next day (JST).",
          "Monthly Cap: Increases with each milestone.",
          "Transparency: All TX published.",
          "*Not a price guarantee."
        ]
      },
      donation: {
        title: "Donation (Sponsor Revenue) Rule",
        subtitle: "Max 50% Allocation by Vote",
        items: [
          "Source: Revenue (SOL/USDC) received from sponsors/collabs.",
          "Allocation: Up to 50% sent to voted destination (Charity/Fund).",
          "Proof: TX published.",
          "*Unrelated to token price/buybacks (Usage of revenue)."
        ]
      },
      milestones: [
        {
          title: "Milestone 1",
          subtitle: "pump.fun Graduation (~$70k MC)",
          voteTitle: "Vote (A/B/C)",
          voteItems: [
            "A) Decide Donation Candidates (3) + Start 'Max 50% Revenue Allocation'",
            "B) Weekly Ranking (Shijimi Trill Championship) Start",
            "C) Official Asset Pack Expansion (EN/Templates/Warnings)"
          ],
          limit: "Buy Support Monthly Cap: 10 SOL"
        },
        {
          title: "Milestone 2",
          subtitle: "MC $250k (Maintain 24h)",
          voteTitle: "Vote (A/B/C)",
          voteItems: [
            "A) Vote on Revenue Allocation % (0-50%) + Decide Destination",
            "B) Increase Weekly Event Prizes (More $SYUZO)",
            "C) Start Weekly Transparency Report (Donation/Buy Support TX)"
          ],
          limit: "Buy Support Monthly Cap: 20 SOL"
        },
        {
          title: "Milestone 3",
          subtitle: "MC $1M (Maintain 24h)",
          voteTitle: "Vote (A/B/C)",
          voteItems: [
            "A) Add Donation Destinations (Categories) + Monthly Summary",
            "B) Creator Grant (Meme Production Support)",
            "C) Treasury Management Hardening"
          ],
          limit: "Buy Support Monthly Cap: 35 SOL"
        },
        {
          title: "Milestone 4",
          subtitle: "MC $3M (Maintain 24h)",
          voteTitle: "Vote (A/B/C)",
          voteItems: [
            "A) Expand Sponsor Revenue Allocation (Multiple Destinations/Fund)",
            "B) Major Collab (Monthly)",
            "C) Seasonal Events (4-week units)"
          ],
          limit: "Buy Support Monthly Cap: 50 SOL"
        }
      ]
    },
    footerWealthy: "DO YOU WANT TO BE WEALTHY?",
    footerHot: "THEN BE HOT!",
    footerDisclaimer: "This is a meme coin for entertainment purposes. Capital is at risk. But assume passion is not at risk."
  }
};

const basePath = '/SyuzoCOIN';

export default function Home() {
  const [lang, setLang] = useState<Lang>('ja');
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const t = translations[lang];

  const copyAddress = () => {
    navigator.clipboard.writeText("0xSYUZO99999999999999999999HEAT");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleLang = () => {
    setLang(prev => prev === 'ja' ? 'en' : 'ja');
  };

  return (
    <main className="main-container">
      {/* Background Ambience */}
      <div className="bg-fire"></div>
      <div className="fire-overlay"></div>

      {/* Floating Particles (Simulated) */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          >
            熱
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="header">
        <h1 className="logo-text text-glow">$SYUZO</h1>
        <div className="header-right">
          <div className="header-social">
            <a href="https://x.com/syuzoshizimi" target="_blank" rel="noopener noreferrer" className="header-social-link" title="X (Twitter)">
              𝕏
            </a>
            <a href="https://t.me/syuzoshizimitrill" target="_blank" rel="noopener noreferrer" className="header-social-link" title="Telegram">
              ✈️
            </a>
          </div>
          <button onClick={toggleLang} className="btn-lang font-bold text-white border border-white px-3 py-1 rounded hover:bg-white/20 transition-colors">
            {lang === 'ja' ? 'EN' : 'JP'}
          </button>
          <button className="btn-primary" onClick={copyAddress}>
            {copied ? t.contractClicked : t.contractBtn}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Coin and Character - 縦並び（スマホ）/ 横並び（PC） */}
        <div className="hero-content">
          <div className="coin-wrapper">
            <div className="spin-coin">
              <Image
                src={`${basePath}/assets/shuzo_coin_transparent.jpg`}
                alt="Syuzo Coin"
                fill
                className="img-contain rounded-full"
                priority
              />
            </div>
          </div>

          {/* Character */}
          <div
            className={`character-container ${isHovered ? 'shake-hard' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="character-overlay">
              <Image
                src={`${basePath}/assets/character_v2.png`}
                alt="Matsuoka Syuzo Parody"
                fill
                className="img-contain character-img"
              />
            </div>
          </div>
        </div>

        {/* Main Title Impact */}
        <div className="hero-text">
          <h2 className="hero-title text-stroke shake-hover">
            {t.heroTitle}
          </h2>
          <p className="hero-subtitle text-glow mb-4">
            {t.heroSubtitle}
          </p>
        </div>

        {/* CA Announcement */}
        <div className="ca-announcement">
          {t.caAnnouncement}
        </div>

        {/* Random Floating Shijimi Background */}
        <div className="shijimi-bg-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="shijimi-bg-item"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${Math.random() * 100 + 80}px`,
                height: `${Math.random() * 100 + 80}px`,
              }}
            >
              <Image
                src={`${basePath}/assets/real_shijimi.jpg`}
                alt="Shijimi"
                fill
                className="object-contain opacity-80"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-container">
          <a href="https://raydium.io/" target="_blank" rel="noopener noreferrer" className="btn-primary scale-on-hover">
            {t.buyNow}
          </a>
          <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="btn-primary btn-outline scale-on-hover">
            {t.chart}
          </a>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-content font-shuzo">
          {t.marquee}{t.marquee}
        </div>
      </div>

      {/* YouTube Video Section */}
      <section className="video-section">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/vc_UVpFayaw"
            title="Syuzo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="content-grid">
          <div className="card text-left">
            <h3 className="section-title">{t.whyTitle}</h3>
            <p className="section-text">
              {t.whyText1}
              <br /><br />
              <span className="text-highlight">{t.whyText2}</span>
              <br /><br />
              {t.whyText3} <br />
              <span className="text-accent">{t.whyHighlight}</span>
            </p>
          </div>
          <div className="fire-emoji-container">
            <div className="big-emoji">🔥</div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="section roadmap-section">
        <h3 className="section-title text-center text-glow mb-12" style={{ display: 'block' }}>{t.roadmap.title}</h3>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card text-left bg-black/40">
            <h4 className="text-2xl font-bold text-red-500 mb-4 border-b border-red-500/30 pb-2">{t.roadmap.commonRules.title}</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {t.roadmap.commonRules.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="card text-left bg-black/40">
              <h4 className="text-xl font-bold text-yellow-500 mb-2">{t.roadmap.buySupport.title}</h4>
              <p className="text-sm text-gray-400 mb-3">{t.roadmap.buySupport.subtitle}</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                {t.roadmap.buySupport.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="card text-left bg-black/40">
              <h4 className="text-xl font-bold text-green-500 mb-2">{t.roadmap.donation.title}</h4>
              <p className="text-sm text-gray-400 mb-3">{t.roadmap.donation.subtitle}</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                {t.roadmap.donation.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="space-y-8 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-red-900/50 -translate-x-1/2 z-0 hidden md:block"></div>

          {t.roadmap.milestones.map((m, i) => (
            <div key={i} className={`relative z-10 flex flex-col md:flex-row gap-4 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <div className="card hover:border-red-500 transition-colors bg-black/60 backdrop-blur-md border-red-900/50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-black text-white italic">{m.title}</h4>
                      <p className="text-yellow-400 font-bold">{m.subtitle}</p>
                    </div>
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">VOTE</div>
                  </div>

                  <div className="mb-4">
                    <p className="font-bold text-gray-400 mb-2 border-b border-gray-700 pb-1">{m.voteTitle}</p>
                    <ul className="space-y-2 text-sm">
                      {m.voteItems.map((v, j) => (
                        <li key={j} className="flex gap-2 text-gray-200">
                          <span>•</span>
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-900/20 p-2 rounded border border-red-900/30 text-center">
                    <p className="text-red-400 font-bold font-mono">{m.limit}</p>
                  </div>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-red-500 border-4 border-black shadow-[0_0_10px_red] flex-shrink-0 z-20 hidden md:block"></div>
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Tokenomics */}
      <section className="section tokenomics-section">
        <h3 className="section-title text-center text-glow">{t.tokenomics}</h3>
        <div className="token-grid">
          <div className="card token-card">
            <div className="card-icon">🌡️</div>
            <h4 className="card-value">100 BN</h4>
            <p className="card-label">{t.supply}</p>
          </div>
          <div className="card token-card">
            <div className="card-icon">🚫</div>
            <h4 className="card-value">0% TAX</h4>
            <p className="card-label">{t.tax}</p>
          </div>
          <div className="card token-card">
            <div className="card-icon">🔒</div>
            <h4 className="card-value">LOCKED</h4>
            <p className="card-label">{t.locked}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-title">
          {t.footerWealthy}<br />{t.footerHot}
        </p>
        <div className="social-links">
          <a href="https://x.com/syuzoshizimi" target="_blank" rel="noopener noreferrer" className="social-icon">𝕏</a>
          <a href="https://t.me/syuzoshizimitrill" target="_blank" rel="noopener noreferrer" className="social-icon">✈️</a>
        </div>
        <p className="footer-disclaimer">
          {t.footerDisclaimer}
        </p>
      </footer>
    </main>
  );
}
