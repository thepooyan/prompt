"use client"

import React from "react"
// آیکون‌های فنی‌تر برای برنامه‌نویس
import { Github, Linkedin, Mail, Terminal, Database, Server, Code2, Layers, Cpu, Globe } from "lucide-react" 

export default function PouyanProfile() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-[family-name:var(--font-vazirmatn)]">
      
      {/* پس‌زمینه با تم "ماتریکس/تکنیکال" (کمی متفاوت از صفحه شما) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto p-4 md:p-8 max-w-6xl">
        
        {/* --- بخش ۱: هدر و پروفایل (Hero Section) --- */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-sm mb-12 relative overflow-hidden">
          {/* نوار گرادینت آبی/سیان برای حس تکنولوژی */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* عکس پروفایل */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              {/* ⚠️ عکس پویان را اینجا قرار دهید */}
              <img 
                src="https://c327107.parspack.net/prompt/1763288118442-me.webp" // لینک عکس واقعی پویان را جایگزین کنید
                alt="Pouyan Salmani" 
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-gray-900 object-cover shadow-2xl"
              />
              <div className="absolute bottom-2 right-2 bg-green-500 text-white p-1.5 rounded-full border-4 border-gray-900" title="Lead Developer">
                <Code2 className="w-5 h-5" />
              </div>
            </div>

            {/* اطلاعات متنی */}
            <div className="text-center md:text-right flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  پویان سلمانی
                </span>
              </h1>
              <h2 className="text-xl text-gray-300 font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                توسعه‌دهنده ارشد (Lead Developer) & معمار نرم‌افزار
              </h2>
              <p className="text-gray-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
                خالق کدهای پشت صحنه PromptBazar. متخصص در توسعه وب مدرن با Next.js و معماری سیستم‌های مقیاس‌پذیر.
                من ایده‌ها را به کدهای تمیز، سریع و امن تبدیل می‌کنم.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                <SocialButton href="#" icon={<Github size={20} />} label="Github" />
                <SocialButton href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialButton href="#" icon={<Mail size={20} />} label="Email" />
              </div>
            </div>
          </div>
        </section>

        {/* --- بخش ۲: آمار فنی (Stats) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard value="Next.js" label="تکنولوژی اصلی" />
            <StatCard value="100%" label="Performance" />
            <StatCard value="+50K" label="Lines of Code" />
            <StatCard value="Full-Stack" label="تخصص" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* --- ستون اصلی: بیوگرافی فنی --- */}
            <div className="lg:col-span-2 space-y-8">
                <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
                        درباره من
                    </h3>
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                        <p>
                            به عنوان توسعه‌دهنده اصلی (Lead Developer) در <strong className="text-cyan-400">PromptBazar</strong>، مسئولیت من فراتر از نوشتن کد است.
                            من مسئول خلق تجربه‌ای هستم که کاربر در آن احساس سرعت، امنیت و راحتی کند.
                        </p>
                        <p>
                            پلتفرم ما بر پایه آخرین تکنولوژی‌های وب (Next.js 14, React, Tailwind) بنا شده تا بتواند پردازش‌های سنگین هوش مصنوعی را به ساده‌ترین شکل ممکن به کاربر ارائه دهد.
                            چالش‌های فنی مثل اتصال APIهای هوش مصنوعی، بهینه‌سازی سرعت لود و طراحی رابط کاربری تعاملی، بخشی از روزمرگی‌های من است.
                        </p>
                    </div>
                </section>

                {/* استک تکنولوژی (Tech Stack) */}
                <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Layers className="text-cyan-400" />
                        تکنولوژی‌هایی که استفاده می‌کنم
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                         <TechTag name="Next.js / React" />
                         <TechTag name="TypeScript" />
                         <TechTag name="Tailwind CSS" />
                         <TechTag name="Node.js" />
                         <TechTag name="PostgreSQL" />
                         <TechTag name="Git & CI/CD" />
                    </div>
                </section>
            </div>

            {/* --- ستون کناری: مهارت‌ها --- */}
            <aside className="space-y-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sticky top-8">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
                        مهارت‌های فنی
                    </h3>
                    
                    <div className="space-y-5">
                        <SkillBar name="Frontend (React/Next)" percent={95} color="bg-blue-500" icon={<Globe size={16} />} />
                        <SkillBar name="Backend & API" percent={85} color="bg-green-500" icon={<Server size={16} />} />
                        <SkillBar name="Database Design" percent={80} color="bg-yellow-500" icon={<Database size={16} />} />
                        <SkillBar name="DevOps & Deploy" percent={75} color="bg-red-500" icon={<Cpu size={16} />} />
                    </div>
                </div>
            </aside>

        </div>
      </div>

      {/* اسکیما برای پویان */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "پویان سلمانی",
            "url": "https://promptbazar.ir/author/pouyan",
            "jobTitle": "Lead Software Developer",
            "worksFor": {
                "@type": "Organization",
                "name": "PromptBazar"
            },
            "description": "توسعه‌دهنده ارشد و معمار نرم‌افزار پلتفرم PromptBazar."
          }),
        }}
      />
    </div>
  )
}

// --- کامپوننت‌های فرعی ---

function SocialButton({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <a 
            href={href} 
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition border border-gray-700 hover:border-cyan-500/50"
        >
            {icon}
            <span className="hidden md:inline text-sm font-medium">{label}</span>
        </a>
    )
}

function StatCard({ value, label }: { value: string, label: string }) {
    return (
        <div className="bg-gray-800/40 border border-gray-700/50 p-4 rounded-xl text-center hover:bg-gray-800/60 transition group cursor-default">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-cyan-400 transition">{value}</div>
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

function TechTag({ name }: { name: string }) {
    return (
        <div className="flex items-center justify-center p-3 bg-gray-900 border border-gray-700 rounded-lg text-sm text-gray-300 font-mono hover:border-cyan-500 transition cursor-default">
            {name}
        </div>
    )
}