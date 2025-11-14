"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Download, Cloud, Server, BookOpen, CheckCircle2, Terminal, Home, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function InstallN8nPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* --- Breadcrumbs (رعایت ساختار ستون-خوشه) --- */}
          <nav className="text-sm mb-8 text-muted-foreground flex items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" /> خانه
            </Link>
            <span className="mx-2">/</span>
            <Link href="/what-is-n8n" className="hover:text-primary transition-colors">
              آموزش جامع n8n (صفحه اصلی)
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">دانلود و نصب n8n</span>
          </nav>

          {/* --- Hero Section --- */}
          <header className="mb-16 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
              <Download className="w-4 h-4" />
              نسخه جدید و پایدار ۲۰۲۵
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-balance leading-tight">
              آموزش جامع <span className="text-primary">دانلود و نصب n8n</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              برای شروع جادوی اتوماسیون، اولین قدم <strong>نصب n8n</strong> است. در این راهنما، تمام روش‌ها از <strong>نصب خودکار (نسخه دسکتاپ)</strong> برای شروع سریع تا <strong>نصب دستی (Manual) با داکر</strong> برای استفاده حرفه‌ای روی سرور را به صورت قدم‌به‌قدم یاد می‌گیرید.
            </p>
          </header>

          {/* --- 1. انتخاب روش نصب --- */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
              کدام روش نصب برای شما مناسب است؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Desktop Option */}
              <a href="#desktop-install" className="group">
                <Card className="h-full hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 text-center p-6 cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Download className="h-8 w-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl mb-2">نصب روی ویندوز/مک</CardTitle>
                  <CardDescription>
                    <strong>(نسخه دسکتاپ)</strong><br/>
                    ساده‌ترین روش. مناسب برای یادگیری، تست و استفاده شخصی بدون نیاز به سرور.
                  </CardDescription>
                </Card>
              </a>

              {/* Server/Docker Option */}
              <a href="#server-install" className="group">
                <Card className="h-full hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 text-center p-6 border-primary/40 bg-primary/5 cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Server className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">نصب روی سرور (VPS)</CardTitle>
                  <CardDescription>
                    <strong>(روش پیشنهادی ما)</strong><br/>
                    استفاده از <strong>Docker</strong>. مناسب برای کسب‌وکارها، اجرای ۲۴ ساعته و اتصال به دامنه.
                  </CardDescription>
                </Card>
              </a>

              {/* Cloud Option */}
              <a href="#cloud-install" className="group">
                <Card className="h-full hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 text-center p-6 cursor-pointer opacity-75 hover:opacity-100">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Cloud className="h-8 w-8 text-purple-500" />
                  </div>
                  <CardTitle className="text-xl mb-2">نسخه ابری (Cloud)</CardTitle>
                  <CardDescription>
                    بدون نیاز به نصب. سریع اما با هزینه اشتراک دلاری. (برای کاربران داخل ایران پیشنهاد نمی‌شود)
                  </CardDescription>
                </Card>
              </a>

            </div>
          </section>

          {/* --- 2. راهنماهای گام به گام --- */}
          <div className="space-y-16">
            
            {/* Desktop Guide */}
            <section id="desktop-install" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500/10 p-3 rounded-lg"><Download className="h-6 w-6 text-blue-600" /></div>
                <h2 className="text-2xl font-bold">آموزش نصب خودکار n8n (نسخه دسکتاپ)</h2>
              </div>
              <Card className="p-8 border-l-4 border-l-blue-500 shadow-sm">
                <p className="text-muted-foreground mb-6 leading-7">
                  اگر دانش فنی زیادی ندارید یا فقط می‌خواهید n8n را روی لپ‌تاپ خودتان تست کنید، این بهترین گزینه است. این نسخه کاملاً رایگان است.
                </p>
                <ol className="space-y-8 relative border-r border-border pr-8 mr-2">
                  <li className="relative">
                    <span className="absolute -right-[41px] top-0 bg-background border-2 border-blue-500 text-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <h3 className="font-bold text-foreground text-lg mb-2">دانلود نرم‌افزار</h3>
                    <p className="text-sm text-muted-foreground">
                      به صفحه رسمی <a href="https://n8n.io/download/" target="_blank" rel="nofollow" className="text-blue-500 hover:underline font-medium">دانلود n8n Desktop</a> بروید. نسخه متناسب با سیستم عامل خود (Windows یا Mac) را دانلود کنید.
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -right-[41px] top-0 bg-background border-2 border-blue-500 text-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <h3 className="font-bold text-foreground text-lg mb-2">نصب و اجرا</h3>
                    <p className="text-sm text-muted-foreground">
                      فایل دانلود شده را اجرا کنید. مراحل نصب بسیار ساده است (Next, Next, Finish!). پس از پایان، برنامه n8n باز شده و آماده استفاده است. هیچ تنظیمات پیچیده‌ای لازم نیست!
                    </p>
                  </li>
                </ol>
              </Card>
            </section>

            {/* Server Guide (Important for SEO & Pro Users) */}
            <section id="server-install" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg"><Terminal className="h-6 w-6 text-primary" /></div>
                <h2 className="text-2xl font-bold">آموزش نصب n8n روی سرور (VPS) با داکر</h2>
              </div>
              <Card className="p-8 border-l-4 border-l-primary bg-primary/5 shadow-md">
                <p className="text-muted-foreground mb-6 leading-7">
                  برای استفاده حرفه‌ای، اجرای مداوم ورک‌فلوها (حتی وقتی سیستم شما خاموش است) و استفاده از وب‌هوک‌ها، باید از روش <strong>نصب manual n8n</strong> روی یک سرور لینوکسی استفاده کنید. ما از <strong>Docker Compose</strong> استفاده می‌کنیم که استانداردترین و تمیزترین روش است.
                </p>
                
                <div className="space-y-8">
                  <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                    <h4 className="font-bold mb-3 flex items-center gap-2 text-foreground"><CheckCircle2 className="w-5 h-5 text-green-500"/> پیش‌نیازها:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                      <li>یک سرور مجازی (VPS) با سیستم عامل Ubuntu (قابل خرید از هاستینگ‌های ایرانی با قیمت مناسب).</li>
                      <li>نصب بودن Docker و Docker Compose روی سرور.</li>
                      <li>یک دامنه (Domain) یا ساب‌دامنه متصل به آی‌پی سرور (برای دسترسی راحت‌تر و SSL).</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-foreground">۱. ساخت فایل کانفیگ (docker-compose.yml)</h3>
                    <p className="text-sm text-muted-foreground">به سرور خود SSH بزنید. یک پوشه بسازید و فایل `docker-compose.yml` را با محتوای زیر ایجاد کنید:</p>
                    <div className="relative group dir-ltr text-left">
                        <pre className="bg-gray-950 text-gray-200 p-5 rounded-xl text-xs sm:text-sm overflow-x-auto font-mono border border-gray-800">
{`version: "3"
services:
  n8n:
    image: n8nio/n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=password  # رمز عبور خود را اینجا بنویسید
      - N8N_HOST=your-domain.com # دامنه خود را اینجا وارد کنید
    volumes:
      - n8n_data:/home/node/.n8n
volumes:
  n8n_data:`}
                        </pre>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-foreground">۲. اجرای کانتینر (نصب نهایی)</h3>
                    <p className="text-sm text-muted-foreground">در همان پوشه، دستور زیر را وارد کنید تا داکر شروع به دانلود و نصب n8n کند:</p>
                    <pre className="bg-gray-950 text-gray-200 p-4 rounded-xl text-xs sm:text-sm overflow-x-auto dir-ltr text-left font-mono border border-gray-800">
                      docker-compose up -d
                    </pre>
                  </div>

                  <div className="mt-6 p-4 bg-green-500/10 text-green-700 rounded-lg text-sm border border-green-500/20 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                        <strong>تبریک! نصب تمام شد.</strong><br/>
                        حالا می‌توانید با وارد کردن آدرس <code>http://YOUR-SERVER-IP:5678</code> (یا دامنه خودتان) در مرورگر، وارد پنل قدرتمند n8n شوید.
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Cloud Section (Brief) */}
            <section id="cloud-install" className="scroll-mt-24">
               <div className="bg-secondary/30 p-6 rounded-xl border border-secondary">
                  <div className="flex items-start gap-3">
                     <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                     <div>
                        <h3 className="font-bold text-lg mb-2">نکته درباره نسخه ابری (Cloud)</h3>
                        <p className="text-sm text-muted-foreground leading-6">
                           استفاده از نسخه ابری n8n راحت است اما دو مشکل برای کاربران ایرانی دارد: ۱. هزینه اشتراک ماهانه به دلار است. ۲. ممکن است با محدودیت‌های IP ایران مواجه شوید. پیشنهاد ما استفاده از روش <strong>نصب روی سرور شخصی (VPS)</strong> است که هم ارزان‌تر است و هم پایدارتر.
                        </p>
                     </div>
                  </div>
               </div>
            </section>

          </div>

          {/* --- CTA (هدایت به محصول / بازگشت به خوشه) --- */}
          <section className="mt-24">
            <Card className="p-10 bg-gradient-to-br from-card to-secondary/20 border-2 border-primary/20 shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              
              <h2 className="text-3xl font-bold mb-4 text-foreground">n8n را نصب کردید؟ حالا وقت جادوست!</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                نصب فقط قدم اول بود. برای اینکه قدرت واقعی اتوماسیون را ببینید، همین الان به کتابخانه ما بروید و <strong>ورک‌فلوهای آماده فارسی</strong> (مثل اتصال به درگاه پرداخت یا ربات تلگرام) را دانلود کنید.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="text-lg px-10 py-6 shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                  <Link href="/n8n">
                    <BookOpen className="ml-2 h-5 w-5" />
                    دانلود ورک‌فلوهای آماده n8n
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 hover:bg-accent" asChild>
                  <Link href="/what-is-n8n">
                    <ArrowRight className="ml-2 h-5 w-5" />
                    برگشت به آموزش جامع n8n
                  </Link>
                </Button>
              </div>
            </Card>
          </section>

        </div>
      </main>
    </div>
  )
}