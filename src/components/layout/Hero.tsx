import { Cpu, Gem, Pencil, SquareUser } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
      <section id="home" className="min-h-screen flex items-center justify-center pt-28">
        <div className="container mx-auto grid lg:grid-cols-[2.5fr,1fr] gap-6">
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row gap-6 bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-8 hover:border-primary transition">
              <div>
                <h1 className="text-3xl font-extrabold">آکادمی پرامپت بازار</h1>
                <p className="mt-3 text-[#a0a0a0]">
                  مرجع تخصصی دانلود پرامپت‌های آماده و ورک‌فلوهای اتوماسیون. خلاقیت و کسب‌وکار خود را با ابزارهای حرفه‌ای هوش مصنوعی متحول کنید.
                </p>
                <Link href="/prompts" target="_blank" className="mt-4 inline-block bg-primary px-5 py-3 rounded-lg font-bold">
                  ورود به کتابخانه پرامپت‌ها
                </Link>
              </div>
              <img src="https://placehold.co/300x200/1e1e1e/8A2BE2?text=PromptBazar" alt="آکادمی پرامپت بازار" width={300} height={200} className="rounded-lg" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/prompts/profile-picture" className="flex flex-col items-center bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 hover:border-primary transition">
                <SquareUser className="bi bi-person-square text-4xl text-primary" />
                <h6 className="mt-4 font-bold">پرامپت پروفایل</h6>
              </Link>
              <Link href="/workflows" className="flex flex-col items-center bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 hover:border-primary transition">
                <Cpu className="bi bi-cpu text-4xl text-primary" />
                <h6 className="mt-4 font-bold">ورک‌فلوهای n8n</h6>
              </Link>
              <Link href="/blog" className="flex flex-col items-center bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 hover:border-primary transition">
                <Pencil className="bi bi-pencil-square text-4xl text-primary" />
                <h6 className="mt-4 font-bold">مقالات آموزشی</h6>
              </Link>
              <Link href="/prompts/design" className="flex flex-col items-center bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 hover:border-primary transition">
                <Gem className="bi bi-gem text-4xl text-primary" />
                <h6 className="mt-4 font-bold">طراحی لوگو</h6>
              </Link>
            </div>
          </div>

          <Link href="/prompt" className="relative rounded-2xl overflow-hidden bg-cover bg-center min-h-[400px] flex flex-col justify-end text-white" style={{ backgroundImage: "url('https://placehold.co/400x800/1e1e1e/white?text=Featured+Course')" }}>
            <div className="p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h4 className="font-bold mb-2">دوره جامع مهندسی پرامپت</h4>
              <p className="text-[#a0a0a0]">از مبتدی تا پیشرفته، به یک متخصص در نوشتن پرامپت‌های حرفه‌ای تبدیل شوید.</p>
            </div>
          </Link>
        </div>
      </section>
  )
}

export default Hero
