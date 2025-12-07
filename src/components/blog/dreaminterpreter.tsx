"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { aiSingleResponse } from "@/server/actions" 
import { 
  Brain, Lightbulb, Rocket, AlertCircle, Share2, 
  Sparkles, Moon, ChevronDown, Telescope, ScrollText, Binary, 
  HelpCircle, Star
} from "lucide-react"

export default function Dreaminterpreter() {
  
  const [userDream, setUserDream] = useState("")
  const [interpretation, setInterpretation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  // برای جلوگیری از ارورهای هیدریشن انیمیشن‌ها
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
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden font-sans selection:bg-amber-500/30 selection:text-amber-100">
      
      {/* --- پس‌زمینه جادویی و متحرک (Aurora Background) --- */}
      <div className="fixed inset-0 z-0">
        {/* گرادینت متحرک عظیم */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-amber-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-orange-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-yellow-600/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        
        {/* نویز و بافت */}
        <div className="absolute inset-0 bg-[url('/images/neural-bg.svg')] opacity-[0.03] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* ذرات معلق (Stars/Particles) */}
        {mounted && (
           <>
             <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-ping opacity-20 duration-[3s]"></div>
             <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-amber-200 rounded-full animate-pulse opacity-30"></div>
             <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-orange-200 rounded-full animate-ping opacity-20 duration-[5s]"></div>
           </>
        )}
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl relative z-10">
        
        {/* --- هدر درخشان --- */}
        <header className="text-center space-y-8 mb-16 relative">
            {/* درخشش پشت هدر */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/20 blur-[100px] rounded-full -z-10"></div>

            <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
               <div className="px-4 py-1.5 rounded-full bg-[#0c0a09]/80 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
                  <span className="text-amber-200 text-sm font-medium tracking-wide">هوش مصنوعی PromptBazar</span>
               </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              تعبیر خواب آنلاین
              <br className="md:hidden" />
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 animate-text-shimmer bg-[length:200%_auto]">
                 با هوش مصنوعی
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
              سفری به اعماق <strong className="text-amber-100 font-medium border-b border-amber-500/30">ناخودآگاه</strong>. 
              دقیق‌ترین ابزار تعبیر خواب رایگان، بدون خرافات و مبتنی بر روانشناسی.
            </p>
        </header>

        {/* --- کارت جادویی (Glassmorphism + Neon Border) --- */}
        <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-amber-500/50 via-transparent to-orange-500/50 shadow-2xl shadow-amber-900/30">
          
          {/* پس‌زمینه درخشان پشت کارت */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative bg-[#0c0a09]/90 backdrop-blur-2xl rounded-[23px] overflow-hidden h-full">
            
            {/* هدر کارت */}
            <div className="p-8 border-b border-white/5 flex items-center gap-4 bg-gradient-to-r from-white/5 to-transparent">
               <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 shadow-inner">
                  <Moon className="h-6 w-6 text-amber-400" />
               </div>
               <h2 className="text-2xl font-bold text-white tracking-wide">
                 رویاهاتو بنویس...
               </h2>
            </div>
            
            <div className="p-8 space-y-8">
              <div className="relative group/input">
                <textarea
                  value={userDream}
                  onChange={(e) => setUserDream(e.target.value)}
                  placeholder="دیشب خواب دیدم در یک جنگل طلایی قدم می‌زنم و..."
                  className="w-full min-h-[200px] bg-black/40 border border-white/10 rounded-2xl p-6 text-lg text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all resize-y shadow-inner"
                />
                {/* افکت نوری گوشه تکست‌اریا */}
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

              {/* دکمه اصلی (Cosmic Button) */}
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

              {/* نمایش نتیجه (The Revelation) */}
              {interpretation && (
                <div className="relative mt-12 rounded-2xl bg-gradient-to-b from-amber-500/5 to-transparent border border-amber-500/10 p-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  {/* نور پس‌زمینه نتیجه */}
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
        
        {/* --- سوالات متداول --- */}
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

        {/* --- فوتر بنر --- */}
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