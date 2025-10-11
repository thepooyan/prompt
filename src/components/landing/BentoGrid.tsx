import { Sparkles, Zap, Shield, Users, TrendingUp, BookOpen, } from "lucide-react"
import Link from "next/link"

const boxes = [
  {
    href: "/what-is-prompt",
    Icon: Sparkles,
    title: "پرامپت و پرامپت نویسی چیست؟",
    p: "یاد بگیرید که پرامپت نویسی چیست و چگونه می‌توانید از آن برای تولید نتایج دقیق و کارآمد در هوش مصنوعی استفاده کنید. مفاهیم پایه و کاربردهای پرامپت نویسی در این بخش توضیح داده می‌شود."
  },
  {
    href: "/n8n",
    Icon: Zap,
    title: "آموزش n8n",
    p: "آموزش n8n به شما کمک می‌کند تا از این ابزار اتوماسیون قدرتمند برای خودکارسازی فرآیندها و تسهیل کارهای روزمره استفاده کنید. یاد بگیرید که چگونه با n8n کارهای پیچیده را ساده و اتوماتیک کنید."
  },
  {
    href: "/download-n8n",
    Icon: Shield,
    title: "دانلود n8n",
    p: "به راحتی نرم‌افزار n8n را دانلود کنید و از قابلیت‌های آن برای اتوماسیون فرآیندها در کسب‌وکار خود استفاده کنید. n8n به شما این امکان را می‌دهد که کارهای پیچیده را به سادگی انجام دهید."
  },
  {
    href: "/download-prompts",
    Icon: Users,
    title: "دانلود پرامپت",
    p: "دانلود پرامپت‌های آماده برای استفاده سریع و راحت در پروژه‌های هوش مصنوعی. به راحتی پرامپت‌های هوش مصنوعی را از سایت ما دریافت کنید و در پروژه‌های خود به کار ببرید."
  },
  {
    href: "/courses",
    Icon: TrendingUp,
    title: "دوره پرامپت و n8n",
    p: "دوره‌های آموزشی پرامپت نویسی و n8n به شما کمک می‌کند تا به متخصص در این حوزه‌ها تبدیل شوید. این دوره‌ها شامل آموزش گام به گام و پروژه‌های عملی است تا مهارت‌های خود را تقویت کنید."
  },
  {
    href: "/blog",
    Icon: BookOpen,
    title: "وبلاگ پرامپت بازار",
    p: "در وبلاگ پرامپت بازار مقالات آموزشی و اخبار مرتبط با پرامپت‌ها، n8n و هوش مصنوعی را پیدا کنید. از جدیدترین مطالب و منابع آموزشی ما بهره‌مند شوید."
  }
]

export default function BentoGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boxes.map((feature, index) => {
            const Icon = feature.Icon
            return (
              <Link
                href={feature.href}
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-zinc-800/80 border border-zinc-700/50 p-8 hover:border-[#8a2be2]/30 transition-all duration-500 hover:bg-zinc-800"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8a2be2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-700/50 mb-6 group-hover:bg-[#8a2be2]/20 transition-colors duration-500">
                    <Icon className="h-7 w-7 text-zinc-400 group-hover:text-[#8a2be2] transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-100">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">{feature.p}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

