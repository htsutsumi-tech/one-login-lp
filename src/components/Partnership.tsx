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
    <section id="partnership" className="section-atm-slate py-32 lg:py-44 relative overflow-hidden">

      {/* Section index label */}
      <div className="absolute top-8 right-8 pointer-events-none hidden lg:block" aria-hidden="true">
        <p className="font-mono text-[9px] text-slate-300 tracking-[0.16em] text-right leading-[1.8] uppercase">
          Sect. 06<br />Partnership
        </p>
      </div>

      {/* Corner markers */}
      <div className="absolute top-8 left-8 pointer-events-none hidden lg:block" aria-hidden="true">
        <div className="w-[18px] h-[18px] relative">
          <div className="absolute top-0 left-0 w-full h-px bg-slate-300/70" />
          <div className="absolute top-0 left-0 w-px h-full bg-slate-300/70" />
        </div>
      </div>

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Header — left-aligned, 2-col */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-end mb-20">
          <div className={`fade-up ${isVisible ? "is-visible" : ""}`}>
            <p className={`section-label mb-5 ${isVisible ? "is-visible" : ""}`}>Partnership</p>
            <h2 className="display-heading text-slate-900 text-[2.2rem] sm:text-[3.2rem] lg:text-[4.4rem] leading-[1.08] mb-6">
              &ldquo;本気で創る&rdquo;企業へ。
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-light">
              共同開発パートナーを募集します。
            </p>
          </div>
          <div className={`fade-up ${isVisible ? "is-visible" : ""} delay-100`}>
            <p className="text-slate-400 text-sm leading-[2.1]">
              私たちが求めるのは、単に開発を委託したい企業ではありません。
              本気の事業開発を目指す共創パートナーシップを通じて、
              自社プロダクトと共に歩む企業と、長期的に創り続けたいと考えています。
            </p>
          </div>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-px bg-slate-200">
          {/* Left: Target companies */}
          <div
            className={`bg-slate-50 p-10 lg:p-12 card-grid-hover fade-up ${isVisible ? "is-visible" : ""} delay-100`}
          >
            <h3 className="text-xs font-semibold text-slate-400 tracking-[0.14em] uppercase mb-8 pb-4 border-b border-slate-200">
              共同パートナーとして想定する企業
            </h3>
            <ul className="space-y-5">
              {targetCompanies.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-mono text-[10px] text-blue-400 mt-0.5 flex-shrink-0 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-400 leading-relaxed">
                業種・規模は問いません。事業への本気度を最も重視しています。
              </p>
            </div>
          </div>

          {/* Right: Our provision */}
          <div
            className={`bg-slate-50 p-10 lg:p-12 card-grid-hover fade-up ${isVisible ? "is-visible" : ""} delay-200`}
          >
            <h3 className="text-xs font-semibold text-slate-400 tracking-[0.14em] uppercase mb-8 pb-4 border-b border-slate-200">
              私たちが提供できること
            </h3>
            <div className="space-y-7">
              {ourProvision.map((item, i) => (
                <div key={i} className="border-t border-slate-100 pt-5 first:border-t-0 first:pt-0">
                  <p className="text-sm font-semibold text-slate-900 mb-1.5">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-400 leading-[1.9]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className={`mt-16 fade-up ${isVisible ? "is-visible" : ""} delay-300`}>
          <blockquote className="display-heading text-slate-400 text-lg sm:text-xl font-light">
            戦術ではなく、構造を導入する。
            <br className="hidden sm:block" />
            その発想を、本気で事業を伸ばす企業と共に体現します。
          </blockquote>
        </div>
      </div>
    </section>
  );
}
