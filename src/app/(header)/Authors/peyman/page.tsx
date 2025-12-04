"use client"

import React from "react"
import Link from "next/link"
import { Linkedin, Github, Mail, Lightbulb, Target, Rocket, TrendingUp, Users, Download, FileText, Feather, PenTool } from "lucide-react" 

export default function AuthorPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-[family-name:var(--font-vazirmatn)]">
      
      {/* پس‌زمینه با تم "خلاقیت و نویسندگی" */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-pink-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto p-4 md:p-8 max-w-6xl">
        
        {/* --- بخش ۱: هدر و پروفایل --- */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-sm mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* عکس پروفایل */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img 
                src="https://c327107.parspack.net/prompt/1763293380820-7da4d49b-0a7d-49ed-bd42-6c1f46d7424b.jpeg" 
                alt="Peyman Kalantar Nazari" 
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-gray-900 object-cover shadow-2xl"
              />
              {/* آیکون ترکیبی (لامپ برای ایده + قلم برای نویسندگی) */}
              <div className="absolute bottom-2 right-2 bg-orange-500 text-white p-1.5 rounded-full border-4 border-gray-900 flex items-center justify-center gap-1 min-w-[3rem]" title="Founder & Author">
                <Lightbulb className="w-4 h-4" />
                <Feather className="w-4 h-4" />
              </div>
            </div>

            {/* اطلاعات متنی */}
            <div className="text-center md:text-right flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  پیمان کلانتر نظری
                </span>
              </h1>
              
              {/* تایتل شغلی با تاکید بر نویسندگی */}
              <h2 className="text-xl text-gray-300 font-medium mb-4 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <span className="flex items-center gap-2"><Target className="w-5 h-5 text-pink-400" /> بنیان‌گذار (Founder)</span>
                <span className="hidden md:inline text-gray-600">|</span>
                <span className="flex items-center gap-2"><PenTool className="w-5 h-5 text-purple-400" /> نویسنده ارشد (Lead Author)</span>
              </h2>

              <p className="text-gray-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
                من خالق PromptBazar و نویسنده تمام مقالات تخصصی این سایت هستم. هدف من انتقال تجربیات واقعی در زمینه سئو و اتوماسیون به زبانی ساده و کاربردی است.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start items-center">
                <a 
                  href="https://c327107.parspack.net/prompt/1764836931049-Marketing Manager (1).pdf" 
                  download
                  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg shadow-lg shadow-purple-900/20 transform hover:-translate-y-1 transition font-medium group"
                >
                  <FileText size={20} />
                  <span>دانلود رزومه کامل</span>
                  <Download size={16} className="opacity-70 group-hover:translate-y-0.5 transition-transform" />
                </a>

                <div className="flex gap-3">
                  <SocialButton href="https://linkedin.com/in/peyman-kalantar-nazari" icon={<Linkedin size={20} />} label="LinkedIn" />
                  <SocialButton href="https://github.com/peyman5959" icon={<Github size={20} />} label="GitHub" />
                  <SocialButton href="mailto:p.kalantar.n@gmail.com" icon={<Mail size={20} />} label="Email" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- بخش ۲: آمار --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard value="Founder" label="بنیان‌گذار" />
            <StatCard value="Author" label="نویسنده مقالات" />
            <StatCard value="5+ Years" label="تجربه EdTech" />
            <StatCard value="Strategist" label="مدیریت محصول" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* --- ستون اصلی: داستان و نویسندگی --- */}
            <div className="lg:col-span-2 space-y-8">
                <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                        چرا من می‌نویسم؟ (My Content Philosophy)
                    </h3>
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                        <p>
                            ایده‌ی <strong>PromptBazar</strong> از یک دغدغه شخصی شروع شد، اما نوشتن در مورد آن اشتیاق اصلی من است. من معتقدم دانش هوش مصنوعی نباید پیچیده باشد.
                        </p>
                        <p>
                            تمامی مقالات، پرامپت‌ها و آموزش‌هایی که در این سایت می‌خوانید، حاصل تجربیات مستقیم من در پروژه‌های واقعی است. من به عنوان <strong>نویسنده و سردبیر</strong>، شخصاً روی کیفیت و صحت علمی تمام مطالب نظارت دارم.
                        </p>
                        <p>
                            من استراتژی و محتوا را طراحی می‌کنم و تیم فنی ما به رهبری 
                            <Link href="/Authors/pooyan" className="mx-1 text-cyan-400 hover:text-cyan-300 font-bold underline decoration-dotted underline-offset-4 transition" title="مشاهده پروفایل پویان سلمانی">
                                پویان سلمانی
                            </Link>
                            زیرساخت قدرتمند آن را پیاده‌سازی می‌کند.
                        </p>
                    </div>
                </section>

                <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Rocket className="text-orange-400" />
                        مسیر حرفه‌ای
                    </h3>
                    <ul className="space-y-4">
                         <li className="flex flex-col md:flex-row justify-between md:items-center border-b border-gray-700 pb-3 last:border-0">
                            <div>
                                <h4 className="font-bold text-white">بنیان‌گذار و نویسنده ارشد (Founder & Lead Author)</h4>
                                <span className="text-sm text-gray-400">PromptBazar | ۲۰۲۵ - اکنون</span>
                            </div>
                        </li>
                        <li className="flex flex-col md:flex-row justify-between md:items-center border-b border-gray-700 pb-3 last:border-0">
                            <div>
                                <h4 className="font-bold text-white">مدیر عملیات و استراتژیست محتوا</h4>
                                <span className="text-sm text-gray-400">موسسه تحلیل داده (Tahlil Dadeh)</span>
                            </div>
                        </li>
                         <li className="flex flex-col md:flex-row justify-between md:items-center">
                            <div>
                                <h4 className="font-bold text-white">مهندسی کامپیوتر (نرم‌افزار)</h4>
                                <span className="text-sm text-gray-400">دانشگاه آزاد تهران جنوب</span>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>

            {/* --- ستون کناری: مهارت‌ها --- */}
            <aside className="space-y-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sticky top-8">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
                        تخصص‌های من
                    </h3>
                    
                    <div className="space-y-5">
                        <SkillBar name="Content Strategy & Writing" percent={100} color="bg-orange-500" icon={<PenTool size={16} />} />
                        <SkillBar name="SEO & Growth" percent={95} color="bg-green-500" icon={<TrendingUp size={16} />} />
                        <SkillBar name="Product Management" percent={90} color="bg-purple-500" icon={<Target size={16} />} />
                        <SkillBar name="Automation Logic" percent={85} color="bg-pink-500" icon={<Rocket size={16} />} />
                    </div>
                </div>
            </aside>

        </div>
      </div>
      
      {/* اسکیما: سیگنال قوی به گوگل برای نویسندگی و مالکیت */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "پیمان کلانتر نظری",
            "url": "https://promptbazar.ir/author/peyman",
            // این خط کلیدی است: هم بنیان‌گذار، هم نویسنده ارشد
            "jobTitle": "Founder & Lead Author", 
            "worksFor": {
                "@type": "Organization",
                "name": "PromptBazar",
                "role": "Founder"
            },
            "sameAs": [
              "https://www.linkedin.com/in/peyman-kalantar-nazari",
              "https://github.com/peyman5959"
            ],
            "description": "بنیان‌گذار و نویسنده ارشد PromptBazar. متخصص در تولید محتوای تخصصی سئو و اتوماسیون.",
            "knowsAbout": ["Content Writing", "SEO", "Prompt Engineering", "Business Strategy"]
          }),
        }}
      />
    </div>
  )
}

// --- کامپوننت‌های فرعی ---
function SocialButton({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition border border-gray-700 hover:border-purple-500/50 group" title={label}>
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
                <div className={`${color} h-2 rounded-full transition-all duration-1000 ease-out`} style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    )
}
