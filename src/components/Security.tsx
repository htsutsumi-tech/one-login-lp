"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const infraFeatures = [
  {
    title: "型安全な設計",
    desc: "TypeScript strict modeを基本とし、型エラーをビルド時に検出。実行時の想定外の動作を構造で防ぎます。",
    tag: "TypeScript",
  },
  {
    title: "多要素認証",
    desc: "ログイン基盤にMFAを標準実装。フィッシング・不正アクセスリスクを組み込みレベルで低減します。",
    tag: "MFA",
  },
  {
    title: "ロールベースアクセス制御",
    desc: "職種・権限に応じた細粒度のアクセス制御を実装。データの閲覧・操作権限を厳密に設計します。",
    tag: "RBAC",
  },
  {
    title: "国内データセンター",
    desc: "データを国内インフラに格納。法的要件・内部ポリシーへの準拠を前提に設計します。",
    tag: "Domestic DC",
  },
  {
    title: "WAF・DDoS対策",
    desc: "アプリケーション層の攻撃とDDoSに対応したインフラ設計。エンタープライズ水準のプロテクションを標準装備。",
    tag: "WAF / DDoS",
  },
  {
    title: "個人情報保護",
    desc: "個人データの取り扱いを設計段階からPrivacy by Designの考え方で組み込みます。",
    tag: "Privacy",
  },
];

const aiGovernance = [
  {
    title: "AI生成コードの人的レビュー",
    desc: "AIが生成したコードはそのまま使わず、必ずエンジニアによる確認を経てから本番環境へ反映します。意図・品質・影響範囲を人が判断するプロセスを開発フローに組み込んでいます。",
    tag: "Human Review",
  },
  {
    title: "機密・個人データの取り扱い管理",
    desc: "顧客データや個人情報・機密情報をAIツールへ入力しないルールを社内で明文化。どの情報をどのツールで扱えるかを、権限設定と運用ルールの両面で管理しています。",
    tag: "Data Policy",
  },
  {
    title: "AI利用に伴うリスクへの対応",
    desc: "AIへの不正な指示の埋め込みなど、AI利用に特有のリスクを想定した設計レビューを実施。確認すべきポイントをチェックリスト化し、開発プロセスに組み込んでいます。",
    tag: "AI Risk",
  },
  {
    title: "AIの利用範囲と権限の管理",
    desc: "使用するAIツール・利用者・用途を社内で明文化しています。AIがシステムに直接変更を加える権限は持たせず、本番環境への反映には必ず人による確認と承認を経る運用を徹底します。",
    tag: "Governance",
  },
];

export default function Security() {
  const { ref, isVisible } = useScrollAnimation(0.06);

  return (
    <section id="security" className="section-atm-security py-28 lg:py-44 relative overflow-hidden">

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Header */}
        <div className="mb-14 lg:mb-16">
          <p
            className={`section-label mb-5 fade-up ${isVisible ? "is-visible" : ""}`}
          >
            Security
          </p>
          <h2
            className={`display-heading text-[#191919] text-[2.5rem] sm:text-[3.5rem] lg:text-[4.2rem] leading-tight mb-6 fade-up ${isVisible ? "is-visible" : ""} delay-100`}
          >
            開発スピードと引き換えに、
            <br />
            セキュリティを犠牲にしない。
          </h2>
          <p
            className={`text-[#787674] text-sm leading-relaxed max-w-md fade-up ${isVisible ? "is-visible" : ""} delay-200`}
          >
            AIを開発へ組み込む以上、
            AIそのものも管理対象として設計する。
          </p>
        </div>

        {/* Infrastructure & Platform */}
        <div className={`fade-up ${isVisible ? "is-visible" : ""} delay-200`}>
          <p className="eyebrow mb-6">Infrastructure &amp; Platform</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {infraFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={`card-notion p-7 lg:p-8 card-grid-hover fade-up ${isVisible ? "is-visible" : ""} delay-${(i + 1) * 100}`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm font-bold text-[#191919] leading-snug">
                  {feature.title}
                </h3>
                <span className="flex-shrink-0 text-[10px] font-mono text-[#A09D99] border border-[#E8E5DF] px-1.5 py-0.5 rounded-md whitespace-nowrap">
                  {feature.tag}
                </span>
              </div>
              <p className="text-xs text-[#787674] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* AI Development Governance */}
        <div
          className={`mt-16 pt-14 border-t border-[#E8E5DF] fade-up ${isVisible ? "is-visible" : ""} delay-400`}
        >
          <div className="mb-10">
            <p className="eyebrow mb-5">AI Development Governance</p>
            <h3
              className="display-heading text-[#191919] text-[1.4rem] sm:text-[1.75rem] lg:text-[2rem] font-bold"
            >
              AIを活用することは、
              <br />
              AIを管理することでもある。
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiGovernance.map((item, i) => (
              <div
                key={item.title}
                className={`card-notion p-7 lg:p-8 card-grid-hover border-l-4 border-blue-400 fade-up ${isVisible ? "is-visible" : ""} delay-${(i + 1) * 100}`}
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-sm font-bold text-[#191919] leading-snug">
                    {item.title}
                  </h4>
                  <span className="flex-shrink-0 text-[10px] font-mono text-[#A09D99] border border-[#E8E5DF] px-1.5 py-0.5 rounded-md whitespace-nowrap">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-[#787674] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div
          className={`mt-10 fade-up ${isVisible ? "is-visible" : ""} delay-500`}
        >
          <p className="text-xs text-[#A09D99] text-center">
            詳細なセキュリティ・ガバナンスポリシーについては、お問い合わせ後にご案内しています。
          </p>
        </div>
      </div>
    </section>
  );
}
