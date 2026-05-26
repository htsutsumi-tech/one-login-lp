"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = (delay: number) =>
    `transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-16">

      {/* ── Background — soft warm gradient, no grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 90% 65% at 50% 20%, rgba(37,99,235,0.06) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to top, rgba(247,245,239,0.5) 0%, transparent 100%)",
        }}
      />

      {/* ── Content — centered ── */}
      <div className="relative max-w-[62rem] mx-auto px-6 lg:px-8 pb-28 pt-20 text-center">

        {/* Badge */}
        <div
          className={`mb-10 flex justify-center ${fadeIn(0)}`}
          style={{ transitionDelay: "0ms" }}
        >
          <span className="section-label">Co-Development Partner</span>
        </div>

        {/* H1 */}
        <h1
          className="mb-8"
          aria-label="その事業構想、「既製SaaS」で妥協しない。"
        >
          <span
            className={`block font-sans font-normal text-[1.4rem] sm:text-[1.75rem] lg:text-[2.1rem] leading-[1.6] tracking-[-0.01em] text-[#A09D99] mb-3 ${fadeIn(80)}`}
            style={{ transitionDelay: "80ms" }}
          >
            その事業構想、
          </span>

          <span className={`display-heading block text-[#191919] ${fadeIn(200)}`} style={{ transitionDelay: "200ms" }}>
            <span className="block text-[3rem] sm:text-[5rem] lg:text-[7rem] leading-[1.02]">
              <span className="text-blue-600">&ldquo;既製SaaS&rdquo;</span>で
            </span>
            <span className="block text-[3rem] sm:text-[5rem] lg:text-[7rem] leading-[1.02]">
              妥協しない。
            </span>
          </span>
        </h1>

        {/* Tier 2 */}
        <div
          className={`mb-12 ${fadeIn(360)}`}
          style={{ transitionDelay: "360ms" }}
        >
          <p className="font-sans font-normal text-[#787674] text-[1.1rem] sm:text-[1.35rem] lg:text-[1.5rem] leading-[1.6] tracking-[-0.01em]">
            御社の事業構想を、
            プロダクトとして実装する。
          </p>
        </div>

        {/* CTA block */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 ${fadeIn(480)}`}
          style={{ transitionDelay: "480ms" }}
        >
          <button onClick={() => scrollTo("cta")} className="hero-cta">
            共同開発パートナーについて相談する
            <svg
              className="hero-cta-arrow"
              width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={() => scrollTo("concept")}
            className="inline-flex items-center gap-1.5 text-sm text-[#A09D99] hover:text-[#191919] transition-colors duration-200 px-4 py-3 group"
          >
            詳しく読む
            <svg
              className="group-hover:translate-y-0.5 transition-transform duration-200"
              width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M6 2v8M3 6.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div
          className={`${fadeIn(540)}`}
          style={{ transitionDelay: "540ms" }}
        >
          <p className="text-[11px] text-[#A09D99]">
            まずは30分の無料オンライン相談から。業種・規模は問いません。
          </p>
        </div>

        {/* Process Strip */}
        <div
          className={`mt-20 pt-7 border-t border-[#E8E5DF] ${fadeIn(640)}`}
          style={{ transitionDelay: "640ms" }}
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-0 sm:flex sm:items-center sm:justify-center">
            {[
              { step: "01", label: "事業課題の整理", sub: "現状分析・要件定義" },
              { step: "02", label: "統合基盤の設計", sub: "One Login, All Contents" },
              { step: "03", label: "高速実装・拡張", sub: "AIネイティブ開発体制" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center sm:w-[190px]">
                <div className="flex-1 sm:flex-none text-center sm:text-left">
                  <div className="flex items-baseline gap-1.5 mb-0.5 justify-center sm:justify-start">
                    <span className="font-mono text-[10px] text-blue-500 font-semibold">{item.step}</span>
                    <span className="text-xs font-medium text-[#191919]">{item.label}</span>
                  </div>
                  <p className="text-[11px] text-[#A09D99] hidden sm:block">{item.sub}</p>
                </div>
                {i < 2 && (
                  <div className="hidden sm:flex items-center px-4 text-[#D4D0C9]" aria-hidden="true">
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                      <path d="M1 5h12M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "1400ms" }}
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-[#C8C5BF] select-none leading-none">
          Scroll
        </span>
        <div className="animate-scroll-down flex flex-col items-center gap-px">
          <div className="w-px h-7 bg-gradient-to-b from-[#D4D0C9] to-transparent" />
          <svg
            width="8" height="5" viewBox="0 0 8 5" fill="none"
            className="text-[#D4D0C9]"
          >
            <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
