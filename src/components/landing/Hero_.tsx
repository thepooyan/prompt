import type { LucideIcon } from "lucide-react"
import { CpuIcon, Download, DownloadCloud, Edit, GraduationCap, Lamp } from "lucide-react"
import Link from "next/link"

interface BoxProps {
  href: string
  Icon: LucideIcon
  title: string
  p: string
}

const Box = ({ href, Icon, title, p }: BoxProps) => {
  return (
    <Link
      href={href}
      className="group rounded-[20px] bg-gradient-to-b from-zinc-900 to-black p-6 shadow ring-1 ring-zinc-700 hover:-translate-y-0.5 hover:shadow-lg transition"
      aria-label={title}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 shadow ring-1 ring-zinc-700">
          <Icon className="h-6 w-6 text-violet-400" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-extrabold text-white">{title}</h2>
        </div>
      </div>
      <p className="mt-3 text-sm leading-7 text-zinc-400">{p}</p>
      <div className="mt-3 text-sm font-bold text-violet-400">مشاهده</div>
    </Link>
  )
}

const Hero = () => {
  return (
    <section id="home" dir="rtl" className="py-18 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <a
            href="/blog"
            className="relative overflow-hidden rounded-[22px] bg-zinc-950 shadow-md ring-1 ring-zinc-800"
          >
            <img
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600&auto=format&fit=crop"
              alt="پوستر معرفی"
              className="h-[420px] w-full object-cover transition group-hover:scale-[1.02]"
            />
          </a>

          <div className="col-span-2 relative overflow-hidden rounded-[22px] bg-zinc-950 shadow-md ring-1 ring-zinc-800 p-8">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-violet-950 via-zinc-900 to-black" />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
              آکادمی پرامپت و اتوماسیون n8n
            </h1>
            <p className="text-zinc-400 max-w-3xl">
              از آموزش‌های جامع ما برای تسلط بر مهندسی پرامپت و n8n استفاده کنید و با دانلود پرامپت‌ها و ورک‌فلوهای آماده، کسب‌وکار خود را متحول کنید.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Box
            href="/what-is-prompt"
            Icon={Lamp}
            title="پرامپت و پرامپت نویسی چیست؟"
            p="یاد بگیرید که پرامپت نویسی چیست و چگونه می‌توانید از آن برای تولید نتایج دقیق و کارآمد در هوش مصنوعی استفاده کنید. مفاهیم پایه و کاربردهای پرامپت نویسی در این بخش توضیح داده می‌شود."
          />
          <Box
            href="/n8n"
            Icon={CpuIcon}
            title="آموزش n8n"
            p="آموزش n8n به شما کمک می‌کند تا از این ابزار اتوماسیون قدرتمند برای خودکارسازی فرآیندها و تسهیل کارهای روزمره استفاده کنید. یاد بگیرید که چگونه با n8n کارهای پیچیده را ساده و اتوماتیک کنید."
          />
          <Box
            href="/download-n8n"
            Icon={Download}
            title="دانلود n8n"
            p="به راحتی نرم‌افزار n8n را دانلود کنید و از قابلیت‌های آن برای اتوماسیون فرآیندها در کسب‌وکار خود استفاده کنید. n8n به شما این امکان را می‌دهد که کارهای پیچیده را به سادگی انجام دهید."
          />
          <Box
            href="/download-prompts"
            Icon={DownloadCloud}
            title="دانلود پرامپت"
            p="دانلود پرامپت‌های آماده برای استفاده سریع و راحت در پروژه‌های هوش مصنوعی. به راحتی پرامپت‌های هوش مصنوعی را از سایت ما دریافت کنید و در پروژه‌های خود به کار ببرید."
          />
          <Box
            href="/courses"
            Icon={GraduationCap}
            title="دوره پرامپت و n8n"
            p="دوره‌های آموزشی پرامپت نویسی و n8n به شما کمک می‌کند تا به متخصص در این حوزه‌ها تبدیل شوید. این دوره‌ها شامل آموزش گام به گام و پروژه‌های عملی است تا مهارت‌های خود را تقویت کنید."
          />
          <Box
            href="/blog"
            Icon={Edit}
            title="وبلاگ پرامپت بازار"
            p="در وبلاگ پرامپت بازار مقالات آموزشی و اخبار مرتبط با پرامپت‌ها، n8n و هوش مصنوعی را پیدا کنید. از جدیدترین مطالب و منابع آموزشی ما بهره‌مند شوید."
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
