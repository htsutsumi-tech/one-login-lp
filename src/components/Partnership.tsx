"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const targetCompanies = [
  "自社プロダクトを本気で成長させたい企業",
  "SaaS乱立・ツール分断に課題を感じている企業",
  "既製SaaSでは限界を感じている企業",
  "スピード感を持ってDX推進したい企業",
  "中長期でプロダクトを育てていきたい企業",
];

const ourProvision = [
  {
    title: "AIネイティブ開発体制",
    desc: "生成AIを設計・実装・検証の各工程に組み込んだ高速実装体制",
  },
  {
    title: "統合基盤の設計力",
    desc: "One Login, All Contentsの思想に基づく、拡張性の高いシステム設計",
  },
  {
    title: "エンタープライズ水準のセキュリティ",
    desc: "多要素認証・ロールベースアクセス制御・国内データセンター対応",
  },
  {
    title: "共創型の開発プロセス",
    desc: "単なる受託ではなく、事業の中核として共に考え実装するパートナーシップ",
  },
];

export default function Partnership() {
  const { ref, isVisible } = useScrollAnimation(0.06);

  return (
    <section id="partnership" className="section-atm-slate py-28 lg:py-40 relative overflow-hidden">

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-end mb-16">
          <div className={`fade-up ${isVisible ? "is-visible" : ""}`}>
            <p className="section-label mb-5">Partnership</p>
            <h2 className="display-heading text-[#191919] text-[2.5rem] sm:text-[3.8rem] lg:text-[5.5rem] leading-[1.04] mb-6">
              &ldquo;本気で創る&rdquo;企業へ。
            </h2>
            <p className="text-[#787674] text-base leading-relaxed font-normal">
              共同開発パートナーを募集します。
            </p>
          </div>
          <div className={`fade-up ${isVisible ? "is-visible" : ""} delay-100`}>
            <p className="text-[#787674] text-sm leading-[2.1]">
              私たちが求めるのは、単に開発を委託したい企業ではありません。
              本気の事業開発を目指す共創パートナーシップを通じて、
              自社プロダクトと共に歩む企業と、長期的に創り続けたいと考えています。
            </p>
          </div>
        </div>

        {/* Two column layout — rounded cards */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Left: Target companies */}
          <div
            className={`card-notion p-10 lg:p-12 card-grid-hover fade-up ${isVisible ? "is-visible" : ""} delay-100`}
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="text-xs font-bold text-[#787674] tracking-[0.14em] uppercase mb-8 pb-4 border-b border-[#E8E5DF]">
              共同パートナーとして想定する企業
            </h3>
            <ul className="space-y-4">
              {targetCompanies.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Notion-style checked checkbox */}
                  <div className="w-4 h-4 rounded border border-[#BDD3E7] bg-[#EEF4F9] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
                      <path d="M1 3.5l2.5 2.5L8 1" stroke="#4A7BA8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#191919] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-[#E8E5DF]">
              <p className="text-xs text-[#787674] leading-relaxed">
                業種・規模は問いません。事業への本気度を最も重視しています。
              </p>
            </div>
          </div>

          {/* Right: Our provision */}
          <div
            className={`card-notion p-10 lg:p-12 card-grid-hover fade-up ${isVisible ? "is-visible" : ""} delay-200`}
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="text-xs font-bold text-[#787674] tracking-[0.14em] uppercase mb-8 pb-4 border-b border-[#E8E5DF]">
              私たちが提供できること
            </h3>
            <div className="space-y-6">
              {ourProvision.map((item, i) => (
                <div key={i} className="border-t border-[#E8E5DF] pt-5 first:border-t-0 first:pt-0">
                  <p className="text-sm font-bold text-[#191919] mb-1.5">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#787674] leading-[1.9]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className={`mt-16 fade-up ${isVisible ? "is-visible" : ""} delay-300`}>
          <blockquote className="display-heading text-[#787674] text-lg sm:text-xl font-normal">
            戦術ではなく、構造を導入する。
            <br className="hidden sm:block" />
            その発想を、本気で事業を伸ばす企業と共に体現します。
          </blockquote>
        </div>
      </div>
    </section>
  );
}
