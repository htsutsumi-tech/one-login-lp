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
    <section id="ai-native" className="bg-neutral-950 py-32 lg:py-44 text-white">
      <div
        ref={ref}
        className="max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Header */}
        <div className="mb-20">
          <p
            className={`section-label text-neutral-500 mb-5 fade-up ${isVisible ? "is-visible" : ""}`}
          >
            AI Native Development
          </p>
          <h2
            className={`display-heading text-white text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] leading-tight max-w-2xl fade-up ${isVisible ? "is-visible" : ""} delay-100`}
          >
            なぜ、いま
            <br />
            AIネイティブ開発なのか。
          </h2>
          <p
            className={`text-neutral-400 text-sm mt-6 leading-relaxed max-w-lg fade-up ${isVisible ? "is-visible" : ""} delay-200`}
          >
            AIは「便利なツール」ではなく、開発体制そのものに組み込む
            <span className="text-neutral-200">「構造」</span>
            として機能します。
          </p>
        </div>

        {/* Values */}
        <div className="space-y-px">
          {values.map((value, i) => (
            <div
              key={value.number}
              className={`group border-t border-neutral-800 py-10 lg:py-12 grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 hover:bg-neutral-900 transition-colors duration-300 px-2 -mx-2 fade-up ${isVisible ? "is-visible" : ""} delay-${(i + 1) * 100}`}
            >
              {/* Left */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-neutral-600">
                  {value.number}
                </span>
                <h3 className="text-white font-medium text-base leading-snug">
                  {value.title}
                </h3>
                <span className="inline-block mt-auto text-xs text-neutral-500 border border-neutral-800 rounded-full px-2.5 py-1 w-fit group-hover:border-neutral-600 transition-colors duration-300">
                  {value.highlight}
                </span>
              </div>

              {/* Right */}
              <div>
                <p className="text-neutral-200 text-sm font-medium mb-3 leading-relaxed">
                  {value.lead}
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {value.body}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-neutral-800" />
        </div>
      </div>
    </section>
  );
}
