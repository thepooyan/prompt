"use client"

import { useState } from "react"
import { aiSingleResponse } from "@/server/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Wand2, Sparkles, Copy, Lightbulb, Loader2 } from "lucide-react"

// کامپوننت اصلی صفحه ابزار
export default function PromptEnhancerPage() {
  
  // --- Stateهای کامپوننت ---
  const [userInput, setUserInput] = useState("")
  const [enhancedPrompt, setEnhancedPrompt] = useState("")
  const [explanation, setExplanation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // --- تابع کپی کردن در کلیپ‌بورد ---
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // (می‌توانید یک پیام "کپی شد!" هم اینجا اضافه کنید)
  }

  // --- تابع اصلی تولید پرامپت ---
  const handleGenerate = async () => {
    if (!userInput) {
      setError("لطفاً پرامپت ساده خود را وارد کنید.")
      return
    }
    
    setIsLoading(true)
    setError("")
    setEnhancedPrompt("")
    setExplanation("")

    // --- این «ابر-پرامپت» (Meta-Prompt) شماست ---
    // این پرامپت به هوش مصنوعی دستور می‌دهد که چطور پرامپت کاربر را بهینه‌سازی کند
    const metaPrompt = `
      شما یک «متخصص ارشد مهندسی پرامپت» هستید. وظیفه شما دریافت یک پرامپت ساده از کاربر و بازنویسی کامل آن به یک پرامپت حرفه‌ای، دقیق و ساختاریافته برای مدل‌های زبانی بزرگ (مانند Gemini یا GPT-4) است.

      قوانین بازنویسی:
      ۱. تعیین نقش (Role): همیشه در ابتدا یک نقش واضح برای AI تعریف کن (مثال: «تو در نقش یک کپی‌رایتر ارشد...»).
      ۲. تعیین زمینه (Context): جزئیات و زمینه لازم را به پرامپت اضافه کن.
      ۳. دستور واضح (Instruction): وظیفه را به صورت شفاف و گام‌به‌گام شرح بده.
      ۴. تعیین فرمت خروجی (Format): دقیقاً مشخص کن خروجی باید چه شکلی باشد (مثال: «در قالب Markdown»).
      ۵. اضافه کردن محدودیت‌ها (Constraints): محدودیت‌های لازم مثل تعداد کلمات، لحن، یا موارد ممنوعه را اضافه کن.

      پرامپت ساده کاربر:
      "${userInput}"

      خروجی شما باید *فقط* شامل دو بخش زیر باشد و با مارکرهای دقیق جدا شود:

      <PROMPT>
      (پرامپت بازنویسی شده را اینجا قرار بده)
      </PROMPT>

      <EXPLANATION>
      (توضیح بهینه‌سازی (به فارسی) را اینجا قرار بده و بگو چرا این پرامپت جدید بهتر است و از کدام قوانین استفاده کردی.)
      </EXPLANATION>
    `

    try {
      // فراخوانی Server Action
      const res = await aiSingleResponse(metaPrompt)

      // --- پارس کردن (Parsing) پاسخ ---
      // ما پاسخ AI را بر اساس مارکرهایی که تعریف کردیم، جدا می‌کنیم
      const enhancedPromptMatch = res.match(/<PROMPT>([\s\S]*?)<\/PROMPT>/)
      const explanationMatch = res.match(/<EXPLANATION>([\s\S]*?)<\/EXPLANATION>/)

      if (enhancedPromptMatch && enhancedPromptMatch[1] && explanationMatch && explanationMatch[1]) {
        setEnhancedPrompt(enhancedPromptMatch[1].trim())
        setExplanation(explanationMatch[1].trim())
      } else {
        throw new Error("پاسخ دریافتی از AI در فرمت مورد انتظار نبود.")
      }

    } catch (err) {
      setError("خطا در ارتباط با سرویس هوش مصنوعی. لطفاً دوباره تلاش کنید.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  // --- رندر کردن UI صفحه ---
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      
      {/* عنوان و توضیحات ابزار */}
      <header className="text-center space-y-4 mb-10">
        <Wand2 className="h-12 w-12 mx-auto text-primary" />
        <h1 className="text-3xl md:text-4xl font-extrabold">
          ابزار بهینه‌ساز پرامپت
        </h1>
        <p className="text-lg text-muted-foreground">
          پرامپت ساده خود را به یک دستور حرفه‌ای و دقیق برای هوش مصنوعی تبدیل کنید.
        </p>
      </header>

      {/* بخش اصلی ابزار */}
      <Card className="shadow-xl">
        <CardContent className="p-6 md:p-8 space-y-6">
          
          {/* ۱. باکس ورودی */}
          <div className="space-y-3">
            <label htmlFor="user-prompt" className="text-lg font-semibold">
              پرامپت ساده شما
            </label>
            <Textarea
              id="user-prompt"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="مثلاً: یه کپشن اینستاگرام درباره n8n بنویس"
              className="min-h-[120px] text-base"
              rows={4}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          {/* ۲. دکمه اجرا */}
          <Button
            onClick={handleGenerate}
            disabled={isLoading}
            size="lg"
            className="w-full font-bold text-lg py-6"
          >
            {isLoading ? (
              <Loader2 className="ml-2 h-5 w-5 animate-spin" />
            ) : (
              <Sparkles className="ml-2 h-5 w-5" />
            )}
            بهینه‌سازی پرامپت
          </Button>

          {/* ۳. بخش نتایج (وقتی آماده شد) */}
          {isLoading && (
            <div className="text-center text-muted-foreground py-6">
              <Loader2 className="h-8 w-8 mx-auto animate-spin" />
              <p className="mt-2">در حال آنالیز و بازنویسی پرامپت...</p>
            </div>
          )}

          {enhancedPrompt && (
            <div className="space-y-6 pt-6 border-t">
              
              {/* پرامپت بهینه‌سازی شده */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Wand2 className="ml-2 h-5 w-5 text-primary" />
                  پرامپت بهینه‌سازی شده
                </h3>
                <div className="relative">
                  <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-base leading-relaxed whitespace-pre-wrap">
                    <code>{enhancedPrompt}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 left-2 text-muted-foreground"
                    onClick={() => copyToClipboard(enhancedPrompt)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* توضیحات AI */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Lightbulb className="ml-2 h-5 w-5 text-yellow-500" />
                  چرا این پرامپت بهتر است؟
                </h3>
                <div className="bg-primary/10 border-l-4 border-primary text-foreground p-4 rounded-r-lg space-y-2">
                  <p className="leading-relaxed">{explanation}</p>
                </div>
              </div>
              
            </div>
          )}

        </CardContent>
      </Card>
      
    </main>
  )
}