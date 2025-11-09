import { Sparkles, Zap, Shield, Users, TrendingUp, BookOpen, } from "lucide-react"
import Link from "next/link"

const boxes = [
  {
    href: "/what-is-prompt",
    Icon: Sparkles,
    title: "پرامپت و پرامپت نویسی چیست؟",
    p: "یاد بگیرید که پرامپت نویسی چیست و چگونه می‌توانید با نوشتن دستورات دقیق، خروجی‌های قدرتمند و حرفه‌ای از هوش مصنوعی دریافت کنید."
  },
  {
    href: "/what-is-n8n",
    Icon: Zap,
    title: "آموزش n8n",
    p: "با آموزش n8n، فرآیندهای پیچیده را خودکار کنید. یاد بگیرید که چگونه n8n می‌تواند کارهای روزمره شما را ساده و خودکار کند."
  },
  {
    href: "#download-n8n",
    Icon: Shield,
    title: "دانلود n8n",
    p: "n8n را دانلود کنید و از امکانات قدرتمند آن برای اتوماسیون فرآیندها و تسهیل کارهای خود بهره‌مند شوید."
  },
  {
    href: "/Prompts",
    Icon: Users,
    title: "دانلود پرامپت",
    p: "پرامپت‌های هوش مصنوعی آماده را دانلود کنید و آن‌ها را در پروژه‌های خود استفاده کنید. به راحتی پرامپت‌های خود را انتخاب کرده و شروع کنید."
  },
  {
    href: "#courses",
    Icon: TrendingUp,
    title: "دوره پرامپت و n8n",
    p: "دوره‌های آموزشی پرامپت نویسی و n8n برای شما طراحی شده است تا از مبتدی تا حرفه‌ای، با این دو ابزار آشنا شوید."
  },
  {
    href: "/Blog",
    Icon: BookOpen,
    title: "وبلاگ پرامپت بازار",
    p: "مقالات آموزشی و به روز از پرامپت نویسی، n8n و آخرین اخبار در زمینه هوش مصنوعی را در وبلاگ ما بخوانید."
  }
]

export default function BentoGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sidebar ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boxes.map((feature, index) => {
            const Icon = feature.Icon
            return (
              <Link
                href={feature.href}
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-muted border p-8 hover:border-primary/30 transition-all duration-500 "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                    <Icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 ">{feature.title}</h3>
                  <p className=" text-muted-foreground leading-relaxed text-sm">{feature.p}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

