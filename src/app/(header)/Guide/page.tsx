"use client"

import { useState } from "react"

export default function PromptGuide() {
  const [activeAccordion, setActiveAccordion] = useState("f1")

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans" dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-800/85 backdrop-blur-md border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-bold text-white">
              پرامپت بازار
            </a>
            <div className="hidden md:flex space-x-reverse space-x-6">
              <a href="/prompts" className="text-gray-300 hover:text-purple-400 transition-colors">
                پرامپت‌های آماده
              </a>
              <a href="/n8n" className="text-gray-300 hover:text-purple-400 transition-colors">
                آموزش n8n
              </a>
              <a href="/blog" className="text-gray-300 hover:text-purple-400 transition-colors">
                وبلاگ
              </a>
              <a href="/download-prompts" className="text-gray-300 hover:text-purple-400 transition-colors">
                دانلود پرامپت
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900/20 to-gray-900/10 py-20 border-b border-gray-700">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              پرامپت چیست؟ راهنمای جامع مهندسی پرامپت
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              با این راهنمای ساده یاد خواهید گرفت که «پرامپت» چیست، چرا{" "}
              <strong className="text-gray-200">پرامپت‌نویسی</strong> مهارت کلیدی است و چطور با استفاده از الگوهای آماده، سریع به
              خروجی حرفه‌ای برسید—برای <strong className="text-gray-200">تولید محتوا</strong>،{" "}
              <strong className="text-gray-200">طراحی لوگو</strong> و{" "}
              <strong className="text-gray-200">عکس پروفایل</strong>!
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href="/prompts"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                مشاهده پرامپت‌های آماده
              </a>
              <a
                href="/download-prompts"
                className="border border-gray-600 hover:border-gray-500 text-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                دانلود پرامپت
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              {/* Table of Contents */}
              <aside className="hidden lg:block w-80 flex-shrink-0">
                <div className="sticky top-24 p-6 rounded-lg border border-gray-700 bg-gray-800">
                  <h6 className="flex items-center gap-2 mb-4 font-semibold">
                    <span className="text-purple-400">📋</span>
                    سرفصل‌ها
                  </h6>
                  <nav className="space-y-2 text-sm">
                    {[{
                      id: "s1", title: "پرامپت به زبان خیلی ساده"
                    }, {
                      id: "s2", title: "پرامپت‌نویسی و اهمیت آن"
                    }, {
                      id: "s3", title: "مثال: ضعیف / حرفه‌ای"
                    }, {
                      id: "s4", title: "اصول طلایی (R T C F C E S)"
                    }, {
                      id: "s5", title: "الگوهای آماده (کپی/پیست)"
                    }, {
                      id: "s6", title: "اشتباهات رایج و راه‌حل"
                    }, {
                      id: "s7", title: "انواع پرامپت‌ها + نمونه"
                    }, {
                      id: "s8", title: "چک‌لیست قبل از ارسال"
                    }, {
                      id: "cta", title: "شروع سریع"
                    }, {
                      id: "faq", title: "پرسش‌های پرتکرار"
                    }].map(item => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        • {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Content */}
              <div className="flex-1 max-w-4xl">
                <section id="s1" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">💡</span>
                    پرامپت به زبان خیلی ساده
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    <strong className="text-gray-200">پرامپت</strong> همان دستور یا سوالی است که شما به هوش مصنوعی می‌دهید.
                    تصور کنید که دارید از یک دستیار هوش مصنوعی می‌خواهید کاری برایتان انجام دهد. شما باید دستور دقیقی بهش بدید
                    تا بتونه کاری که شما می‌خواهید رو به بهترین نحو انجام بده. مثلاً، به جای اینکه فقط بگید «یک مقاله بنویس»،
                    می‌تونید بگید «یک مقاله ۵۰۰ کلمه‌ای درباره مزایای یادگیری زبان انگلیسی بنویس، با تمرکز بر نکات مهم
                    برای مبتدیان». این‌طوری خروجی بهتری می‌گیرید.
                  </p>
                </section>

                <section id="s2" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">📐</span>
                    پرامپت‌نویسی چیست و چرا مهم است؟
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg mb-6">
                    <strong className="text-gray-200">پرامپت‌نویسی</strong> یعنی چطور دستورات دقیق و شفاف برای هوش مصنوعی بنویسید
                    تا بتونه بهترین نتیجه رو تولید کنه. این مهارت به شما کمک می‌کنه که با دقت بیشتری از هوش مصنوعی استفاده کنید
                    و کارهایتان را سریع‌تر و با کیفیت بالاتر انجام دهید. مثلاً، به جای اینکه از مدل بخواهید «یک متن بنویس»، می‌تونید
                    بگید: «یک متن تبلیغاتی کوتاه و جذاب بنویس، با لحن دوستانه و ۵ خط». این کمک می‌کنه تا خروجی دقیقی دریافت کنید.
                  </p>
                </section>

                <section id="s3" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">✅</span>
                    مثال: پرامپت ضعیف / حرفه‌ای
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center">
                      <h6 className="text-red-400 font-bold mb-3">❌ پرامپت ضعیف</h6>
                      <code className="text-gray-300 bg-gray-900 p-2 rounded block">یک لوگو برای کافی‌شاپ</code>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center">
                      <h6 className="text-green-400 font-bold mb-3">✅ پرامپت حرفه‌ای</h6>
                      <code className="text-gray-300 bg-gray-900 p-2 rounded block text-sm">
                        لوگوی مینیمال برای کافی‌شاپ «کافئین»؛ آیکون فنجان با بخار، فونت ساده و خوانا، پالت قهوه‌ای/کرمی،
                        نسخهٔ تک‌رنگ هم داشته باشد، خروجی: SVG + PNG.
                      </code>
                    </div>
                  </div>
                </section>

                {/* Continue with other sections similarly... */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <small className="text-gray-500">© تمامی حقوق برای پرامپت بازار محفوظ است.</small>
        </div>
      </footer>
    </div>
  )
}
