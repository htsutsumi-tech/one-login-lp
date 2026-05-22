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
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
          aria-label="トップへ戻る"
        >
          <span className="font-serif text-[1.05rem] font-semibold tracking-tight text-neutral-950 group-hover:opacity-70 transition-opacity">
            ONE-EIGHTY
          </span>
          <span className="hidden sm:block text-neutral-300 text-xs font-light">
            /
          </span>
          <span className="hidden sm:block eyebrow text-neutral-400 group-hover:opacity-70 transition-opacity">
            一緒に創る
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "課題", id: "pain" },
            { label: "コンセプト", id: "concept" },
            { label: "強み", id: "ai-native" },
            { label: "パートナー募集", id: "partnership" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200 font-normal"
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo("cta")}
            className="hidden sm:flex items-center gap-1.5 bg-neutral-950 text-white text-sm px-4 py-2 rounded-sm hover:bg-neutral-800 transition-colors duration-200 font-normal tracking-wide"
          >
            <span>お問い合わせ</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M2 6h8M7 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 text-neutral-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-neutral-800 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-px bg-neutral-800 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-neutral-800 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-b border-neutral-100 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {[
            { label: "課題", id: "pain" },
            { label: "コンセプト", id: "concept" },
            { label: "AIネイティブ開発", id: "ai-native" },
            { label: "パートナー募集", id: "partnership" },
            { label: "セキュリティ", id: "security" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-sm text-neutral-600 py-1"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta")}
            className="mt-2 w-full bg-neutral-950 text-white text-sm py-2.5 rounded-sm"
          >
            お問い合わせ
          </button>
        </div>
      </div>
    </header>
  );
}
