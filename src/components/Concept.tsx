"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";

const layers = [
  {
    label: "業務管理",
    items: ["タスク管理", "承認フロー", "スケジュール"],
  },
  {
    label: "顧客接点",
    items: ["CRM", "問い合わせ管理", "外部連携"],
  },
  {
    label: "データ基盤",
    items: ["ダッシュボード", "分析レポート", "API"],
  },
];

export default function Concept() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  // アーキテクチャ図専用: 図自体が画面に入ったときにアニメーション開始
  const { ref: archRef, isVisible: isArchVisible } = useScrollAnimation(0.15);
  const [activeNav, setActiveNav] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // PC限定: サイドバーのアクティブ項目を自動循環 (図が見えてから開始)
  useEffect(() => {
    if (!isArchVisible) return;
    const isPC = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isPC) return;
    intervalRef.current = setInterval(() => {
      setActiveNav((prev) => (prev + 1) % 4);
    }, 1800);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isArchVisible]);

  return (
    <section id="concept" className="section-atm-white py-36 lg:py-52 relative overflow-hidden">

      <div
        ref={ref}
        className="relative max-w-content mx-auto px-6 lg:px-8"
      >
        {/* Section label */}
        <p className={`section-label mb-10 fade-up ${isVisible ? "is-visible" : ""}`}>
          Concept
        </p>

        {/* Dominant H2 */}
        <h2
          className={`display-heading text-[#191919] text-[3rem] sm:text-[5rem] lg:text-[7rem] leading-[0.95] tracking-[-0.04em] mb-12 lg:mb-20 fade-up ${isVisible ? "is-visible" : ""} delay-100`}
        >
          One Login,
          <br />
          All Contents.
        </h2>

        {/* Description row */}
        <div
          className={`grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24 mb-24 fade-up ${isVisible ? "is-visible" : ""} delay-200`}
        >
          <div>
            <p className="text-[#191919] text-[0.95rem] font-medium leading-loose mb-4">
              一つのIDで、事業に必要なすべてを。
            </p>
            <p className="text-[#787674] text-sm leading-loose">
              業務管理、顧客管理、データ可視化、外部システム連携——
              <br />
              点在するツールを、一つのログイン基盤へ統合します。
            </p>
          </div>
          <div className="space-y-3 text-sm text-[#787674] leading-loose">
            <p>
              汎用SaaSの限界は「全員向けに設計されている」点にあります。
              業務フローに合わせてツールを増やすほど、現場はその分断に翻弄されます。
            </p>
            <p>
              私たちが提唱するのは、逆の発想です。
              <span className="text-[#191919] font-semibold">
                御社の業務に合わせて、機能を統合する。
              </span>
            </p>
            <p>
              &ldquo;全部入りSaaS&rdquo;ではなく、御社の事業に最適化された
              統合プロダクトを、AIネイティブ開発によって高速実装する。
              使うほどに業務がシンプルになる体験を設計します。
            </p>
          </div>
        </div>

        {/* Architecture — UI mockup with PC animations */}
        <div
          ref={archRef}
          className={`fade-up ${isArchVisible ? "is-visible" : ""}`}
        >
          <div className="rounded-2xl bg-[#F7F5EF] px-8 lg:px-14 py-14 lg:py-16">

            {/* ── Before: scattered login screens ── */}
            <div className="mb-14">
              <p
                className="text-sm font-medium tracking-[0.07em] text-[#787674] uppercase mb-8 text-center"
                style={{
                  opacity: isArchVisible ? 1 : 0,
                  transition: "opacity 0.5s ease 0.1s",
                }}
              >
                現在 — ツールごとに別のログイン
              </p>

              {/* Cards: staggered entrance */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {[
                  { name: "CRM",            dot: "#5ABF7A", offset: false },
                  { name: "プロジェクト管理", dot: "#7AAAC8", offset: true  },
                  { name: "会計SaaS",        dot: "#5ABF7A", offset: false },
                  { name: "勤怠管理",        dot: "#E0B43E", offset: true  },
                ].map(({ name, dot, offset }, idx) => (
                  <div
                    key={name}
                    className="bg-white rounded-xl border border-[#D4D0C9] overflow-hidden shadow-sm"
                    style={{
                      transform: isArchVisible
                        ? `translateY(${offset ? "12px" : "0px"})`
                        : `translateY(${offset ? "28px" : "16px"})`,
                      opacity: isArchVisible ? 1 : 0,
                      transition: `opacity 0.55s ease ${idx * 110}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${idx * 110}ms`,
                    }}
                  >
                    {/* Window chrome */}
                    <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#F0EDE7] border-b border-[#D4D0C9]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E06B6B]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E0B43E]" />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: dot }} />
                    </div>
                    {/* Login form mockup */}
                    <div className="p-4">
                      <p className="text-xs font-medium text-[#787674] tracking-[0.08em] mb-3 uppercase">Login</p>
                      <div className="h-6 rounded-lg border border-[#C8C5BF] bg-[#FAFAF8] mb-2" />
                      <div className="h-6 rounded-lg border border-[#C8C5BF] bg-[#FAFAF8] mb-3" />
                      <div className="h-7 rounded-lg bg-[#C8C5BF]" />
                      <p className="text-sm font-semibold text-[#5C5A57] mt-3 truncate">{name}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="text-sm text-[#787674] text-center mt-8"
                style={{
                  opacity: isArchVisible ? 1 : 0,
                  transition: "opacity 0.5s ease 0.55s",
                }}
              >
                4つのツール、4回のログイン。データはそれぞれの中に閉じている。
              </p>
            </div>

            {/* ── Transition: line draws down ── */}
            <div className="flex flex-col items-center gap-0 mb-14">
              {/* Line: scaleY 0→1 from top */}
              <div
                className="w-px h-12"
                style={{
                  background: "linear-gradient(to bottom, #A09D99, #4A7BA8)",
                  transform: isArchVisible ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top",
                  transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.6s",
                }}
              />
              {/* Label: fades in after line */}
              <span
                className="text-sm font-semibold tracking-[0.1em] text-[#4A7BA8] uppercase py-2.5"
                style={{
                  opacity: isArchVisible ? 1 : 0,
                  transition: "opacity 0.4s ease 1.1s",
                }}
              >
                One Login
              </span>
              {/* Chevron: drops in after label */}
              <svg
                width="12" height="8" viewBox="0 0 12 8" fill="none"
                aria-hidden="true"
                style={{
                  opacity: isArchVisible ? 1 : 0,
                  transform: isArchVisible ? "translateY(0)" : "translateY(-4px)",
                  transition: "opacity 0.35s ease 1.4s, transform 0.35s ease 1.4s",
                }}
              >
                <path d="M1 1l5 6 5-6" stroke="#7AAAC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* ── After: unified workspace ── */}
            <div
              style={{
                opacity: isArchVisible ? 1 : 0,
                transform: isArchVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 1.5s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 1.5s",
              }}
            >
              <p className="text-sm font-semibold tracking-[0.07em] text-[#4A7BA8] uppercase mb-8 text-center">
                One Login, All Contents
              </p>

              {/* Unified app window */}
              <div className="max-w-xl mx-auto bg-white rounded-2xl border border-[#D4D0C9] overflow-hidden shadow-md">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#F0EDE7] border-b border-[#D4D0C9]">
                  <span className="w-3 h-3 rounded-full bg-[#E06B6B]" />
                  <span className="w-3 h-3 rounded-full bg-[#E0B43E]" />
                  <span className="w-3 h-3 rounded-full bg-[#5ABF7A]" />
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 bg-[#EEF4F9] px-4 py-1.5 rounded-full border border-[#BDD3E7]">
                      <span className="w-2 h-2 rounded-full bg-[#5ABF7A]" />
                      <span className="text-xs font-medium text-[#4A7BA8]">authenticated · One Login</span>
                    </div>
                  </div>
                </div>

                {/* App layout: sidebar + main */}
                <div className="flex h-52">
                  {/* Sidebar: active item cycles (PC) */}
                  <div className="w-40 bg-[#F7F5EF] border-r border-[#D4D0C9] p-4 flex-shrink-0">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#D4D0C9]">
                      <div className="w-5 h-5 rounded-lg bg-[#4A7BA8]/30" />
                      <span className="text-xs font-semibold text-[#5C5A57]">ONE-EIGHTY</span>
                    </div>
                    {["業務管理", "顧客接点", "データ分析", "システム連携"].map((item, i) => (
                      <div
                        key={item}
                        className={`text-xs px-2.5 py-2 rounded-lg mb-1 font-medium transition-all duration-500 ${
                          i === activeNav
                            ? "bg-[#EEF4F9] text-[#4A7BA8]"
                            : "text-[#787674]"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Main content area: skeleton bars pulse */}
                  <div className="flex-1 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-3 w-28 rounded-full bg-[#E8E5DF]" />
                      <div className="h-7 w-16 rounded-lg bg-[#EEF4F9] border border-[#BDD3E7]" />
                    </div>
                    <div className="space-y-3">
                      {[1, 0.72, 0.88, 0.58].map((w, i) => (
                        <div key={i} className="flex items-center gap-3 arch-bar">
                          <div className="w-4 h-4 rounded-md bg-[#EEF4F9] border border-[#7AAAC8] flex-shrink-0" />
                          <div
                            className="h-3 rounded-full bg-[#E8E5DF]"
                            style={{ width: `${w * 100}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#787674] mt-6 text-center tracking-wide">
                単一ログイン · 統合データ · 拡張自在
              </p>
            </div>

          </div>
        </div>

        {/* Tagline */}
        <div
          className={`mt-16 text-center fade-up ${isVisible ? "is-visible" : ""} delay-500`}
        >
          <p className="display-heading text-[#787674] text-xl sm:text-2xl font-normal">
            戦術ではなく、構造を導入する。
          </p>
        </div>
      </div>
    </section>
  );
}
