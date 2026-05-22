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
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ebebeb 1px, transparent 1px), linear-gradient(to bottom, #ebebeb 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.4,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 45%, transparent 0%, rgba(255,255,255,0.7) 60%, #ffffff 100%)",
        }}
      />

      <div className="relative max-w-content mx-auto px-6 lg:px-8 pb-28 pt-16 lg:pt-20">

        {/* ── Badge + ターゲット: 同じ"導入ゾーン"として近く配置 ── */}
        <div
          className={`mb-10 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-flex items-center gap-2 border border-neutral-200 bg-white/80 rounded-full px-3.5 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 flex-shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-medium text-neutral-600 tracking-widest uppercase">
              共同開発パートナー募集
            </span>
          </span>
          {/* ターゲット: バッジのすぐ下、同じゾーンに */}
          <p className="text-sm sm:text-base text-neutral-500 font-normal">
            自社プロダクトを、本気で育てる企業へ。
          </p>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* ── Tier 1 × Tier 2: H1 と第二主役を"ひとかたまり"に ── */}
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div
          className={`transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "160ms" }}
        >
          {/* H1 — Tier 1: 詩的な問いかけ / serif / light */}
          <h1 className="display-heading text-neutral-950 mb-3">
            <span className="block text-[2.6rem] sm:text-[4rem] lg:text-[5.5rem] leading-[1.12] tracking-[-0.03em]">
              その事業構想、
            </span>
            <span className="block text-[2.6rem] sm:text-[4rem] lg:text-[5.5rem] leading-[1.12] tracking-[-0.03em]">
              <span className="relative inline-block mr-[0.06em]">
                <span className="relative z-10 text-neutral-500 text-[0.95em]">&ldquo;既製SaaS&rdquo;</span>
                <span
                  className="absolute bottom-[0.2em] left-0 right-0 h-[1.5px] bg-neutral-300"
                  aria-hidden="true"
                />
              </span>
              で妥協しない。
            </span>
          </h1>

          {/* Positioning Statement — Tier 2: 自信ある宣言 / sans / normal / 第二主役 */}
          {/* H1との間隔を意図的に狭く → "問い→答え"の一体感 */}
          <p
            className="
              font-sans font-normal text-neutral-700
              text-[1.5rem] sm:text-[2rem] lg:text-[2.6rem]
              leading-[1.3] tracking-[-0.01em]
              mt-5 mb-0
            "
          >
            御社の事業構想を、
            <br className="hidden sm:block" />
            プロダクトとして実装する。
          </p>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* ── 区切り線 + Tier 3: 補足説明ゾーン ── */}
        {/* H1ゾーンとの間に"段差"を作る                          */}
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div
          className={`mt-12 pt-10 border-t border-neutral-100 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          {/* Body — Tier 3: 事実の補足 / sans / light / muted */}
          <p className="text-neutral-500 text-sm sm:text-base leading-loose font-light max-w-lg mb-10">
            業務・データ・顧客接点を、一つのログイン基盤へ統合。
            <br />
            AIネイティブ開発で、事業に最適化されたプロダクトを高速実装。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollTo("cta")}
                className="inline-flex items-center gap-3 bg-neutral-950 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-neutral-800 active:scale-[0.98] transition-all duration-200 rounded-sm w-fit"
              >
                共同開発パートナーについて相談する
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="text-[11px] text-neutral-400 pl-1">
                まずは30分の無料オンライン相談から。業種・規模は問いません。
              </p>
            </div>

            <button
              onClick={() => scrollTo("concept")}
              className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-700 transition-colors duration-200 sm:ml-2 w-fit"
            >
              詳しく読む
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  d="M6 2v8M3 6.5l3 3 3-3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ── プロセスストリップ ── */}
        <div
          className={`mt-24 pt-7 border-t border-neutral-100 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
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
                    <span className="font-mono text-[10px] text-neutral-300">
                      {item.step}
                    </span>
                    <span className="text-xs font-medium text-neutral-700">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 hidden sm:block">
                    {item.sub}
                  </p>
                </div>
                {i < 2 && (
                  <div className="hidden sm:flex items-center px-4 text-neutral-200" aria-hidden="true">
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
        className={`absolute bottom-7 left-1/2 -translate-x-1/2 transition-all duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-neutral-200 to-transparent" />
      </div>
    </section>
  );
}
