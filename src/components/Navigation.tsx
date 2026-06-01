"use client";

import { useEffect, useState } from "react";

const CONTACT_URL =
  "https://digital-eyes.jp/form/one-eighty/contact1?title=%E5%85%B1%E5%90%8C%E9%96%8B%E7%99%BA%E3%83%91%E3%83%BC%E3%83%88%E3%83%8A%E3%83%BC%E5%8B%9F%E9%9B%86%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md border-b border-[#E8E5DF] shadow-[0_1px_16px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="group"
          aria-label="トップへ戻る"
        >
          <span className="text-[10px] font-semibold tracking-[0.14em] text-[#787674] group-hover:text-[#191919] transition-colors duration-200 uppercase select-none">
            AI Native Partner
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {[
            { label: "課題", id: "pain" },
            { label: "コンセプト", id: "concept" },
            { label: "開発体制", id: "ai-native" },
            { label: "パートナー", id: "partnership" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-[#787674] hover:text-[#191919] transition-colors duration-200 font-normal"
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-[#191919] text-white text-sm px-4 py-2 rounded-lg hover:bg-black active:scale-[0.98] transition-all duration-200 font-normal tracking-wide"
          >
            <span>お問い合わせ</span>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 6h8M7 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <button
            className="md:hidden p-1.5 text-[#787674]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-[#191919] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px bg-[#191919] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-[#191919] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-b border-[#E8E5DF] transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {[
            { label: "課題", id: "pain" },
            { label: "コンセプト", id: "concept" },
            { label: "開発体制", id: "ai-native" },
            { label: "パートナー", id: "partnership" },
          ].map(({ label, id }) => (
            <button key={id} onClick={() => scrollTo(id)} className="text-left text-sm text-[#787674] py-1 hover:text-[#191919] transition-colors">
              {label}
            </button>
          ))}
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full bg-[#191919] text-white text-sm py-2.5 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-1.5"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </header>
  );
}
