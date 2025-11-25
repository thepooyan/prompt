"use client"

import React from "react"
// پکیج آیکون‌ها
import { 
  Linkedin, Github, Mail, Cpu, Zap, Code, BookOpen, 
  GraduationCap, FileText, Download, Globe 
} from "lucide-react" 

export default function AuthorPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-[family-name:var(--font-vazirmatn)]">
      
      {/* --- پس‌زمینه با افکت‌های نوری (Glow Effects) --- */}
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
            
            {/* عکس پروفایل */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img 
                src="https://c327107.parspack.net/prompt/1763293380820-7da4d49b-0a7d-49ed-bd42-6c1f46d7424b.jpeg" 
                alt="Peyman Kalantar Nazari" 
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-gray-900 object-cover shadow-2xl"
              />
              {/* تیک آبی */}
              <div className="absolute bottom-2 right-2 bg-blue-500 text-white p-1.5 rounded-full border-4 border-gray-900" title="Verified Expert">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>

            {/* اطلاعات متنی */}
            <div className="text-center md:text-right flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  پیمان کلانتر نظری
                </span>
              </h1>
              <h2 className="text-xl text-gray-300 font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                متخصص دیجیتال مارکتینگ & استراتژیست اتوماسیون
              </h2>
              <p className="text-gray-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
                بنیان‌گذار PromptBazar. با پیش‌زمینه مهندسی نرم‌افزار و بیش از ۵ سال تجربه در سئو و مدیریت عملیات آموزشی (EdTech). 
                من پل میان "استراتژی رشد" و "اتوماسیون فنی" هستم تا کسب‌وکارهای هوشمند بسازیم.
              </p>
              
              {/* دکمه‌های عملیاتی (اکشن بار) */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start items-center">
                
                {/* دکمه دانلود رزومه (جدید) */}
                <a 
                  href="/files/Peyman-Kalantari-Resume.pdf" 
                  download
                  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg shadow-lg shadow-purple-900/20 transform hover:-translate-y-1 transition font-medium group"
                >
                  <FileText size={20} />
                  <span>دانلود رزومه کامل</span>
                  <Download size={16} className="opacity-70 group-hover:translate-y-0.5 transition-transform" />
                </a>

                {/* دکمه‌های شبکه اجتماعی */}
                <div className="flex gap-3">
                  <SocialButton href="https://linkedin.com/in/peyman-kalantar-nazari" icon={<Linkedin size={20} />} label="LinkedIn" />
                  <SocialButton href="https://github.com/peyman5959" icon={<Github size={20} />} label="GitHub" />
                  <SocialButton href="mailto:p.kalantar.n@gmail.com" icon={<Mail size={20} />} label="Email" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- بخش ۲: آمار و ارقام (Stats) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard value="5+ سال" label="سابقه دیجیتال مارکتینگ" />
            <StatCard value="B.Sc." label="مهندسی نرم‌افزار" />
            <StatCard value="EdTech" label="تخصص در آموزش" />
            <StatCard value="SEO & Ops" label="تمرکز اصلی" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* --- ستون اصلی (چپ): داستان و تجربه --- */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* بیوگرافی */}
                <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                        مسیر حرفه‌ای من
                    </h3>
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                        <p>
                            فعالیت حرفه‌ای من ترکیبی از دنیای <span className="text-purple-300 font-bold">کدنویسی</span> و <span className="text-pink-300 font-bold">مارکتینگ</span> است.
                            به عنوان فارغ‌التحصیل مهندسی نرم‌افزار، همیشه نگاهم به بازاریابی، "داده‌محور" و "سیستمی" بوده است.
                        </p>
                        <p>
                            از سال ۱۳۹۹ به عنوان مدیر عملیات و متخصص سئو در موسسه <strong>تحلیل داده</strong> (Tahlil Dadeh)،
                            مسئولیت استراتژی رشد بوت‌کمپ‌های تکنولوژی (مثل Data Science و AI) را بر عهده داشتم.
                            آنجا یاد گرفتم چگونه با سئوی تکنیکال و بهینه‌سازی تجربه کاربری (UX)، ورودی ارگانیک را به فروش واقعی تبدیل کنم.
                        </p>
                        <p>
                            امروز در <strong>PromptBazar</strong>، تمام آن تجربیات را با قدرت n8n و هوش مصنوعی ترکیب کرده‌ام تا به شما کمک کنم:
                            <br/>
                            ۱. فرآیندهای بازاریابی خود را خودکار کنید.<br/>
                            ۲. با مهندسی پرامپت، محتوای باکیفیت و سریع تولید کنید.
                        </p>
                    </div>
                </section>

                {/* سوابق تحصیلی */}
                <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <GraduationCap className="text-blue-400" />
                        سوابق تحصیلی
                    </h3>
                    <ul className="space-y-4">
                         <li className="flex flex-col md:flex-row justify-between md:items-center border-b border-gray-700 pb-3 last:border-0">
                            <div>
                                <h4 className="font-bold text-white">مهندسی کامپیوتر (نرم‌افزار)</h4>
                                <span className="text-sm text-gray-400">دانشگاه آزاد اسلامی، واحد تهران جنوب</span>
                            </div>
                            <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300 mt-2 md:mt-0">کارشناسی</span>
                        </li>
                        <li className="flex flex-col md:flex-row justify-between md:items-center">
                            <div>
                                <h4 className="font-bold text-white">دیجیتال مارکتینگ و رشد (Growth)</h4>
                                <span className="text-sm text-gray-400">دیجی‌نکست (نوآوری دیجی‌کالا)</span>
                            </div>
                            <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300 mt-2 md:mt-0">۲۰۲۴ - ۲۰۲۵</span>
                        </li>
                    </ul>
                </section>
            </div>

            {/* --- ستون کناری (راست): مهارت‌ها --- */}
            <aside className="space-y-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sticky top-8">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
                        تخصص‌های کلیدی
                    </h3>
                    
                    <div className="space-y-5">
                        <SkillBar name="SEO Strategy & Technical" percent={95} color="bg-green-500" icon={<Globe size={16} />} />
                        <SkillBar name="n8n Automation" percent={90} color="bg-pink-500" icon={<Zap size={16} />} />
                        <SkillBar name="Prompt Engineering" percent={85} color="bg-purple-500" icon={<Cpu size={16} />} />
                        <SkillBar name="Analytics & Data Analysis" percent={80} color="bg-blue-500" icon={<Code size={16} />} />
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-700">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">ابزارهای مسلط</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Ahrefs', 'GSC', 'Screaming Frog', 'Microsoft Clarity', 'WordPress'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-900 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-purple-500 transition cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

        </div>
      </div>

      {/* --- کدهای اسکیما (Schema Markup) برای سئو --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Peyman Kalantar Nazari",
            "url": "https://promptbazar.ir/author/peyman",
            "image": "https://c327107.parspack.net/prompt/1763293380820-7da4d49b-0a7d-49ed-bd42-6c1f46d7424b.jpeg",
            "jobTitle": "Digital Marketing Specialist & Automation Expert",
            "alumniOf": "Islamic Azad University, South Tehran Branch",
            "worksFor": {
                "@type": "Organization",
                "name": "PromptBazar"
            },
            "sameAs": [
              "https://www.linkedin.com/in/peyman-kalantar-nazari",
              "https://github.com/peyman5959"
            ],
            "description": "Digital Marketing Specialist with background in Software Engineering, focusing on SEO, EdTech Operations, and n8n Automation."
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
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition border border-gray-700 hover:border-purple-500/50 group"
            title={label}
        >
            {icon}
            {label && <span className="hidden md:inline text-sm font-medium">{label}</span>}
        </a>
    )
}

function StatCard({ value, label }: { value: string, label: string }) {
    return (
        <div className="bg-gray-800/40 border border-gray-700/50 p-4 rounded-xl text-center hover:bg-gray-800/60 transition group cursor-default">
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