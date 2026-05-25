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

      {/* Section number watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block" aria-hidden="true">
        <span className="block font-mono font-bold leading-none tracking-[-0.06em]" style={{ fontSize: "18vw", color: "rgba(37,99,235,0.028)" }}>
          02
        </span>
      </div>

      {/* Section index label */}
      <div className="absolute top-8 right-8 pointer-events-none hidden lg:block" aria-hidden="true">
        <p className="font-mono text-[9px] text-slate-300 tracking-[0.16em] text-right leading-[1.8] uppercase">
          Sect. 02<br />Pain Points
        </p>
      </div>

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Header */}
        <div
          className={`mb-16 fade-up ${isVisible ? "is-visible" : ""}`}
        >
          <p className={`section-label mb-5 ${isVisible ? "is-visible" : ""}`}>Pain Points</p>
          <h2 className="display-heading text-slate-900 text-[2rem] sm:text-[2.8rem] lg:text-[4rem] leading-tight">
            多くの企業が、
            <br />
            同じ壁にぶつかっている。
          </h2>
        </div>

        {/* Pain cards — with decorative background numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200">
          {pains.map((pain, i) => (
            <div
              key={pain.number}
              className={`bg-slate-50 p-8 lg:p-10 card-grid-hover relative fade-up ${isVisible ? "is-visible" : ""} delay-${(i + 1) * 100}`}
            >
              {/* Decorative large number — background */}
              <span
                className="absolute top-3 right-4 font-mono text-[5rem] leading-none text-blue-50 font-bold select-none pointer-events-none"
                aria-hidden="true"
              >
                {pain.number}
              </span>

              {/* Small step indicator */}
              <span className="font-mono text-[10px] tracking-[0.18em] text-blue-500 font-semibold block mb-4">
                {pain.number}
              </span>

              <div className="relative">
                <h3 className="text-base font-medium text-slate-900 mb-3 leading-snug pr-12">
                  {pain.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {pain.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div
          className={`mt-14 fade-up ${isVisible ? "is-visible" : ""} delay-500`}
        >
          <p className="text-center text-slate-400 text-sm">
            これらはすべて、
            <span className="text-slate-700 font-medium">
              「構造」を変えることで解決できる
            </span>
            課題です。
          </p>
        </div>
      </div>
    </section>
  );
}
