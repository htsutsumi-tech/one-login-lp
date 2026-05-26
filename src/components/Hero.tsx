"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const fadeIn = (delay: number) =>
    `transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-16">

      {/* ── Backgrounds ─────────────────────────────────────────────────── */}

      {/* Grid — blue-tinted lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.65,
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 50% 40%, transparent 0%, rgba(255,255,255,0.82) 52%, #ffffff 100%)",
        }}
      />
      {/* Atmospheric glow — top-right */}
      <div
        className="absolute top-0 right-0 w-[70vw] h-[70vw] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 75% 5%, rgba(37,99,235,0.07) 0%, transparent 55%)",
        }}
      />
      {/* Atmospheric glow — bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[50vw] h-[50vw] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 15% 95%, rgba(37,99,235,0.04) 0%, transparent 55%)",
        }}
      />

      {/* Corner markers — blueprint accent */}
      <div className="absolute top-[4.5rem] left-6 lg:left-8 pointer-events-none hidden sm:block" aria-hidden="true">
        <div className="w-[18px] h-[18px] relative">
          <div className="absolute top-0 left-0 w-full h-px bg-slate-300/80" />
          <div className="absolute top-0 left-0 w-px h-full bg-slate-300/80" />
        </div>
      </div>
      <div className="absolute top-[4.5rem] right-6 lg:right-8 pointer-events-none hidden sm:block" aria-hidden="true">
        <div className="w-[18px] h-[18px] relative">
          <div className="absolute top-0 right-0 w-full h-px bg-slate-300/80" />
          <div className="absolute top-0 right-0 w-px h-full bg-slate-300/80" />
        </div>
      </div>
      {/* Small section label */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{ top: "5.8rem", right: "2rem" }}
        aria-hidden="true"
      >
        <p className="font-mono text-[9px] text-slate-300 tracking-[0.16em] text-right leading-[1.8] uppercase">
          Sect. 01<br />First View
        </p>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}

      <div className="relative max-w-[76rem] mx-auto px-6 lg:px-8 pb-24 pt-16 lg:pt-20">

        {/* 2-column grid — left: main copy, right: quiet supplement */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-12">

          {/* ── LEFT: Main copy ─────────────────────────────────────────── */}
          <div>

            {/* Badge */}
            <div
              className={`mb-14 ${fadeIn(0)}`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase font-medium text-blue-600 border border-blue-200 px-2.5 py-1.5">
                  Co-Development
                </span>
                <span className="hidden sm:flex items-center gap-3">
                  <span className="w-px h-3 bg-slate-200" aria-hidden="true" />
                  <span className="text-[11px] text-slate-400 tracking-wide">共同開発パートナー募集</span>
                </span>
              </div>
            </div>

            {/* H1 — 3-line structure */}
            <h1
              className="mb-8"
              aria-label="その事業構想、「既製SaaS」で妥協しない。"
            >
              <span
                className={`block font-sans font-light text-[1.75rem] sm:text-[2.25rem] lg:text-[2.85rem] leading-[1.4] tracking-[-0.01em] text-slate-400 mb-1 lg:mb-2 ${fadeIn(80)}`}
                style={{ transitionDelay: "80ms" }}
              >
                その事業構想、
              </span>

              <span className="display-heading block">
                <span
                  className={`block text-[2.8rem] sm:text-[4rem] lg:text-[6.5rem] leading-[1.04] tracking-[-0.04em] text-slate-900 ${fadeIn(200)}`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <span className="relative inline-block mr-[0.04em]">
                    <span className="relative z-10 text-blue-600 text-[0.88em]">
                      &ldquo;既製SaaS&rdquo;
                    </span>
                    <span
                      className="absolute left-0 right-0 bg-blue-400"
                      style={{ bottom: "0.05em", height: "3px" }}
                      aria-hidden="true"
                    />
                  </span>
                  で
                </span>

                <span
                  className={`block text-[2.8rem] sm:text-[4rem] lg:text-[6.5rem] leading-[1.04] tracking-[-0.04em] text-slate-900 ${fadeIn(320)}`}
                  style={{ transitionDelay: "320ms" }}
                >
                  妥協しない。
                </span>
              </span>
            </h1>

            {/* Tier 2 */}
            <div
              className={fadeIn(440)}
              style={{ transitionDelay: "440ms" }}
            >
              <p className="font-sans font-normal text-slate-600 text-[1.45rem] sm:text-[1.9rem] lg:text-[2.3rem] leading-[1.3] tracking-[-0.02em]">
                御社の事業構想を、
                <br className="hidden sm:block" />
                プロダクトとして実装する。
              </p>
            </div>

            {/* Divider + CTA */}
            <div
              className={`mt-12 pt-9 border-t border-slate-200 ${fadeIn(560)}`}
              style={{ transitionDelay: "560ms" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => scrollTo("cta")}
                    className="hero-cta"
                  >
                    共同開発パートナーについて相談する
                    <svg
                      className="hero-cta-arrow"
                      width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"
                      aria-hidden="true"
                    >
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
                    width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M6 2v8M3 6.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

          </div>{/* /LEFT */}

          {/* ── RIGHT: Quiet supplementary copy ─────────────────────────── */}
          <div
            className={`hidden lg:flex flex-col self-start relative pl-8 pt-[12rem] ${fadeIn(640)}`}
            style={{ transitionDelay: "640ms" }}
          >
            <p className="text-[1.15rem] text-slate-500 font-light leading-[2.2] tracking-[0.01em]">
              業務・顧客・データを、
              <br />
              一つのログイン基盤へ。
            </p>
            <p className="text-[1.15rem] text-slate-500 font-light leading-[2.2] tracking-[0.01em] mt-7">
              AIネイティブ開発で、
              <br />
              事業に最適化された構造を実装。
            </p>
          </div>

        </div>{/* /grid */}

        {/* Process Strip */}
        <div
          className={`mt-20 pt-7 border-t border-slate-200 ${fadeIn(720)}`}
          style={{ transitionDelay: "720ms" }}
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-0 sm:flex sm:items-center sm:justify-center">
            {[
              { step: "01", label: "事業課題の整理", sub: "現状分析・要件定義" },
              { step: "02", label: "統合基盤の設計", sub: "One Login, All Contents" },
              { step: "03", label: "高速実装・拡張", sub: "AIネイティブ開発体制" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center sm:w-[180px]">
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

      {/* Scroll indicator — SCROLL ↓ */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "1400ms" }}
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-slate-400 select-none leading-none">
          Scroll
        </span>
        <div className="animate-scroll-down flex flex-col items-center gap-px">
          <div className="w-px h-7 bg-gradient-to-b from-slate-300 to-transparent" />
          <svg
            width="8" height="5" viewBox="0 0 8 5" fill="none"
            className="text-slate-300"
          >
            <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
