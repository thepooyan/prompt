"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, Cloud, Server, BookOpen, Rocket, Image } from "lucide-react"

export default function InstallN8nPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ... (هدر و فوتر) ... */}
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* ... (Breadcrumbs و Hero Section) ... */}
          <nav className="text-sm mb-8 text-muted-foreground flex items-center gap-2">
            <a href="/" className="hover:text-primary transition-colors">
              خانه
            </a>
            <ArrowLeft className="h-3 w-3" />
            <span className="text-foreground">دانلود و نصب n8n</span>
          </nav>

          <header className="mb-16 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-balance leading-tight">
              دانلود و نصب n8n
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              برای اجرای ورک‌فلوها، ابتدا باید پلتفرم n8n را راه‌اندازی کنید. یکی از سه روش زیر را انتخاب کنید.
            </p>
          </header>

          {/* ... (1. انتخاب روش نصب - ۳ کارت) ... */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
              ۱. انتخاب روش راه‌اندازی
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* گزینه ۱: دسکتاپ */}
              <a href="#desktop-guide" className="group">
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 text-center">
                  <CardHeader className="items-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/20 border-2 border-primary flex items-center justify-center mb-4">
                      <Download className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">نسخه دسکتاپ</CardTitle>
                    <CardDescription className="pt-2">
                      بهترین گزینه برای شروع سریع، یادگیری و تست ورک‌فلوها روی کامپیوتر شخصی.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>

              {/* گزینه ۲: ابری */}
              <a href="#cloud-guide" className="group">
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 text-center">
                  <CardHeader className="items-center">
                    <div className="w-16 h-16 rounded-xl bg-accent/20 border-2 border-accent flex items-center justify-center mb-4">
                      <Cloud className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">نسخه ابری</CardTitle>
                    <CardDescription className="pt-2">
                      بدون نیاز به نصب. سریع‌ترین راه برای استفاده حرفه‌ای. (شامل پلن رایگان)
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>

              {/* گزینه ۳: سرور */}
              <a href="#server-guide" className="group">
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 text-center">
                  <CardHeader className="items-center">
                    <div className="w-16 h-16 rounded-xl bg-chart-3/20 border-2 border-chart-3 flex items-center justify-center mb-4">
                      <Server className="h-8 w-8 text-chart-3" />
                    </div>
                    <CardTitle className="text-xl">نصب روی سرور</CardTitle>
                    <CardDescription className="pt-2">
                      گزینه پیشرفته برای نصب روی سرور شخصی (VPS) با کنترل کامل.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </a>

            </div>
          </section>

          {/* 2. راهنمای گام به گام */}
          <section className="space-y-12">
            
            {/* راهنمای دسکتاپ */}
            <Card id="desktop-guide" className="p-8 md:p-10 border-t-4 border-primary">
              <div className="flex items-center gap-4 mb-6">
                <Download className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">راهنمای نصب نسخه دسکتاپ (Desktop)</h3>
              </div>
              <ol className="list-decimal list-outside space-y-4 text-lg text-muted-foreground ml-6">
                <li>به <a href="https://n8n-community.typeform.com/to/l3zDaMrJ" target="_blank" className="text-primary hover:underline font-semibold">صفحه رسمی دانلود n8n Desktop</a> بروید.</li>
                <li>فایل نصب مربوط به سیستم‌عامل خود (ویندوز، مک یا لینوکس) را دانلود کنید.</li>

                {/* --- بخش اضافه شده --- */}
                <img src="https://c327107.parspack.net/prompt/1762508008951-1.webp" alt="راهنمای نصب نسخه دسکتاپ (Desktop)" 
                    className="my-5 rounded"
                />
               
                {/* --- پایان بخش اضافه شده --- */}

                <li>فایل دانلود شده را مانند هر نرم‌افزار دیگری اجرا و نصب کنید.</li>
                <li>برنامه n8n را اجرا کنید. پنل n8n آماده استفاده است.</li>
              </ol>
            </Card>

            {/* راهنمای ابری */}
            <Card id="cloud-guide" className="p-8 md:p-10 border-t-4 border-accent">
              <div className="flex items-center gap-4 mb-6">
                <Cloud className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-bold">راهنمای استفاده از نسخه ابری (Cloud)</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                در این روش هیچ نیازی به نصب ندارید و فقط در سایت n8n ثبت‌نام می‌کنید.
              </p>
              <ol className="list-decimal list-outside space-y-4 text-lg text-muted-foreground ml-6">
                <li>به <a href="https://n8n.io/pricing/" target="_blank" className="text-primary hover:underline font-semibold" rel="nofollow">صفحه پلن‌های n8n Cloud</a> بروید.</li>
                <li>یکی از پلن‌ها را انتخاب کنید (می‌توانید با پلن رایگان یا "Start free trial" شروع کنید).</li>
                
                {/* --- بخش اضافه شده --- */}
                    <img src="https://c327107.parspack.net/prompt/1762508016334-3.webp" alt=" راهنمای ابری " 
                    className="my-5 rounded"
                />
               
                {/* --- پایان بخش اضافه شده --- */}

                <li>حساب کاربری خود را بسازید.</li>
                <li>بلافاصله به پنل n8n در آدرس اختصاصی خودتان دسترسی خواهید داشت.</li>
              </ol>
            </Card>

            {/* راهنمای سرور */}
            <Card id="server-guide" className="p-8 md:p-10 border-t-4 border-chart-3">
              <div className="flex items-center gap-4 mb-6">
                <Server className="h-8 w-8 text-chart-3" />
                <h3 className="text-2xl font-bold">راهنمای نصب روی سرور (Self-Host)</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                این روش حرفه‌ای‌ترین گزینه است و از Docker برای نصب استفاده می‌کند.
              </p>
              <ol className="list-decimal list-outside space-y-4 text-lg text-muted-foreground ml-6">
                <li>ابتدا مطمئن شوید <a href="https://docs.docker.com/get-docker/" target="_blank" className="text-primary hover:underline font-semibold" rel="nofollow">Docker</a> روی سرور (VPS) شما نصب است.</li>
                <li>این دستور را برای ایجاد یک Volume (جهت ذخیره دائمی داده‌ها) در ترمینال سرور وارد کنید:
                  <pre className="bg-secondary/50 p-4 rounded-md text-sm text-foreground my-2 dir-ltr text-left">
                    docker volume create n8n_data
                  </pre>
                </li>
                <li>این دستور را برای دانلود و اجرای n8n وارد کنید:
                  <pre className="bg-secondary/50 p-4 rounded-md text-sm text-foreground my-2 dir-ltr text-left overflow-x-auto">
                    docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n
                  </pre>
                </li>
                <li>پس از چند لحظه، با باز کردن آدرس <code className="dir-ltr text-foreground font-semibold">http://[IP-SERVER-SHOMA]:5678</code> در مرورگر، به پنل n8n دسترسی دارید.</li>

                {/* --- بخش اضافه شده --- */}
               {/* --- بخش اضافه شده --- */}
                    <img src="https://c327107.parspack.net/prompt/1762508020672-4.webp" alt=" راهنمای سرور " 
                    className="my-5 rounded"
                />
                {/* --- پایان بخش اضافه شده --- */}
              </ol>
            </Card>
          </section>

          {/* ... (3. گام بعدی - CTA) ... */}
          <section className="mt-20">
            <Card className="p-8 md:p-10 bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 shadow-2xl shadow-primary/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-right space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    عالی! n8n شما آماده است.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    حالا که n8n را نصب کرده‌اید، به کتابخانه ورک‌فلوها برگردید و اولین اتوماسیون خود را دانلود و ایمпорт کنید.
                  </p>
                </div>
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105 w-full md:w-auto"
                >
                  <a href="/n8n">
                    <BookOpen className="ml-2 h-5 w-5" />
                    رفتن به کتابخانه ورک‌فلوها
                  </a>
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}