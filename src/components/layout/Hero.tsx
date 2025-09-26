import { CpuIcon, Download, DownloadCloud, Edit, GraduationCap, Lamp } from "lucide-react"
import Link from "next/link"

interface p {
  href: string,
  Icon: any,
  title: string,
  p: string
}
const Box = ({href, Icon, title, p}:p) => {
  return (
    <Link href="/" className="bg-zinc-800 rounded-md border border-[#2a2a2a]  p-8 transition hover:border-primary ">
      <Icon className="text-primary w-10 mb-5" size={50}/>
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      <p>{p}</p>
    </Link>
  )
}

const Hero = () => {
  return (
      <section id="home" className="flex items-center justify-center py-10">
        
        <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
           {/* متون بالای گریدها */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-center mb-4">آکادمی پرامپت و اتوماسیون n8n
          </h1>
          <p className="text-center">از آموزش‌های جامع ما برای تسلط بر مهندسی پرامپت و n8n استفاده کنید و با دانلود پرامپت‌ها و ورک‌فلوهای آماده، کسب‌وکار خود را متحول کنید.

        </p>
        </div>
          <Box title="پرامپت و پرامپت نویسی چیست؟" p="یاد بگیرید که پرامپت نویسی چیست و چگونه می‌توانید از آن برای تولید نتایج دقیق و کارآمد در هوش مصنوعی استفاده کنید. مفاهیم پایه و کاربردهای پرامپت نویسی در این بخش توضیح داده می‌شود." Icon={Lamp} href="/" />
          <Box title="آموزش n8n" p="آموزش n8n به شما کمک می‌کند تا از این ابزار اتوماسیون قدرتمند برای خودکارسازی فرآیندها و تسهیل کارهای روزمره استفاده کنید. یاد بگیرید که چگونه با n8n کارهای پیچیده را ساده و اتوماتیک کنید." Icon={CpuIcon} href="/"/>
          <Box title="دانلود n8n" p="به راحتی نرم‌افزار n8n را دانلود کنید و از قابلیت‌های آن برای اتوماسیون فرآیندها در کسب‌وکار خود استفاده کنید. n8n به شما این امکان را می‌دهد که کارهای پیچیده را به سادگی انجام دهید." Icon={Download} href="/"/>
          <Box title="دانلود پرامپت" p="دانلود پرامپت‌های آماده برای استفاده سریع و راحت در پروژه‌های هوش مصنوعی. به راحتی پرامپت‌های هوش مصنوعی را از سایت ما دریافت کنید و در پروژه‌های خود به کار ببرید." Icon={DownloadCloud} href="/"/>
          <Box title="دوره پرامپت و n8n" p="دوره‌های آموزشی پرامپت نویسی و n8n به شما کمک می‌کند تا به متخصص در این حوزه‌ها تبدیل شوید. این دوره‌ها شامل آموزش گام به گام و پروژه‌های عملی است تا مهارت‌های خود را تقویت کنید." Icon={GraduationCap} href="/"/>
          <Box title="وبلاگ پرامپت بازار" p="در وبلاگ پرامپت بازار مقالات آموزشی و اخبار مرتبط با پرامپت‌ها، n8n و هوش مصنوعی را پیدا کنید. از جدیدترین مطالب و منابع آموزشی ما بهره‌مند شوید." Icon={Edit} href="/"/>
        </div>
      </section>
  )
}

export default Hero
