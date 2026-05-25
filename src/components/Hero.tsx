"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-16">

      {/* Grid — blue-tinted lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37,99,235,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.09) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.6,
        }}
      />
      {/* Vignette — fades grid toward edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 85% 70% at 50% 40%, transparent 0%, rgba(255,255,255,0.8) 55%, #ffffff 100%)",
        }}
      />
      {/* Blue atmospheric glow — top-right */}
      <div
        className="absolute top-0 right-0 w-[70vw] h-[70vw] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse at 75% 5%, rgba(37,99,235,0.08) 0%, transparent 55%)",
        }}
      />
      {/* Blue atmospheric glow — bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[50vw] h-[50vw] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse at 15% 95%, rgba(37,99,235,0.05) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-content mx-auto px-6 lg:px-8 pb-28 pt-16 lg:pt-20">

        {/* Badge — sharp enterprise tag */}
        <div
          className={`mb-12 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: "0ms" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase font-medium text-blue-600 border border-blue-200 px-2.5 py-1.5 rounded-none">
              Co-Development
            </span>
            <span className="hidden sm:flex items-center gap-3">
              <span className="w-px h-3 bg-slate-200" aria-hidden="true" />
              <span className="text-[11px] text-slate-400 tracking-wide">共同開発パートナー募集</span>
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-500 font-light">
            自社プロダクトを、本気で育てる企業へ。
          </p>
        </div>

        {/* H1 + Positioning Statement */}
        <div
          className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: "160ms" }}
        >
          {/* H1 — serif / light / large */}
          <h1 className="display-heading text-slate-900 mb-5">
            <span className="block text-[2.8rem] sm:text-[4rem] lg:text-[5.5rem] leading-[1.06] tracking-[-0.04em]">
              その事業構想、
            </span>
            <span className="block text-[2.8rem] sm:text-[4rem] lg:text-[5.5rem] leading-[1.06] tracking-[-0.04em]">
              <span className="relative inline-block mr-[0.06em]">
                {/* Blue underline accent on "既製SaaS" */}
                <span className="relative z-10 text-slate-500 text-[0.95em]">&ldquo;既製SaaS&rdquo;</span>
                <span
                  className="absolute left-0 right-0 h-[3px] bg-blue-400"
                  style={{ bottom: "0.06em" }}
                  aria-hidden="true"
                />
              </span>
              で妥協しない。
            </span>
          </h1>

          {/* Tier 2 — sans / confident declaration */}
          <p className="font-sans font-normal text-slate-700 text-[1.6rem] sm:text-[2.2rem] lg:text-[2.8rem] leading-[1.28] tracking-[-0.02em] mt-2 mb-0">
            御社の事業構想を、
            <br className="hidden sm:block" />
            プロダクトとして実装する。
          </p>
        </div>

        {/* Divider + Body + CTA */}
        <div
          className={`mt-14 pt-10 border-t border-slate-100 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "320ms" }}
        >
          <p className="text-slate-500 text-sm sm:text-base leading-loose font-light max-w-lg mb-10">
            業務・データ・顧客接点を、一つのログイン基盤へ統合。
            <br />
            AIネイティブ開発で、事業に最適化されたプロダクトを高速実装。
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollTo("cta")}
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-blue-700 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 rounded-sm w-fit shadow-sm shadow-blue-200"
              >
                共同開発パートナーについて相談する
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <p className="text-[11px] text-slate-400 pl-1">
                まずは30分の無料オンライン相談から。業種・規模は問いません。
              </p>
            </div>

            <button
              onClick={() => scrollTo("concept")}
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-700 transition-colors duration-200 sm:ml-2 w-fit group"
            >
              詳しく読む
              <svg
                className="group-hover:translate-y-0.5 transition-transform duration-200"
                width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"
              >
                <path d="M6 2v8M3 6.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Process Strip */}
        <div
          className={`mt-24 pt-7 border-t border-slate-100 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-0 sm:flex sm:items-center">
            {[
              { step: "01", label: "事業課題の整理", sub: "現状分析・要件定義" },
              { step: "02", label: "統合基盤の設計", sub: "One Login, All Contents" },
              { step: "03", label: "高速実装・拡張", sub: "AIネイティブ開発体制" },
            ].map((item, i) => (
              <div key={item.step} className="flex sm:flex-1 items-center">
                <div className="flex-1 sm:flex-none">
                  <div className="flex items-baseline gap-1.5 mb-0.5">
                    <span className="font-mono text-[10px] text-blue-500 font-semibold">{item.step}</span>
                    <span className="text-xs font-medium text-slate-700">{item.label}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 hidden sm:block">{item.sub}</p>
                </div>
                {i < 2 && (
                  <div className="hidden sm:flex items-center px-4 text-blue-200" aria-hidden="true">
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
        className={`absolute bottom-7 left-1/2 -translate-x-1/2 transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "800ms" }}
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-slate-200 to-transparent" />
      </div>
    </section>
  );
}
