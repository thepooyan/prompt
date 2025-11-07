"use client"

import { useState } from "react"
import { aiSingleResponse } from "@/server/actions"
// (هر کامپوننت UI دیگری که نیاز دارید ایمپورت کنید، مثل Button, Input...)
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"


// کامپوننت اصلی صفحه ابزار
export default function InstagramCaptionGeneratorPage() {

  // --- مرحله ۱: کپی کردن تمام State ها ---
  const [captionTopic, setCaptionTopic] = useState("")
  const [captionTone, setCaptionTone] = useState("")
  const [captionGoal, setCaptionGoal] = useState("")
  const [captionHookType, setCaptionHookType] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")

  // --- مرحله ۲: کپی کردن تابع اصلی ---
  const handleGenerateCaption = async () => {
    if (!captionTopic || !captionTone || !captionGoal || !captionHookType) {
      setError("لطفاً همه فیلدها را پر کنید")
      return
    }
    setIsLoading(true)
    setError("")
    setOutput("")

    try {
      const prompt = `برای یک پست اینستاگرام با موضوع "${captionTopic}" یک کپشن جذاب بنویس.
لحن کپشن "${captionTone}" باشد.
در ابتدای کپشن از یک قلاب جذاب از نوع "${captionHookType}" استفاده کن.
در انتهای کپشن یک فراخوان به اقدام (Call to Action) واضح بنویس که مخاطب را تشویق به "${captionGoal}" کند.
طول کپشن حداکثر ۱۰۰ کلمه باشد.`

      const res = await aiSingleResponse(prompt)
      setOutput(res)
    } catch (err) {
      setError("خطا در تولید کپشن. لطفاً دوباره تلاش کنید.")
    } finally {
      setIsLoading(false)
    }
  }

  // --- مرحله ۳: کپی کردن JSX ابزارک ---
  // ما JSX را در یک کانتینر تمیزتر قرار می‌دهیم
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 max-w-2xl">
      
      {/* عنوان و توضیحات ابزار */}
      <header className="text-center space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          ابزار تولید کپشن اینستاگرام با هوش مصنوعی
        </h1>
        <p className="text-lg text-muted-foreground">
          موضوع، لحن، قلاب و هدف خود را وارد کنید تا یک کپشن جذاب تحویل بگیرید.
        </p>
      </header>

      {/* این دقیقاً همان JSX است که از فایل Insta.tsx کپی شده است.
        (فقط شاید لازم باشد کامپوننت‌های Input و Button خود را جایگزین کنید)
      */}
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 p-6 md:p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* فیلد موضوع */}
          <div>
            <label htmlFor="caption-topic" className="block text-sm font-medium text-gray-200 mb-1">
              موضوع پست
            </label>
            <input
              type="text"
              id="caption-topic"
              value={captionTopic}
              onChange={(e) => setCaptionTopic(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm text-white"
              placeholder="مثلا: معرفی ابزار جدید AI"
            />
          </div>
          {/* فیلد لحن */}
          <div>
            <label htmlFor="caption-tone" className="block text-sm font-medium text-gray-200 mb-1">
              لحن کپشن
            </label>
            <input
              type="text"
              id="caption-tone"
              value={captionTone}
              onChange={(e) => setCaptionTone(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm text-white"
              placeholder="مثلا: صمیمی و خودمونی"
            />
          </div>
          {/* فیلد نوع قلاب */}
          <div>
            <label htmlFor="caption-hook" className="block text-sm font-medium text-gray-200 mb-1">
              نوع قلاب (Hook)
            </label>
            <input
              type="text"
              id="caption-hook"
              value={captionHookType}
              onChange={(e) => setCaptionHookType(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm text-white"
              placeholder="مثلا: سوال، آمار جالب، اعتراف"
            />
          </div>
          {/* فیلد هدف (CTA) */}
          <div>
            <label htmlFor="caption-goal" className="block text-sm font-medium text-gray-200 mb-1">
              هدف (Call to Action)
            </label>
            <input
              type="text"
              id="caption-goal"
              value={captionGoal}
              onChange={(e) => setCaptionGoal(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm text-white"
              placeholder="مثلا: ذخیره کردن پست"
            />
          </div>
        </div>
        {/* دکمه تولید */}
        <button
          onClick={handleGenerateCaption}
          disabled={isLoading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>در حال تولید...</span>
            </>
          ) : (
            <>
              <span>تولید کپشن نمونه ✨</span>
            </>
          )}
        </button>
        {/* نمایش خروجی */}
        {output && (
          <div className="mt-4 p-4 bg-gray-900 border border-gray-700 rounded-md text-white text-sm leading-relaxed whitespace-pre-wrap">
            {output}
          </div>
        )}
        {/* نمایش خطا */}
        {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
      </div>
      
    </main>
  )
}