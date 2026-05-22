"use client";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
          {/* Left */}
          <div>
            <p className="font-serif text-white text-base font-semibold mb-2">
              ONE-EIGHTY
            </p>
            <p className="text-neutral-600 text-xs mb-6 leading-relaxed max-w-xs">
              AIネイティブ開発で、事業の競争優位を共に実装する
              <br />
              共創パートナー。
            </p>
            <div className="space-y-1 text-xs text-neutral-600">
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
                className="text-left text-xs text-neutral-600 hover:text-neutral-400 transition-colors duration-200 py-1"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[11px] text-neutral-700">
            © 2026 ONE-EIGHTY Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://o-eighty.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-neutral-700 hover:text-neutral-500 transition-colors duration-200"
            >
              コーポレートサイト
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
