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
        <div className={`mb-16 fade-up ${isVisible ? "is-visible" : ""}`}>
          <p className={`section-label mb-5 ${isVisible ? "is-visible" : ""}`}>Pain Points</p>
          <h2 className="display-heading text-slate-900 text-[2rem] sm:text-[2.8rem] lg:text-[4rem] leading-tight">
            多くの企業が、
            <br />
            同じ壁にぶつかっている。
          </h2>
        </div>

        {/* Pain cards — featured first + supporting three */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">

          {/* Featured card — Pain 01 */}
          <div
            className={`bg-slate-50 md:col-span-3 p-10 lg:p-14 card-grid-hover relative overflow-hidden fade-up ${isVisible ? "is-visible" : ""} delay-100`}
          >
            <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
              <div>
                <span className="font-mono text-[10px] tracking-[0.18em] text-blue-500 font-semibold block mb-6">
                  {pains[0].number}
                </span>
                <h3 className="display-heading text-slate-900 text-[1.5rem] sm:text-[1.9rem] lg:text-[2.3rem] leading-[1.2]">
                  {pains[0].title}
                </h3>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-slate-400 text-sm leading-[2.2] max-w-lg">
                  {pains[0].body}
                </p>
              </div>
            </div>
          </div>

          {/* Supporting cards — Pains 02 / 03 / 04 */}
          {pains.slice(1).map((pain, i) => (
            <div
              key={pain.number}
              className={`bg-slate-50 p-8 lg:p-9 card-grid-hover fade-up ${isVisible ? "is-visible" : ""} delay-${(i + 2) * 100}`}
            >
              <span className="font-mono text-[10px] tracking-[0.18em] text-blue-500 font-semibold block mb-5">
                {pain.number}
              </span>
              <h3 className="text-[0.85rem] font-semibold text-slate-900 mb-4 leading-snug">
                {pain.title}
              </h3>
              <p className="text-xs text-slate-400 leading-[1.9]">
                {pain.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className={`mt-14 fade-up ${isVisible ? "is-visible" : ""} delay-500`}>
          <p className="text-slate-400 text-sm">
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
