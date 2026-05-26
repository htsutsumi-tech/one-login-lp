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
    <section id="ai-native" className="section-atm-white py-16 lg:py-24 relative overflow-hidden">

      {/* Section index label */}
      <div className="absolute top-8 right-8 pointer-events-none hidden lg:block" aria-hidden="true">
        <p className="font-mono text-[9px] text-slate-300 tracking-[0.16em] text-right leading-[1.8] uppercase">
          Sect. 04<br />AI Native
        </p>
      </div>

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Header — full-width, dominant */}
        <div className="mb-10 lg:mb-12">
          <p
            className={`section-label mb-8 fade-up ${isVisible ? "is-visible" : ""}`}
          >
            AI Native Development
          </p>
          <h2
            className={`display-heading text-slate-900 text-[2.5rem] sm:text-[4rem] lg:text-[4.5rem] leading-tight fade-up ${isVisible ? "is-visible" : ""} delay-100`}
          >
            なぜ、いま
            <br />
            AIネイティブ開発なのか。
          </h2>
        </div>

        <p
          className={`text-slate-400 text-sm leading-relaxed mb-16 max-w-xl fade-up ${isVisible ? "is-visible" : ""} delay-200`}
        >
          AIは「便利なツール」ではなく、
          開発体制そのものに組み込む
          <span className="text-slate-700 font-medium">「構造」</span>
          として機能します。
        </p>

        {/* Values */}
        <div className="space-y-px">
          {values.map((value, i) => (
            <div
              key={value.number}
              className={`group relative border-t border-slate-200 py-10 lg:py-12 grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 hover:bg-slate-50 transition-colors duration-300 px-4 -mx-4 fade-up ${isVisible ? "is-visible" : ""} delay-${(i + 1) * 100}`}
            >
              {/* Decorative number */}
              <span
                className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[6rem] lg:text-[8rem] leading-none text-blue-50 font-bold"
                aria-hidden="true"
              >
                {value.number}
              </span>

              {/* Left */}
              <div className="relative flex flex-col gap-2">
                <span className="font-mono text-xs text-blue-400">
                  {value.number}
                </span>
                <h3 className="text-slate-900 font-medium text-base leading-snug">
                  {value.title}
                </h3>
                <span className="inline-block mt-auto text-xs text-blue-600 bg-blue-50 border border-blue-200 rounded-sm px-2.5 py-1 w-fit">
                  {value.highlight}
                </span>
              </div>

              {/* Right */}
              <div className="relative">
                <p className="text-slate-900 text-[0.92rem] font-semibold mb-3 leading-relaxed">
                  {value.lead}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.body}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-slate-200" />
        </div>
      </div>
    </section>
  );
}
