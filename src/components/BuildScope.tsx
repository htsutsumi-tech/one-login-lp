"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    label: "業務管理",
    items: [
      { name: "タスク・プロジェクト管理", note: "進捗可視化・担当割当" },
      { name: "承認フロー・ワークフロー", note: "多段階承認・条件分岐" },
      { name: "スケジュール・工程管理", note: "ガント・マイルストーン" },
      { name: "社内ナレッジベース", note: "検索・構造化ドキュメント" },
      { name: "勤怠・シフト管理", note: "申請・集計自動化" },
    ],
  },
  {
    label: "顧客接点",
    items: [
      { name: "CRM・顧客管理", note: "商談履歴・パイプライン" },
      { name: "問い合わせ管理", note: "マルチチャネル統合" },
      { name: "顧客ポータル", note: "ログイン基盤と直結" },
      { name: "見積・契約管理", note: "電子署名・改訂履歴" },
      { name: "メール・通知配信", note: "セグメント・自動トリガー" },
    ],
  },
  {
    label: "データ・分析",
    items: [
      { name: "ダッシュボード", note: "リアルタイム・カスタム可" },
      { name: "BIレポート", note: "クロス集計・PDF出力" },
      { name: "データパイプライン", note: "ETL・定期同期" },
      { name: "在庫・物流管理", note: "入出庫・ロット追跡" },
      { name: "予実管理", note: "目標設定・差異分析" },
    ],
  },
  {
    label: "システム連携",
    items: [
      { name: "APIプラットフォーム", note: "REST / GraphQL" },
      { name: "外部SaaS連携", note: "既存ツールと接続" },
      { name: "SSO・認証基盤", note: "SAML / OAuth2.0" },
      { name: "会計・ERP連携", note: "仕訳連携・マスタ同期" },
      { name: "Webhook・自動化", note: "イベント駆動・実行ログ" },
    ],
  },
];

export default function BuildScope() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="build-scope" className="section-atm-white py-20 lg:py-28 relative overflow-hidden">

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-14">
          <div>
            <p
              className={`section-label mb-5 fade-up ${isVisible ? "is-visible" : ""}`}
            >
              Build Scope
            </p>
            <h2
              className={`display-heading text-[#191919] text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-tight fade-up ${isVisible ? "is-visible" : ""} delay-100`}
            >
              構築可能な
              <br />
              機能領域。
            </h2>
          </div>
          <div
            className={`self-end fade-up ${isVisible ? "is-visible" : ""} delay-200`}
          >
            <p className="text-[#787674] text-sm leading-relaxed">
              独立したSaaSを並べるのではなく、
              御社の業務に合わせた統合プロダクトとして設計します。
              ここに挙げた機能領域を組み合わせ、
              <span className="text-[#191919] font-semibold">必要な形に最適化</span>
              して実装します。
            </p>
          </div>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <div
              key={cat.label}
              className={`card-notion p-8 lg:p-10 card-grid-hover fade-up ${isVisible ? "is-visible" : ""} delay-${(i + 1) * 100}`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#E8E5DF]">
                <span className="text-[11px] text-[#4A7BA8] font-bold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[#191919] font-bold text-lg leading-tight">
                  {cat.label}
                </h3>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="group/item cursor-default">
                    <span className="text-sm text-[#787674] group-hover/item:text-[#191919] leading-snug block transition-colors duration-150">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-[#C8C5BF] group-hover/item:text-[#7AAAC8] block mt-0.5 leading-tight transition-colors duration-150">
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className={`mt-10 fade-up ${isVisible ? "is-visible" : ""} delay-500`}
        >
          <p className="text-xs text-[#787674] text-center">
            上記はすべて単一ログイン基盤上に統合可能です。
            御社の要件に合わせた組み合わせをご提案します。
          </p>
        </div>
      </div>
    </section>
  );
}
