"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  ArrowRight, 
  Download, 
  Cloud, 
  Server, 
  BookOpen, 
  CheckCircle2, 
  Terminal, 
  Home, 
  AlertTriangle, 
  Copy, 
  Check 
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import MyBreadcrumb from "../parts/MyBreadcrumb"
import { tutorialBreadcrumb } from "../ts/breadcrumb"

export default function InstallN8nPage() {
  // استیت برای مدیریت وضعیت دکمه کپی
  const [isCopied, setIsCopied] = useState(false)

  // متن کد داکر کامپوز
  const dockerComposeCode = `version: "3"
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
  n8n_data:`

  // تابع کپی کردن متن
  const handleCopyCode = () => {
    navigator.clipboard.writeText(dockerComposeCode)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000) // بعد از ۲ ثانیه به حالت قبل برگردد
  }

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      
      <div className="relative h-[30dvw] w-full overflow-hidden bg-muted">
        {/* <Image src={blog.picture || "/placeholder.svg"} alt={blog.title} fill className="object-cover" priority /> */}
        <Image src="https://c327107.parspack.net/prompt/1763220523598-download-install-n8n.webp" alt="آموزش جامع دانلود و نصب n8n
" className="object-cover m-auto object-top"
        fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content Container */}
      <main className="container max-w-4xl mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* --- Breadcrumbs --- */}
          <MyBreadcrumb items={tutorialBreadcrumb("آموزش دانلود و نصب n8n")}/>

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
              برای شروع جادوی اتوماسیون، اولین قدم <strong>نصب n8n</strong> است. در این راهنما، تمام روش‌ها از <strong>نصب خودکار (نسخه دسکتاپ)</strong> تا <strong>نصب حرفه‌ای با داکر</strong> را یاد می‌گیرید.
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
                    ساده‌ترین روش. مناسب برای یادگیری، تست و استفاده شخصی.
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
                    استفاده از <strong>Docker</strong>. مناسب برای استفاده حرفه‌ای و اتصال به وب‌هوک‌ها.
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
                    بدون نیاز به نصب. (به دلیل هزینه دلاری و محدودیت‌ها پیشنهاد نمی‌شود)
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
                  اگر دانش فنی زیادی ندارید یا فقط می‌خواهید n8n را روی سیستم خودتان تست کنید، این بهترین گزینه است.
                </p>
                <ol className="space-y-8 relative border-r border-border pr-8 mr-2">
                  <li className="relative">
                    <span className="absolute -right-[41px] top-0 bg-background border-2 border-blue-500 text-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <h3 className="font-bold text-foreground text-lg mb-2">دانلود نرم‌افزار</h3>
                    <p className="text-sm text-muted-foreground">
                      به صفحه رسمی <a href="https://n8n.io/download/" target="_blank" rel="nofollow" className="text-blue-500 hover:underline font-medium">دانلود n8n Desktop</a> بروید و نسخه Windows یا Mac را دانلود کنید.
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -right-[41px] top-0 bg-background border-2 border-blue-500 text-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <h3 className="font-bold text-foreground text-lg mb-2">نصب و اجرا</h3>
                    <p className="text-sm text-muted-foreground">
                      فایل را نصب و اجرا کنید. پس از چند لحظه، پنل n8n در مرورگر یا پنجره اختصاصی باز می‌شود.
                    </p>
                  </li>
                </ol>
              </Card>
            </section>

            {/* Server Guide (Updated with Copy Button) */}
            <section id="server-install" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg"><Terminal className="h-6 w-6 text-primary" /></div>
                <h2 className="text-2xl font-bold">آموزش نصب n8n روی سرور (VPS) با داکر</h2>
              </div>
              <Card className="p-8 border-l-4 border-l-primary bg-primary/5 shadow-md">
                <p className="text-muted-foreground mb-6 leading-7">
                  برای استفاده حرفه‌ای، اجرای ۲۴ ساعته و داشتن IP ثابت، بهترین روش استفاده از <strong>Docker Compose</strong> روی یک سرور لینوکسی (Ubuntu) است.
                </p>
                
                <div className="space-y-8">
                  <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
                    <h4 className="font-bold mb-3 flex items-center gap-2 text-foreground"><CheckCircle2 className="w-5 h-5 text-green-500"/> پیش‌نیازها:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                      <li>یک سرور مجازی (VPS) با سیستم عامل Ubuntu.</li>
                      <li>نصب بودن Docker و Docker Compose روی سرور.</li>
                      <li>یک دامنه یا ساب‌دامنه (اختیاری اما پیشنهادی).</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-foreground">۱. ساخت فایل کانفیگ (docker-compose.yml)</h3>
                    <p className="text-sm text-muted-foreground">یک فایل به نام `docker-compose.yml` بسازید و کد زیر را درون آن قرار دهید:</p>
                    
                    {/* کد باکس با قابلیت کپی */}
                    <div className="relative group dir-ltr text-left rounded-xl overflow-hidden border border-gray-800 bg-gray-950">
                        <div className="absolute top-3 right-3 z-10">
                            <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-8 px-2 text-gray-400 hover:text-white hover:bg-gray-800"
                                onClick={handleCopyCode}
                            >
                                {isCopied ? (
                                    <span className="flex items-center gap-1 text-green-500 text-xs">
                                        <Check className="w-4 h-4" /> کپی شد
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 text-xs">
                                        <Copy className="w-4 h-4" /> کپی کد
                                    </span>
                                )}
                            </Button>
                        </div>
                        <pre className="p-5 pt-10 text-gray-200 text-xs sm:text-sm overflow-x-auto font-mono leading-relaxed">
{dockerComposeCode}
                        </pre>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-lg text-foreground">۲. اجرای کانتینر</h3>
                    <p className="text-sm text-muted-foreground">در همان مسیری که فایل را ساختید، دستور زیر را اجرا کنید:</p>
                    <pre className="bg-gray-950 text-gray-200 p-4 rounded-xl text-xs sm:text-sm overflow-x-auto dir-ltr text-left font-mono border border-gray-800">
                      docker-compose up -d
                    </pre>
                  </div>

                  <div className="mt-6 p-4 bg-green-500/10 text-green-700 rounded-lg text-sm border border-green-500/20 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                        <strong>تبریک! نصب تمام شد.</strong><br/>
                        حالا می‌توانید با وارد کردن آدرس <code>http://YOUR-SERVER-IP:5678</code> وارد پنل شوید.
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Cloud Section */}
            <section id="cloud-install" className="scroll-mt-24">
               <div className="bg-secondary/30 p-6 rounded-xl border border-secondary">
                  <div className="flex items-start gap-3">
                     <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                     <div>
                        <h3 className="font-bold text-lg mb-2">نکته درباره نسخه ابری (Cloud)</h3>
                        <p className="text-sm text-muted-foreground leading-6">
                           استفاده از نسخه ابری راحت است اما برای کاربران ایرانی به دلیل هزینه دلاری و تحریم‌ها پیشنهاد نمی‌شود. روش <strong>نصب روی سرور شخصی (VPS)</strong> پایدارترین گزینه است.
                        </p>
                     </div>
                  </div>
               </div>
            </section>

          </div>

          {/* --- CTA --- */}
          <section className="mt-24">
            <Card className="p-10 bg-gradient-to-br from-card to-secondary/20 border-2 border-primary/20 shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              
              <h2 className="text-3xl font-bold mb-4 text-foreground">n8n را نصب کردید؟</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                نصب فقط قدم اول بود. برای شروع واقعی، همین الان <strong>ورک‌فلوهای آماده فارسی</strong> را از PromptBazar دانلود کنید.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="text-lg px-10 py-6 shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                  <Link href="/n8n">
                    <BookOpen className="ml-2 h-5 w-5" />
                    دانلود ورک‌فلوهای آماده
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 hover:bg-accent" asChild>
                  <Link href="/what-is-n8n">
                    <ArrowRight className="ml-2 h-5 w-5" />
                    برگشت به آموزش‌ها
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
