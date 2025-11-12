"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Zap, CloudCog, Code, TrendingUp, Cpu, Download, Bell, MessageSquare, LineChart } from "lucide-react"

export default function N8nTutorialPageForIran() {
  const [activeAccordion, setActiveAccordion] = useState("f1")

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id)
  }

  const tocItems = [
    { id: "what-is-n8n", title: "n8n چیست؟ (ابزارِ تنبل‌ها!)" },
    { id: "why-n8n-iran", title: "چرا n8n بهترین دوست کسب‌وکارهای ایرانی است؟" },
    { id: "core-concepts", title: "۳ بخش اصلی n8n (نقشه راه شما)" },
    { id: "practical-example", title: "مثال پرطرفدار: رباتِ هشدار لحظه‌ای قیمت" },
    { id: "install-guide", title: "📥 آموزش دانلود و نصب n8n" },
    { id: "more-examples", title: "۳ ایده اتوماسیون برای کسب درآمد" },
    { id: "cta-section", title: "ورک‌فلوهای آماده: کپی و استفاده!" },
    { id: "faq", title: "سؤالات پرتکرار (FAQ)" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <main>
        {/* Hero Section - زبان گفتاری و جذاب */}
        <section className="bg-secondary/50 py-20 border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-balance">
              آموزش n8n: ربات شخصی‌تان را بسازید (بدون حتی یک خط کد!) 
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              دیگه هیچ کار تکراری رو خودت انجام نده! n8n یه پلتفرم رایگان و قدرتمنده که مثل یه کارگر ۲۴ ساعته، همه وظایف خسته‌کننده تو رو به صورت خودکار انجام می‌ده.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#practical-example">
                  شروع کنیم (همین الان یه ربات بساز!)
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content with TOC */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Table of Contents (جدول محتوا) - خوشه‌بندی محتوا */}
            <aside className="lg:w-80 flex-shrink-0 lg:sticky top-24 self-start">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h6 className="flex items-center gap-2 mb-4 font-semibold text-lg">
                  <span className="text-primary">📋</span> فهرست سریع
                </h6>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block p-2 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      • {item.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 pt-4 border-t border-border">
                    {/* لینک داخلی برای خوشه محتوایی نصب */}
                    <Button variant="outline" className="w-full" asChild>
                        <Link href="/n8n/download-guide">
                            <Download className="w-4 h-4 ml-2" /> راهنمای صفر تا صد نصب
                        </Link>
                    </Button>
                </div>
              </div>
            </aside>

            {/* Content Sections */}
            <div className="flex-1 max-w-4xl">
              <section id="what-is-n8n" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6">n8n چیست؟ (ابزارِ تنبل‌ها!)</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  بیایید رک باشیم: n8n (اِن اِیت اِن) برای کسانی است که می‌خواهند با کمترین زحمت، بیشترین کار را انجام دهند!
                  n8n یک "چسب دیجیتال" است که اپلیکیشن‌های مختلف شما را (مثل تلگرام، ووکامرس، گوگل شیت و سامانه‌های پیامکی ایرانی) به هم وصل می‌کند.
                </p>
                <blockquote className="mt-6 border-r-4 border-primary/50 pr-4 italic text-muted-foreground/80">
                    <strong className="text-foreground">تصور کنید:</strong> یک نفر را استخدام کرده‌اید که ۲۴ ساعته، بدون حقوق و بدون خطا، هر دستوری که می‌دهید را اجرا می‌کند. n8n دقیقاً همان نفر است.
                </blockquote>
              </section>

              <section id="why-n8n-iran" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6">چرا n8n بهترین دوست کسب‌وکارهای ایرانی است؟ 🇮🇷</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card p-6 rounded-lg border border-border flex items-start space-x-4 rtl:space-x-reverse">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-xl mb-2">کاملاً رایگان و ضدِ تحریم!</h3>
                        <p className="text-muted-foreground">
                          چون n8n یک پروژه متن‌باز (Open Source) است، می‌توانید آن را روی سرور شخصی خودتان نصب کنید (Self-host). این یعنی خداحافظی با تحریم‌ها، هزینه‌های ارزی و محدودیت‌های ناگهانی!
                        </p>
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border flex items-start space-x-4 rtl:space-x-reverse">
                    <CloudCog className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-xl mb-2">متصل به سرویس‌های بومی</h3>
                        <p className="text-muted-foreground">
                          سرویس‌های ایرانی API یا سیستم‌های خارجی ندارند؟ مشکلی نیست! با نود قدرتمند HTTP Request می‌توانید به سادگی به سامانه‌های پیامکی، پنل‌های بورس، درگاه‌های پرداخت و سایت‌های ایرانی متصل شوید.
                        </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="core-concepts" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6">۳ بخش اصلی n8n (نقشه راه شما)</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  برای شروع، فقط کافی است این سه کلمه را یاد بگیرید:
                </p>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <strong className="text-foreground">۱. تریگر (Trigger):</strong> <strong className="text-primary">دکمه شروع!</strong> چه چیزی باعث می‌شود ربات شما بیدار شود و کارش را شروع کند؟ (مثال: دوشنبه ساعت ۱۰ صبح، یا دریافت یک ایمیل جدید).
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Cpu className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <strong className="text-foreground">۲. نود (Node):</strong> <strong className="text-primary">هر قدمِ اجرایی.</strong> هر نود یک کار مشخص انجام می‌دهد. (مثال: "اطلاعات را بخوان"، "حساب و کتاب کن"، "یک پیام بفرست").
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Code className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <strong className="text-foreground">۳. ورک‌فلو (Workflow):</strong> <strong className="text-primary">مسیرِ کاملِ ربات.</strong> مسیر طراحی شده از تریگر تا نود نهایی که خروجی مورد نظر شما را تولید می‌کند.
                    </div>
                  </li>
                </ul>
              </section>

              <section id="practical-example" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6">مثال پرطرفدار: رباتِ هشدار لحظه‌ای قیمت (برای بورس، طلا یا کریپتو)</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  چقدر خوب می‌شد اگر دیگر مجبور نبودید هر ۵ دقیقه یک بار چارت‌ها را چک کنید؟ این ربات را بسازید:
                </p>
                
                <div className="space-y-8 border-l-2 border-primary/30 pl-8">
                  <div>
                    <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><LineChart className="w-5 h-5 text-primary"/> قدم ۱: تریگر زمان‌بندی (هر ۵ دقیقه)</h4>
                    <p className="text-muted-foreground">
                      به n8n می‌گوییم هر ۵ دقیقه یک بار این دستورات را تکرار کن.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><CloudCog className="w-5 h-5 text-primary"/> قدم ۲: خواندن قیمت لحظه‌ای (HTTP Request)</h4>
                    <p className="text-muted-foreground">
                      ورک‌فلو به API یک صرافی داخلی یا سایت معتبر متصل می‌شود و قیمت لحظه‌ای (مثلاً دلار یا سکه) را دریافت می‌کند.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><Cpu className="w-5 h-5 text-primary"/> قدم ۳: نود شرطی (آیا قیمت رسید؟)</h4>
                    <p className="text-muted-foreground">
                      یک شرط می‌گذاریم: "اگر قیمت دلار کمتر از ۵۵ هزار تومان شد..."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><Bell className="w-5 h-5 text-primary"/> قدم ۴: ارسال هشدار فوری به تلگرام</h4>
                    <p className="text-muted-foreground">
                      فقط در صورتی که شرط بالا برقرار شد، ربات شما یک پیام فوری در تلگرام می‌فرستد: "🚨 وقت خرید رسید! دلار به ۵۴۹۰۰ تومان رسید!"
                    </p>
                  </div>
                </div>
              </section>
              
              <section id="install-guide" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6">📥 آموزش دانلود و نصب n8n (لینک داخلی)</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  آماده‌اید شروع کنید؟ قدم اول، نصب n8n است. نگران نباشید، راهنمای ما خیلی ساده و گام به گام است.
                </p>
                <Button size="lg" variant="secondary" asChild>
                    {/* لینک داخلی برای خوشه محتوایی نصب */}
                    <Link href="/download-install-n8n">
                        <Download className="w-5 h-5 ml-2" /> راهنمای گام به گام نصب n8n (کمتر از ۱۰ دقیقه!)
                    </Link>
                </Button>
              </section>


              <section id="more-examples" className="mb-16 scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6">💡 ۳ ایده اتوماسیون ترند برای کسب‌وکارهای ایرانی (تست‌شده)</h2>
                <div className="space-y-8">
                  <div className="bg-card p-6 rounded-lg border border-border flex items-start space-x-4 rtl:space-x-reverse">
                    <MessageSquare className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-xl mb-2">۱. سیستم پاسخگویی خودکار به مشتریان جدید (SMS)</h3>
                        <p className="text-muted-foreground mb-4">
                          وقتی کسی در سایت شما ثبت نام کرد (تریگر)، بلافاصله یک پیامک خوش‌آمدگویی (نه ایمیل فیلترشده!) از پنل پیامکی ایرانی شما ارسال می‌شود. اگر تا ۲۴ ساعت آینده اقدامی نکرد، یک پیام پیگیری دیگر به صورت خودکار می‌رود.
                        </p>
                        <p className="text-sm text-muted-foreground/80">
                          [ثبت نام جدید] → [ارسال SMS از API بومی] → [تأخیر ۲۴ ساعته] → [ارسال پیام پیگیری]
                        </p>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-lg border border-border flex items-start space-x-4 rtl:space-x-reverse">
                    <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-xl mb-2">۲. تولید محتوای وایرال با هوش مصنوعی</h3>
                        <p className="text-muted-foreground mb-4">
                          یک ربات بسازید که ترندهای روز را از فیدهای خبری یا شبکه‌های اجتماعی رصد کند. سپس این ترندها را برای ChatGPT (یا یک مدل محلی مثل Ollama) بفرستد تا یک پیش‌نویس مقاله یا اسکریپت ویدیویی جذاب بسازد و آن را برای تأیید نهایی به تلگرام مدیر محتوا ارسال کند.
                        </p>
                        <p className="text-sm text-muted-foreground/80">
                          [تریگر: موضوع ترند] → [تحلیل با AI] → [ارسال پیش‌نویس به تلگرام] → [انتشار در وبلاگ]
                        </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section - دعوت به اقدام */}
              <section id="cta-section" className="text-center p-8 md:p-10 rounded-lg bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 shadow-2xl shadow-primary/10 my-12 scroll-mt-20">
                <h2 className="text-2xl font-bold mb-4 text-foreground">وقتتان طلاست! ورک‌فلوهای آماده را دانلود کنید!</h2>
                <p className="text-muted-foreground mb-6">
                  هیچ نیازی نیست این ربات‌ها را از صفر بسازید! ما تمام ورک‌فلوهای پرکاربرد (مثل ربات هشدار قیمت، اتصال به پیامک و...) را در پرامپت بازار آماده کرده‌ایم. فقط دانلود کنید و استفاده کنید!
                </p>
                <div className="flex gap-4 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
                  >
                    {/* لینک داخلی به صفحه Workflows - خوشه محتوایی Workflows */}
                    <Link href="/n8n">
                      <TrendingUp className="w-5 h-5 ml-2" /> دانلود ورک‌فلوهای بومی و آماده n8n
                    </Link>
                  </Button>
                </div>
              </section>

              <section id="faq" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6">سؤالات پرتکرار (FAQ)</h2>
                <div className="space-y-4">
                  {[
                    {
                      id: "f1",
                      q: "آیا برای کار با n8n باید حتماً کدنویسی بلد باشم؟",
                      a: "نه! اصلاً و ابداً. ۹۵٪ کارها با کشیدن و رها کردن نودها (Drag & Drop) در محیط گرافیکی انجام می‌شود. اگر یک روز نیاز به منطق پیچیده داشته باشید، می‌توانید از نود Code استفاده کنید، اما اجباری نیست.",
                    },
                    {
                      id: "f2",
                      q: "آیا n8n روی سرورهای ابری ایرانی (مثل ابر آروان یا پارس‌پک) نصب می‌شود؟",
                      a: "بله. چون n8n بر پایه Docker است، روی هر سروری که از Docker پشتیبانی کند، قابل نصب است. فرقی نمی‌کند سرور شما در ایران باشد یا خارج.",
                    },
                    {
                      id: "f3",
                      q: "آیا استفاده از n8n امنیت داده‌های من را به خطر می‌اندازد؟",
                      a: "خیر. یکی از بزرگ‌ترین مزایای n8n این است که شما آن را روی سرور شخصی خودتان نصب می‌کنید. این یعنی تمام داده‌ها و رمزهای عبور (Credentials) تحت کنترل ۱۰۰٪ شما هستند و هیچ شرکت واسطه‌ای به آن‌ها دسترسی ندارد.",
                    },
                  ].map((faq) => (
                    <div key={faq.id} className="border border-border rounded-lg bg-card overflow-hidden">
                      <button
                        className="w-full text-right p-5 font-semibold text-foreground hover:bg-accent transition-colors flex items-center justify-between"
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
                        <div className="p-5 pt-0 text-muted-foreground leading-relaxed">{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}