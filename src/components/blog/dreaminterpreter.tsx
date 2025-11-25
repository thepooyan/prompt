"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { aiSingleResponse } from "@/server/actions" // مسیر اکشن خود را چک کنید
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
// --- تغییر: حذف ایمپورت‌های Accordion که باعث ارور می‌شدند ---
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// اضافه کردن آیکون ChevronDown برای نمایش باز/بسته بودن
import { Brain, Lightbulb, Code2, Rocket, Cloud, Loader2, AlertCircle, Share2, Sparkles, Network, MoonStar, Ghost, Telescope, ScrollText, Binary, HelpCircle, ShieldCheck, ChevronDown } from "lucide-react"
// برای ترکیب کلاس‌های شرطی (اگر در پروژه دارید استفاده کنید، اگر نه خط بعدی را حذف و در کد پایین دستی کلاس بدهید)
import { cn } from "@/lib/utils" 

export default function Dreaminterpreter() {
  
  const [userDream, setUserDream] = useState("")
  const [interpretation, setInterpretation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // --- State جدید برای مدیریت باز/بسته بودن سوالات متداول ---
  // این استیت، ایندکس سوالی که باز است را نگه می‌دارد. اگر null باشد یعنی همه بسته‌اند.
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const handleInterpret = async () => {
    if (!userDream || userDream.length < 10) {
      setError("لطفاً خواب خود را با جزئیات بیشتری تعریف کنید (حداقل ۱۰ کاراکتر).")
      return
    }
    
    setIsLoading(true)
    setError("")
    setInterpretation("")

    const systemPrompt = `
      تو یک مفسر خواب خردمند، دلسوز و حرفه‌ای هستی. تخصص تو ترکیبی از "روانشناسی مدرن" (کارل یونگ و فروید) و "نمادشناسی سنتی شرقی" است.
      وظیفه: خواب کاربر را دریافت کن و یک تحلیل جامع و ساختاریافته به زبان فارسی ارائه بده.
      خواب کاربر: "${userDream}"
      دستورالعمل خروجی:
      پاسخ تو باید دقیقاً شامل بخش‌های زیر باشد و با لحنی آرامش‌بخش، ادبی و کمی شاعرانه نوشته شود:
      ۱. 🌙 **بینش اصلی:** یک برداشت کلی و کوتاه از پیام عمیق خواب.
      ۲. ✨ **رمزگشایی نمادها:** ۲ یا ۳ نماد اصلی و معنی پنهان هرکدام.
      ۳. 🧠 **آینه ناخودآگاه (دیدگاه روانشناسی):** چه چیزی درباره ضمیر ناخودآگاه کاربر فاش می‌کند؟
      ۴. 📜 **ردپای حکمت کهن:** تعبیر این خواب در حکمت‌های باستانی چگونه است؟
      ۵. 💡 **رهنمود بیداری:** یک توصیه عملی برای بهبود زندگی بیداری کاربر.
      نکته مهم: از پیشگویی‌های ترسناک و قطعی پرهیز کن. تمرکزت روی خودشناسی و امید باشد.
    `

    try {
      const res = await aiSingleResponse(systemPrompt)
      setInterpretation(res)
    } catch (err) {
      setError("خطا در پردازش هوش مصنوعی. لطفاً اتصال اینترنت خود را بررسی کرده و دوباره تلاش کنید.")
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

  // تابع برای باز و بسته کردن آیتم‌های FAQ
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prevIndex => (prevIndex === index ? null : index))
  }

  // --- داده‌های بخش سوالات متداول (FAQ) ---
  const faqs = [
    {
      question: "آیا هوش مصنوعی واقعاً می‌تواند خواب تعبیر کند؟",
      answer: "بله، اما نه به روش سنتی. هوش مصنوعی به جای مراجعه به یک کتاب ثابت، با استفاده از مدل‌های زبانی پیشرفته و «پرامپت‌های مهندسی‌شده»، کل بافت (Context) خواب شما، احساساتتان و جزئیات منحصر به فرد آن را تحلیل می‌کند. این روش ترکیبی از دانش وسیع روانشناسی و نمادشناسی است که نتیجه‌ای بسیار شخصی‌سازی‌شده‌تر ارائه می‌دهد.",
      icon: <Brain className="h-5 w-5 text-teal-300" />
    },
    {
      question: "تفاوت این ابزار با کتاب‌های تعبیر خواب قدیمی چیست؟",
      answer: "کتاب‌های سنتی برای هر نماد (مثلاً «مار») یک معنی ثابت دارند. اما در این ابزار هوشمند، معنی یک نماد بر اساس سایر اجزای خواب شما تغییر می‌کند. هوش مصنوعی درک می‌کند که دیدن «مار» در یک جنگل سرسبز با دیدن آن در اتاق خواب، تعابیر کاملاً متفاوتی دارد.",
      icon: <ScrollText className="h-5 w-5 text-yellow-300" />
    },
    {
      question: "اگر خواب بد یا ترسناکی دیدم، تعبیرش حتماً بد است؟",
      answer: "اصلاً. در دیدگاه روانشناسی تحلیلی، کابوس‌ها دشمن ما نیستند؛ بلکه پیام‌های مهمی از ناخودآگاه برای توجه به یک مسئله نادیده گرفته شده در زندگی هستند. این ابزار به جای پیشگویی‌های ترسناک، به شما کمک می‌کند ریشه اضطراب را پیدا کنید.",
      icon: <MoonStar className="h-5 w-5 text-fuchsia-300" />
    },
    {
      question: "آیا خواب‌هایی که می‌نویسم جایی ذخیره می‌شوند؟",
      answer: "امنیت و حریم خصوصی شما اولویت ماست. متن خواب شما صرفاً برای لحظاتی جهت پردازش به مدل هوش مصنوعی ارسال شده و پس از تولید پاسخ، از حافظه موقت پاک می‌شود. ما هیچ داده شخصی از رویاهای شما را ذخیره نمی‌کنیم.",
      icon: <ShieldCheck className="h-5 w-5 text-green-300" />
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d0d2b] via-[#1a0a40] to-[#0d0d2b] text-white relative overflow-hidden font-sans">
      
      {/* --- پس‌زمینه متحرک --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/neural-bg.svg')] bg-cover bg-center animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#2a005a]/60 to-transparent opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-40 animate-slow-glow"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-[130px] opacity-30 animate-slow-glow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl relative z-10">
        
        {/* --- بخش ۱: هدر و تصویر --- */}
        <header className="text-center space-y-6 mb-12 animate-in fade-in slide-in-from-top-10 duration-700">
          <div className="relative w-full max-w-lg mx-auto h-64 md:h-80 mb-8 rounded-3xl overflow-hidden shadow-2xl shadow-[#6a00ff]/40 border border-[#4a00ff]/30">
             <Image 
               src="https://c327107.parspack.net/prompt/1763623838427-dream-interpreter.webp" 
               alt="تعبیر خواب هوشمند با هوش مصنوعی"
               fill
               className="object-cover hover:scale-105 transition-transform duration-700 brightness-90"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d2b] via-transparent to-transparent opacity-80"></div>
          </div>

          <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-700/20 backdrop-blur-sm border border-blue-500/30 shadow-lg mb-4 text-blue-300 font-medium text-sm gap-2">
              <Network className="h-5 w-5 text-blue-400 animate-pulse" />
              <span>پلتفرم هوش مصنوعی PromptBazar</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-fuchsia-300 drop-shadow-lg leading-tight">
            رمزگشایی ذهن ناخودآگاه
          </h1>
          <p className="text-lg md:text-xl text-indigo-200/90 max-w-2xl mx-auto leading-relaxed">
            با قدرت هوش مصنوعی، پرده از اسرار رویاهای خود بردارید. تحلیلی عمیق و هوشمندانه از پیام‌های پنهان ذهن شما.
          </p>
        </header>

        {/* --- بخش ۲: ابزار اصلی --- */}
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-3xl shadow-[#6a00ff]/22 rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-700">
          <CardHeader className="p-6 md:p-8 border-b border-white/10 bg-black/30">
            <CardTitle className="text-2xl font-bold flex items-center gap-3 text-teal-300">
              <MoonStar className="h-6 w-6 text-fuchsia-300" />
              رویاهای خود را وارد کنید
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="space-y-3">
              <Textarea
                value={userDream}
                onChange={(e) => setUserDream(e.target.value)}
                placeholder="خواب خود را با جزئیات کامل و احساساتی که داشتید توصیف کنید..."
                className="min-h-[180px] text-lg bg-black/40 border-white/10 focus:border-fuchsia-400 text-white placeholder:text-white/40 rounded-xl resize-y transition-colors"
              />
              {error && (
                <div className="flex items-center gap-2 text-red-300 bg-red-900/20 p-3 rounded-lg border border-red-500/30 text-sm shadow-inner">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </div>
              )}
            </div>

            <Button
              onClick={handleInterpret}
              disabled={isLoading}
              size="lg"
              className="w-full text-lg py-8 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-700 hover:to-blue-700 transition-all shadow-lg shadow-fuchsia-500/30 rounded-xl font-bold uppercase tracking-wider"
            >
              {isLoading ? (
                <>
                  <Loader2 className="ml-2 h-6 w-6 animate-spin" />
                  کاوش در عمق ذهن...
                </>
              ) : (
                <>
                  <Telescope className="ml-2 h-6 w-6" />
                  تحلیل هوشمند رویا
                </>
              )}
            </Button>

            {/* نمایش نتیجه */}
            {interpretation && (
              <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-teal-300 flex items-center gap-2">
                    <ScrollText className="h-6 w-6 text-yellow-300" />
                    تفسیر و بینش شما
                  </h3>
                  <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-white/60 hover:text-white hover:bg-white/10">
                      <Share2 className="h-4 w-4 ml-2" />
                      کپی تحلیل
                  </Button>
                </div>
                
                <div className="bg-black/30 p-6 md:p-8 rounded-xl border border-white/10 text-indigo-100 leading-loose text-justify shadow-inner text-lg whitespace-pre-wrap">
                  {interpretation}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* --- تغییر اساسی: پیاده‌سازی دستی آکاردئون بدون نیاز به پکیج خارجی --- */}
        <section className="mt-20 animate-in fade-in delay-300">
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-3">
                  <HelpCircle className="h-8 w-8 text-blue-300 animate-pulse" />
                  پرسش‌های متداول
                </h2>
                 <p className="text-indigo-200 mt-4 text-lg">
                    پاسخ به ابهامات شما درباره تلفیق تکنولوژی و دنیای اسرارآمیز خواب‌ها
                  </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-4 md:p-8 shadow-xl space-y-4">
              {/* حلقه روی داده‌های FAQ */}
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/5 border-blue-500/30' : 'hover:bg-white/5'}`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between py-5 px-4 text-lg font-medium text-indigo-100 hover:text-blue-300 text-right transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        {faq.icon}
                        <span>{faq.question}</span>
                      </div>
                      {/* آیکون فلش که می‌چرخد */}
                      <ChevronDown className={`h-5 w-5 text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* محتوای پاسخ که به صورت شرطی نمایش داده می‌شود */}
                    <div 
                      className={`px-4 text-indigo-200/90 text-base leading-relaxed text-justify pr-10 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                )
              })}
            </div>
        </section>
        
        {/* --- بخش ۳: اتصال به هدف اصلی سایت --- */}
        <section className="mt-24 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-white/10 rounded-3xl p-8 md:p-10 text-center md:text-right shadow-xl shadow-blue-500/20 animate-in fade-in delay-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 md:max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 justify-center md:justify-start">
                <Binary className="h-8 w-8 text-green-300" />
                جادوی کد: پشت پرده این ابزار
              </h2>
              <p className="text-indigo-200 text-lg leading-relaxed">
                این ابزار نتیجه قدرت **«مهندسی پرامپت»** و <span className="text-green-300 font-bold">«اتوماسیون با n8n»</span> است. 
                ما با ترکیب این تکنولوژی‌ها، هوش مصنوعی را به یک تحلیلگر عمیق رویا تبدیل کرده‌ایم. 
                آیا شما هم آماده‌اید تا چنین سیستم‌های هوشمندی را بسازید؟
              </p>
            </div>
            
            <div className="flex flex-col gap-3 w-full md:w-auto min-w-[250px]">
              <Link href="/what-is-prompt">
                <Button variant="outline" className="w-full py-6 text-lg border-white/20 text-white hover:bg-white/10 hover:text-teal-300 transition-colors rounded-xl">
                   <Lightbulb className="ml-2 h-5 w-5" />
                   یادگیری مهندسی پرامپت
                </Button>
              </Link>
              <Link href="/n8n">
                <Button className="w-full py-6 text-lg bg-teal-600 hover:bg-teal-700 text-white rounded-xl">
                   <Rocket className="ml-2 h-5 w-5" />
                   ورک‌فلوهای n8n
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}