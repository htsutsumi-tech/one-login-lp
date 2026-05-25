"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_1px_20px_0_rgba(37,99,235,0.09)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 group"
          aria-label="トップへ戻る"
        >
          {/* Brand logo — actual SVG, text #333→slate-900, pink→blue-600 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69" height="20"
            viewBox="0 0 52 15.135"
            aria-label="one."
            className="flex-shrink-0 group-hover:opacity-70 transition-opacity duration-200"
          >
            <g transform="translate(-2447.703 -159.448)">
              <rect width="1.171" height="1.171" transform="translate(2478.861 173.347)" fill="#0f172a"/>
              <path d="M1403.766,358.476c-1.983.654-2.308,1.74-2.687,1.423s.128-1.29-.836-2.709c0,0-2.557,5.66-2.648,5.938,1.484-.236,1.449-.279,1.752-.12.482.252-.136,1.981.534,3.355l3.884-7.887Z" transform="translate(1085.685 -196.041)" fill="#2563eb"/>
              <path d="M1278.584,314.076a3.846,3.846,0,1,0-5.239,1.468,3.835,3.835,0,0,0,5.239-1.468" transform="translate(1207.505 -148.909)" fill="#2563eb"/>
              <path d="M1464.673,389.429a1.973,1.973,0,0,1,1.116-.591,6.228,6.228,0,0,0-7.773-4.047l-.166.054h0a6.21,6.21,0,0,0-3.939,7.719c.017.057.036.112.055.168a6.231,6.231,0,0,0,11.783.01,1.981,1.981,0,0,1-1.076-3.312" transform="translate(1031.602 -222.411)" fill="#2563eb"/>
              <path d="M1803.33,508.527a1.988,1.988,0,0,0-1.692-.517c.006.016.011.033.016.05a6.172,6.172,0,0,1-.057,3.853,1.983,1.983,0,0,0,1.733-3.386" transform="translate(695.754 -341.583)" fill="#2563eb"/>
              <rect width="7.545" height="0.716" transform="translate(2468.518 168.923)" fill="#0f172a"/>
              <path d="M977.74,463.475a3.771,3.771,0,0,1-3.771-3.762V457.19a3.771,3.771,0,0,1,7.542,0v1.348h-.7v-1.348a3.067,3.067,0,0,0-6.133,0v2.523a3.067,3.067,0,0,0,3.067,3.06h4.4v.7h-4.4Z" transform="translate(1494.558 -288.928)" fill="#0f172a"/>
              <path d="M682.428,463.414h-.7l0-6.223a3.064,3.064,0,0,0-3.068-3.061,3.068,3.068,0,0,0-3.068,3.061v6.224h-.7v-6.224a3.773,3.773,0,0,1,6.439-2.661,3.733,3.733,0,0,1,1.1,2.661l0,6.223Z" transform="translate(1783.223 -288.928)" fill="#0f172a"/>
              <path d="M383.593,605.582h-.7l0,1.019a3.064,3.064,0,0,1-3.068,3.061,3.068,3.068,0,0,1-3.068-3.061v-1.02h-.7v1.02a3.773,3.773,0,0,0,6.439,2.661,3.734,3.734,0,0,0,1.1-2.661l0-1.019Z" transform="translate(2071.651 -435.782)" fill="#0f172a"/>
              <path d="M383.593,459.251h-.7l0-2.06a3.064,3.064,0,0,0-3.068-3.061,3.068,3.068,0,0,0-3.068,3.061v2.061h-.7v-2.061a3.773,3.773,0,0,1,6.439-2.66,3.734,3.734,0,0,1,1.1,2.661l0,2.06Z" transform="translate(2071.651 -288.928)" fill="#0f172a"/>
            </g>
          </svg>
          <span className="hidden sm:block w-px h-3.5 bg-slate-300" />
          <span className="hidden sm:block eyebrow !text-slate-400 text-[10px] group-hover:opacity-70 transition-opacity duration-200">
            株式会社ワンエイティ
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {[
            { label: "課題", id: "pain" },
            { label: "コンセプト", id: "concept" },
            { label: "強み", id: "ai-native" },
            { label: "パートナー募集", id: "partnership" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200 font-normal"
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("cta")}
            className="hidden sm:flex items-center gap-1.5 bg-blue-600 text-white text-sm px-4 py-2 rounded-sm hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 font-normal tracking-wide"
          >
            <span>お問い合わせ</span>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 6h8M7 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            className="md:hidden p-1.5 text-slate-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-slate-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px bg-slate-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-slate-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-b border-slate-100 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {[
            { label: "課題", id: "pain" },
            { label: "コンセプト", id: "concept" },
            { label: "AIネイティブ開発", id: "ai-native" },
            { label: "パートナー募集", id: "partnership" },
            { label: "セキュリティ", id: "security" },
          ].map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-left text-sm text-slate-600 py-1">
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo("cta")} className="mt-2 w-full bg-blue-600 text-white text-sm py-2.5 rounded-sm hover:bg-blue-700 transition-colors">
            お問い合わせ
          </button>
        </div>
      </div>
    </header>
  );
}
