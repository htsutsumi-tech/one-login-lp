"use client";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      className="border-t border-slate-800"
      style={{
        background: "radial-gradient(ellipse 80% 30% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 65%), #0f172a",
      }}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
          {/* Left */}
          <div>
            {/* Logo — white + blue-300 variant for dark footer */}
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62" height="18"
                viewBox="0 0 52 15.135"
                aria-label="one."
              >
                <g transform="translate(-2447.703 -159.448)">
                  <rect width="1.171" height="1.171" transform="translate(2478.861 173.347)" fill="#ffffff"/>
                  <path d="M1403.766,358.476c-1.983.654-2.308,1.74-2.687,1.423s.128-1.29-.836-2.709c0,0-2.557,5.66-2.648,5.938,1.484-.236,1.449-.279,1.752-.12.482.252-.136,1.981.534,3.355l3.884-7.887Z" transform="translate(1085.685 -196.041)" fill="#ffffff"/>
                  <path d="M1278.584,314.076a3.846,3.846,0,1,0-5.239,1.468,3.835,3.835,0,0,0,5.239-1.468" transform="translate(1207.505 -148.909)" fill="#ffffff"/>
                  <path d="M1464.673,389.429a1.973,1.973,0,0,1,1.116-.591,6.228,6.228,0,0,0-7.773-4.047l-.166.054h0a6.21,6.21,0,0,0-3.939,7.719c.017.057.036.112.055.168a6.231,6.231,0,0,0,11.783.01,1.981,1.981,0,0,1-1.076-3.312" transform="translate(1031.602 -222.411)" fill="#ffffff"/>
                  <path d="M1803.33,508.527a1.988,1.988,0,0,0-1.692-.517c.006.016.011.033.016.05a6.172,6.172,0,0,1-.057,3.853,1.983,1.983,0,0,0,1.733-3.386" transform="translate(695.754 -341.583)" fill="#ffffff"/>
                  <rect width="7.545" height="0.716" transform="translate(2468.518 168.923)" fill="#ffffff"/>
                  <path d="M977.74,463.475a3.771,3.771,0,0,1-3.771-3.762V457.19a3.771,3.771,0,0,1,7.542,0v1.348h-.7v-1.348a3.067,3.067,0,0,0-6.133,0v2.523a3.067,3.067,0,0,0,3.067,3.06h4.4v.7h-4.4Z" transform="translate(1494.558 -288.928)" fill="#ffffff"/>
                  <path d="M682.428,463.414h-.7l0-6.223a3.064,3.064,0,0,0-3.068-3.061,3.068,3.068,0,0,0-3.068,3.061v6.224h-.7v-6.224a3.773,3.773,0,0,1,6.439-2.661,3.733,3.733,0,0,1,1.1,2.661l0,6.223Z" transform="translate(1783.223 -288.928)" fill="#ffffff"/>
                  <path d="M383.593,605.582h-.7l0,1.019a3.064,3.064,0,0,1-3.068,3.061,3.068,3.068,0,0,1-3.068-3.061v-1.02h-.7v1.02a3.773,3.773,0,0,0,6.439,2.661,3.734,3.734,0,0,0,1.1-2.661l0-1.019Z" transform="translate(2071.651 -435.782)" fill="#ffffff"/>
                  <path d="M383.593,459.251h-.7l0-2.06a3.064,3.064,0,0,0-3.068-3.061,3.068,3.068,0,0,0-3.068,3.061v2.061h-.7v-2.061a3.773,3.773,0,0,1,6.439-2.66,3.734,3.734,0,0,1,1.1,2.661l0,2.06Z" transform="translate(2071.651 -288.928)" fill="#ffffff"/>
                </g>
              </svg>
            </div>
            <p className="text-slate-500 text-xs mb-6 leading-relaxed max-w-xs">
              AIネイティブ開発で、事業の競争優位を共に実装する
              <br />
              共創パートナー。
            </p>
            <div className="space-y-1 text-xs text-slate-500">
              <p>株式会社ワンエイティ</p>
              <p>
                東京都港区南山3-3リビエラ南青山ビル A WORKING PARK EN 202
              </p>
              <p>代表取締役 ： 三浦 拓郎</p>
            </div>
          </div>

          {/* Right: Nav */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-2">
            {[
              { label: "課題", id: "pain" },
              { label: "コンセプト", id: "concept" },
              { label: "AIネイティブ開発", id: "ai-native" },
              { label: "構築可能領域", id: "build-scope" },
              { label: "パートナー募集", id: "partnership" },
              { label: "セキュリティ", id: "security" },
              { label: "お問い合わせ", id: "cta" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200 py-1"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[11px] text-slate-600">
            © 2026 ONE-EIGHTY Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://o-eighty.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-slate-600 hover:text-slate-400 transition-colors duration-200"
            >
              コーポレートサイト
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
