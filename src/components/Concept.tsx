"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

        {/* Architecture — UI mockup style, Notion-inspired */}
        <div className={`fade-up ${isVisible ? "is-visible" : ""} delay-400`}>
          <div className="rounded-2xl bg-[#F7F5EF] px-8 lg:px-14 py-14 lg:py-16">

            {/* ── Before: scattered login screens ── */}
            <div className="mb-12">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#C8C5BF] uppercase mb-8 text-center">
                現在 — ツールごとに別のログイン
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                {[
                  { name: "CRM",           accent: "#F5C0B0", offset: false },
                  { name: "プロジェクト管理", accent: "#B0C8F5", offset: true  },
                  { name: "会計SaaS",       accent: "#B0E0C8", offset: false },
                  { name: "勤怠管理",       accent: "#F5DCB0", offset: true  },
                ].map(({ name, accent, offset }) => (
                  <div
                    key={name}
                    className="bg-white rounded-xl border border-[#E8E5DF] overflow-hidden shadow-sm"
                    style={{ transform: `translateY(${offset ? "10px" : "0px"})` }}
                  >
                    {/* Window chrome */}
                    <div className="flex items-center gap-1 px-3 py-2 bg-[#FAFAF8] border-b border-[#F0EDE7]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5C0B0]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5DCB0]" />
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                    </div>
                    {/* Login form mockup */}
                    <div className="p-3">
                      <p className="font-mono text-[7px] text-[#C8C5BF] tracking-widest mb-2.5 uppercase">Login</p>
                      <div className="h-3 rounded-md border border-[#EDE9E3] bg-[#FAFAF8] mb-1.5" />
                      <div className="h-3 rounded-md border border-[#EDE9E3] bg-[#FAFAF8] mb-2.5" />
                      <div className="h-4 rounded-md bg-[#E8E5DF]" />
                      <p className="text-[8px] font-semibold text-[#A09D99] mt-2.5 truncate">{name}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#C8C5BF] text-center mt-6">
                4つのツール、4回のログイン。データはそれぞれの中に閉じている。
              </p>
            </div>

            {/* ── Transition ── */}
            <div className="flex flex-col items-center gap-0 mb-12">
              <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, #D4D0C9, #7AAAC8)" }} />
              <span className="font-mono text-[10px] tracking-[0.24em] text-[#4A7BA8] uppercase py-2">One Login</span>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
                <path d="M1 1l3.5 4L8 1" stroke="#BDD3E7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* ── After: unified workspace ── */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#4A7BA8] uppercase mb-8 text-center">
                One Login, All Contents
              </p>

              {/* Unified app window */}
              <div className="max-w-xl mx-auto bg-white rounded-2xl border border-[#E8E5DF] overflow-hidden shadow-md">
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-[#FAFAF8] border-b border-[#F0EDE7]">
                  <span className="w-2 h-2 rounded-full bg-[#F5C0B0]" />
                  <span className="w-2 h-2 rounded-full bg-[#F5DCB0]" />
                  <span className="w-2 h-2 rounded-full bg-[#B0E0C0]" />
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-1.5 bg-[#EEF4F9] px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7AAAC8]" />
                      <span className="font-mono text-[9px] text-[#4A7BA8]">authenticated · One Login</span>
                    </div>
                  </div>
                </div>

                {/* App layout: sidebar + main */}
                <div className="flex h-40">
                  {/* Sidebar */}
                  <div className="w-32 bg-[#FAFAF8] border-r border-[#F0EDE7] p-3 flex-shrink-0">
                    <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-[#F0EDE7]">
                      <div className="w-3.5 h-3.5 rounded-md bg-[#4A7BA8]/20" />
                      <span className="text-[8px] font-medium text-[#787674]">ONE-EIGHTY</span>
                    </div>
                    {["業務管理", "顧客接点", "データ分析", "システム連携"].map((item, i) => (
                      <div
                        key={item}
                        className={`text-[8px] px-2 py-1.5 rounded-lg mb-0.5 font-medium ${
                          i === 0
                            ? "bg-[#EEF4F9] text-[#4A7BA8]"
                            : "text-[#C8C5BF]"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Main content area */}
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-2 w-20 rounded-full bg-[#F0EDE7]" />
                      <div className="h-5 w-12 rounded-lg bg-[#EEF4F9] border border-[#BDD3E7]" />
                    </div>
                    <div className="space-y-2.5">
                      {[1, 0.7, 0.85, 0.55].map((w, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <div className="w-3 h-3 rounded-md bg-[#EEF4F9] border border-[#BDD3E7] flex-shrink-0" />
                          <div
                            className="h-2 rounded-full bg-[#F0EDE7]"
                            style={{ width: `${w * 100}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-[#C8C5BF] mt-6 text-center tracking-wide">
                単一ログイン · 統合データ · 拡張自在
              </p>
            </div>

          </div>
        </div>

        {/* Tagline */}
        <div
          className={`mt-16 text-center fade-up ${isVisible ? "is-visible" : ""} delay-500`}
        >
          <p className="display-heading text-[#A09D99] text-xl sm:text-2xl font-normal">
            戦術ではなく、構造を導入する。
          </p>
        </div>
      </div>
    </section>
  );
}
