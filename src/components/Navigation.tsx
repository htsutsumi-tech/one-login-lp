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
          <span className="font-serif text-[1.05rem] font-semibold tracking-tight text-slate-900 group-hover:opacity-70 transition-opacity">
            ONE-EIGHTY
          </span>
          <span className="hidden sm:block w-px h-3.5 bg-slate-300" />
          <span className="hidden sm:block eyebrow !text-slate-400 text-[10px] group-hover:opacity-70 transition-opacity">
            共創パートナー
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
