"use client"

import React from "react"
// اگر آیکون‌ها را ندارید، می‌توانید از پکیج lucide-react نصب کنید یا با svg جایگزین کنید
import { Linkedin, Twitter, Globe, Github, Cpu, Zap, Code, BookOpen } from "lucide-react" 

export default function AuthorPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-[family-name:var(--font-vazirmatn)]">
      
      {/* Background Glow Effects (برای زیبایی پس‌زمینه مثل صفحه میدجرنی) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto p-4 md:p-8 max-w-6xl">
        
        {/* --- بخش ۱: هدر و پروفایل (Hero Section) --- */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-sm mb-12 relative overflow-hidden">
          {/* نوار گرادینت بالای کارت */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* عکس پروفایل با افکت نئون */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img 
                src="https://via.placeholder.com/200" // لینک عکس خودتان را اینجا بگذارید
                alt="Peyman Kalantari" 
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-gray-900 object-cover shadow-2xl"
              />
              {/* بج تایید */}
              <div className="absolute bottom-2 right-2 bg-blue-500 text-white p-1.5 rounded-full border-4 border-gray-900" title="Verified Expert">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>

            {/* اطلاعات متنی */}
            <div className="text-center md:text-right flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  پیمان کلانتری
                </span>
              </h1>
              <h2 className="text-xl text-gray-300 font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                متخصص اتوماسیون (n8n) و مهندس پرامپت
              </h2>
              <p className="text-gray-400 max-w-2xl leading-relaxed mb-6 mx-auto md:mx-0">
                بنیان‌گذار PromptBazar. من به کسب‌وکارها کمک می‌کنم تا با استفاده از هوش مصنوعی و اتوماسیون، 
                کارهای تکراری را حذف کنند و بر خلاقیت تمرکز کنند. هدف من: «کار کمتر، بازدهی بیشتر».
              </p>
              
              {/* دکمه‌های سوشال */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <SocialButton href="https://linkedin.com/in/peyman-kalantari" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialButton href="#" icon={<Twitter size={20} />} label="Twitter" />
                <SocialButton href="#" icon={<Github size={20} />} label="Projects" />
                <SocialButton href="https://promptbazar.ir" icon={<Globe size={20} />} label="Website" />
              </div>
            </div>
          </div>
        </section>

        {/* --- بخش ۲: آمار و ارقام (Stats) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard value="500+" label="ورک‌فلو و پرامپت" />
            <StatCard value="5 سال" label="تجربه تخصصی" />
            <StatCard value="10k+" label="کاربران فعال" />
            <StatCard value="TOP 1%" label="رتبه نویسنده" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* --- ستون اصلی: بیوگرافی و داستان --- */}
            <div className="lg:col-span-2 space-y-8">
                <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                        داستان من
                    </h3>
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                        <p>
                            همه چیز از یک سوال ساده شروع شد: 
                            <span className="text-purple-300 font-bold mx-1">"چرا باید کارهایی را انجام دهم که کامپیوتر می‌تواند بهتر انجام دهد؟"</span>
                        </p>
                        <p>
                            در سال‌های اخیر، تمرکز من روی ترکیب ابزارهای <strong>No-Code</strong> مثل n8n با قدرت <strong>Generative AI</strong> بوده است. 
                            من معتقدم که کاربران ایرانی با وجود تحریم‌ها، نباید از تکنولوژی روز دنیا عقب بمانند.
                        </p>
                        <p>
                            در <strong>PromptBazar</strong>، من تجربیات واقعی خودم را به اشتراک می‌گذارم. اینجا خبری از تئوری‌های خسته‌کننده نیست؛ 
                            فقط راهکارهای عملی برای حل مشکلات واقعی.
                        </p>
                    </div>
                </section>

                {/* آخرین مقالات (با استایل کارت‌های میدجرنی) */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <BookOpen className="text-pink-500" />
                        آخرین نوشته‌ها
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ArticleCard 
                            title="چگونه n8n را جایگزین زپیر کنیم؟"
                            desc="راهنمای کامل کاهش هزینه‌های ماهانه و اتصال سرویس‌ها بدون فیلترشکن."
                            tag="Automation"
                        />
                         <ArticleCard 
                            title="جادوی پرامپت‌نویسی در میدجرنی V6"
                            desc="تکنیک‌های پیشرفته برای ساخت تصاویر فتورئالستیک که هیچ‌کس یاد نمی‌دهد."
                            tag="AI Art"
                        />
                         <ArticleCard 
                            title="ساخت دستیار تولید محتوا با GPT-4"
                            desc="چطور یک نویسنده هوشمند بسازیم که لحن برند ما را کپی کند؟"
                            tag="Prompt Engineering"
                        />
                         <ArticleCard 
                            title="درآمد دلاری از فروش پرامپت"
                            desc="نقشه راه جامع برای ورود به بازار جهانی Prompt Base."
                            tag="Business"
                        />
                    </div>
                </section>
            </div>

            {/* --- ستون کناری: مهارت‌ها (Sidebar) --- */}
            <aside className="space-y-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sticky top-8">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
                        جعبه ابزار من
                    </h3>
                    
                    <div className="space-y-5">
                        <SkillBar name="n8n Automation" percent={95} color="bg-pink-500" icon={<Zap size={16} />} />
                        <SkillBar name="Midjourney / Stable Diff" percent={90} color="bg-purple-500" icon={<Cpu size={16} />} />
                        <SkillBar name="Python & JS" percent={75} color="bg-blue-500" icon={<Code size={16} />} />
                        <SkillBar name="SEO Strategy" percent={85} color="bg-green-500" icon={<Globe size={16} />} />
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-700">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">علاقه‌مندی‌ها</h4>
                        <div className="flex flex-wrap gap-2">
                            {['AI Agents', 'Open Source', 'Crypto', 'SaaS', 'Next.js'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-purple-500 transition cursor-default">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "پیمان کلانتری",
            "url": "https://promptbazar.ir/author/peyman-kalantari",
            "image": "https://promptbazar.ir/images/peyman.jpg",
            "jobTitle": "Founder & Automation Expert",
            "sameAs": [
              "https://linkedin.com/in/peyman-kalantari",
              "https://twitter.com/peyman"
            ],
            "description": "متخصص اتوماسیون n8n و مدرس پرامپت نویسی حرفه‌ای."
          }),
        }}
      />
    </div>
  )
}

// --- Sub-components (برای تمیزی کد) ---

function SocialButton({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <a 
            href={href} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition border border-gray-700 hover:border-purple-500/50"
        >
            {icon}
            <span className="hidden md:inline text-sm font-medium">{label}</span>
        </a>
    )
}

function StatCard({ value, label }: { value: string, label: string }) {
    return (
        <div className="bg-gray-800/40 border border-gray-700/50 p-4 rounded-xl text-center hover:bg-gray-800/60 transition group">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition">{value}</div>
            <div className="text-xs md:text-sm text-gray-500">{label}</div>
        </div>
    )
}

function SkillBar({ name, percent, color, icon }: { name: string, percent: number, color: string, icon: React.ReactNode }) {
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                    {icon} {name}
                </span>
                <span className="text-xs text-gray-500 font-mono">{percent}%</span>
            </div>
            <div className="w-full bg-gray-900 rounded-full h-2">
                <div 
                    className={`${color} h-2 rounded-full transition-all duration-1000 ease-out`} 
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    )
}

function ArticleCard({ title, desc, tag }: { title: string, desc: string, tag: string }) {
    return (
        <a href="#" className="block bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 hover:border-purple-500/50 hover:bg-gray-800/60 transition group">
            <div className="flex justify-between items-start mb-3">
                <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded border border-purple-500/30">
                    {tag}
                </span>
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
            <h4 className="font-bold text-lg text-white mb-2 group-hover:text-purple-400 transition">{title}</h4>
            <p className="text-sm text-gray-400 line-clamp-2">{desc}</p>
        </a>
    )
}