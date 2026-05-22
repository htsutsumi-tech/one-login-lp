"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
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

export default function Security() {
  const { ref, isVisible } = useScrollAnimation(0.06);

  return (
    <section id="security" className="bg-white py-32 lg:py-44">
      <div
        ref={ref}
        className="max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end mb-16">
          <div>
            <p
              className={`section-label mb-5 fade-up ${isVisible ? "is-visible" : ""}`}
            >
              Security
            </p>
            <h2
              className={`display-heading text-neutral-950 text-[2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-tight fade-up ${isVisible ? "is-visible" : ""} delay-100`}
            >
              開発スピードと引き換えに、
              <br />
              セキュリティを犠牲にしない。
            </h2>
          </div>
          <div
            className={`hidden lg:block text-right fade-up ${isVisible ? "is-visible" : ""} delay-200`}
          >
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              AIを使って速く作ること、AIからこそ無防備に守ること。
              <br />
              両立を前提に設計しています。
            </p>
          </div>
        </div>

        <p
          className={`lg:hidden text-neutral-400 text-sm leading-relaxed mb-12 fade-up ${isVisible ? "is-visible" : ""} delay-200`}
        >
          AIを使って速く作ること、AIからこそ無防備に守ること。
          両立を前提に設計しています。
        </p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`bg-white p-7 lg:p-8 fade-up ${isVisible ? "is-visible" : ""} delay-${(i + 1) * 100}`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-sm font-medium text-neutral-900 leading-snug">
                  {feature.title}
                </h3>
                <span className="flex-shrink-0 text-[10px] font-mono text-neutral-400 border border-neutral-100 px-1.5 py-0.5 rounded-sm whitespace-nowrap">
                  {feature.tag}
                </span>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Security policy note */}
        <div
          className={`mt-10 fade-up ${isVisible ? "is-visible" : ""} delay-500`}
        >
          <p className="text-xs text-neutral-400 text-center">
            詳細なセキュリティポリシーについては、お問い合わせ後にご案内しています。
          </p>
        </div>
      </div>
    </section>
  );
}
