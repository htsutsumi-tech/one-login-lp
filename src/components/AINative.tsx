"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    number: "01",
    title: "開発スピードの大幅向上",
    lead: "「思いついたら、その日のうちに試せる」体制へ。",
    body: "生成AIを設計・コーディング・テスト工程に組み込むことで、要件定義からリリースまでのリードタイムを大幅短縮。小規模改修であれば即日リリースが可能です。事業の意思決定スピードに、開発が追いつく体制を実現します。",
    highlight: "小規模改修は即日対応",
  },
  {
    number: "02",
    title: "コスト構造の最適化",
    lead: "月額費用の積み上がりではなく、必要な機能に必要な投資を。",
    body: "従来は人月単位で積み上がっていた開発費を、AIの活用によって効率化。中堅・中小企業でも採用しやすい費用感で、エンタープライズ水準の機能を持つ統合プロダクトを構築できます。",
    highlight: "コスト構造を設計し直す",
  },
  {
    number: "03",
    title: "業種・業務を問わない拡張性",
    lead: "汎用プロダクトの限界を超えた、顧客ごとの理想形へ。",
    body: "業種特化の機能開発、業務フローのカスタム、外部サービスとの連携——あらゆる要件に対応できるAIネイティブ開発体制で、御社の事業フェーズに合わせてプロダクトを柔軟に拡張します。",
    highlight: "顧客ごとに最適化された設計",
  },
];

export default function AINative() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="ai-native" className="section-atm-slate py-20 lg:py-28 relative overflow-hidden">

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Header */}
        <div className="mb-12 lg:mb-14">
          <p
            className={`section-label mb-8 fade-up ${isVisible ? "is-visible" : ""}`}
          >
            AI Native Development
          </p>
          <h2
            className={`display-heading text-[#191919] text-[2.5rem] sm:text-[4rem] lg:text-[4.5rem] leading-tight fade-up ${isVisible ? "is-visible" : ""} delay-100`}
          >
            なぜ、いま
            <br />
            AIネイティブ開発なのか。
          </h2>
        </div>

        <p
          className={`text-[#787674] text-sm leading-relaxed mb-14 max-w-xl fade-up ${isVisible ? "is-visible" : ""} delay-200`}
        >
          AIは「便利なツール」ではなく、
          開発体制そのものに組み込む
          <span className="text-[#191919] font-semibold">「構造」</span>
          として機能します。
        </p>

        {/* Values — cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {values.map((value, i) => (
            <div
              key={value.number}
              className={`card-notion relative overflow-hidden p-8 lg:p-9 card-grid-hover fade-up ${isVisible ? "is-visible" : ""} delay-${(i + 1) * 100}`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Ghost number — atmospheric backdrop */}
              <span
                className="absolute -top-3 right-5 font-sans font-black leading-none select-none pointer-events-none tabular-nums"
                style={{
                  fontSize: "7rem",
                  color: "#191919",
                  opacity: 0.055,
                  letterSpacing: "-0.04em",
                }}
                aria-hidden="true"
              >
                {value.number}
              </span>

              {/* Highlight badge */}
              <div className="mb-6 relative">
                <span className="text-xs text-[#4A7BA8] bg-[#EEF4F9] border border-[#BDD3E7] rounded-full px-2.5 py-1">
                  {value.highlight}
                </span>
              </div>

              <h3 className="text-[#191919] font-bold text-base leading-snug mb-3 relative">
                {value.title}
              </h3>
              <p className="text-[#191919] text-[0.85rem] font-semibold mb-3 leading-relaxed relative">
                {value.lead}
              </p>
              <p className="text-[#787674] text-xs leading-relaxed relative">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
