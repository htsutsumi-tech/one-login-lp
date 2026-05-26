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
    <section id="concept" className="section-atm-white py-32 lg:py-52 relative overflow-hidden">

      {/* Section index label */}
      <div className="absolute top-8 right-8 pointer-events-none hidden lg:block" aria-hidden="true">
        <p className="font-mono text-[9px] text-slate-300 tracking-[0.16em] text-right leading-[1.8] uppercase">
          Sect. 03<br />Concept
        </p>
      </div>

      {/* Corner markers — blueprint accent */}
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
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <div>
            <p
              className={`section-label mb-5 fade-up ${isVisible ? "is-visible" : ""}`}
            >
              Concept
            </p>
            <h2
              className={`display-heading text-slate-900 text-[2.4rem] sm:text-[3.4rem] lg:text-[4.5rem] leading-[1.1] mb-8 fade-up ${isVisible ? "is-visible" : ""} delay-100`}
            >
              One Login,
              <br />
              All Contents.
            </h2>
            <p
              className={`text-slate-500 text-sm leading-loose mb-4 fade-up ${isVisible ? "is-visible" : ""} delay-200`}
            >
              一つのIDで、事業に必要なすべてを。
            </p>
            <p
              className={`text-slate-400 text-sm leading-loose fade-up ${isVisible ? "is-visible" : ""} delay-200`}
            >
              業務管理、顧客管理、データ可視化、外部システム連携——
              <br />
              点在するツールを、一つのログイン基盤へ統合します。
            </p>
          </div>

          <div
            className={`fade-up ${isVisible ? "is-visible" : ""} delay-300`}
          >
            <div className="space-y-3 text-sm text-slate-500 leading-loose max-w-lg">
              <p>
                汎用SaaSの限界は「全員向けに設計されている」点にあります。
                業務フローに合わせてツールを増やすほど、現場はその分断に翻弄されます。
              </p>
              <p>
                私たちが提唱するのは、逆の発想です。
                <span className="text-slate-800 font-medium">
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
        </div>

        {/* Visual: Architecture diagram */}
        <div
          className={`fade-up ${isVisible ? "is-visible" : ""} delay-400`}
        >
          <div className="border border-slate-100 rounded-sm p-8 lg:p-12 bg-slate-50">
            {/* Top layer: scattered tools */}
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
                    className="text-xs border border-slate-200 text-slate-400 px-3 py-1.5 rounded-sm bg-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-4 gap-8 text-xs text-slate-300">
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

            {/* Bottom layer: integrated */}
            <div className="border border-blue-100 rounded-sm p-6" style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #ffffff 60%)" }}>
              <p className="eyebrow mb-6 text-center">
                One Login, All Contents
              </p>
              <div className="grid grid-cols-3 gap-4">
                {layers.map((layer) => (
                  <div key={layer.label} className="text-center">
                    <p className="text-xs font-medium text-slate-700 mb-2">
                      {layer.label}
                    </p>
                    <div className="space-y-1">
                      {layer.items.map((item) => (
                        <div
                          key={item}
                          className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400">
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
          <p className="display-heading text-slate-700 text-xl sm:text-2xl font-light">
            戦術ではなく、構造を導入する。
          </p>
        </div>
      </div>
    </section>
  );
}
