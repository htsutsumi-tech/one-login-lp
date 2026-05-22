"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formState, setFormState] = useState({
    company: "",
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォームの送信処理はここに実装
    setSubmitted(true);
  };

  return (
    <section id="cta" className="bg-neutral-950 py-32 lg:py-44 text-white">
      <div
        ref={ref}
        className="max-w-content mx-auto px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Copy */}
          <div>
            <p
              className={`section-label text-neutral-500 mb-5 fade-up ${isVisible ? "is-visible" : ""}`}
            >
              Contact
            </p>
            <h2
              className={`display-heading text-white text-[2rem] sm:text-[3rem] lg:text-[3.5rem] leading-tight mb-8 fade-up ${isVisible ? "is-visible" : ""} delay-100`}
            >
              &ldquo;構造から変える&rdquo;
              <br />
              開発を、共に。
            </h2>

            <div
              className={`space-y-5 mb-10 fade-up ${isVisible ? "is-visible" : ""} delay-200`}
            >
              <p className="text-neutral-400 text-sm leading-relaxed">
                共同開発パートナーへのご興味・ご相談、
                お気軽にお問い合わせください。
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                まずは30分のオンライン相談から。
                事業の課題と現状をお聞きした上で、
                どのような形でお役に立てるかをご提案します。
              </p>
            </div>

            <div
              className={`space-y-3 fade-up ${isVisible ? "is-visible" : ""} delay-300`}
            >
              {[
                "現在のプロダクト課題のヒアリング",
                "One Login, All Contentsの要件整理",
                "開発体制・費用感のご説明",
                "共同開発パートナーシップのご提案",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-[10px] text-neutral-500">
                      {i + 1}
                    </span>
                  </span>
                  <span className="text-sm text-neutral-400">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className={`fade-up ${isVisible ? "is-visible" : ""} delay-200`}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center mb-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M3 10l5 5 9-9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-white font-medium mb-2">
                  お問い合わせを受け付けました
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  内容を確認の上、担当者よりご連絡いたします。
                  <br />
                  通常1〜2営業日以内にご返信します。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  {
                    label: "会社名",
                    name: "company",
                    type: "text",
                    placeholder: "株式会社〇〇",
                    required: true,
                  },
                  {
                    label: "お名前",
                    name: "name",
                    type: "text",
                    placeholder: "山田 太郎",
                    required: true,
                  },
                  {
                    label: "メールアドレス",
                    name: "email",
                    type: "email",
                    placeholder: "hello@example.com",
                    required: true,
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs text-neutral-400 mb-1.5">
                      {field.label}
                      {field.required && (
                        <span className="text-neutral-600 ml-1">*</span>
                      )}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm px-4 py-3 rounded-sm placeholder-neutral-700 focus:outline-none focus:border-neutral-600 transition-colors duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs text-neutral-400 mb-1.5">
                    お問い合わせ内容
                  </label>
                  <textarea
                    name="message"
                    placeholder="現在の課題や、共同開発パートナーについてのご質問などをお聞かせください。"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-neutral-900 border border-neutral-800 text-white text-sm px-4 py-3 rounded-sm placeholder-neutral-700 focus:outline-none focus:border-neutral-600 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-neutral-950 text-sm font-medium py-3.5 rounded-sm hover:bg-neutral-100 transition-colors duration-200 mt-2"
                >
                  送信する
                </button>

                <p className="text-[11px] text-neutral-700 text-center leading-relaxed">
                  送信いただいた情報は、お問い合わせへの対応のみに使用します。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
