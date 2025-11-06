"use client"
import { useState } from "react"

export default function N8nTutorialPageForIran() {
  const [activeAccordion, setActiveAccordion] = useState("f1")

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id)
  }

  const tocItems = [
    { id: "what-is-n8n", title: "n8n چیست؟ (به زبان ساده)" },
    { id: "why-n8n-iran", title: "چرا n8n برای ما ایرانی‌ها عالی است؟" },
    { id: "core-concepts", title: "مفاهیم اصلی: مثل یک کمپین تبلیغاتی!" },
    { id: "practical-example", title: 'مثال اصلی: ربات "موجود شد خبرم کن"' },
    { id: "more-examples", title: "کاربردهای n8n در دنیای واقعی" },
    { id: "cta-section", title: "دانلود ورک‌فلوهای آماده" },
    { id: "faq", title: "پرسش‌های متداول" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans" dir="rtl">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900/20 to-gray-900/10 py-20 border-b border-gray-700">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              آموزش اتوماسیون با n8n: دستیار دیجیتال خود را بسازید
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              یاد بگیرید چگونه کارهای تکراری و خسته‌کننده را به ربات‌ها بسپارید. با n8n می‌توانید بدون کدنویسی، اپلیکیشن‌های
              مختلف را به هم وصل کرده و زندگی خود را آسان‌تر کنید.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#practical-example"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                شروع یادگیری با یک مثال جذاب
              </a>
            </div>
          </div>
        </section>

        {/* Main Content with TOC */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Table of Contents (جدول محتوا) */}
              <aside className="lg:w-80 flex-shrink-0 lg:sticky top-24 self-start">
                <div className="p-6 rounded-lg border border-gray-700 bg-gray-800">
                  <h6 className="flex items-center gap-2 mb-4 font-semibold text-lg">
                    <span className="text-purple-400">📋</span> فهرست مطالب
                  </h6>
                  <nav className="space-y-2">
                    {tocItems.map((item) => (
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

              {/* Content Sections */}
              <div className="flex-1 max-w-4xl">
                <section id="what-is-n8n" className="mb-16 scroll-mt-20">
                  <h2 className="text-3xl font-bold mb-6">n8n چیست؟ (به زبان ساده)</h2>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    **n8n** (اِن اِیت اِن) یک ابزار رایگان و متن‌باز برای ساخت فرآیندهای خودکار است. فکر کنید یک جعبه لگوی
                    دیجیتال دارید که هر قطعه آن یک اپلیکیشن (مثل تلگرام، گوگل شیت یا اینستاگرام) است. n8n به شما اجازه
                    می‌دهد این لگوها را به هر ترتیبی که دوست دارید به هم وصل کنید تا یک ربات کارراه‌انداز برای خودتان
                    بسازید.
                  </p>
                </section>

                <section id="why-n8n-iran" className="mb-16 scroll-mt-20">
                  <h2 className="text-3xl font-bold mb-6">چرا n8n برای ما ایرانی‌ها عالی است؟</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                      <h3 className="font-bold text-xl mb-2 text-purple-400">رایگان و بدون تحریم</h3>
                      <p className="text-gray-400">
                        چون متن‌باز است، می‌توانید آن را روی سرور شخصی خود (Self-host) نصب کنید و نگران تحریم یا پرداخت‌های
                        دلاری نباشید. کنترل کامل دست شماست.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                      <h3 className="font-bold text-xl mb-2 text-purple-400">انعطاف‌پذیری بالا</h3>
                      <p className="text-gray-400">
                        با نود `HTTP Request` می‌توانید به راحتی به API سرویس‌های ایرانی متصل شوید و فرآیندهای کاملاً
                        بومی‌سازی شده بسازید.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="core-concepts" className="mb-16 scroll-mt-20">
                  <h2 className="text-3xl font-bold mb-6">مفاهیم اصلی: مثل یک کمپین تبلیغاتی!</h2>
                  <p className="text-gray-400 leading-relaxed text-lg mb-6">
                    برای درک n8n، فرآیند راه‌اندازی یک کمپین تبلیغاتی در اینستاگرام را در نظر بگیرید:
                  </p>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-4">
                      <strong className="text-purple-400 w-32 flex-shrink-0">ورک‌فلو (Workflow):</strong> این همان
                      **استراتژی کامل کمپین** شماست. کل نقشه راه از ایده تا گزارش نهایی.
                    </li>
                    <li className="flex items-start gap-4">
                      <strong className="text-purple-400 w-32 flex-shrink-0">نود (Node):</strong> هر **وظیفه (Task)**
                      مشخص در کمپین. مثلاً "طراحی بنر تبلیغاتی" یک نود است، "نوشتن کپشن" یک نود دیگر و "انتشار پست" یک
                      نود سوم است.
                    </li>
                    <li className="flex items-start gap-4">
                      <strong className="text-purple-400 w-32 flex-shrink-0">تریگر (Trigger):</strong> **زمان شروع
                      کمپین**! مثلاً "اول ماه" یا "به محض آماده شدن محصول جدید". این همان دستوری است که ورک‌فلو را به
                      جریان می‌اندازد.
                    </li>
                  </ul>
                </section>

                <section id="practical-example" className="mb-16 scroll-mt-20">
                  <h2 className="text-3xl font-bold mb-6">مثال اصلی: ساخت ربات "موجود شد خبرم کن" دیجی‌کالا</h2>
                  <p className="text-gray-400 leading-relaxed text-lg mb-6">
                    در این مثال پرطرفدار، یک ورک‌فلو می‌سازیم که صفحه یک محصول ناموجود در دیجی‌کالا را هر ساعت چک می‌کند و
                    به محض موجود شدن، یک پیام به تلگرام ما ارسال می‌کند.
                  </p>
                  <div className="space-y-8 border-l-2 border-purple-500/30 pl-8">
                    <div>
                      <h4 className="font-bold text-xl mb-2">قدم ۱: تریگر زمان‌بندی (Cron)</h4>
                      <p className="text-gray-400">
                        ورک‌فلو را طوری تنظیم می‌کنیم که هر ساعت یک بار به طور خودکار اجرا شود.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">قدم ۲: دریافت صفحه محصول (HTTP Request)</h4>
                      <p className="text-gray-400">
                        آدرس صفحه محصول مورد نظر در دیجی‌کالا را به این نود می‌دهیم تا کد HTML آن را دریافت کند.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">قدم ۳: بررسی وضعیت موجودی (HTML Extract)</h4>
                      <p className="text-gray-400">
                        با استفاده از CSS Selector، بررسی می‌کنیم که آیا دکمه "افزودن به سبد خرید" در صفحه وجود دارد یا
                        خیر.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">قدم ۴: شرط موجود شدن (IF Node)</h4>
                      <p className="text-gray-400">
                        یک نود شرطی اضافه می‌کنیم. اگر در مرحله قبل دکمه "افزودن به سبد" پیدا شد، ورک‌فلو ادامه پیدا
                        می‌کند.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">قدم ۵: ارسال نوتیفیکیشن به تلگرام (Telegram)</h4>
                      <p className="text-gray-400">
                        در نهایت، یک پیام هیجان‌انگیز به تلگرام خود ارسال می‌کنیم: "خبر خوب! محصولی که منتظرش بودی در
                        دیجی‌کالا موجود شد! همین الان بخرش!"
                      </p>
                    </div>
                  </div>
                </section>

                <section id="more-examples" className="mb-16 scroll-mt-20">
                  <h2 className="text-3xl font-bold mb-6">کاربردهای n8n در دنیای واقعی (مثال‌های پرکاربرد در ایران)</h2>
                  <div className="space-y-8">
                    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                      <h3 className="font-bold text-xl mb-2 text-purple-400">۱. مدیریت هوشمند کامنت‌های اینستاگرام</h3>
                      <p className="text-gray-400 mb-4">
                        دیگر هیچ کامنتی را از دست ندهید! یک ورک‌فلو بسازید که به محض دریافت کامنت جدید زیر پست آخرتان،
                        متن آن را در یک ردیف در گوگل شیت ذخیره کند. حتی می‌توانید با هوش مصنوعی آن را تحلیل کرده و به
                        عنوان "سوال"، "نظر مثبت" یا "نظر منفی" دسته‌بندی کنید.
                      </p>
                      <p className="text-sm text-gray-500">
                        `[تریگر اینستاگرام: کامنت جدید]` → `[پردازش با OpenAI]` → `[افزودن ردیف به Google Sheets]`
                      </p>
                    </div>

                    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                      <h3 className="font-bold text-xl mb-2 text-purple-400">۲. ربات شخصی رصد قیمت ارز دیجیتال</h3>
                      <p className="text-gray-400 mb-4">
                        منتظر قیمت مناسب برای خرید یا فروش تتر هستید؟ یک ربات بسازید که هر ۵ دقیقه قیمت لحظه‌ای تتر را از
                        API یک صرافی ایرانی (مثل نوبیتکس) چک کند و به محض رسیدن به قیمت مورد نظر شما، یک نوتیفیکیشن فوری
                        در تلگرام برایتان ارسال کند.
                      </p>
                      <p className="text-sm text-gray-500">
                        `[تریگر زمان‌بندی: هر ۵ دقیقه]` → `[خواندن قیمت از API]` → `[شرط IF: آیا قیمت مناسب است؟]` →
                        `[ارسال هشدار به تلگرام]`
                      </p>
                    </div>

                    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                      <h3 className="font-bold text-xl mb-2 text-purple-400">۳. تحلیل هوشمند و خودکار رقیبان (سئو)</h3>
                      <p className="text-gray-400 mb-4">
                        از رقبای خود عقب نمانید! یک ورک‌فلو طراحی کنید که هر روز وبلاگ رقیب شما را چک کند. به محض انتشار
                        مقاله جدید، آن را با هوش مصنوعی خلاصه کرده و یک تسک در Trello برای تیم محتوای شما با عنوان
                        "تحلیل و تولید محتوای بهتر" ایجاد کند.
                      </p>
                      <p className="text-sm text-gray-500">
                        `[خواندن فید RSS رقیب]` → `[خلاصه‌سازی با OpenAI]` → `[ساخت تسک در Trello]`
                      </p>
                    </div>
                  </div>
                </section>

                <section id="cta-section" className="text-center p-8 rounded-lg bg-gray-800 my-12 scroll-mt-20">
                  <h2 className="text-2xl font-bold mb-4">آیا می‌خواهید این ورک‌فلوها را آماده داشته باشید؟</h2>
                  <p className="text-gray-400 mb-6">
                    می‌توانید ورک‌فلو کامل ربات "موجود شد خبرم کن" و ده‌ها ورک‌فلو کاربردی دیگر را از سایت پرامپت بازار
                    دانلود کرده و مستقیماً در n8n خود استفاده کنید.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="/n8n"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      مشاهده و دانلود ورک‌فلوهای آماده
                    </a>
                  </div>
                </section>

                <section id="faq" className="scroll-mt-20">
                  <h2 className="text-3xl font-bold mb-6">پرسش‌های متداول</h2>
                  <div className="space-y-4">
                    {[
                      {
                        id: "f1",
                        q: "آیا برای استفاده از n8n باید برنامه‌نویس باشم؟",
                        a: "خیر. n8n یک ابزار No-Code/Low-Code است. ۹۵٪ کارها با رابط کاربری گرافیکی و بدون نیاز به کدنویسی انجام می‌شود.",
                      },
                      {
                        id: "f2",
                        q: "آیا n8n با سرویس‌های ایرانی مثل دیجی‌کالا یا اسنپ کار می‌کند؟",
                        a: "اگر آن سرویس یک API عمومی داشته باشد، بله، با نود HTTP Request می‌توانید به آن متصل شوید. برای سرویس‌هایی که API ندارند، می‌توان از روش‌های خلاقانه‌تری مثل خواندن اطلاعات از صفحه وب (Web Scraping) مانند مثال بالا استفاده کرد.",
                      },
                      {
                        id: "f3",
                        q: "آیا نصب n8n روی سرور شخصی پیچیده است؟",
                        a: "خیر. با استفاده از Docker، نصب آن معمولاً کمتر از ۱۰ دقیقه زمان می‌برد. مستندات کاملی برای این کار وجود دارد.",
                      },
                    ].map((faq) => (
                      <div key={faq.id} className="border border-gray-700 rounded-lg bg-gray-800 overflow-hidden">
                        <button
                          className="w-full text-right p-5 font-semibold text-gray-200 hover:text-white transition-colors flex items-center justify-between"
                          onClick={() => toggleAccordion(faq.id)}
                        >
                          {faq.q}
                          <span
                            className={`transform transition-transform duration-300 ${activeAccordion === faq.id ? "rotate-180" : ""}`}
                          >
                            ▼
                          </span>
                        </button>
                        {activeAccordion === faq.id && (
                          <div className="p-5 pt-0 text-gray-400 leading-relaxed">{faq.a}</div>
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
    </div>
  )
}
