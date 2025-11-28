"use client";

import React, { useState } from 'react';
import { 
  Download, 
  Share2, 
  Clock, 
  Zap, 
  Shield, 
  CheckCircle2, 
  Copy, 
  Terminal,
  TrendingUp,
  AlertCircle,
  ChevronDown,
  Bot,
  FileJson,
  Database,
  ExternalLink,
  Check,
  Globe,
  BellRing,
  LineChart,
  BookOpen,
  Cpu
} from "lucide-react";

// --- استایل‌های تم AMBER (طبق فایل CSS شما) ---
// این استایل‌ها باید در فایل global.css شما باشند، اما اینجا هم برای اطمینان قرار دادم.
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
    --accent: #A85D3A;
    --muted: #3C3028;
    --muted-foreground: #D9C4A9;
    --border: #4C3A2F;
  }
`;

// --- کامپوننت‌های UI اختصاصی با تم Amber ---

const Button = ({ children, variant = "default", size = "default", className = "", ...props }: any) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] disabled:pointer-events-none disabled:opacity-50 active:scale-95";
  const variants: any = {
    default: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-110 shadow-lg shadow-[var(--primary)]/20",
    outline: "border border-[var(--border)] bg-transparent hover:bg-[var(--muted)] text-[var(--foreground)]",
    secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:brightness-110",
    ghost: "hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
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
    secondary: "bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)]",
    fire: "bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse",
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

// --- باکس نویسنده ---
function AuthorBox() {
  return (
    <div className="mt-24 pt-12 border-t border-[var(--border)]">
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:border-[var(--primary)]/30 transition duration-300 group shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>

        {/* Author Image */}
        <a href="/Authors/peyman" className="shrink-0 relative z-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
          <img 
            src="https://c327107.parspack.net/prompt/1763293380820-7da4d49b-0a7d-49ed-bd42-6c1f46d7424b.jpeg" 
            alt="پیمان کلانتر نظری" 
            className="relative w-24 h-24 rounded-full object-cover border-2 border-[var(--background)] shadow-xl ring-1 ring-[var(--border)]"
          />
        </a>

        {/* Author Info */}
        <div className="text-center md:text-right flex-1 z-10 space-y-3">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-2">
             <h3 className="text-xl font-black text-[var(--foreground)] flex items-center gap-2">
               نویسنده: <a href="/Authors/peyman" className="hover:text-[var(--primary)] transition underline-offset-4 hover:underline decoration-[var(--primary)]">پیمان کلانتر نظری</a>
             </h3>
             <Badge variant="secondary">مدرس و طراح اتوماسیون</Badge>
          </div>
          
          <p className="text-sm text-[var(--muted-foreground)] leading-loose max-w-2xl">
            متخصص دیجیتال مارکتینگ و اتوماسیون فرآیند (n8n). من به شما کمک می‌کنم با استفاده از هوش مصنوعی و ابزارهای No-Code، فرآیندهای تکراری کسب‌وکارتان را حذف کنید.
          </p>
          
          <div className="pt-2 flex justify-center md:justify-start">
             <a href="/Authors/peyman" className="inline-flex items-center text-xs font-bold text-[var(--primary)] hover:text-[var(--secondary)] transition gap-1.5 px-4 py-2 bg-[var(--primary)]/5 rounded-full border border-[var(--primary)]/20 hover:bg-[var(--primary)]/10">
               مشاهده رزومه و سایر آموزش‌ها
               <ExternalLink className="w-3 h-3" />
             </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CryptosignalPage() {
  const [isCopied, setIsCopied] = useState(false);
  const [openStep, setOpenStep] = useState(1);

  // کد ورک‌فلو (CoinGecko)
  const workflowJson = JSON.stringify({
    "name": "Crypto Volatility Alert",
    "nodes": [
      { "parameters": { "rule": { "interval": [{ "field": "minutes", "minutesInterval": 10 }] } }, "name": "Schedule", "type": "n8n-nodes-base.scheduleTrigger", "typeVersion": 1.1, "position": [460, 300] },
      { "parameters": { "values": { "string": [{ "name": "coin_id", "value": "bitcoin" }, { "name": "target_price", "value": "95000" }] }, "options": {} }, "name": "Config", "type": "n8n-nodes-base.set", "typeVersion": 2, "position": [680, 300] },
      { "parameters": { "url": "={{ 'https://api.coingecko.com/api/v3/simple/price?ids=' + $json.coin_id + '&vs_currencies=usd' }}", "options": {} }, "name": "Get Price", "type": "n8n-nodes-base.httpRequest", "typeVersion": 4.1, "position": [900, 300] },
      { "parameters": { "conditions": { "number": [{ "value1": "={{ $json[$node['Config'].json.coin_id].usd }}", "operation": "larger", "value2": "={{ $node['Config'].json.target_price }}" }] } }, "name": "Check", "type": "n8n-nodes-base.if", "typeVersion": 1, "position": [1120, 300] },
      { "parameters": { "chatId": "YOUR_CHAT_ID", "text": "🚨 *هشدار نوسان {{ $node['Config'].json.coin_id }}*\n\nقیمت فعلی: {{ $json[$node['Config'].json.coin_id].usd }} دلار", "additionalFields": { "parse_mode": "Markdown" } }, "name": "Telegram", "type": "n8n-nodes-base.telegram", "typeVersion": 1.1, "position": [1340, 300] }
    ],
    "connections": {
      "Schedule": { "main": [[{ "node": "Config", "type": "main", "index": 0 }]] },
      "Config": { "main": [[{ "node": "Get Price", "type": "main", "index": 0 }]] },
      "Get Price": { "main": [[{ "node": "Check", "type": "main", "index": 0 }]] },
      "Check": { "main": [[{ "node": "Telegram", "type": "main", "index": 0 }]] }
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
      <div className="theme-amber min-h-screen bg-[var(--background)] text-[var(--foreground)]" dir="rtl">
        
        {/* Hero Section - No Header */}
        <div className="relative pt-20 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[100px] -z-10"></div>
          
          <div className="container mx-auto px-4 text-center">
             <Badge variant="fire" className="mb-6 px-4 py-1.5 text-sm">
                🔥 ابزار ویژه تریدرها (نوسان‌گیری)
             </Badge>
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[var(--foreground)] mb-6 leading-tight">
                ربات <span className="text-[var(--primary)]">نوسان‌گیر و سیگنال‌دهی</span> ارز دیجیتال
                <br/>
                <span className="text-2xl md:text-3xl text-[var(--muted-foreground)] opacity-80 mt-3 block">(هشدار لحظه‌ای تلگرام)</span>
             </h1>
             <p className="text-[var(--muted-foreground)] text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                بدون نیاز به چک کردن مداوم چارت‌ها! این ربات هوشمند n8n به صورت ۲۴ ساعته بازار را برای شما رصد می‌کند و به محض اینکه قیمت به نقطه ورود یا خروج رسید، به شما پیام می‌دهد.
             </p>
          </div>
        </div>

        <main className="container max-w-6xl mx-auto px-4 -mt-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Content Area */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Topic Cluster Links */}
              <div className="bg-[var(--muted)]/20 border border-[var(--border)] p-5 rounded-xl shadow-inner">
                 <div className="flex items-center gap-2 mb-3 text-[var(--secondary)] font-bold">
                    <BookOpen className="w-5 h-5" />
                    <span>مسیر یادگیری (پیش‌نیازها):</span>
                 </div>
                 <p className="text-sm text-[var(--muted-foreground)] mb-4">
                    اگر تازه با دنیای اتوماسیون آشنا شده‌اید، پیشنهاد می‌کنم قبل از دانلود ربات، مقالات زیر را مرور کنید تا با پایه کار آشنا شوید:
                 </p>
                 <div className="flex flex-wrap gap-3">
                    <a href="/what-is-n8n" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors text-sm font-medium">
                       <Bot className="w-4 h-4" /> n8n چیست؟
                    </a>
                    <a href="/download-install-n8n" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors text-sm font-medium">
                       <Cpu className="w-4 h-4" /> آموزش نصب n8n
                    </a>
                 </div>
              </div>

              {/* Visual Workflow Icons */}
              <div className="rounded-3xl p-1 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--background)] shadow-2xl">
                <div className="bg-[#151311] rounded-[22px] p-8 md:p-12 relative overflow-hidden">
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        {[
                          { icon: Clock, label: "رصد ۱۰ دقیقه‌ای" },
                          { icon: Database, label: "تنظیم تارگت" },
                          { icon: Globe, label: "چک کردن قیمت" },
                          { icon: Share2, label: "اعلام سیگنال" }
                        ].map((node, i) => (
                          <React.Fragment key={i}>
                            <div className="flex flex-col items-center gap-3 group">
                              <div className="w-16 h-16 rounded-2xl border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-[var(--primary)] shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <node.icon className="w-7 h-7" />
                              </div>
                              <span className="text-xs font-bold text-[var(--muted-foreground)]">{node.label}</span>
                            </div>
                            {i < 3 && <div className="hidden md:block w-8 h-0.5 bg-[var(--border)] relative"></div>}
                          </React.Fragment>
                        ))}
                  </div>
                </div>
              </div>

              {/* Tutorial Section */}
              <section id="tutorial">
                 <div className="flex items-center gap-3 mb-6">
                    <Terminal className="w-8 h-8 text-[var(--primary)]" />
                    <h2 className="text-2xl font-black text-[var(--foreground)]">راهنمای نصب (مرحله به مرحله)</h2>
                 </div>

                <div className="grid gap-4">
                  <AccordionItem number="۱" title="مرحله اول: ساخت کانال تلگرام" isOpen={openStep === 1} onClick={() => setOpenStep(openStep === 1 ? 0 : 1)}>
                    <div className="space-y-3 text-[var(--muted-foreground)]">
                       <p>برای اینکه ربات بتواند به شما پیام دهد، باید یک «بات» در تلگرام بسازید:</p>
                       <ul className="space-y-3 list-none text-sm">
                         <li className="flex gap-2 items-start"><span className="text-[var(--primary)] font-bold">۱.</span> وارد ربات <strong className="text-[var(--secondary)]">BotFather@</strong> در تلگرام شوید.</li>
                         <li className="flex gap-2 items-start"><span className="text-[var(--primary)] font-bold">۲.</span> دکمه Start را بزنید و دستور <code className="bg-[var(--card)] px-1 rounded">/newbot</code> را ارسال کنید.</li>
                         <li className="flex gap-2 items-start"><span className="text-[var(--primary)] font-bold">۳.</span> نامی انتخاب کنید و توکن (Token) را کپی کنید.</li>
                       </ul>
                    </div>
                  </AccordionItem>

                  <AccordionItem number="۲" title="مرحله دوم: دریافت آیدی عددی (Chat ID)" isOpen={openStep === 2} onClick={() => setOpenStep(openStep === 2 ? 0 : 2)}>
                     <div className="space-y-3 text-[var(--muted-foreground)]">
                       <p>حالا باید آدرس پستی تلگرام خودتان را پیدا کنید:</p>
                       <ul className="space-y-3 list-none text-sm">
                         <li className="flex gap-2 items-start"><span className="text-[var(--primary)] font-bold">۱.</span> ربات <strong className="text-[var(--secondary)]">userinfobot@</strong> را در تلگرام استارت کنید.</li>
                         <li className="flex gap-2 items-start"><span className="text-[var(--primary)] font-bold">۲.</span> عددی که جلوی کلمه <strong>Id</strong> نوشته شده را کپی کنید.</li>
                       </ul>
                     </div>
                  </AccordionItem>

                  <AccordionItem number="۳" title="مرحله سوم: اجرای ربات در n8n" isOpen={openStep === 3} onClick={() => setOpenStep(openStep === 3 ? 0 : 3)}>
                     <div className="space-y-3 text-[var(--muted-foreground)]">
                        <ul className="space-y-3 list-none text-sm">
                           <li className="flex gap-2 items-start"><span className="text-[var(--primary)] font-bold">۱.</span> کد موجود در باکس سیاه رنگ پایین همین صفحه را کپی کنید.</li>
                           <li className="flex gap-2 items-start"><span className="text-[var(--primary)] font-bold">۲.</span> وارد پنل n8n خود شوید و دکمه <strong>Ctrl + V</strong> را بزنید.</li>
                           <li className="flex gap-2 items-start"><span className="text-[var(--primary)] font-bold">۳.</span> توکن ربات و آیدی عددی را در نود Telegram وارد کنید.</li>
                        </ul>
                     </div>
                  </AccordionItem>
                </div>
              </section>

              {/* Code Box */}
              <div className="space-y-4">
                 <div className="flex justify-between items-end">
                    <h2 className="text-xl font-bold text-[var(--foreground)]">سورس کد ربات (JSON)</h2>
                 </div>
                <div className="bg-[#0f0e0d] rounded-xl overflow-hidden border border-[var(--border)] shadow-2xl relative group">
                  <div className="absolute top-4 right-4 z-10">
                    <Button size="sm" variant="secondary" className="h-8 text-xs hover:bg-[var(--primary)] hover:text-white border-0 transition-colors" onClick={handleCopyCode}>
                      {isCopied ? <span className="flex gap-1"><Check className="w-3 h-3"/> کپی شد</span> : <span className="flex gap-1"><Copy className="w-3 h-3"/> کپی کد</span>}
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 bg-[var(--muted)]/20 border-b border-[var(--border)]">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="p-4 overflow-x-auto dir-ltr max-h-64 custom-scrollbar">
                    <pre className="font-mono text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">{workflowJson}</pre>
                  </div>
                </div>
              </div>

              {/* Author Box */}
              <AuthorBox />

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-10 space-y-6">
                
                {/* Download CTA */}
                <Card className="p-1 border-0 bg-gradient-to-b from-[var(--primary)] to-[var(--accent)] shadow-[var(--primary)]/30 shadow-2xl relative group overflow-hidden">
                  <div className="bg-[var(--card)] rounded-[14px] p-6 h-full relative overflow-hidden">
                    <div className="space-y-6 relative z-10">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                           <Badge variant="default" className="bg-green-500/10 text-green-400 border-green-500/30">رایگان</Badge>
                           <span className="text-[var(--muted-foreground)] text-sm line-through decoration-red-500/50">۲۹۰,۰۰۰ تومان</span>
                        </div>
                        <h3 className="text-3xl font-black text-[var(--foreground)]">دانلود آنی</h3>
                      </div>

                      <Button size="lg" className="w-full h-14 text-lg font-bold shadow-lg shadow-[var(--primary)]/20 group-hover:shadow-[var(--primary)]/40 hover:scale-[1.02] transition-all">
                        <Download className="ml-2 w-5 h-5 animate-bounce" />
                        دریافت فایل JSON
                      </Button>
                      
                      <div className="pt-4 border-t border-[var(--border)] space-y-3">
                        {[
                          { label: "فرمت فایل", val: "JSON", icon: FileJson },
                          { label: "منبع قیمت", val: "CoinGecko", icon: Database },
                          { label: "تعداد دانلود", val: "۱,۴۲۰+", icon: TrendingUp },
                        ].map((item, i) => (
                           <div key={i} className="flex justify-between items-center text-sm">
                              <span className="text-[var(--muted-foreground)] flex items-center gap-2">
                                 <item.icon className="w-4 h-4 opacity-50" /> {item.label}
                              </span>
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
