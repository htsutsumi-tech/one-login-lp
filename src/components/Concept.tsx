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

        {/* Architecture diagram */}
        <div className={`fade-up ${isVisible ? "is-visible" : ""} delay-400`}>
          <div className="card-notion border border-[#E8E5DF] p-8 lg:p-12" style={{ boxShadow: "var(--shadow-card)" }}>
            {/* Top: scattered tools */}
            <div className="mb-8">
              <p className="eyebrow mb-4 text-center">現在：ツールの断片化</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "CRM",
                  "プロジェクト管理",
                  "会計SaaS",
                  "分析ツール",
                  "チャット",
                  "契約管理",
                  "勤怠管理",
                  "顧客ポータル",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="text-xs border border-[#E8E5DF] text-[#A09D99] px-3 py-1.5 rounded-lg bg-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-4 gap-8 text-xs text-[#C8C5BF]">
                <span>別ログイン</span>
                <span>/</span>
                <span>データ分断</span>
                <span>/</span>
                <span>コスト積み上がり</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center gap-1 text-blue-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M10 3v14M5 13l5 5 5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="eyebrow text-blue-400">one login</span>
              </div>
            </div>

            {/* Bottom: integrated */}
            <div
              className="rounded-xl p-6 border border-blue-100"
              style={{ background: "linear-gradient(135deg, #EEF5FF 0%, #ffffff 60%)" }}
            >
              <p className="eyebrow mb-6 text-center">
                One Login, All Contents
              </p>
              <div className="grid grid-cols-3 gap-4">
                {layers.map((layer) => (
                  <div key={layer.label} className="text-center">
                    <p className="text-xs font-bold text-[#191919] mb-2">
                      {layer.label}
                    </p>
                    <div className="space-y-1">
                      {layer.items.map((item) => (
                        <div
                          key={item}
                          className="text-xs text-[#787674] bg-white px-2 py-1 rounded-lg border border-[#E8E5DF]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-[#E8E5DF] text-center">
                <p className="text-xs text-[#A09D99]">
                  単一ログイン基盤 ／ 統合データ ／ 拡張自在
                </p>
              </div>
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
