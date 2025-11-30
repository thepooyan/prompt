"use client";

import React, { useState } from 'react';
import { 
  Download, 
  ArrowRight, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Copy, 
  Terminal,
  Instagram,
  MessageCircle,
  ChevronDown,
  Bot,
  FileJson,
  Check,
  Send,
  Users,
  BookOpen,
  Cpu,
  HelpCircle,
  BarChart3,
  ExternalLink,
  Database
} from "lucide-react";

// --- استایل تم AMBER ---
const themeStyles = `
  .theme-amber {
    --background: #1A1816;
    --foreground: #F5E4C3;
    --card: #24211e;
    --card-foreground: #F5E4C3;
    --primary: #D65A31;
    --primary-foreground: #FFF9F0;
    --secondary: #ECA15C;
    --secondary-foreground: #1A1816;
    --muted: #3C3028;
    --muted-foreground: #D9C4A9;
    --border: #4C3A2F;
  }
`;

// --- UI Components ---
const Button = ({ children, variant = "default", size = "default", className = "", ...props }: any) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] disabled:pointer-events-none disabled:opacity-50 active:scale-95";
  const variants: any = {
    default: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-110 shadow-lg shadow-[var(--primary)]/20",
    outline: "border border-[var(--border)] bg-transparent hover:bg-[var(--muted)] text-[var(--foreground)]",
    secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:brightness-110",
    instagram: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:brightness-110 shadow-lg shadow-pink-500/20 border-0"
  };
  const sizes: any = { default: "h-11 px-6", sm: "h-9 rounded-md px-3 text-xs", lg: "h-14 rounded-xl px-8 text-base", icon: "h-10 w-10" };
  return <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>{children}</button>;
};

const Card = ({ className = "", children, ...props }: any) => (
  <div className={`rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] shadow-xl ${className}`} {...props}>{children}</div>
);

const Badge = ({ children, variant = "default", className = "" }: any) => {
  const variants: any = {
    default: "bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20",
    instagram: "bg-pink-500/10 text-pink-500 border border-pink-500/20",
  };
  return <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-colors ${variants[variant]} ${className}`}>{children}</div>;
};

const AccordionItem = ({ title, children, isOpen, onClick, number }: any) => (
  <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[var(--muted)]/30 border-[var(--primary)]/40 shadow-lg' : 'bg-[var(--card)] border-[var(--border)] hover:border-[var(--muted-foreground)]/30'}`}>
    <button onClick={onClick} className="w-full flex items-center justify-between p-5 text-right cursor-pointer">
      <div className="flex items-center gap-4">
        <span className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-black transition-colors ${isOpen ? 'bg-[var(--primary)] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}>{number}</span>
        <span className={`font-bold text-lg ${isOpen ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]'}`}>{title}</span>
      </div>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[var(--primary)]/10 text-[var(--primary)] rotate-180' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}><ChevronDown className="w-5 h-5" /></div>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="p-5 pt-0 text-[var(--muted-foreground)] text-sm leading-8 border-t border-[var(--border)]">
        <div className="bg-[var(--background)]/50 rounded-xl p-4 mt-2 border border-[var(--border)]">{children}</div>
      </div>
    </div>
  </div>
);

// --- AuthorBox (GEO Signal: Authority) ---
function AuthorBox() {
  return (
    <div className="mt-24 pt-12 border-t border-[var(--border)]">
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:border-[var(--primary)]/30 transition duration-300 group shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
        <a href="/AuthorBox/peyman" className="shrink-0 relative z-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
          <img 
            src="https://c327107.parspack.net/prompt/1763293380820-7da4d49b-0a7d-49ed-bd42-6c1f46d7424b.jpeg" 
            alt="پیمان کلانتر نظری" 
            className="relative w-24 h-24 rounded-full object-cover border-2 border-[var(--background)] shadow-xl ring-1 ring-[var(--border)]"
          />
        </a>
        <div className="text-center md:text-right flex-1 z-10 space-y-3">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-2">
             <h3 className="text-xl font-black text-[var(--foreground)] flex items-center gap-2">
               نویسنده: <a href="/AuthorBox/peyman" className="hover:text-[var(--primary)] transition underline-offset-4 hover:underline decoration-[var(--primary)]">پیمان کلانتر نظری</a>
             </h3>
             <Badge variant="secondary">کارشناس ارشد اتوماسیون</Badge>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] leading-loose max-w-2xl">
            با ۷ سال تجربه در دیجیتال مارکتینگ و توسعه سیستم‌های اتوماسیون (n8n). هدف من در پرامپت بازار، ارائه راهکارهای "بدون کدنویسی" برای چالش‌های واقعی کسب‌وکارهای ایرانی است.
          </p>
          <div className="pt-2 flex justify-center md:justify-start">
             <a href="/AuthorBox/peyman" className="inline-flex items-center text-xs font-bold text-[var(--primary)] hover:text-[var(--secondary)] transition gap-1.5 px-4 py-2 bg-[var(--primary)]/5 rounded-full border border-[var(--primary)]/20 hover:bg-[var(--primary)]/10">
               مشاهده رزومه و سایر آموزش‌ها
               <ExternalLink className="w-3 h-3 mr-1" />
             </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function InstagramAutoDM() {
  const [isCopied, setIsCopied] = useState(false);
  const [openStep, setOpenStep] = useState(1);

  const workflowJson = JSON.stringify({
    "name": "Instagram Auto DM Bot (PromptBazar)",
    "nodes": [
      { "parameters": { "updates": ["comments"], "resource": "instagram" }, "name": "Instagram Trigger", "type": "n8n-nodes-base.instagramTrigger", "typeVersion": 1, "position": [460, 300] },
      { "parameters": { "conditions": { "string": [{ "value1": "={{ $json.text }}", "operation": "contains", "value2": "قیمت" }] } }, "name": "Check Keyword", "type": "n8n-nodes-base.if", "typeVersion": 1, "position": [680, 300] },
      { "parameters": { "resource": "instagram", "operation": "message", "userId": "={{ $json.from.id }}", "text": "سلام! 👋 قیمت محصول: ۹۸۰,۰۰۰ تومان" }, "name": "Send DM", "type": "n8n-nodes-base.instagram", "typeVersion": 1, "position": [900, 200] },
      { "parameters": { "resource": "instagram", "operation": "comment", "mediaId": "={{ $json.media.id }}", "commentId": "={{ $json.id }}", "text": "✅ دایرکت شد." }, "name": "Reply Comment", "type": "n8n-nodes-base.instagram", "typeVersion": 1, "position": [900, 400] }
    ],
    "connections": {
      "Instagram Trigger": { "main": [[{ "node": "Check Keyword", "type": "main", "index": 0 }]] },
      "Check Keyword": { "main": [[{ "node": "Send DM", "type": "main", "index": 0 }, { "node": "Reply Comment", "type": "main", "index": 0 }]] }
    }
  }, null, 2);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(workflowJson);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <style jsx global>{themeStyles}</style>
      <div className="theme-amber min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans" dir="rtl">
        
        {/* Minimal Header */}
        <div className="container mx-auto px-4 py-6 flex justify-end">
          <Button variant="outline" size="sm" asChild>
            <a href="/" className="flex items-center gap-2 group opacity-70 hover:opacity-100 transition-opacity">
              بازگشت به خانه
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="relative pt-10 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-gradient-to-tr from-purple-600/10 via-pink-600/10 to-[var(--primary)]/5 rounded-full blur-[100px] -z-10"></div>
          
          <div className="container mx-auto px-4 text-center">
             <Badge variant="instagram" className="mb-6 px-4 py-1.5 text-sm animate-pulse">
                🚀 ابزار افزایش نرخ تبدیل (Conversion)
             </Badge>
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] mb-6 leading-tight">
                ربات <span className="text-[var(--primary)]">ادمین هوشمند اینستاگرام</span>
                <br/>
                <span className="text-2xl md:text-3xl text-[var(--muted-foreground)] opacity-80 mt-3 block">(پاسخ خودکار به کامنت و دایرکت)</span>
             </h1>
             <p className="text-[var(--muted-foreground)] text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                خستگی ادمین را فراموش کنید! با این ورک‌فلو n8n، به صورت ۲۴ ساعته به مشتریانی که کلمه «قیمت» یا «خرید» را کامنت می‌کنند، پاسخ دهید و لینک خرید را دایرکت کنید.
             </p>
          </div>
        </div>

        <main className="container max-w-6xl mx-auto px-4 -mt-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* --- INTERNAL LINKING (Pillar-Cluster Strategy) --- */}
              <div className="bg-[var(--muted)]/20 border border-[var(--border)] p-5 rounded-xl shadow-inner">
                 <div className="flex items-center gap-2 mb-3 text-[var(--secondary)] font-bold">
                    <BookOpen className="w-5 h-5" />
                    <span>پیش‌نیازهای یادگیری (اتصال خوشه به ستون):</span>
                 </div>
                 <div className="flex flex-wrap gap-3">
                    <a href="/what-is-n8n" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors text-sm font-medium">
                       <Bot className="w-4 h-4" /> n8n چیست؟
                    </a>
                    <a href="/install-n8n" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors text-sm font-medium">
                       <Cpu className="w-4 h-4" /> آموزش نصب و راه‌اندازی
                    </a>
                 </div>
              </div>

              {/* AEO Optimization: Comparison Table (Problem/Solution) */}
              <div className="grid md:grid-cols-2 gap-4">
                 <div className="bg-red-500/5 border border-red-500/20 p-5 rounded-2xl">
                    <h3 className="text-red-400 font-bold mb-2 flex items-center gap-2"><Clock className="w-5 h-5"/> مشکل: روش سنتی</h3>
                    <ul className="text-sm text-[var(--muted-foreground)] space-y-2 list-disc list-inside">
                       <li>تاخیر در پاسخگویی (از دست دادن لید)</li>
                       <li>فراموشی دایرکت‌ها در ساعات شلوغی</li>
                       <li>نیاز به استخدام ادمین شیفت شب</li>
                    </ul>
                 </div>
                 <div className="bg-green-500/5 border border-green-500/20 p-5 rounded-2xl">
                    <h3 className="text-green-400 font-bold mb-2 flex items-center gap-2"><Zap className="w-5 h-5"/> راه حل: ربات n8n</h3>
                    <ul className="text-sm text-[var(--muted-foreground)] space-y-2 list-disc list-inside">
                       <li>پاسخگویی آنی (زیر ۱ ثانیه)</li>
                       <li>فعالیت ۲۴ ساعته و بدون خستگی</li>
                       <li>افزایش نرخ تعامل (Engagement)</li>
                    </ul>
                 </div>
              </div>

              {/* Visual Workflow */}
              <div className="rounded-3xl p-1 bg-gradient-to-br from-pink-500/20 to-[var(--background)] shadow-2xl">
                <div className="bg-[#151311] rounded-[22px] p-8 md:p-12 relative overflow-hidden">
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        {[
                          { icon: Instagram, label: "تشخیص کامنت", sub: "Webhook" },
                          { icon: Database, label: "تحلیل متن", sub: "Logic" },
                          { icon: Send, label: "ارسال دایرکت", sub: "Action" },
                          { icon: MessageCircle, label: "ریپلای عمومی", sub: "Action" }
                        ].map((node, i) => (
                          <React.Fragment key={i}>
                            <div className="flex flex-col items-center gap-3 group">
                              <div className="w-16 h-16 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-pink-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <node.icon className="w-7 h-7" />
                              </div>
                              <div className="text-center">
                                 <span className="text-xs font-bold text-[var(--foreground)] block">{node.label}</span>
                                 <span className="text-[10px] text-[var(--muted-foreground)] uppercase">{node.sub}</span>
                              </div>
                            </div>
                            {i < 3 && <div className="hidden md:block w-8 h-0.5 bg-[var(--border)] relative"></div>}
                          </React.Fragment>
                        ))}
                  </div>
                </div>
              </div>

              {/* Tutorial Section (AEO: Structured List) */}
              <section id="tutorial">
                 <div className="flex items-center gap-3 mb-6">
                    <Terminal className="w-8 h-8 text-[var(--primary)]" />
                    <h2 className="text-2xl font-black text-[var(--foreground)]">راهنمای نصب (گام‌به‌گام)</h2>
                 </div>

                <div className="grid gap-4">
                  <AccordionItem number="۱" title="اتصال اینستاگرام به فیسبوک (پیش‌نیاز)" isOpen={openStep === 1} onClick={() => setOpenStep(openStep === 1 ? 0 : 1)}>
                    <div className="space-y-3 text-[var(--muted-foreground)]">
                       <p>برای اینکه ربات بدون مشکل (و بدون خطر بلاک شدن) کار کند، ما از API رسمی متا استفاده می‌کنیم. برای این کار:</p>
                       <ul className="space-y-3 list-none text-sm">
                         <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-green-500 mt-1"/> پیج اینستاگرام خود را به حالت <strong>Business</strong> تغییر دهید.</li>
                         <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-green-500 mt-1"/> پیج را به یک صفحه (Page) فیسبوک متصل کنید.</li>
                         <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-green-500 mt-1"/> در پنل n8n، بخش Credentials، گزینه <strong>Facebook Graph API</strong> را انتخاب و لاگین کنید.</li>
                       </ul>
                    </div>
                  </AccordionItem>

                  <AccordionItem number="۲" title="ایمپورت ورک‌فلو" isOpen={openStep === 2} onClick={() => setOpenStep(openStep === 2 ? 0 : 2)}>
                     <div className="space-y-3 text-[var(--muted-foreground)]">
                       <ul className="space-y-3 list-none text-sm">
                         <li className="flex gap-2 items-start"><span className="text-[var(--primary)] font-bold">۱.</span> کد JSON موجود در باکس پایین را کپی کنید.</li>
                         <li className="flex gap-2 items-start"><span className="text-[var(--primary)] font-bold">۲.</span> در صفحه n8n کلیدهای <strong>Ctrl + V</strong> را بزنید.</li>
                       </ul>
                     </div>
                  </AccordionItem>

                  <AccordionItem number="۳" title="تنظیم پاسخ‌ها" isOpen={openStep === 3} onClick={() => setOpenStep(openStep === 3 ? 0 : 3)}>
                     <div className="space-y-3 text-[var(--muted-foreground)]">
                        <ul className="bg-[var(--card)] p-3 rounded border border-[var(--border)] text-sm space-y-3">
                           <li>• روی نود <strong>Check Keyword</strong> دبل کلیک کنید و کلمه‌ای که ربات باید به آن حساس باشد (مثلاً: قیمت، خرید، سایز) را وارد کنید.</li>
                           <li>• روی نود <strong>Send DM</strong> دبل کلیک کنید و متن پیام دایرکت را بنویسید (مثلاً: قیمت ۹۸۰ تومان، لینک خرید: ...)</li>
                        </ul>
                     </div>
                  </AccordionItem>
                </div>
              </section>

              {/* AEO: FAQ Section (Rich Snippets Target) */}
              <div className="mt-12 pt-8 border-t border-[var(--border)]">
                 <h2 className="text-xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[var(--secondary)]" />
                    سوالات متداول (FAQ)
                 </h2>
                 <div className="space-y-4">
                    <div className="bg-[var(--card)] p-4 rounded-xl border border-[var(--border)]">
                       <h3 className="font-bold text-[var(--foreground)] text-sm mb-2">آیا استفاده از این ربات باعث بلاک شدن پیج می‌شود؟</h3>
                       <p className="text-[var(--muted-foreground)] text-sm">خیر. چون این ربات از API رسمی فیسبوک (Graph API) استفاده می‌کند و از روش‌های غیرقانونی (مثل اسکرپینگ) استفاده نمی‌کند، کاملاً امن و مورد تایید متا است.</p>
                    </div>
                    <div className="bg-[var(--card)] p-4 rounded-xl border border-[var(--border)]">
                       <h3 className="font-bold text-[var(--foreground)] text-sm mb-2">آیا این ربات هزینه ماهانه دارد؟</h3>
                       <p className="text-[var(--muted-foreground)] text-sm">خیر. فایل این ربات کاملاً رایگان است. تنها هزینه‌ای که دارید، سرور شخصی خودتان برای اجرای n8n است (که بسیار ارزان‌تر از اشتراک ربات‌های آماده است).</p>
                    </div>
                 </div>
              </div>

              {/* Code Box */}
              <div className="space-y-4 mt-12">
                 <div className="flex justify-between items-end">
                    <h2 className="text-xl font-bold text-[var(--foreground)]">کد ورک‌فلو (JSON)</h2>
                 </div>
                <div className="bg-[#0f0e0d] rounded-xl overflow-hidden border border-[var(--border)] shadow-2xl relative group">
                  <div className="absolute top-4 right-4 z-10">
                    <Button size="sm" variant="secondary" className="h-8 text-xs hover:bg-[var(--primary)] hover:text-white border-0 transition-colors" onClick={handleCopyCode}>
                      {isCopied ? <span className="flex gap-1"><Check className="w-3 h-3"/> کپی شد</span> : <span className="flex gap-1"><Copy className="w-3 h-3"/> کپی کد</span>}
                    </Button>
                  </div>
                  <div className="p-4 overflow-x-auto dir-ltr max-h-64 custom-scrollbar">
                    <pre className="font-mono text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">{workflowJson}</pre>
                  </div>
                </div>
              </div>

              <AuthorBox />

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-10 space-y-6">
                <Card className="p-1 border-0 bg-gradient-to-b from-purple-600 to-pink-600 shadow-[var(--primary)]/30 shadow-2xl relative overflow-hidden">
                  <div className="bg-[var(--card)] rounded-[14px] p-6 h-full relative overflow-hidden">
                    <div className="space-y-6 relative z-10">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                           <Badge variant="default" className="bg-green-500/10 text-green-400 border-green-500/30">۱۰۰٪ رایگان</Badge>
                           <span className="text-[var(--muted-foreground)] text-sm line-through decoration-red-500/50">۸۹۰,۰۰۰ تومان</span>
                        </div>
                        <h3 className="text-3xl font-black text-[var(--foreground)]">دانلود آنی</h3>
                      </div>

                      <Button size="lg" className="w-full h-14 text-lg font-bold shadow-lg shadow-pink-500/20 hover:scale-[1.02] transition-all bg-gradient-to-r from-purple-600 to-pink-600 border-0">
                        <Download className="ml-2 w-5 h-5 animate-bounce" />
                        دریافت فایل JSON
                      </Button>
                      
                      <div className="pt-4 border-t border-[var(--border)] space-y-3">
                        {[
                          { label: "پلتفرم", val: "اینستاگرام", icon: Instagram }, 
                          { label: "نوع ربات", val: "Auto-DM", icon: Bot }, 
                          { label: "تعداد نصب", val: "۳,۵۰۰+", icon: Users },
                          { label: "امتیاز", val: "۴.۹/۵", icon: BarChart3 }
                        ].map((item, i) => (
                           <div key={i} className="flex justify-between items-center text-sm">
                              <span className="text-[var(--muted-foreground)] flex items-center gap-2"><item.icon className="w-4 h-4 opacity-50" /> {item.label}</span>
                              <span className="text-[var(--foreground)] font-mono font-bold dir-ltr">{item.val}</span>
                           </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}