"use client"

import { useState } from "react"
import Image from "next/image"
import { aiSingleResponse } from "@/server/actions"


export default function InstaBlog() {
  // Stateها برای فرم تعاملی
  const [captionTopic, setCaptionTopic] = useState("")
  const [captionTone, setCaptionTone] = useState("")
  const [captionGoal, setCaptionGoal] = useState("")
  const [captionHookType, setCaptionHookType] = useState("") // فیلد جدید برای نوع قلاب
  const [isLoading, setIsLoading] = useState(false)
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")

  // تابع برای تولید کپشن
  const handleGenerateCaption = async () => {
    // اعتبارسنجی به‌روز شده شامل هر چهار فیلد
    if (!captionTopic || !captionTone || !captionGoal || !captionHookType) {
      setError("لطفاً همه فیلدها را پر کنید")
      return
    }

    setIsLoading(true)
    setError("")
    setOutput("")

    try {
      // پرامپت بهینه‌شده بر اساس تحلیل شما
      const prompt = `برای یک پست اینستاگرام با موضوع "${captionTopic}" یک کپشن جذاب بنویس.
لحن کپشن "${captionTone}" باشد.
در ابتدای کپشن از یک قلاب جذاب از نوع "${captionHookType}" استفاده کن.
در انتهای کپشن یک فراخوان به اقدام (Call to Action) واضح بنویس که مخاطب را تشویق به "${captionGoal}" کند.
طول کپشن حداکثر ۱۰۰ کلمه باشد.`

      const res = await aiSingleResponse(prompt)

      setOutput(res)
    } catch (err) {
      setError("خطا در تولید کپشن. لطفاً دوباره تلاش کنید.")
      console.error("[v0] Error generating caption:", err)
    } finally {
      setIsLoading(false)
    }
  }

  // رندر کردن کامپوننت صفحه
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl text-justify">
      {/* --- بخش اول: معرفی مقاله --- */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 ">
        ساخت محتوای اینستاگرام با هوش مصنوعی (پرامپت های آماده)
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 ">
        چطور با هوش مصنوعی برای اینستاگرام محتوای جذاب بسازیم؟
      </h2>

      <p className="mb-6 leading-relaxed text-lg">
        چه صاحب کار باشیم چه فریلنسر، اینستاگرام برای همه‌مون مهمه. فقط یه شبکه اجتماعی نیست، ویترین کار ماست. اما قبول
        کنیم که تولید محتوای همیشگی و جذاب براش خیلی سخته. گاهی وقت کمه و گاهی هم ایده‌ای نداریم که چی پست کنیم. 😥
      </p>

      <Image src="https://c327107.parspack.net/prompt/1762275089146-Untitled5555-2.png"
        alt="تصویر یک تقویم محتوایی خالی که نشان‌دهنده چالش تولید محتوا برای اینستاگرام است"
        width={1000}
        height={540}
        className="mx-auto rounded my-9"
      />

      <p className="mb-4 leading-relaxed text-lg">
        <strong>خبر خوب اینه</strong> که هوش مصنوعی (مثل <strong>ChatGPT</strong> و <strong>Gemini</strong>)
        می‌تونه مثل یه دستیار خلاق به ما کمک کنه. فقط کافیه بهش «دستور» درست بدیم (که بهش می‌گیم{" "}
        <strong>«پرامپت»</strong>). اونوقت برامون ایده پیدا می‌کنه، کپشن می‌نویسه، هشتگ میده و کلی کار دیگه.
      </p>

      <p className="mb-8 leading-relaxed text-lg">
        تو این مقاله قراره چند تا <strong>پرامپت آماده و کاربردی</strong> رو با هم یاد بگیریم که کار تولید محتوای
        اینستاگرام رو براتون خیلی راحت‌تر می‌کنه. اگه هنوز دقیق نمی‌دونید پرامپت چیه، پیشنهاد می‌کنم اول یه نگاهی به
        راهنمای کامل ما در مورد{" "}
        <a href="/what-is-prompt" className="text-blue-600 hover:underline">
          <strong>پرامپت چیست؟</strong>
        </a>{" "}
        بندازید.
      </p>

      {/* --- بخش دوم: کمک‌های هوش مصنوعی --- */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-12">
        هوش مصنوعی چطور در تولید محتوای اینستاگرام به ما کمک می‌کنه؟
      </h2>

      <p className="mb-4 leading-relaxed text-lg">
        ChatGPT و Gemini مثل یه نویسنده و ایده‌پرداز حرفه‌ای هستن که همیشه در دسترسه. فقط بهش بگو چی می‌خوای. مثلاً تو
        این کارها کمکت می‌کنه:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 leading-relaxed text-lg pl-5">
        <li>
          <strong>ایده‌یابی:</strong> پیدا کردن موضوعات جالب و روز برای پست و استوری.
        </li>
        <li>
          <strong>نوشتن کپشن:</strong> نوشتن متن‌های جذاب با هر لحنی که بخواید (صمیمی، رسمی، طنز).
        </li>
        <li>
          <strong>پیدا کردن هشتگ:</strong> پیشنهاد هشتگ‌های خوب و پربازدید برای بیشتر دیده شدن.
        </li>
        <li>
          <strong>ساخت سناریو:</strong> نوشتن سناریو برای ویدیوهای کوتاه مثل ریلز (Reels).
        </li>
        <li>
          <strong>و کلی کار دیگه!</strong>
        </li>
      </ul>

      <p className="mb-8 leading-relaxed text-lg">بریم سراغ پرامپت‌های آماده!</p>

      {/* --- بخش سوم: پرامپت‌های آماده --- */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-12">
        پرامپت‌های آماده اینستاگرام (کپی کنید و استفاده کنید!)
      </h2>

      <p className="mb-6 leading-relaxed text-lg">
        این پرامپت‌ها رو می‌تونید مستقیماً کپی کنید و تو ChatGPT یا Gemini پیست کنید. فقط کافیه بخش‌هایی که داخل{" "}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm text-black">
          {"{"} آکولاد {"}"}
        </code>{" "}
        هستن رو با اطلاعات خودتون عوض کنید.
      </p>

      {/* پرامپت ۱ */}
      <h3 className="text-xl font-bold mb-3 mt-8">۱. پرامپت ایده‌یابی برای پست (تقویم محتوایی)</h3>
      <p className="mb-3 leading-relaxed text-lg">دیگه نگران نباشید که فردا چی پست کنید!</p>
      <pre className="bg-gray-900  p-4 rounded-lg overflow-x-auto mb-8 text-sm leading-relaxed">
        <code>{`من یک پیج اینستاگرام با موضوع "{موضوع اصلی پیج شما}" دارم. مخاطبان من "{گروه مخاطب شما، مثلا: فریلنسرها}" هستند.
لطفاً یک جدول تقویم محتوایی برای ۷ روز آینده به من پیشنهاد بده که شامل موارد زیر باشد:
- روز هفته
- ایده کلی موضوع پست
- فرمت پیشنهادی (پست اسلایدی، ریلز، استوری)
- یک نکته کلیدی برای کپشن`}</code>
      </pre>

      {/* پرامپت ۲ */}
      <h3 className="text-xl font-bold mb-3 mt-8">۲. پرامپت نوشتن کپشن جذاب</h3>
      <p className="mb-3 leading-relaxed text-lg">کپشن‌نویسی سخت‌ترین قسمت کاره؟ دیگه نه! با Gemini امتحانش کنید:</p>
      <pre className="bg-gray-900  p-4 rounded-lg overflow-x-auto mb-6 text-sm leading-relaxed">
        <code>{`برای یک پست اینستاگرام با موضوع "{موضوع پست شما}" یک کپشن جذاب بنویس.
لحن کپشن "{لحن مورد نظر، مثلا: صمیمی و خودمونی}" باشد.
در ابتدای کپشن از یک "{نوع قلاب، مثلا: سوال جذاب یا آمار تکان‌دهنده}" استفاده کن.
در انتهای کپشن یک فراخوان به اقدام (Call to Action) واضح بنویس که مخاطب را تشویق به "{هدف شما از پست، مثلا: کامنت گذاشتن یا ذخیره کردن پست}" کند.
طول کپشن حداکثر ۱۰۰ کلمه باشد.`}</code>
      </pre>

      {/* --- بخش تعاملی (اصلاح شده) --- */}
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 p-6 rounded-lg mb-8 shadow-lg">
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-xl">✨</span> امتحان کنید: تولید کپشن نمونه با Gemini
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* فیلد موضوع */}
          <div>
            <label htmlFor="caption-topic" className="block text-sm font-medium  mb-1">
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
            <label htmlFor="caption-tone" className="block text-sm font-medium  mb-1">
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
          {/* فیلد نوع قلاب (جدید) */}
          <div>
            <label htmlFor="caption-hook" className="block text-sm font-medium  mb-1">
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
            <label htmlFor="caption-goal" className="block text-sm font-medium  mb-1">
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
        {/* نمایش خروجی */}
        {output && (
          <div className="mt-4 p-4 bg-gray-900 border border-gray-700 rounded-md  text-sm leading-relaxed whitespace-pre-wrap">
            {output}
          </div>
        )}
        {/* نمایش خطا */}
        {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
      </div>
      {/* --- پایان بخش تعاملی --- */}

      {/* پرامپت ۳ */}
      <h3 className="text-xl font-bold mb-3 mt-8">۳. پرامپت پیدا کردن هشتگ‌های مرتبط</h3>
      <p className="mb-3 leading-relaxed text-lg">پست‌هاتون کمتر دیده می‌شه؟ شاید هشتگ‌های درستی استفاده نمی‌کنید.</p>
      <pre className="bg-gray-900  p-4 rounded-lg overflow-x-auto mb-8 text-sm leading-relaxed">
        <code>{`برای یک پست اینستاگرام با موضوع اصلی "{موضوع پست شما}"، ۱۰ هشتگ مرتبط و پربازدید در سه دسته زیر پیشنهاد بده:
- هشتگ‌های اصلی و کلی (مرتبط با موضوع)
- هشتگ‌های خاص‌تر و نیچ (مرتبط با جزئیات پست)
- هشتگ‌های ترند (در صورت وجود)
هشتگ‌ها به زبان فارسی باشند.`}</code>
      </pre>

      {/* پرامپت ۴ */}
      <h3 className="text-xl font-bold mb-3 mt-8">۴. پرامپت ایده برای استوری‌های تعاملی</h3>
      <p className="mb-3 leading-relaxed text-lg">استوری فقط عکس و فیلم نیست، با مخاطب تعامل کنید!</p>
      <pre className="bg-gray-900  p-4 rounded-lg overflow-x-auto mb-8 text-sm leading-relaxed">
        <code>{`برای پیج اینستاگرامم با موضوع "{موضوع پیج شما}"، ۳ ایده برای استوری‌های تعاملی پیشنهاد بده.
ایده‌ها باید شامل استفاده از ابزارهای استوری مثل "{ابزار مورد نظر، مثلا: نظرسنجی (Poll)، کوئیز (Quiz)، سوال (Question Box)}" باشند و مخاطب را به مشارکت تشویق کنند.`}</code>
      </pre>

      <Image src="https://c327107.parspack.net/prompt/1762274914147-Untitled-2.png"
        alt="نمونه یک پست اینستاگرام که کپشن و ایده آن با هوش مصنوعی ساخته شده است عکس دوم"
        width={1000}
        height={540}
        className="mx-auto rounded my-9"
      />

      {/* --- بخش چهارم: نکات و جمع‌بندی --- */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-12">چطور بهترین نتیجه را بگیریم؟ (نکات مهم)</h2>

      <ul className="list-decimal list-inside mb-8 space-y-3 leading-relaxed text-lg pl-5">
        <li>
          <strong>شخصی‌سازی کنید:</strong> این پرامپت‌ها نقطه شروع هستن. حتماً اطلاعات خودتون (مثل موضوع پیج) رو
          جایگزین کنید.
        </li>
        <li>
          <strong>واضح و دقیق باشید:</strong> هرچی دقیق‌تر به هوش مصنوعی بگید چی می‌خواید، جواب بهتری هم می‌گیرید.
        </li>
        <li>
          <strong>تست و تکرار کنید:</strong> اگه از جواب اول راضی نبودید، پرامپت رو کمی عوض کنید و دوباره امتحان کنید.
          این کار با تمرین بهتر می‌شه.
        </li>
        <li>
          <strong>حتماً بازبینی کنید:</strong> همیشه متنی که AI میده رو قبل از انتشار یکبار بخونید و ویرایش کنید تا
          مطمئن بشید مشکلی نداره.
        </li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-12">حرف آخر: هوش مصنوعی دستیار شماست، نه جایگزین شما!</h2>

      <p className="mb-4 leading-relaxed text-lg">
        ابزارهایی مثل ChatGPT و Gemini در زمان ما صرفه‌جویی می‌کنن و به خلاقیت ما کمک می‌کنن. اما یادتون باشه که هوش
        مصنوعی فقط یه ابزاره. این شمایید که با شناخت مخاطب و خلاقیت خودتون، بهترین استفاده رو ازش می‌برید تا محتوایی
        بسازید که واقعاً با مخاطب ارتباط بگیره.
      </p>

      <p className="mb-4 leading-relaxed text-lg">
        <strong>دوست دارید پرامپت‌های بیشتری رو امتحان کنید؟</strong>
        <br />
        یه سر به{" "}
        <a href="/prompts" className="text-blue-600 hover:underline">
          <strong>کتابخانه پرامپت‌های آماده</strong>
        </a>{" "}
        ما بزنید! اونجا کلی پرامپت حرفه‌ای دیگه برای اینستاگرام، تولید محتوا، سئو و کلی کاربرد دیگه منتظر شماست که
        می‌تونید ازشون ایده بگیرید یا مستقیماً کپی کنید.
      </p>

      <p className="leading-relaxed text-lg">موفق باشید و اینستاگرام‌تون رو بترکونید! 🚀</p>
    </main>
  )
}
