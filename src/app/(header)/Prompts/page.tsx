"use client"

import { useState } from "react"

export default function PromptGuide() {
  const [activeAccordion, setActiveAccordion] = useState("f1")

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans" dir="rtl">
   

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-purple-900/20 to-gray-900/10 py-20 border-b border-gray-700">
          <div className="container mx-auto px-4 text-center">
            <div className="flex gap-2 justify-center mb-4 flex-wrap">
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-600 bg-gray-800 text-gray-300 text-sm">
                <span className="text-yellow-400">⚡</span> پرامپت چیست
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-600 bg-gray-800 text-gray-300 text-sm">
                <span className="text-blue-400">🛠</span> آموزش پرامپت‌نویسی
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gray-600 bg-gray-800 text-gray-300 text-sm">
                <span className="text-purple-400">✏️</span> مهندسی پرامپت
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              پرامپت چیست؟ راهنمای جامع مهندسی پرامپت
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              پرامپت به زبان ساده، همان دستوری است که به مدل‌های هوش مصنوعی می‌دهیم تا خروجی دلخواه را دریافت کنیم. در این صفحه، با مفهوم پرامپت آشنا می‌شوید و خواهید فهمید که چگونه با مهندسی پرامپت می‌توانید نتایج دقیقی دریافت کنید.<strong className="text-gray-200">تولید محتوا</strong> تا <strong className="text-gray-200">طراحی لوگو</strong> و <strong className="text-gray-200">عکس پروفایل</strong>.
            </p>

            <div className="flex gap-4 justify-center">
              <a href="/prompts" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                مشاهده پرامپت‌های آماده
              </a>
              <a href="/download-prompts" className="border border-gray-600 hover:border-gray-500 text-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors">
                دانلود پرامپت
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              {/* TOC */}
              <aside className="hidden lg:block w-80 flex-shrink-0">
                <div className="sticky top-24 p-6 rounded-lg border border-gray-700 bg-gray-800">
                  <h6 className="flex items-center gap-2 mb-4 font-semibold">
                    <span className="text-purple-400">📋</span> سرفصل‌ها
                  </h6>
                  <nav className="space-y-2 text-sm">
                    {[
                      { id: "s1", title: "پرامپت به زبان خیلی ساده" },
                      { id: "s2", title: "پرامپت‌نویسی و اهمیت آن" },
                      { id: "s3", title: "مثال: ضعیف / حرفه‌ای" },
                      { id: "s4", title: "اصول طلایی (R T C F C E S)" },
                      { id: "s5", title: "الگوهای آماده (کپی/پیست)" },
                      { id: "s6", title: "اشتباهات رایج و راه‌حل" },
                      { id: "s7", title: "انواع پرامپت‌ها + نمونه" },
                      { id: "s8", title: "چک‌لیست قبل از ارسال" },
                      { id: "cta", title: "شروع سریع" },
                      { id: "faq", title: "پرسش‌های پرتکرار" },
                    ].map(item => (
                      <a key={item.id} href={`#${item.id}`} className="block p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                        • {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Content */}
              <div className="flex-1 max-w-4xl">
                {/* s1 */}
                <section id="s1" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">💡</span> پرامپت به زبان خیلی ساده
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    <strong className="text-gray-200">پرامپت</strong> متن یا دستوری است که به مدل هوش مصنوعی می‌دهی. هرچه دقیق‌تر بنویسی، خروجی بهتر می‌شود.
                    <br/>نمونهٔ روشن:
                    <br/>– «یک کپشن اینستاگرام برای فروش کفش ورزشی بنویس، لحن خودمانی، حداکثر ۲ خط.»
                    <br/>– «۴ ایده‌تیتر زیر ۶۰ کاراکتر برای مقالهٔ خواب سالم بده.»
                  </p>
                </section>

                {/* s2 */}
                <section id="s2" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">📐</span> پرامپت‌نویسی و اهمیت آن
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    پرامپت‌نویسی (Prompt Engineering) یعنی تبدیل خواستهٔ ذهنی به دستور قابل‌فهم برای AI.
                    نتیجه‌اش: آزمون‌وخطای کمتر، کنترل روی لحن/طول/فرمت و خروجی حرفه‌ای برای محتوا، طراحی، تصویر و حتی کدنویسی.
                  </p>
                </section>

                {/* s3 */}
                <section id="s3" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">📊</span> مثال: ضعیف / حرفه‌ای
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center">
                      <h6 className="text-red-400 font-bold mb-3">❌ پرامپت ضعیف</h6>
                      <code className="text-gray-300 bg-gray-900 p-2 rounded block">یک لوگو برای کافی‌شاپ طراحی کن.</code>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center">
                      <h6 className="text-green-400 font-bold mb-3">✅ پرامپت حرفه‌ای</h6>
                      <code className="text-gray-300 bg-gray-900 p-2 rounded block text-sm">
                        لوگوی مینیمال برای کافی‌شاپ «کافئین»؛ آیکون فنجان با بخار، فونت ساده و خوانا، پالت قهوه‌ای/کرمی،
                        نسخهٔ تک‌رنگ هم داشته باشد، خروجی: SVG + PNG.
                      </code>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center">
                      <h6 className="text-red-400 font-bold mb-3">❌ پرامپت ضعیف</h6>
                      <code className="text-gray-300 bg-gray-900 p-2 rounded block">یک مقاله درباره خواب بنویس.</code>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-6 bg-gray-800 text-center">
                      <h6 className="text-green-400 font-bold mb-3">✅ پرامپت حرفه‌ای</h6>
                      <code className="text-gray-300 bg-gray-900 p-2 rounded block text-sm">
                        مقاله ۶۰۰ کلمه‌ای درباره «فواید خواب عمیق»، ۳ تیتر H2، لحن صمیمی، نتیجه‌گیری کوتاه + ۳ نکتهٔ عملی.
                      </code>
                    </div>
                  </div>
                </section>

                {/* s4 */}
                <section id="s4" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">📝</span> اصول طلایی (R T C F C E S)
                  </h2>
                  <ul className="space-y-3 text-gray-400 leading-relaxed text-lg">
                    <li><strong className="text-gray-200">Role (نقش):</strong> مدل را در نقشی مشخص قرار بده. «مثل یک کپی‌رایتر باتجربه…»</li>
                    <li><strong className="text-gray-200">Task (وظیفه):</strong> دقیق بگو چه می‌خواهی. «۱۰ ایده تیتر…»</li>
                    <li><strong className="text-gray-200">Context (زمینه):</strong> محصول/مخاطب/هدف. «مخاطب: نوجوان… هدف: آگاهی…»</li>
                    <li><strong className="text-gray-200">Format (فرمت):</strong> لیست، جدول، JSON، Markdown…</li>
                    <li><strong className="text-gray-200">Constraints (قیدها):</strong> طول، لحن، ممنوعیات. «بدون ایموجی…»</li>
                    <li><strong className="text-gray-200">Examples (نمونه):</strong> مرجع سبک/کیفیت بده.</li>
                    <li><strong className="text-gray-200">Steps (مراحل):</strong> اول طرح کلی، بعد نسخهٔ نهایی.</li>
                  </ul>
                </section>

                {/* s5 */}
                <section id="s5" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">📦</span> الگوهای آماده (کپی/پیست)
                  </h2>

                  <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
                    <span className="text-purple-400">📝</span> الگوی تولید محتوا (وبلاگ/سوشال)
                  </h3>
                  <pre className="border border-gray-600 rounded-lg bg-gray-900 text-gray-300 p-4 overflow-x-auto whitespace-pre-wrap text-sm">
نقش: نویسنده حوزه {"{موضوع}"}. وظیفه: پست {"{وبلاگ/اینستاگرام}"} درباره {"{عنوان}"}.
زمینه: مخاطب {"{سطح}"}؛ هدف {"{آموزش/اطلاع‌رسانی/خرید}"}.
فرمت: H1 + مقدمه ۳–۴ خط + ۳ بخش H2 با بولت + جمع‌بندی + CTA.
قیدها: لحن صمیمی، فارسی معیار، ≤ ۶۰۰ کلمه.
                  </pre>

                  <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 mt-8">
                    <span className="text-purple-400">🎨</span> الگوی طراحی لوگو (تصویری)
                  </h3>
                  <pre className="border border-gray-600 rounded-lg bg-gray-900 text-gray-300 p-4 overflow-x-auto whitespace-pre-wrap text-sm">
Minimal logo for “{"{brand}"}”; symbol {"{icon}"},
flat style, clean sans-serif, palette {"{colors}"},
include monochrome; output: SVG + 1024px PNG.
                  </pre>

                  <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 mt-8">
                    <span className="text-purple-400">👤</span> الگوی عکس پروفایل (AI)
                  </h3>
                  <pre className="border border-gray-600 rounded-lg bg-gray-900 text-gray-300 p-4 overflow-x-auto whitespace-pre-wrap text-sm">
Professional LinkedIn portrait; neutral background,
soft studio lighting, 3/4 angle, natural skin; 1080×1080.
                  </pre>
                </section>

                {/* s6 */}
                <section id="s6" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">⚠️</span> اشتباهات رایج و راه‌حل
                  </h2>
                  <ul className="space-y-4 text-gray-400 leading-relaxed text-lg">
                    <li>کلی‌گویی → <em className="text-gray-300">راه‌حل:</em> جزئیات، عدد و قید زمانی/سبکی بده.</li>
                    <li>بی‌فرمتی → <em className="text-gray-300">راه‌حل:</em> قالب خروجی را مشخص کن (لیست/جدول/JSON).</li>
                    <li>بی‌توجهی به مخاطب → <em className="text-gray-300">راه‌حل:</em> سطح و نیاز مخاطب را بنویس.</li>
                    <li>یک‌بار پرسیدن → <em className="text-gray-300">راه‌حل:</em> از مدل بخواه طرح کلی بدهد یا نسخه‌های جایگزین ارائه کند.</li>
                  </ul>
                </section>

                {/* s7 */}
                <section id="s7" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">📚</span> انواع پرامپت‌ها + نمونه
                  </h2>
                  <ul className="space-y-3 text-gray-400 leading-relaxed text-lg">
                    <li>
                      <strong className="text-gray-200">پرامپت تولید محتوا:</strong> مقاله، کپشن، خبرنامه —
                      شروع سریع در{" "}
                      <a href="/prompts/content-creation" className="text-purple-400 hover:text-purple-300">
                        پرامپت‌های متنی
                      </a>
                    </li>
                    <li>
                      <strong className="text-gray-200">پرامپت طراحی و دیزاین:</strong> لوگو، پوستر، وب —
                      نمونه‌ها در{" "}
                      <a href="/prompts/design" className="text-purple-400 hover:text-purple-300">
                        بخش طراحی
                      </a>
                    </li>
                    <li>
                      <strong className="text-gray-200">پرامپت‌های تصویری:</strong> عکس پروفایل، آتلیه‌ای، انیمه —
                      ببینید{" "}
                      <a href="/prompts/profile-picture" className="text-purple-400 hover:text-purple-300">
                        پروفایل تصویری
                      </a>
                    </li>
                    <li>
                      <strong className="text-gray-200">پرامپت برنامه‌نویسی:</strong> تولید کد، ریفکتور، تست —
                      نمونه‌ها در{" "}
                      <a href="/prompts/coding" className="text-purple-400 hover:text-purple-300">
                        کدنویسی
                      </a>
                    </li>
                  </ul>
                </section>

                {/* s8 */}
                <section id="s8" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">✅</span> چک‌لیست قبل از ارسال
                  </h2>
                  <ul className="space-y-3 text-gray-400 leading-relaxed text-lg">
                    <li>هدف دقیق را نوشته‌ام.</li>
                    <li>نقش، فرمت و قیدها مشخص هستند.</li>
                    <li>مخاطب و لحن روشن است.</li>
                    <li>نمونه/سبک مرجع داده‌ام.</li>
                    <li>آمادهٔ بازخورد و نسخهٔ بهتر هستم.</li>
                  </ul>
                </section>

                {/* CTA */}
                <section id="cta" className="text-center p-8 rounded-lg bg-gray-800 my-12">
                  <h4 className="text-2xl font-bold mb-4">شروع سریع</h4>
                  <p className="text-gray-400 mb-6">
                    وقت کم داری؟ از <strong className="text-gray-200">پرامپت‌های آماده</strong> شروع کن.
                    اگر می‌خوای انتشار محتوا را خودکار کنی، سری به{" "}
                    <a href="/n8n" className="text-purple-400 hover:text-purple-300">آموزش n8n</a> بزن.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <a href="/prompts" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      مشاهده همه پرامپت‌ها
                    </a>
                    <a href="/download-prompts" className="border border-gray-600 hover:border-gray-500 text-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors">
                      دانلود پرامپت
                    </a>
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-12">
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 pb-3 border-b border-gray-700">
                    <span className="text-purple-400">❓</span> پرسش‌های پرتکرار
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        id: "f1",
                        q: "پرامپت دقیقاً چیست؟",
                        a: "متن/دستور دقیق برای مدل هوش مصنوعی. کیفیت خروجی مستقیم به وضوح پرامپت بستگی دارد."
                      },
                      {
                        id: "f2",
                        q: "از کدام الگو شروع کنم؟",
                        a: "از الگوهای تولید محتوا، طراحی لوگو یا عکس پروفایل همین صفحه شروع کن و با نیاز خودت شخصی‌سازی کن."
                      },
                      {
                        id: "f3",
                        q: "بعد از یادگیری اصول، قدم بعد چیست؟",
                        a: "پرامپت‌های آماده را تست کن و اگر تولیدت زیاده، انتشار را با n8n خودکار کن."
                      },
                    ].map(faq => (
                      <div key={faq.id} className="border border-gray-700 rounded-lg bg-gray-800 overflow-hidden">
                        <button
                          className="w-full text-right p-5 font-semibold text-gray-200 hover:text-white transition-colors flex items-center justify-between"
                          onClick={() => toggleAccordion(faq.id)}
                        >
                          {faq.q}
                          <span className={`transform transition-transform duration-300 ${activeAccordion === faq.id ? "rotate-180" : ""}`}>▼</span>
                        </button>
                        {activeAccordion === faq.id && (
                          <div className="p-5 pt-0 text-gray-400 leading-relaxed">
                            {faq.a}
                            {faq.id === "f3" && (
                              <span> <a href="/n8n" className="text-purple-400 hover:text-purple-300">آموزش n8n</a></span>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
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
