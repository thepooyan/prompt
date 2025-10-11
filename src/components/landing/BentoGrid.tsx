import { Sparkles, Zap, Shield, Users, TrendingUp, BookOpen } from "lucide-react"

const features = [
  {
    title: "پرامپت‌های حرفه‌ای",
    description: "دسترسی به هزاران پرامپت تست شده و بهینه‌سازی شده برای انواع کاربردها",
    icon: Sparkles,
  },
  {
    title: "سرعت بالا",
    description: "نتایج فوری و دقیق با پرامپت‌های بهینه",
    icon: Zap,
  },
  {
    title: "امنیت کامل",
    description: "حفاظت از داده‌ها و حریم خصوصی شما",
    icon: Shield,
  },
  {
    title: "جامعه فعال",
    description: "بیش از ۱۰۰ هزار کاربر فعال و اشتراک‌گذاری تجربیات روزانه",
    icon: Users,
  },
  {
    title: "رشد مستمر",
    description: "به‌روزرسانی مداوم و افزودن پرامپت‌های جدید",
    icon: TrendingUp,
  },
  {
    title: "آموزش جامع",
    description: "راهنماها و دوره‌های آموزشی برای استفاده بهینه",
    icon: BookOpen,
  },
]

export default function BentoGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-zinc-800/80 border border-zinc-700/50 p-8 hover:border-[#8a2be2]/30 transition-all duration-500 hover:bg-zinc-800"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8a2be2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-700/50 mb-6 group-hover:bg-[#8a2be2]/20 transition-colors duration-500">
                    <Icon className="h-7 w-7 text-zinc-400 group-hover:text-[#8a2be2] transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-100">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

