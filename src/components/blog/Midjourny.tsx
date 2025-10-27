"use client"

import { useState } from "react"

export default function MidjournyBlog() {
  const [captionTopic, setCaptionTopic] = useState("")
  const [captionTone, setCaptionTone] = useState("")
  const [captionGoal, setCaptionGoal] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")

  const handleGenerateCaption = async () => {
    if (!captionTopic || !captionTone || !captionGoal) {
      setError("لطفاً همه فیلدها را پر کنید")
      return
    }

    setIsLoading(true)
    setError("")
    setOutput("")

    try {
      const prompt = `برای یک پست اینستاگرام با موضوع "${captionTopic}" یک کپشن جذاب بنویس.
لحن کپشن "${captionTone}" باشد.
در ابتدای کپشن از یک قلاب جذاب استفاده کن.
در انتهای کپشن یک فراخوان به اقدام (Call to Action) واضح برای "${captionGoal}" قرار بده.
طول کپشن حداکثر ۱۰۰ کلمه باشد.`

    //   const { text } = await generateText({
    //     model: "openai/gpt-4o-mini",
    //     prompt,
    //   })

    //   setOutput(text)
    } catch (err) {
      setError("خطا در تولید کپشن. لطفاً دوباره تلاش کنید.")
      console.error("[v0] Error generating caption:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
        چگونه با هوش مصنوعی برای اینستاگرام محتوای جذاب تولید کنیم؟ (پرامپت‌های آماده ChatGPT و Gemini)
      </h1>

      <p className="mb-6 leading-relaxed">
        اینستاگرام برای خیلی از ماها، چه صاحب کسب‌وکار باشیم چه فریلنسر، دیگه فقط یه شبکه اجتماعی نیست؛ یه ویترین مهمه،
        یه ابزار بازاریابیه و یه راه ارتباطی با مخاطبامون. اما بیاین قبول کنیم، تولید محتوای مداوم، جذاب و باکیفیت برای
        اینستاگرام کار خیلی سختیه! ایده‌ها تموم می‌شن، وقت کم میاد و گاهی اوقات واقعاً نمی‌دونیم چی پست کنیم. 😥
      </p>

      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
        <span className="text-gray-500">[تصویر تقویم محتوایی خالی]</span>
      </div>

      <p className="mb-4 leading-relaxed">
        <strong>خبر خوب چیه؟</strong> هوش مصنوعی، مخصوصاً ابزارهای قدرتمندی مثل <strong>ChatGPT</strong> و{" "}
        <strong>Gemini</strong>، می‌تونن مثل یه دستیار خلاق و خستگی‌ناپذیر به کمکمون بیان! با دادن دستورات درست (یا همون{" "}
        <strong>پرامپت‌ها</strong>)، می‌تونیم از این ابزارها بخوایم برامون ایده بدن، کپشن بنویسن، هشتگ پیدا کنن و کلی
        کارهای دیگه انجام بدن.
      </p>

      <p className="mb-8 leading-relaxed">
        تو این مقاله قراره چند تا <strong>پرامپت آماده و کاربردی</strong> رو با هم یاد بگیریم که زندگیتون رو به عنوان یه
        تولیدکننده محتوای اینستاگرام خیلی راحت‌تر می‌کنه. اگه هنوز دقیق نمی‌دونید پرامپت چیه، پیشنهاد می‌کنم اول یه نگاهی به
        راهنمای کامل ما در مورد{" "}
        <a href="/what-is-prompt" className="text-blue-600 hover:underline">
          <strong>پرامپت چیست؟</strong>
        </a>{" "}
        بندازید.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-12">
        هوش مصنوعی چطور می‌تونه تو تولید محتوای اینستاگرام کمکمون کنه؟
      </h2>

      <p className="mb-4 leading-relaxed">
        ChatGPT و Gemini مثل یه نویسنده، یه استراتژیست محتوا و یه ایده‌پرداز همیشه در دسترسه. فقط کافیه بهش بگید چی
        می‌خواید. می‌تونه تو این کارها بهتون کمک کنه:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 leading-relaxed">
        <li>
          <strong>ایده‌یابی:</strong> پیدا کردن موضوعات جذاب و ترند برای پست‌ها و استوری‌ها.
        </li>
        <li>
          <strong>نوشتن کپشن:</strong> تولید متن‌های گیرا با لحن دلخواه شما (صمیمی، رسمی، طنز و...).
        </li>
        <li>
          <strong>پیدا کردن هشتگ:</strong> پیشنهاد هشتگ‌های مرتبط و پربازدید برای افزایش دیده شدن پست‌ها.
        </li>
        <li>
          <strong>ساخت سناریو:</strong> نوشتن سناریو برای ویدیوهای کوتاه مثل ریلز (Reels).
        </li>
        <li>
          <strong>و کلی کار دیگه!</strong>
        </li>
      </ul>

      <p className="mb-8 leading-relaxed">بریم سراغ پرامپت‌های آماده!</p>

      <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-12">
        پرامپت‌های آماده برای اینستاگرام (کپی کنید و استفاده کنید!)
      </h2>

      <p className="mb-6 leading-relaxed">
        این پرامپت‌ها رو می‌تونید مستقیماً کپی کنید و تو ChatGPT یا Gemini پیست کنید. فقط کافیه بخش‌هایی که داخل{" "}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
          {"{"} آکولاد {"}"}
        </code>{" "}
        هستن رو با اطلاعات خودتون جایگزین کنید.
      </p>

      <h3 className="text-xl font-bold mb-3 mt-8">۱. پرامپت ایده‌یابی برای پست (تقویم محتوایی)</h3>
      <p className="mb-3 leading-relaxed">دیگه نگران نباشید که فردا چی پست کنید!</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm leading-relaxed">
        <code>{`من یک پیج اینستاگرام با موضوع "{موضوع اصلی پیج شما}" دارم. مخاطبان من "{گروه مخاطب شما، مثلا: فریلنسرها}" هستند.
لطفاً یک جدول تقویم محتوایی برای ۷ روز آینده به من پیشنهاد بده که شامل موارد زیر باشد:
- روز هفته
- ایده کلی موضوع پست
- فرمت پیشنهادی (پست اسلایدی، ریلز، استوری)
- یک نکته کلیدی برای کپشن`}</code>
      </pre>

      <h3 className="text-xl font-bold mb-3 mt-8">۲. پرامپت نوشتن کپشن جذاب</h3>
      <p className="mb-3 leading-relaxed">کپشن‌نویسی سخت‌ترین قسمت کاره؟ دیگه نه! با Gemini امتحانش کنید:</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm leading-relaxed">
        <code>{`برای یک پست اینستاگرام با موضوع "{موضوع پست شما}" یک کپشن جذاب بنویس.
لحن کپشن "{لحن مورد نظر، مثلا: صمیمی و خودمونی}" باشد.
در ابتدای کپشن از یک "{نوع قلاب، مثلا: سوال جذاب یا آمار تکان‌دهنده}" استفاده کن.
در انتهای کپشن یک فراخوان به اقدام (Call to Action) واضح برای "{هدف شما از پست، مثلا: کامنت گذاشتن یا ذخیره کردن پست}" قرار بده.
طول کپشن حداکثر ۱۰۰ کلمه باشد.`}</code>
      </pre>

      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 p-6 rounded-lg mb-8">
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-xl">✨</span> امتحان کنید: تولید کپشن نمونه با Gemini
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="caption-topic" className="block text-sm font-medium text-gray-300 mb-1">
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
          <div>
            <label htmlFor="caption-tone" className="block text-sm font-medium text-gray-300 mb-1">
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
          <div>
            <label htmlFor="caption-goal" className="block text-sm font-medium text-gray-300 mb-1">
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
        <button
          onClick={handleGenerateCaption}
          disabled={isLoading}
          className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
        {output && (
          <div className="mt-4 p-4 bg-gray-900 border border-gray-700 rounded-md text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
            {output}
          </div>
        )}
        {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
      </div>

      <h3 className="text-xl font-bold mb-3 mt-8">۳. پرامپت پیدا کردن هشتگ‌های مرتبط</h3>
      <p className="mb-3 leading-relaxed">پست‌هاتون کمتر دیده می‌شه؟ شاید هشتگ‌های درستی استفاده نمی‌کنید.</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm leading-relaxed">
        <code>{`برای یک پست اینستاگرام با موضوع اصلی "{موضوع پست شما}"، ۱۰ هشتگ مرتبط و پربازدید در سه دسته زیر پیشنهاد بده:
- هشتگ‌های اصلی و کلی (مرتبط با موضوع)
- هشتگ‌های خاص‌تر و نیچ (مرتبط با جزئیات پست)
- هشتگ‌های ترند (در صورت وجود)
هشتگ‌ها به زبان فارسی باشند.`}</code>
      </pre>

      <h3 className="text-xl font-bold mb-3 mt-8">۴. پرامپت ایده برای استوری‌های تعاملی</h3>
      <p className="mb-3 leading-relaxed">استوری فقط عکس و فیلم نیست، با مخاطب تعامل کنید!</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8 text-sm leading-relaxed">
        <code>{`برای پیج اینستاگرامم با موضوع "{موضوع پیج شما}"، ۳ ایده برای استوری‌های تعاملی پیشنهاد بده.
ایده‌ها باید شامل استفاده از ابزارهای استوری مثل "{ابزار مورد نظر، مثلا: نظرسنجی (Poll)، کوئیز (Quiz)، سوال (Question Box)}" باشند و مخاطب را به مشارکت تشویق کنند.`}</code>
      </pre>

      <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-8">
        <span className="text-gray-500">[تصویر نمونه پست اینستاگرام ساخته شده با هوش مصنوعی]</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-12">نکات مهم برای گرفتن بهترین نتیجه</h2>

      <ul className="list-disc list-inside mb-8 space-y-3 leading-relaxed">
        <li>
          <strong>شخصی‌سازی کنید:</strong> پرامپت‌های بالا نقطه شروع هستن. حتماً اون‌ها رو با لحن برند، اطلاعات دقیق
          کسب‌وکارتون و نیاز مخاطبتون شخصی‌سازی کنید.
        </li>
        <li>
          <strong>واضح و دقیق باشید:</strong> هرچی اطلاعات بیشتری به ابزار هوش مصنوعی بدید، خروجی دقیق‌تری می‌گیرید.
        </li>
        <li>
          <strong>آزمون و خطا کنید:</strong> اگه از خروجی اول راضی نبودید، پرامپت رو کمی تغییر بدید و دوباره امتحان
          کنید. مهندسی پرامپت یه مهارته که با تمرین بهتر می‌شه!
        </li>
        <li>
          <strong>بازبینی انسانی:</strong> همیشه قبل از انتشار، محتوای تولید شده توسط هوش مصنوعی رو خودتون بازبینی و
          ویرایش کنید تا مطمئن بشید با هویت برند شما همخونی داره.
        </li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-12">حرف آخر: هوش مصنوعی، دستیار شماست نه جایگزین شما!</h2>

      <p className="mb-4 leading-relaxed">
        ChatGPT، Gemini و ابزارهای مشابه می‌تونن به طرز شگفت‌انگیزی تو صرفه‌جویی وقت و افزایش خلاقیت به ما کمک کنن. اما
        یادتون باشه که هوش مصنوعی یه ابزاره. این شمایید که با خلاقیت، تجربه و شناخت مخاطبتون می‌تونید بهترین استفاده رو
        ازش ببرید و محتوایی تولید کنید که واقعاً با مخاطب ارتباط برقرار کنه.
      </p>

      <p className="mb-4 leading-relaxed">
        <strong>آماده‌اید که پرامپت‌های بیشتری رو امتحان کنید؟</strong>
        <br />
        یه سر به{" "}
        <a href="/prompts" className="text-blue-600 hover:underline">
          <strong>کتابخانه پرامپت‌های آماده</strong>
        </a>{" "}
        ما بزنید! اونجا کلی پرامپت حرفه‌ای دیگه برای اینستاگرام، تولید محتوا، سئو و کلی کاربرد دیگه منتظر شماست که
        می‌تونید ازشون ایده بگیرید یا مستقیماً کپی کنید.
      </p>

      <p className="leading-relaxed">موفق باشید و اینستاگرام‌تون رو بترکونید! 🚀</p>
    </main>
  )
}
