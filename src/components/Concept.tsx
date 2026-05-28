"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const layers = [
  {
    label: "業務管理",
    items: ["タスク管理", "承認フロー", "スケジュール"],
  },
  {
    label: "顧客接点",
    items: ["CRM", "問い合わせ管理", "外部連携"],
  },
  {
    label: "データ基盤",
    items: ["ダッシュボード", "分析レポート", "API"],
  },
];

export default function Concept() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="concept" className="section-atm-white py-36 lg:py-52 relative overflow-hidden">

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Section label */}
        <p className={`section-label mb-10 fade-up ${isVisible ? "is-visible" : ""}`}>
          Concept
        </p>

        {/* Dominant H2 */}
        <h2
          className={`display-heading text-[#191919] text-[3rem] sm:text-[5rem] lg:text-[7rem] leading-[0.95] tracking-[-0.04em] mb-12 lg:mb-20 fade-up ${isVisible ? "is-visible" : ""} delay-100`}
        >
          One Login,
          <br />
          All Contents.
        </h2>

        {/* Description row */}
        <div
          className={`grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24 mb-24 fade-up ${isVisible ? "is-visible" : ""} delay-200`}
        >
          <div>
            <p className="text-[#191919] text-[0.95rem] font-medium leading-loose mb-4">
              一つのIDで、事業に必要なすべてを。
            </p>
            <p className="text-[#787674] text-sm leading-loose">
              業務管理、顧客管理、データ可視化、外部システム連携——
              <br />
              点在するツールを、一つのログイン基盤へ統合します。
            </p>
          </div>
          <div className="space-y-3 text-sm text-[#787674] leading-loose">
            <p>
              汎用SaaSの限界は「全員向けに設計されている」点にあります。
              業務フローに合わせてツールを増やすほど、現場はその分断に翻弄されます。
            </p>
            <p>
              私たちが提唱するのは、逆の発想です。
              <span className="text-[#191919] font-semibold">
                御社の業務に合わせて、機能を統合する。
              </span>
            </p>
            <p>
              &ldquo;全部入りSaaS&rdquo;ではなく、御社の事業に最適化された
              統合プロダクトを、AIネイティブ開発によって高速実装する。
              使うほどに業務がシンプルになる体験を設計します。
            </p>
          </div>
        </div>

        {/* Architecture — structural concept, no diagrams */}
        <div className={`fade-up ${isVisible ? "is-visible" : ""} delay-400`}>
          <div className="rounded-2xl bg-[#F7F5EF] px-10 lg:px-20 py-16 lg:py-20">

            {/* Before — scattered, fading */}
            <div className="text-center mb-14">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#C8C5BF] uppercase mb-8">
                現在 — 断片化した業務環境
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-lg mx-auto">
                {[
                  { label: "CRM",          opacity: 0.45 },
                  { label: "プロジェクト管理", opacity: 0.28 },
                  { label: "会計SaaS",      opacity: 0.55 },
                  { label: "分析ツール",    opacity: 0.35 },
                  { label: "チャット",      opacity: 0.50 },
                  { label: "契約管理",      opacity: 0.30 },
                  { label: "勤怠管理",      opacity: 0.42 },
                  { label: "顧客ポータル",  opacity: 0.22 },
                ].map(({ label, opacity }) => (
                  <span
                    key={label}
                    className="text-sm select-none"
                    style={{ color: `rgba(120,118,116,${opacity})` }}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <p className="text-xs text-[#D4D0C9] mt-6 tracking-wide leading-relaxed">
                ログインが増えるたび、データは分断され、コストは積み上がる
              </p>
            </div>

            {/* Transition — thin line only */}
            <div className="flex flex-col items-center gap-0 mb-14">
              <div
                className="w-px h-12"
                style={{ background: "linear-gradient(to bottom, #D4D0C9, #7AAAC8)" }}
              />
              <span className="font-mono text-[10px] tracking-[0.24em] text-[#7AAAC8] uppercase py-2">
                One Login
              </span>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
                <path d="M1 1l3.5 4L8 1" stroke="#BDD3E7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* After — unified, clear typography only */}
            <div className="text-center">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#7AAAC8] uppercase mb-10">
                One Login, All Contents
              </p>
              <div className="grid grid-cols-3 gap-6 lg:gap-12 max-w-sm lg:max-w-md mx-auto">
                {layers.map((layer) => (
                  <div key={layer.label}>
                    <p className="text-xs font-bold text-[#191919] mb-3">{layer.label}</p>
                    <div className="space-y-2">
                      {layer.items.map((item) => (
                        <p key={item} className="text-xs text-[#A09D99] leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#C8C5BF] mt-10 tracking-wide">
                単一ログイン基盤 · 統合データ · 拡張自在
              </p>
            </div>

          </div>
        </div>

        {/* Tagline */}
        <div
          className={`mt-16 text-center fade-up ${isVisible ? "is-visible" : ""} delay-500`}
        >
          <p className="display-heading text-[#A09D99] text-xl sm:text-2xl font-normal">
            戦術ではなく、構造を導入する。
          </p>
        </div>
      </div>
    </section>
  );
}
