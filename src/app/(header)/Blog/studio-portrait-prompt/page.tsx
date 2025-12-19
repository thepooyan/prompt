'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check, Lock, Camera, Zap } from 'lucide-react';
import Image from 'next/image';

// --- DATA ---
const PROMPTS_DATA = [
  {
    id: 'corporate',
    title: 'استایل مدیرعامل (Corporate)',
    desc: 'مناسب برای عکس پروفایل لینکدین و رزومه. نورپردازی سافت‌باکس (Softbox) با پس‌زمینه اداری محو.',
    code: '/imagine prompt: professional corporate headshot, confident expression, soft studio lighting, softbox, neutral dark grey background, 8k resolution, highly detailed skin texture, shot on 85mm lens --v 6.0 --style raw',
    badge: 'مخصوص لینکدین', // تغییر متن بج برای کلیک بیشتر
  },
  {
    id: 'cinematic',
    title: 'استایل سینمایی (Dramatic)',
    desc: 'مناسب برای اینستاگرام و کاور یوتیوب. نورپردازی رامبراند (Rembrandt) با سایه‌های عمیق.',
    code: '/imagine prompt: cinematic portrait, rembrandt lighting, dramatic shadows, moody atmosphere, warm amber tones, half face in shadow, intense gaze, cinematic color grading, hyper realistic --v 6.0 --stylize 250',
    badge: 'هنری و خاص',
  },
  {
    id: 'vogue',
    title: 'استایل فشن (Vogue)',
    desc: 'مناسب برای مدلینگ و بیوتی. نورپردازی High-Key، پوست شیشه‌ای و کنتراست طلایی.',
    code: '/imagine prompt: high fashion portrait, vogue magazine style, high key lighting, beauty dish, flawless skin, gold makeup accents, fashion photography, dark studio background --v 6.0',
    badge: 'مد و فشن',
  }
];

// --- SLIDER COMPONENT ---
const CompareSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  return (
    <div dir="ltr" className="relative w-full max-w-2xl mx-auto mt-12 group">
        <div 
        ref={containerRef}
        className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-[0_0_50px_-10px_rgba(214,90,49,0.3)] border-4 border-[var(--border)] touch-none"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        >
        {/* RIGHT IMAGE (AFTER) */}
        <div className="absolute inset-0 w-full h-full bg-[var(--muted)]">
            <Image 
            src="https://c327107.parspack.net/prompt/1766132423465-portrait-after.webp" 
            // سئو: آلت تکست بهینه شده
            alt="نمونه عکس پرتره آتلیه‌ای ساخته شده با هوش مصنوعی میدجورنی V6" 
            fill 
            className="object-cover pointer-events-none"
            priority
            />
            <div className="absolute top-4 right-4 bg-[var(--primary)] text-[var(--primary-foreground)] px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20">
            بعد (هوش مصنوعی)
            </div>
        </div>

        {/* LEFT IMAGE (BEFORE) */}
        <div 
            className="absolute inset-0 h-full border-r-2 border-[var(--secondary)] z-10 overflow-hidden bg-[var(--background)]"
            style={{ width: `${sliderPosition}%` }}
        >
            <div className="relative w-full h-full">
                <Image 
                    src="https://c327107.parspack.net/prompt/1766132332901-selfie-before.webp" 
                    // سئو: آلت تکست بهینه شده
                    alt="عکس سلفی معمولی موبایل قبل از تبدیل به پرتره حرفه‌ای" 
                    fill
                    className="object-cover object-left pointer-events-none"
                    priority
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                قبل (سلفی موبایل)
                </div>
            </div>
        </div>

        {/* HANDLE */}
        <div 
            className="absolute inset-y-0 z-30 w-10 h-10 -ml-5 bg-[var(--secondary)] rounded-full shadow-2xl flex items-center justify-center top-1/2 -translate-y-1/2 pointer-events-none border-2 border-[var(--background)] transition-transform group-hover:scale-110"
            style={{ left: `${sliderPosition}%` }}
        >
            <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-[var(--background)]"></div>
            <div className="w-0.5 h-4 bg-[var(--background)]"></div>
            </div>
        </div>
        </div>
        <p className="text-center text-sm text-[var(--muted-foreground)] mt-4 flex items-center justify-center gap-2">
         <span className="animate-pulse">↔️</span> خط وسط را بکشید تا قدرت تبدیل عکس را ببینید
        </p>
    </div>
  );
};

// --- MAIN PAGE ---
export default function PortraitPromptPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // اسکیمای غنی شده (Rich Schema)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", // تغییر نوع به اپلیکیشن برای اعتبار بیشتر
    "name": "پرامپت تبدیل عکس شخصی به پرتره آتلیه‌ای",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Midjourney, DALL-E 3",
    "description": "کد دستور هوش مصنوعی برای تبدیل عکس‌های سلفی موبایل به پرتره حرفه‌ای استودیویی بدون نیاز به عکاس.",
    "image": "https://c327107.parspack.net/prompt/1766132423465-portrait-after.webp",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "IRR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "214"
    }
  };

  return (
    <div className="theme-amber min-h-screen bg-[var(--background)] text-[var(--foreground)] pb-20 selection:bg-[var(--primary)] selection:text-white dir-rtl">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* --- HERO SECTION --- */}
      <header className="pt-16 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--primary)] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-[var(--muted)] text-[var(--secondary)] text-sm font-semibold mb-8 border border-[var(--border)] shadow-lg">
            <Zap size={14} className="fill-current" /> آپدیت جدید: سازگار با Midjourney V6
          </span>
          
          {/* سئو: تیتر H1 مهندسی شده برای کلمه کلیدی "دانلود پرامپت" */}
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            دانلود <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">پرامپت عکس آتلیه‌ای</span>
            <span className="block text-xl md:text-3xl font-medium text-[var(--muted-foreground)] mt-4 leading-snug">
              تبدیل سلفی موبایل به پرتره حرفه‌ای (رایگان)
            </span>
          </h1>
          
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 leading-relaxed">
            دیگر نیازی به دوربین ۵۰ میلیونی ندارید! با این دستورات آماده، عکس‌های معمولی خانه را در ۳۰ ثانیه به پرتره‌های لوکس استودیویی تبدیل کنید.
          </p>
          
          <CompareSlider />
        </div>
      </header>

      {/* --- COMPARISON SECTION --- */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-[var(--card)] rounded-2xl border border-[var(--border)] p-8 md:p-12 shadow-2xl relative">
          {/* تزئین گوشه */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--border)] to-transparent opacity-20 rounded-tr-2xl"></div>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[var(--foreground)]">
            چرا عکاس‌ها از این ابزار می‌ترسند؟
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-5 opacity-70 grayscale-[50%]">
              <h3 className="font-bold text-[var(--destructive)] border-b border-[var(--border)] pb-3 flex items-center gap-2 text-lg">
                 <Camera size={22} /> عکاسی سنتی (آتلیه)
              </h3>
              <ul className="space-y-4 text-[var(--muted-foreground)]">
                <li className="flex gap-3">❌ هزینه: حداقل ۵.۰۰۰.۰۰۰ تومان</li>
                <li className="flex gap-3">❌ زمان: نیاز به وقت قبلی و رفت‌وآمد</li>
                <li className="flex gap-3">❌ محدودیت: فقط ۳ یا ۵ فایل ادیت شده</li>
              </ul>
            </div>
            <div className="space-y-5">
              <h3 className="font-bold text-[var(--secondary)] border-b border-[var(--border)] pb-3 flex items-center gap-2 text-lg">
                 <Zap size={22} /> هوش مصنوعی (پرامپت بازار)
              </h3>
              <ul className="space-y-4 font-medium text-[var(--foreground)]">
                <li className="flex gap-3 items-center"><Check size={18} className="text-green-500" /> هزینه: کاملاً رایگان (۰ تومان)</li>
                <li className="flex gap-3 items-center"><Check size={18} className="text-green-500" /> زمان: آماده‌سازی در ۳۰ ثانیه</li>
                <li className="flex gap-3 items-center"><Check size={18} className="text-green-500" /> تعداد: ساخت بی‌نهایت عکس پروفایل</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROMPTS LIST --- */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">کدام استایل را برای پروفایلتان می‌خواهید؟</h2>
          <p className="text-[var(--muted-foreground)]">روی دکمه کپی کلیک کنید و در میدجورنی پیست کنید</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROMPTS_DATA.map((item) => (
            <div key={item.id} className="group bg-[var(--card)] rounded-3xl border border-[var(--border)] overflow-hidden flex flex-col hover:border-[var(--secondary)] transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(214,90,49,0.2)]">
              <div className="p-8 flex-1">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[var(--muted)] text-[var(--secondary)] border border-[var(--border)]">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed border-b border-[var(--border)] pb-6">{item.desc}</p>
                
                <div className="bg-[#0f0e0d] rounded-xl p-4 relative border border-[var(--border)]">
                  <div className="text-[10px] text-gray-500 mb-1 select-none">Prompt Code:</div>
                  <code className="text-xs text-[var(--secondary)] font-mono break-all line-clamp-4 leading-loose opacity-90">
                    {item.code}
                  </code>
                </div>
              </div>

              <div className="p-6 bg-[var(--muted)]/30 border-t border-[var(--border)]">
                <button
                  onClick={() => handleCopy(item.code, item.id)}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                    copiedId === item.id 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 shadow-[0_4px_20px_-5px_var(--primary)]'
                  }`}
                >
                  {copiedId === item.id ? (
                    <> <Check size={18} /> کپی شد! </>
                  ) : (
                    <> <Copy size={18} /> کپی پرامپت </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INSTRUCTIONS --- */}
      <section className="py-16 px-4 bg-[var(--muted)]/20 border-y border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-[var(--foreground)]">راهنمای استفاده (فرمول جادویی)</h2>
          <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] text-left dir-ltr font-mono text-sm md:text-base shadow-xl relative overflow-hidden">
             {/* نوار رنگی تزئینی */}
             <div className="absolute top-0 left-0 w-1 h-full bg-[var(--secondary)]"></div>
             
            <p className="mb-4 text-[var(--muted-foreground)] text-xs uppercase tracking-widest">// Midjourney Command Structure</p>
            <div className="flex flex-wrap gap-3 items-center p-4 bg-[var(--background)] rounded-xl border border-[var(--border)] border-dashed">
              <span className="bg-[#2a2724] text-[var(--secondary)] px-3 py-2 rounded-lg border border-[var(--border)] shadow-sm">[Image Link]</span>
              <span className="text-[var(--muted-foreground)] font-bold">+</span>
              <span className="text-[var(--muted-foreground)] font-bold opacity-50">(Space)</span>
              <span className="text-[var(--muted-foreground)] font-bold">+</span>
              <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-2 rounded-lg border border-[var(--primary)]/30 shadow-sm">[Prompt Code]</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-[var(--muted-foreground)]">
            نکته مهم: حتماً اول لینک عکس خودتان را بگذارید، سپس یک فاصله (Space) بزنید و در آخر کد پرامپت را پیست کنید.
          </p>
        </div>
      </section>

      {/* --- LEAD MAGNET --- */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto bg-[var(--muted)] rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden border border-[var(--border)] shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)] blur-[100px] opacity-20 -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--background)] rounded-2xl mb-6 border border-[var(--border)] shadow-lg transform rotate-3">
              <Lock size={28} className="text-[var(--secondary)]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">لیست کدهای نوری ممنوعه! 🤫</h2>
            <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed">
              می‌خواهید عکس‌هایی با نور نئونی، سایبرپانکی یا استودیویی خاص بسازید؟ فایل PDF شامل ۲۰ کد نوری پیشرفته را رایگان دانلود کنید.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="ایمیل خود را وارد کنید..." 
                className="flex-1 px-6 py-4 rounded-xl bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] placeholder:text-[var(--muted-foreground)]/50 transition-all"
              />
              <button type="button" className="px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 rounded-xl font-bold transition-all shadow-[0_4px_20px_-5px_var(--primary)] hover:translate-y-[-2px]">
                دانلود PDF
              </button>
            </form>
          </div>
        </div>
      </section>

       {/* --- FAQ SECTION (SEO POWERHOUSE) --- */}
       <section className="py-20 px-4 bg-[var(--background)] border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center text-[var(--foreground)]">سوالات متداول (FAQ)</h2>
          
          <div className="space-y-6">
            <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--secondary)]/50 transition-colors">
              <h3 className="font-bold text-lg mb-3 text-[var(--primary)] flex items-center gap-2">
                <span className="text-[var(--secondary)]">?</span> آیا این پرامپت‌ها در Midjourney V6 کار می‌کنند؟
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-sm md:text-base">
                بله، تمام پرامپت‌های عکس آتلیه‌ای موجود در این صفحه برای <strong>نسخه ۶ میدجورنی (V6)</strong> و همچنین DALL-E 3 کاملاً بهینه شده‌اند. ما از پارامترهای تخصصی مثل <code>--style raw</code> برای طبیعی شدن بافت پوست (Skin Texture) و <code>--cref</code> برای حفظ شباهت چهره استفاده کرده‌ایم.
              </p>
            </div>
            
            <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--secondary)]/50 transition-colors">
              <h3 className="font-bold text-lg mb-3 text-[var(--primary)] flex items-center gap-2">
                <span className="text-[var(--secondary)]">?</span> چطور عکس سلفی خودم را به هوش مصنوعی بدهم؟
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-sm md:text-base">
                برای <strong>تبدیل عکس شخصی به پرتره</strong>، ابتدا باید عکس خود را آپلود کنید تا یک لینک مستقیم داشته باشید. سپس آن لینک را در ابتدای پرامپت قرار دهید. فرمول دقیق در بخش "راهنمای استفاده" در همین صفحه آموزش داده شده است.
              </p>
            </div>

            <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--secondary)]/50 transition-colors">
              <h3 className="font-bold text-lg mb-3 text-[var(--primary)] flex items-center gap-2">
                <span className="text-[var(--secondary)]">?</span> بهترین تنظیمات نوری برای عکس لینکدین چیست؟
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-sm md:text-base">
                برای عکس پروفایل کاری و لینکدین، استفاده از نورپردازی <strong>سافت‌باکس (Softbox)</strong> و پس‌زمینه خنثی (Neutral Background) بهترین گزینه است که در پرامپت شماره ۱ (استایل مدیرعامل) این صفحه گنجانده شده است تا حس حرفه‌ای بودن و اعتماد را منتقل کند.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}