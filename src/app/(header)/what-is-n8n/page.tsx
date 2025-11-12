"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  CheckCircle2, Zap, CloudCog, Code, TrendingUp, Cpu, 
  Download, Bell, MessageSquare, LineChart, ShieldCheck, 
  DollarSign, Server, XCircle, Scale, Rocket 
} from "lucide-react"
import {Metadata} from "next"

export const metadata:Metadata = {
  title: "n8n چیست؟ قدرت اتوماسیون رایگان و بدون تحریم | آموزش کامل",
  description: "n8n چیست و چگونه کار می‌کند؟ راهنمای کامل نصب و استفاده از n8n، بهترین جایگزین رایگان و متن‌باز Zapier برای اتوماسیون کسب‌وکارها در ایران (بدون تحریم).",
  keywords: "n8n چیست, آموزش n8n, اتوماسیون رایگان, جایگزین zapier, نصب n8n, ورک فلو n8n, اتوماسیون بدون کدنویسی, n8n فارسی",
  alternates: {
    canonical: "https://promptbazar.ir/what-is-n8n"
  }
}
export default function N8nTutorialPageForIran() {
  const [activeAccordion, setActiveAccordion] = useState("f1")

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id)
  }

  const tocItems = [
    { id: "what-is-n8n", title: "n8n چیست؟ (تعریف و ساختار)" },
    { id: "how-it-works", title: "n8n چگونه کار می‌کند؟" },
    { id: "pros-cons", title: "مزایا و معایب n8n" },
    { id: "competitors-cost", title: "رقبا و هزینه استفاده از n8n" },
    { id: "practical-example", title: "مثال عملی: ربات قیمت دلار" },
    { id: "install-guide", title: "آموزش نصب و راه‌اندازی (VPS/Manual)" },
    { id: "future-n8n", title: "آینده n8n در دنیای اتوماسیون" },
    { id: "faq", title: "سوالات متداول" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 border-b border-border/40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-secondary-foreground text-xs font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              راهنمای جامع ۲۰۲۵
            </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-balance">
              <span className="text-primary">n8n چیست؟</span> <br className="hidden md:block" />
              قدرت اتوماسیون رایگان و بدون تحریم
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 text-pretty">
              اگر به دنبال پاسخی برای سوال <strong>"n8n چیست و چگونه کار می‌کند؟"</strong> هستید و می‌خواهید بدون هزینه دلاری، کارهای تکراری خود را به ربات‌ها بسپارید، جای درستی آمده‌اید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 shadow-lg shadow-primary/20" asChild>
                <Link href="#practical-example">
                  <Zap className="ml-2 h-5 w-5" />
                  دیدن قدرت n8n
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/n8n">
                  <Download className="ml-2 h-5 w-5" />
                  دانلود ورک‌فلوهای آماده
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Sidebar TOC */}
              <aside className="lg:w-80 flex-shrink-0 lg:sticky top-24 self-start hidden lg:block">
                <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
                  <h6 className="flex items-center gap-2 mb-4 font-bold text-lg text-primary">
                    <span className="text-xl">📋</span> فهرست مطالب
                  </h6>
                  <nav className="space-y-1">
                    {tocItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`#${item.id}`}
                        className="block p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all text-sm"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Content Body */}
              <div className="flex-1 max-w-4xl space-y-20">
                
                {/* 1. n8n چیست؟ */}
                <section id="what-is-n8n" className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-3xl font-bold mb-6 text-foreground">
                    <CloudCog className="h-8 w-8 text-primary" />
                    n8n چیست؟ (ساختار و معماری)
                  </h2>
                  <p className="text-lg text-muted-foreground leading-8 mb-6">
                    به زبان ساده، <strong>n8n</strong> یک ابزار اتوماسیون ورک‌فلو (Workflow Automation) متن‌باز است. این ابزار به شما اجازه می‌دهد سرویس‌های مختلف (مثل تلگرام، گوگل شیت، وردپرس و...) را به هم متصل کنید.
                  </p>
                  <p className="text-lg text-muted-foreground leading-8 mb-6">
                    <strong>ویژگی‌های کلیدی n8n</strong> که آن را متمایز می‌کند، قابلیت نصب روی سرور شخصی (Self-Hosted) و رابط کاربری بصری آن است. یعنی شما مالک داده‌های خود هستید و نگران تحریم‌ها نخواهید بود.
                  </p>
                </section>

                {/* 2. n8n چگونه کار می‌کند؟ */}
                <section id="how-it-works" className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-3xl font-bold mb-6 text-foreground">
                    <Code className="h-8 w-8 text-primary" />
                    n8n چگونه کار می‌کند؟ (اجزای اصلی ورک‌فلو)
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    معماری n8n بر اساس گره‌ها (Nodes) بنا شده است. تصور کنید می‌خواهید یک خط تولید بسازید. اجزای اصلی یک ورک‌فلو در n8n عبارتند از:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-secondary/20 p-4 rounded-lg border border-secondary">
                        <strong className="text-foreground block text-lg mb-2">۱. تریگر (Trigger)</strong>
                        <p className="text-sm text-muted-foreground">شروع‌کننده جریان. مثلاً "دریافت پیام جدید در تلگرام" یا "ساعت ۸ صبح".</p>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-lg border border-secondary">
                        <strong className="text-foreground block text-lg mb-2">۲. نود (Node)</strong>
                        <p className="text-sm text-muted-foreground">انجام‌دهنده کار. مثلاً "ارسال ایمیل"، "ذخیره در دیتابیس" یا "ترجمه متن".</p>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-lg border border-secondary">
                        <strong className="text-foreground block text-lg mb-2">۳. اتصال (Connection)</strong>
                        <p className="text-sm text-muted-foreground">خطوطی که نودها را به هم وصل می‌کنند و داده‌ها را انتقال می‌دهند.</p>
                      </div>
                  </div>
                </section>

                {/* 3. مزایا و معایب */}
                <section id="pros-cons" className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-3xl font-bold mb-8 text-foreground">
                    <Scale className="h-8 w-8 text-primary" />
                    مزایا و معایب n8n
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-4 text-green-600 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        مزایای n8n
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li>✅ <strong>رایگان و متن‌باز:</strong> نسخه دسکتاپ و سلف-هاست کاملاً رایگان است.</li>
                        <li>✅ <strong>اتصال به سرویس‌های ایرانی:</strong> اتصال راحت به پیامک‌ها و درگاه‌های ایرانی.</li>
                        <li>✅ <strong>حریم خصوصی:</strong> داده‌ها روی سرور خودتان می‌ماند.</li>
                        <li>✅ <strong>بدون محدودیت:</strong> تعداد اجرا (Execution) نامحدود در نسخه شخصی.</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl">
                      <h3 className="font-bold text-xl mb-4 text-red-600 flex items-center gap-2">
                        <XCircle className="h-5 w-5" />
                        معایب n8n
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li>❌ <strong>نیاز به دانش فنی اولیه:</strong> نصب روی سرور نیاز به کمی دانش فنی دارد.</li>
                        <li>❌ <strong>مدیریت سرور:</strong> مسئولیت آپدیت و نگهداری سرور با خودتان است.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 4. رقبا و هزینه */}
                <section id="competitors-cost" className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-3xl font-bold mb-6 text-foreground">
                    <DollarSign className="h-8 w-8 text-primary" />
                    هزینه استفاده و جایگزین‌های n8n
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    شاید بپرسید <strong>رقبای n8n</strong> چه کسانی هستند؟ معروف‌ترین‌ها <strong>Zapier</strong> و <strong>Make</strong> هستند. اما n8n در مقابل رقبا چه چیزی آن را متمایز می‌کند؟
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-secondary/50">
                          <th className="p-4 text-right border border-border">ویژگی</th>
                          <th className="p-4 text-right border border-border text-primary font-bold">n8n (نسخه شخصی)</th>
                          <th className="p-4 text-right border border-border">Zapier</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-4 border border-border font-semibold">هزینه استفاده</td>
                          <td className="p-4 border border-border text-green-500 font-bold">رایگان (فقط هزینه سرور)</td>
                          <td className="p-4 border border-border">بسیار گران (دلاری)</td>
                        </tr>
                        <tr>
                          <td className="p-4 border border-border font-semibold">سرویس‌های ایرانی</td>
                          <td className="p-4 border border-border text-green-500 font-bold">پشتیبانی کامل (HTTP Request)</td>
                          <td className="p-4 border border-border">تقریباً غیرممکن</td>
                        </tr>
                        <tr>
                          <td className="p-4 border border-border font-semibold">مالکیت داده</td>
                          <td className="p-4 border border-border text-green-500 font-bold">۱۰۰٪ شما</td>
                          <td className="p-4 border border-border">سرورهای آمریکا</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                
                {/* 5. Practical Example */}
                <section id="practical-example" className="scroll-mt-24">
                  <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                    <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-green-400" />
                      مثال عملی: ایجاد یک ورک‌فلو ساده (قیمت دلار)
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      یکی از بهترین <strong>کاربردهای n8n</strong>، ساخت ربات‌های هشدار دهنده است. بیایید ببینیم یک ربات ساده چطور ساخته می‌شود:
                    </p>
                    <ul className="space-y-4 relative z-10 text-gray-300 list-disc list-inside">
                        <li><strong>قدم اول:</strong> نود `Cron` را اضافه کنید تا هر ۵ دقیقه اجرا شود.</li>
                        <li><strong>قدم دوم:</strong> با نود `HTTP Request` قیمت را از سایت صرافی بگیرید.</li>
                        <li><strong>قدم سوم:</strong> با نود `IF` چک کنید اگر قیمت تغییر کرد، به مرحله بعد برود.</li>
                        <li><strong>قدم چهارم:</strong> با نود `Telegram` پیام هشدار را ارسال کنید.</li>
                    </ul>
                  </div>
                </section>

                {/* 6. Install Guide Link (SEO Keywords Integration) */}
                <section id="install-guide" className="scroll-mt-24 text-center bg-card border border-border rounded-2xl p-10">
                  <Cpu className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">نحوه شروع کار با n8n</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    برای استفاده از این ابزار، نیاز به نصب آن دارید. ما در یک صفحه جداگانه، تمام روش‌ها شامل <strong>آموزش نصب خودکار n8n</strong>، <strong>نصب manual n8n</strong> و <strong>مراحل نصب n8n روی VPS</strong> را به صورت تصویری توضیح داده‌ایم.
                  </p>
                  <Button size="lg" className="text-lg px-8" asChild>
                    <Link href="/download-install-n8n">
                      آموزش دانلود و نصب n8n (قدم به قدم)
                    </Link>
                  </Button>
                </section>

                {/* 7. Future */}
                <section id="future-n8n" className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-3xl font-bold mb-6 text-foreground">
                    <Rocket className="h-8 w-8 text-primary" />
                    آینده n8n و جایگاه آن در تحول دنیای اتوماسیون
                  </h2>
                  <p className="text-lg text-muted-foreground leading-8">
                    با اضافه شدن هوش مصنوعی (AI Agents) به n8n، این ابزار دیگر فقط یک ماشین انتقال داده نیست، بلکه مغز متفکر کسب‌وکارهای آینده است. <strong>چه کسانی باید از n8n استفاده کنند؟</strong> تمام کسانی که نمی‌خواهند در رقابت هوش مصنوعی عقب بمانند.
                  </p>
                </section>

                {/* 8. FAQ */}
                <section id="faq" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-8 text-foreground">سوالات متداول (نتیجه‌گیری)</h2>
                  <div className="space-y-4">
                    {[
                      {
                        id: "f1",
                        q: "آیا n8n کاملاً رایگان است؟",
                        a: "بله، نسخه Self-hosted و Desktop آن کاملاً رایگان است. هزینه استفاده از n8n در این حالت فقط مربوط به سرور شخصی شماست.",
                      },
                      {
                        id: "f2",
                        q: "آیا n8n با سرویس‌های ایرانی کار می‌کند؟",
                        a: "بله، این یکی از بزرگترین مزایای n8n نسبت به رقبا است. شما می‌توانید به راحتی به هر API ایرانی متصل شوید.",
                      },
                      {
                        id: "f3",
                        q: "آیا یادگیری n8n سخت است؟",
                        a: "خیر، محیط آن کاملاً ویژوال است. با راهنمای گام به گام ما می‌توانید در کمتر از چند ساعت اولین ورک‌فلو خود را بسازید.",
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
          </div>
        </section>
      </main>
    </div>
  )
}