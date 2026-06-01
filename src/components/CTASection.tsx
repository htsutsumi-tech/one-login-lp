"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CONTACT_URL =
  "https://digital-eyes.jp/form/one-eighty/contact1?title=%E5%85%B1%E5%90%8C%E9%96%8B%E7%99%BA%E3%83%91%E3%83%BC%E3%83%88%E3%83%8A%E3%83%BC%E5%8B%9F%E9%9B%86%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="cta" className="section-atm-slate py-28 lg:py-40 relative overflow-hidden">

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Copy */}
          <div>
            <p className={`section-label mb-5 fade-up ${isVisible ? "is-visible" : ""}`}>
              Contact
            </p>
            <h2
              className={`display-heading text-[#191919] text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.12] mb-8 fade-up ${isVisible ? "is-visible" : ""} delay-100`}
            >
              &ldquo;構造から変える&rdquo;
              <br />
              開発を、共に。
            </h2>

            <div className={`space-y-5 mb-10 fade-up ${isVisible ? "is-visible" : ""} delay-200`}>
              <p className="text-[#787674] text-sm leading-relaxed">
                共同開発パートナーへのご興味・ご相談、
                お気軽にお問い合わせください。
              </p>
              <p className="text-[#787674] text-sm leading-relaxed">
                まずは30分のオンライン相談から。
                事業の課題と現状をお聞きした上で、
                どのような形でお役に立てるかをご提案します。
              </p>
            </div>

            <div className={`space-y-3 fade-up ${isVisible ? "is-visible" : ""} delay-300`}>
              {[
                "現在のプロダクト課題のヒアリング",
                "One Login, All Contentsの要件整理",
                "開発体制・費用感のご説明",
                "共同開発パートナーシップのご提案",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#EEF4F9] border border-[#BDD3E7] flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] text-[#4A7BA8] font-bold tabular-nums">
                      {i + 1}
                    </span>
                  </span>
                  <span className="text-sm text-[#787674]">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div className={`fade-up ${isVisible ? "is-visible" : ""} delay-200`}>
            <div
              className="card-notion p-8 lg:p-10 flex flex-col gap-8"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {/* Guide text */}
              <div className="space-y-3">
                <p className="text-[#191919] text-sm font-semibold leading-relaxed">
                  お問い合わせフォームへ
                </p>
                <p className="text-[#787674] text-sm leading-relaxed">
                  下記ボタンよりお問い合わせフォームへお進みください。
                  業種・規模は問いません。
                  まずはお気軽にご連絡ください。
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E8E5DF]" />

              {/* CTA button */}
              <div className="space-y-4">
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#191919] text-white text-sm font-semibold py-3.5 rounded-xl hover:bg-black active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                >
                  お問い合わせする
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    stroke="currentColor" strokeWidth="1.5" aria-hidden="true"
                  >
                    <path d="M2 6h8M7 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                <p className="text-[11px] text-[#787674] text-center leading-relaxed">
                  クリックすると外部フォームへ遷移します。
                  <br />
                  通常1〜2営業日以内にご返信します。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
