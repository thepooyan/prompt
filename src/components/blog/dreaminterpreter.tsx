"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { aiSingleResponse } from "@/server/actions" 
import { 
  Brain, AlertCircle, Share2, 
  Sparkles, Moon, ChevronDown, Telescope, ScrollText, Binary, 
  HelpCircle, Star, CloudFog
} from "lucide-react"

// --- کامپوننت بنر اختصاصی ---
const DreamBanner = () => {
  return (
    <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden z-0">
      {/* --- استایل انیمیشن شناور (فقط برای این کامپوننت) --- */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* --- پس‌زمینه اصلی --- */}
      <div className="absolute inset-0 bg-[#050505]">
        {/* گرادینت‌های عمیق فضایی */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-950/40 via-[#0c0a09] to-[#050505]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[80%] bg-gradient-to-t from-amber-900/10 via-orange-900/5 to-transparent blur-[100px] opacity-60"></div>
      </div>

      {/* --- پترن‌های نوری و عصبی --- */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-net" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="#f59e0b" opacity="0.5"/>
              <path d="M50 50 L 80 20 M 50 50 L 20 80 M 50 50 L 80 80 M 50 50 L 20 20" stroke="#f59e0b" strokeWidth="0.5" opacity="0.2" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-net)" />
        </svg>
      </div>
      
      {/* --- المان‌های متحرک مرکزی --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] text-center z-10">
        <div className="relative inline-flex items-center justify-center">
          {/* هاله پشت مغز */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-56 md:h-56 bg-amber-500/20 rounded-full blur-[60px] animate-pulse"></div>
          
          {/* آیکون مغز درخشان */}
          <Brain className="h-24 w-24 md:h-36 md:w-36 text-amber-200/90 relative z-20 animate-float drop-shadow-[0_0_30px_rgba(245,158,11,0.6)]" />

          {/* المان‌های شناور اطراف مغز */}
          <div className="absolute top-0 left-0 animate-[spin_25s_linear_infinite_reverse] origin-center w-full h-full pointer-events-none">
             <Moon className="absolute -top-6 -left-6 md:-top-10 md:-left-10 h-6 w-6 md:h-8 md:w-8 text-indigo-300 animate-pulse delay-300 opacity-80" />
             <Star className="absolute top-1/2 -right-8 md:-right-16 h-5 w-5 md:h-6 md:w-6 text-yellow-200 animate-pulse delay-700 opacity-90" />
             <CloudFog className="absolute -bottom-8 left-1/2 h-8 w-8 md:h-10 md:w-10 text-stone-400/60 animate-pulse delay-1000" />
          </div>
        </div>
      </div>

       {/* --- ذرات جادویی پراکنده --- */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {[...Array(8)].map((_, i) => (
            <Sparkles key={i} className={`absolute h-2 w-2 md:h-3 md:w-3 text-amber-300 animate-pulse`} 
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.2
            }}/>
         ))}
       </div>

      {/* --- فید شدن پایین بنر --- */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-20"></div>
    </div>
  );
};

// --- کامپوننت اصلی ---
export default function Dreaminterpreter() {
  
  const [userDream, setUserDream] = useState("")
  const [interpretation, setInterpretation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInterpret = async () => {
    if (!userDream || userDream.length < 10) {
      setError("لطفاً خواب خود را با جزئیات بیشتری تعریف کنید (حداقل ۱۰ کاراکتر).")
      return
    }
    
    setIsLoading(true)
    setError("")
    setInterpretation("")

    const systemPrompt = `
      تو یک مفسر خواب خردمند هستی. بر اساس روانشناسی یونگ تحلیل کن.
      خواب: "${userDream}"
      فرمت پاسخ:
      ۱. 🌙 **بینش اصلی:** ...
      ۲. ✨ **رمزگشایی نمادها:** ...
      ۳. 🧠 **آینه ناخودآگاه:** ...
      ۴. 💡 **رهنمود بیداری:** ...
      لحن: ادبی، آرامش‌بخش، امیدوارکننده.
    `

    try {
      const res = await aiSingleResponse(systemPrompt)
      setInterpretation(res)
    } catch (err) {
      setError("خطا در ارتباط با هوش مصنوعی. لطفاً دوباره تلاش کنید.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = () => {
    if (!interpretation) return;
    navigator.clipboard.writeText(interpretation)
    alert("تعبیر خواب کپی شد!")
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prevIndex => (prevIndex === index ? null : index))
  }

  const faqs = [
    {
      question: "آیا تعبیر خواب آنلاین با هوش مصنوعی دقیق است؟",
      answer: "بله، هوش مصنوعی برخلاف کتاب‌های قدیمی، کل بافت (Context) خواب شما را تحلیل می‌کند و بر اساس روانشناسی یونگ، دقیق‌ترین تعبیر شخصی‌سازی شده را ارائه می‌دهد."
    },
    {
      question: "تفاوت این ابزار با کتاب‌های قدیمی چیست؟",
      answer: "کتاب‌های سنتی معانی ثابتی دارند. اما در تعبیر خواب آنلاین هوشمند، نمادها بر اساس احساسات شما در خواب تحلیل می‌شوند."
    },
    {
      question: "آیا استفاده از این ابزار رایگان است؟",
      answer: "بله، کاملاً رایگان و بدون نیاز به ثبت‌نام است."
    }
  ]

  return (
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden selection:bg-amber-500/30 selection:text-amber-100">
      
      {/* 1. بنر بالای صفحه */}
      <DreamBanner />

      {/* پس‌زمینه جادویی گلوبال (پایین صفحه) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-yellow-600/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('/images/neural-bg.svg')] opacity-[0.03] mix-blend-screen"></div>
        
        {/* ذرات معلق */}
        {mounted && (
           <>
             <div className="absolute top-1/2 left-10 w-1 h-1 bg-white rounded-full animate-ping opacity-20 duration-[3s]"></div>
             <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-orange-200 rounded-full animate-ping opacity-20 duration-[5s]"></div>
           </>
        )}
      </div>

      {/* 2. کانتینر اصلی محتوا 
         نکته مهم: کلاس -mt-[100px] باعث می‌شود کارت‌ها کمی روی فید پایین بنر قرار بگیرند 
      */}
      <div className="container mx-auto px-4 pb-16 pt-0 md:pb-24 max-w-4xl relative z-10 -mt-[60px] md:-mt-[100px]">
        
        {/* هدر متنی */}
        <header className="text-center space-y-6 mb-12 relative">
            <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
               <div className="px-4 py-1.5 rounded-full bg-[#0c0a09]/80 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
                  <span className="text-amber-200 text-sm font-medium tracking-wide">هوش مصنوعی PromptBazar</span>
               </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              تعبیر خواب آنلاین
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 animate-text-shimmer bg-[length:200%_auto]">
                 با هوش مصنوعی
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-stone-400 max-w-xl mx-auto leading-relaxed">
              سفری به اعماق <strong className="text-amber-100 font-medium border-b border-amber-500/30">ناخودآگاه</strong>. 
              تحلیل دقیق و روانشناسانه رویاهای شما.
            </p>
        </header>

        {/* کارت اصلی ورودی */}
        <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-amber-500/50 via-transparent to-orange-500/50 shadow-2xl shadow-amber-900/30">
          
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative bg-[#0c0a09]/90 backdrop-blur-2xl rounded-[23px] overflow-hidden h-full">
            
            <div className="p-6 md:p-8 border-b border-white/5 flex items-center gap-4 bg-gradient-to-r from-white/5 to-transparent">
               <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 shadow-inner">
                  <Moon className="h-6 w-6 text-amber-400" />
               </div>
               <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                 رویاهاتو بنویس...
               </h2>
            </div>
            
            <div className="p-6 md:p-8 space-y-8">
              <div className="relative group/input">
                <textarea
                  value={userDream}
                  onChange={(e) => setUserDream(e.target.value)}
                  placeholder="دیشب خواب دیدم در یک جنگل طلایی قدم می‌زنم و..."
                  className="w-full min-h-[200px] bg-black/40 border border-white/10 rounded-2xl p-6 text-base md:text-lg text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all resize-y shadow-inner"
                />
                <div className="absolute bottom-4 right-4 text-stone-700 text-xs pointer-events-none group-focus-within/input:text-amber-500/50 transition-colors">
                   AI Ready
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-3 text-red-200 bg-red-900/20 p-4 rounded-xl border border-red-500/20 animate-in fade-in slide-in-from-top-2">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  {error}
                </div>
              )}

              <button
                onClick={handleInterpret}
                disabled={isLoading}
                className="relative w-full group overflow-hidden rounded-2xl p-[2px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                 <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F59E0B_0%,#39342f_50%,#F59E0B_100%)]" />
                 <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-[#1c1917] px-8 py-6 text-xl font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-[#292524] ${isLoading ? 'opacity-90' : ''}`}>
                    {isLoading ? (
                        <div className="flex items-center gap-3">
                           <Brain className="h-6 w-6 text-amber-400 animate-pulse" />
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200 animate-pulse">
                              در حال ارتباط با ناخودآگاه...
                           </span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 group-hover:scale-105 transition-transform">
                           <Telescope className="h-6 w-6 text-amber-400" />
                           <span>تعبیرش چیه؟</span>
                           <Star className="h-4 w-4 text-yellow-400 animate-[spin_3s_linear_infinite]" />
                        </div>
                    )}
                 </span>
              </button>

              {interpretation && (
                <div className="relative mt-12 rounded-2xl bg-gradient-to-b from-amber-500/5 to-transparent border border-amber-500/10 p-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent blur-sm"></div>
                  
                  <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-yellow-200 flex items-center gap-3">
                      <ScrollText className="h-6 w-6 text-amber-500" />
                      پیام رویای تو
                    </h3>
                    <button onClick={copyToClipboard} className="text-stone-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                        <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="text-stone-200 leading-[2.2] text-justify text-lg whitespace-pre-wrap font-light tracking-wide">
                    {interpretation}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* سوالات متداول */}
        <section className="mt-24">
            <div className="text-center mb-12">
                <div className="inline-block p-3 rounded-2xl bg-white/5 border border-white/5 mb-4">
                    <HelpCircle className="h-8 w-8 text-amber-500" />
                </div>
                <h2 className="text-3xl font-bold text-white">سوالات متداول</h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-amber-950/20 border-amber-500/30' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-lg font-medium text-stone-200 hover:text-amber-200 text-right transition-colors focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 text-stone-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-400' : 'group-hover:text-white'}`} />
                    </button>
                    
                    <div className={`px-6 text-stone-400 text-base leading-relaxed text-justify overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                      {faq.answer}
                    </div>
                  </div>
                )
              })}
            </div>
        </section>

        {/* فوتر بنر */}
        <section className="mt-24 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1c1917] to-[#0c0a09] p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-[url('/images/neural-bg.svg')] opacity-5"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
             <div className="p-4 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 mb-2">
                <Binary className="h-10 w-10 text-amber-500" />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white">هنرِ مهندسی پرامپت</h2>
             <p className="text-stone-400 text-lg max-w-xl mx-auto">
               این ابزار تنها گوشه‌ای از قدرت <span className="text-amber-400 font-bold">اتوماسیون و n8n</span> است. 
               یاد بگیرید چگونه خالق چنین ابزارهایی باشید.
             </p>
             <div className="flex flex-wrap justify-center gap-4 mt-4 w-full">
               <Link href="/what-is-prompt" className="w-full md:w-auto">
                 <button className="w-full md:w-auto px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all hover:scale-105">
                    آموزش پرامپت
                 </button>
               </Link>
               <Link href="/n8n" className="w-full md:w-auto">
                 <button className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold shadow-lg shadow-amber-900/40 hover:shadow-amber-600/40 transition-all hover:scale-105">
                    دانلود ورک‌فلوها
                 </button>
               </Link>
             </div>
          </div>
        </section>

      </div>
    </main>
  )
}