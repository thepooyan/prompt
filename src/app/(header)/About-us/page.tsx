"use client"
import Link from "next/link"
import { Target, Code2, Users, Rocket, ExternalLink, Lightbulb, Terminal } from "lucide-react" 

export default function AboutUsPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-[family-name:var(--font-vazirmatn)] overflow-hidden">
      
      {/* پس‌زمینه ترکیبی (تلاقی بنفش و آبی) */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        
        {/* --- بخش ۱: معرفی برند --- */}
        <section className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            ما <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">PromptBazar</span> هستیم.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            جایی که <strong>استراتژی محتوا</strong> با <strong>قدرت مهندسی نرم‌افزار</strong> ترکیب می‌شود تا ابزارهای هوش مصنوعی را برای بازار ایران رام کند.
          </p>
        </section>

        {/* --- بخش ۲: معرفی تیم (هسته اصلی) --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 relative">
            
            {/* خط اتصال وسط (فقط دسکتاپ) */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent -translate-x-1/2"></div>

            {/* کارت پیمان (سمت راست - استراتژی) */}
            <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl relative overflow-hidden group hover:border-purple-500/30 transition duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-purple-600/20 transition"></div>
                
                <div className="flex items-center gap-4 mb-6">
                    <img 
                        src="https://c327107.parspack.net/prompt/1763293380820-7da4d49b-0a7d-49ed-bd42-6c1f46d7424b.jpeg" 
                        alt="Peyman Kalantar Nazari" 
                        className="w-20 h-20 rounded-full border-2 border-purple-500/50 object-cover shadow-lg"
                    />
                    <div>
                        <h3 className="text-2xl font-bold text-white">پیمان کلانتر نظری</h3>
                        <span className="text-purple-400 font-medium text-sm flex items-center gap-1">
                            <Lightbulb size={14} />
                            بنیان‌گذار & استراتژیست
                        </span>
                    </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                    "من همیشه به دنبال راهی بودم تا تکنولوژی را برای کسب‌وکارها معنا کنم. نقش من در تیم، طراحی مسیر، شناخت نیاز بازار و تولید محتوای تخصصی است."
                </p>

                <ul className="space-y-2 mb-8 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><Target size={16} className="text-purple-500"/> استراتژی محصول و سئو</li>
                    <li className="flex items-center gap-2"><Rocket size={16} className="text-purple-500"/> اتوماسیون فرآیندها (n8n)</li>
                </ul>

                <Link href="/AuthorBox/peyman" className="inline-flex items-center text-white bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-lg transition shadow-lg shadow-purple-900/20 group-hover:translate-x-1">
                    پروفایل کامل من
                    <ExternalLink size={16} className="mr-2" />
                </Link>
            </div>

            {/* کارت پویان (سمت چپ - تکنولوژی) */}
            <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition duration-500">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -ml-16 -mt-16 group-hover:bg-blue-600/20 transition"></div>
                
                <div className="flex items-center gap-4 mb-6 flex-row-reverse md:flex-row text-right md:text-right">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white">پویان سلمانی</h3>
                        <span className="text-blue-400 font-medium text-sm flex items-center justify-end md:justify-start gap-1">
                            <Code2 size={14} />
                            توسعه‌دهنده ارشد (Lead Dev)
                        </span>
                    </div>
                    <img 
                        src="https://via.placeholder.com/150" // عکس پویان را اینجا بگذارید
                        alt="Pouyan Salmani" 
                        className="w-20 h-20 rounded-full border-2 border-blue-500/50 object-cover shadow-lg"
                    />
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                    "کار من تبدیل ایده‌های پیچیده به کدهای تمیز و سریع است. من زیرساخت فنی PromptBazar را می‌سازم تا کاربر بدون دغدغه فنی، فقط روی خلق کردن تمرکز کند."
                </p>

                <ul className="space-y-2 mb-8 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><Terminal size={16} className="text-blue-500"/> معماری سیستم و Next.js</li>
                    <li className="flex items-center gap-2"><Code2 size={16} className="text-blue-500"/> توسعه Backend و APIها</li>
                </ul>

                <Link href="/AuthorBox/poyan" className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg transition shadow-lg shadow-blue-900/20 group-hover:-translate-x-1">
                    پروفایل فنی من
                    <ExternalLink size={16} className="mr-2" />
                </Link>
            </div>

        </div>

        {/* --- بخش ۳: داستان ما (Mission) --- */}
        <section className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12 text-center">
            <Users className="w-12 h-12 text-gray-500 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">چرا ما کنار هم هستیم؟</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
                در دنیای امروز، <strong>بازاریابی بدون تکنولوژی</strong> کور است و <strong>تکنولوژی بدون استراتژی</strong> بی‌هدف.
                ما (پیمان و پویان) کنار هم جمع شدیم تا این فاصله را پر کنیم. ما باور داریم که هوش مصنوعی نباید ترسناک یا پیچیده باشد؛ بلکه باید ابزاری در دستان شما برای خلق ارزش باشد.
            </p>
        </section>

      </div>

      {/* اسکیما صفحه درباره ما */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
                "@type": "Organization",
                "name": "PromptBazar",
                "description": "پلتفرم آموزش پرامپت نویسی و اتوماسیون با هوش مصنوعی.",
                "url": "https://promptbazar.ir",
                "founder": {
                    "@type": "Person",
                    "name": "پیمان کلانتر نظری",
                    "url": "https://promptbazar.ir/AuthorBox/peyman"
                },
                "employee": [
                    {
                        "@type": "Person",
                        "name": "پویان سلمانی",
                        "jobTitle": "Lead Developer",
                        "url": "https://promptbazar.ir/AuthorBox/poyan"
                    }
                ]
            }
          }),
        }}
      />
    </div>
  )
}
