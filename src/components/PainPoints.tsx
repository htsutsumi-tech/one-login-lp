"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pains = [
  {
    number: "01",
    title: "ツールの乱立が、業務を複雑にしている",
    body: "SaaS導入のたびに増えるログイン、分断されるデータ、現場の習熟コスト。「便利なはずのツール」が、かえって業務を煩雑にする構造。",
  },
  {
    number: "02",
    title: "既製SaaSでは、顧客ごとの要件に対応できない",
    body: "汎用パッケージに合わせて業務を変えるか、高額なカスタマイズに頼るか。本来の事業価値を実現するための選択肢が、極端すぎる。",
  },
  {
    number: "03",
    title: "開発スピードが遅く、機会損失が続く",
    body: "要件定義に数ヶ月、リリースはさらにその先。市場の変化に追いつけない開発体制では、事業の優位性を保ち続けることができない。",
  },
  {
    number: "04",
    title: "SaaS費用の積み重なりが、コストを圧迫する",
    body: "利用率が低いプランでも固定費は増え続ける。従量課金が積み重なり、コストは「使った分」ではなく「契約した分」で決まっていく。",
  },
];

export default function PainPoints() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="pain" className="section-atm-slate py-24 lg:py-36 relative overflow-hidden">

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Header */}
        <div className={`mb-12 fade-up ${isVisible ? "is-visible" : ""}`}>
          <p className="section-label mb-5">Pain Points</p>
          <h2 className="display-heading text-[#191919] text-[2rem] sm:text-[2.8rem] lg:text-[3.8rem] leading-tight">
            多くの企業が、
            <br />
            同じ壁にぶつかっている。
          </h2>
        </div>

        {/* Pain cards — 2×2 equal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pains.map((pain, i) => (
            <div
              key={pain.number}
              className={`card-notion relative overflow-hidden p-10 lg:p-12 card-grid-hover fade-up ${isVisible ? "is-visible" : ""} delay-${(i + 1) * 100}`}
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
                {pain.number}
              </span>

              {/* Content */}
              <h3 className="display-heading text-[#191919] text-[1.15rem] sm:text-[1.25rem] lg:text-[1.4rem] leading-snug mb-5 relative">
                {pain.title}
              </h3>
              <p className="text-sm text-[#787674] leading-[1.9] relative">
                {pain.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className={`mt-12 fade-up ${isVisible ? "is-visible" : ""} delay-500`}>
          <p className="text-[#787674] text-sm">
            これらはすべて、
            <span className="text-[#191919] font-semibold">
              「構造」を変えることで解決できる
            </span>
            課題です。
          </p>
        </div>
      </div>
    </section>
  );
}
