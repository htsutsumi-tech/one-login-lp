"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    label: "業務管理",
    items: [
      "タスク・プロジェクト管理",
      "承認フロー・ワークフロー",
      "スケジュール・工程管理",
      "社内ナレッジベース",
      "勤怠・シフト管理",
    ],
  },
  {
    label: "顧客接点",
    items: [
      "CRM・顧客管理",
      "問い合わせ管理",
      "顧客ポータル",
      "見積・契約管理",
      "メール・通知配信",
    ],
  },
  {
    label: "データ・分析",
    items: [
      "ダッシュボード",
      "BIレポート",
      "データパイプライン",
      "在庫・物流管理",
      "予実管理",
    ],
  },
  {
    label: "システム連携",
    items: [
      "APIプラットフォーム",
      "外部SaaS連携",
      "SSO・認証基盤",
      "会計・ERP連携",
      "Webhook・自動化",
    ],
  },
];

export default function BuildScope() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="build-scope" className="section-atm-white py-20 lg:py-28 relative overflow-hidden">

      {/* Section number watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block" aria-hidden="true">
        <span className="block font-mono font-bold leading-none tracking-[-0.06em]" style={{ fontSize: "18vw", color: "rgba(37,99,235,0.028)" }}>
          05
        </span>
      </div>

      {/* Section index label */}
      <div className="absolute top-8 right-8 pointer-events-none hidden lg:block" aria-hidden="true">
        <p className="font-mono text-[9px] text-slate-300 tracking-[0.16em] text-right leading-[1.8] uppercase">
          Sect. 05<br />Build Scope
        </p>
      </div>

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
            <p
              className={`section-label mb-5 fade-up ${isVisible ? "is-visible" : ""}`}
            >
              Build Scope
            </p>
            <h2
              className={`display-heading text-slate-900 text-[2rem] sm:text-[2.8rem] lg:text-[3.8rem] leading-tight fade-up ${isVisible ? "is-visible" : ""} delay-100`}
            >
              構築可能な
              <br />
              機能領域。
            </h2>
          </div>
          <div
            className={`self-end fade-up ${isVisible ? "is-visible" : ""} delay-200`}
          >
            <p className="text-slate-500 text-sm leading-relaxed">
              独立したSaaSを並べるのではなく、
              御社の業務に合わせた統合プロダクトとして設計します。
              ここに挙げた機能領域を組み合わせ、
              <span className="text-slate-800 font-medium">必要な形に最適化</span>
              して実装します。
            </p>
          </div>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className={`bg-white p-7 card-grid-hover fade-up ${isVisible ? "is-visible" : ""} delay-${(i + 1) * 100}`}
            >
              <p className="text-xs font-medium text-slate-900 mb-4 pb-3 border-b border-slate-100">
                {cat.label}
              </p>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full bg-blue-300 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-xs text-slate-500 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className={`mt-8 fade-up ${isVisible ? "is-visible" : ""} delay-500`}
        >
          <p className="text-xs text-slate-400 text-center">
            上記はすべて単一ログイン基盤上に統合可能です。
            御社の要件に合わせた組み合わせをご提案します。
          </p>
        </div>
      </div>
    </section>
  );
}
