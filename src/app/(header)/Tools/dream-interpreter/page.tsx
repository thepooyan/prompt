"use client"

import { useState } from "react"
import { aiSingleResponse } from "@/server/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // CardDescription حذف شد تا Title بزرگتر باشد
import { Textarea } from "@/components/ui/textarea"
import { Moon, Sparkles, BookOpen, Loader2, AlertCircle, Share2, Lightbulb, Cloud } from "lucide-react" // آیکون‌های جدید
import { cn } from "@/lib/utils" // فرض بر وجود این تابع برای ترکیب کلاس‌های Tailwind

export default function DreamInterpreterPage() {
  
  // --- Stateها ---
  const [userDream, setUserDream] = useState("")
  const [interpretation, setInterpretation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // --- تابع تعبیر خواب ---
  const handleInterpret = async () => {
    if (!userDream || userDream.length < 10) {
      setError("لطفاً خواب خود را با جزئیات بیشتری تعریف کنید (حداقل ۱۰ کاراکتر).")
      return
    }
    
    setIsLoading(true)
    setError("")
    setInterpretation("")

    // --- پرامپت مهندسی شده برای تعبیر خواب ---
    const systemPrompt = `
      تو یک مفسر خواب خردمند، دلسوز و حرفه‌ای هستی. تخصص تو ترکیبی از "روانشناسی مدرن" (کارل یونگ و فروید) و "نمادشناسی سنتی شرقی" است.
      
      وظیفه: خواب کاربر را دریافت کن و یک تحلیل جامع و ساختاریافته به زبان فارسی ارائه بده.
      
      خواب کاربر: "${userDream}"

      دستورالعمل خروجی:
      پاسخ تو باید دقیقاً شامل بخش‌های زیر باشد و با لحنی آرامش‌بخش، ادبی و کمی شاعرانه نوشته شود:
      
      ۱. 🌙 **خلاصه تعبیر و پیام اصلی:** یک برداشت کلی و کوتاه از پیام عمیق خواب، با تاکید بر ماهیت درونی آن.
      ۲. 🔑 **نمادها و رمزگشایی:** ۲ یا ۳ نماد اصلی و برجسته موجود در خواب را جدا کن و معنی پنهان هرکدام را توضیح بده.
      ۳. 🧠 **آینه ناخودآگاه (دیدگاه روانشناسی):** این خواب چه چیزی درباره ضمیر ناخودآگاه، آرزوها، ترس‌ها یا چالش‌های فعلی درونی کاربر فاش می‌کند؟
      ۴. 🔮 **حکمت کهن (دیدگاه سنتی/معنوی):** تعبیر این خواب در حکمت‌ها و فرهنگ‌های باستانی ایران یا شرق چگونه است؟ آیا نشانه‌ای از خیر، هشدار یا راهنمایی معنوی است؟
      ۵. ✨ **رهنمود بیداری:** یک توصیه عملی، فکری یا اخلاقی برای کاربر بر اساس این پیام رویا، برای بهبود زندگی بیداری‌اش.

      نکته مهم: از پیشگویی‌های ترسناک و قطعی (مثل خبر مرگ) پرهیز کن. تمرکزت روی خودشناسی، رشد شخصی و آگاهی باشد. خروجی را با لحنی امیدبخش و حمایتی ارائه بده.
    `

    try {
      const res = await aiSingleResponse(systemPrompt)
      setInterpretation(res)
    } catch (err) {
      setError("ارتباط با عالم رویا برقرار نشد! ستارگان در هم ریخته‌اند. لطفاً دوباره تلاش کنید.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  // --- کپی/اشتراک‌گذاری ---
  const copyToClipboard = () => {
    navigator.clipboard.writeText(interpretation)
    alert("تعبیر خواب شما با موفقیت کپی شد! اکنون می‌توانید آن را با دوستان خود به اشتراک بگذارید.")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* ذرات ستاره‌ای پس‌زمینه (می‌توان با CSS animation یا یک تصویر SVG متحرک بهبود داد) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-400 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-400 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-indigo-400 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl relative z-10">
        
        {/* هدر صفحه */}
        <header className="text-center space-y-6 mb-16 animate-in fade-in slide-in-from-top-10 duration-700">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-indigo-700 to-purple-800 shadow-xl border-2 border-indigo-500">
              <Moon className="h-14 w-14 text-yellow-300 animate-bounce-slow" /> {/* آیکون بزرگتر و متحرک */}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-200 drop-shadow-lg">
            تعبیرگر رویاهای هوشمند ✨
          </h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto font-light leading-relaxed">
            گنجینه‌ی پنهان ناخودآگاه خود را کشف کنید. هر رویا، پیامی است از عمق وجود شما. 
            بنویسید و پرده از اسرار آن بردارید.
          </p>
        </header>

        {/* کارت اصلی ورود خواب */}
        <Card className="bg-gradient-to-br from-indigo-900 to-purple-950 text-white shadow-3xl border border-purple-700/50 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <CardHeader className="p-6 md:p-8 border-b border-purple-800/50 bg-indigo-900/50">
            <CardTitle className="text-3xl font-bold flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-300">
              <Cloud className="h-8 w-8 text-blue-300" />
              رویاهای خود را اینجا بنویسید
            </CardTitle>
            {/* CardDescription حذف شد تا عنوان برجسته‌تر باشد */}
          </CardHeader>
          
          <CardContent className="p-6 md:p-8 space-y-6">
            {/* ورودی خواب */}
            <div className="space-y-3">
              <label htmlFor="dream-input" className="text-xl font-semibold flex items-center gap-3 text-indigo-300">
                <Sparkles className="h-6 w-6 text-yellow-300" />
                دیشب چه دیدید؟ جزئیات مهم است!
              </label>
              <Textarea
                id="dream-input"
                value={userDream}
                onChange={(e) => setUserDream(e.target.value)}
                placeholder="مثلاً: در یک جنگل تاریک تنها بودم و دنبال نور می‌گشتم. یک کلاغ سیاه روی شانه‌ام نشست..."
                className="min-h-[180px] text-lg bg-purple-800/40 border border-purple-600 focus:border-blue-400 text-white placeholder:text-purple-300 focus:bg-purple-800 transition-all rounded-lg resize-y"
              />
              {error && (
                <div className="flex items-center gap-2 text-red-400 text-base mt-3 animate-pulse bg-red-900/30 p-3 rounded-md border border-red-700">
                  <AlertCircle className="h-5 w-5" />
                  {error}
                </div>
              )}
            </div>

            {/* دکمه تعبیر */}
            <Button
              onClick={handleInterpret}
              disabled={isLoading}
              size="lg"
              className="w-full font-extrabold text-xl py-8 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 rounded-xl"
            >
              {isLoading ? (
                <>
                  <Loader2 className="ml-3 h-7 w-7 animate-spin" />
                  ستارگان در حال هم‌سویی‌اند...
                </>
              ) : (
                <>
                  <Sparkles className="ml-3 h-7 w-7" />
                  رویا را تعبیر کن!
                </>
              )}
            </Button>

            {/* نمایش نتیجه */}
            {interpretation && (
              <div className="mt-10 pt-8 border-t border-purple-700 animate-in fade-in slide-in-from-bottom-6 duration-900">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold text-teal-300 flex items-center gap-3">
                    <BookOpen className="h-7 w-7 text-yellow-300" />
                    پیام رویاهای شما
                  </h3>
                  <Button variant="ghost" size="sm" onClick={copyToClipboard} className="text-indigo-200 hover:text-white hover:bg-purple-800/50 transition-colors">
                      <Share2 className="h-5 w-5 ml-2" />
                      اشتراک‌گذاری
                  </Button>
                </div>
                
                <div className="bg-purple-900/60 p-7 rounded-xl border border-purple-700 text-indigo-100 leading-loose whitespace-pre-wrap text-justify shadow-inner text-lg">
                  {interpretation}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-indigo-300 opacity-80">
                    * این تعبیر صرفاً جنبه سرگرمی، خودشناسی و روانشناسی عمومی دارد و جایگزین مشاوره تخصصی نیست.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* بخش سئو و توضیحات پایین صفحه (با استایل جدید) */}
        <section className="mt-20 text-center space-y-8 max-w-2xl mx-auto p-8 bg-purple-900/40 rounded-2xl border border-purple-700/50 shadow-lg animate-in fade-in delay-200 duration-700">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-300 flex items-center justify-center gap-3">
            <Lightbulb className="h-8 w-8 text-yellow-300" />
            چرا رویاهای خود را تعبیر کنیم؟
          </h2>
          <p className="text-lg text-indigo-200 leading-relaxed">
            رویاها، زبان پنهان روح ما هستند. آن‌ها دریچه‌ای به سوی ناخودآگاه می‌گشایند و می‌توانند بینش‌هایی عمیق درباره‌ی ترس‌ها، آرزوها، و چالش‌های زندگی بیداری ما ارائه دهند. تعبیر خواب به شما کمک می‌کند تا با بخش‌های پنهان وجود خود ارتباط برقرار کنید و مسیر روشنی برای رشد شخصی بیابید.
          </p>
        </section>

      </div>
    </main>
  )
}