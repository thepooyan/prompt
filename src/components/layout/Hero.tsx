import { Cpu, Gem, Pencil, SquareUser } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
      <section id="home" className="flex items-center justify-center py-10">
        <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-6 rounded-2xl border border-[#2a2a2a] bg-[#1e1e1e] p-8 transition hover:border-primary md:flex-row lg:col-span-2">
            <div>
              <h1 className="text-3xl font-extrabold">آکادمی پرامپت و اتوماسیون n8n</h1>
              <p className="mt-3 text-[#a0a0a0]">
              از آموزش‌های جامع ما برای تسلط بر مهندسی پرامپت و n8n استفاده کنید و با دانلود پرامپت‌ها و ورک‌فلوهای آماده، کسب‌وکار خود را متحول کنید.


              </p>
              <Link href="/prompts" target="_blank" className="mt-4 inline-block rounded-lg bg-primary px-5 py-3 font-bold">
                ورود به کتابخانه پرامپت‌ها
              </Link>
            </div>
            <img
              src="https://placehold.co/300x200/1e1e1e/8A2BE2?text=PromptBazar"
              alt="آکادمی پرامپت بازار"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <Link
            href="/prompt"
            className="relative col-span-1 min-h-[400px] overflow-hidden rounded-2xl bg-cover bg-center text-white lg:col-span-1"
            style={{ backgroundImage: "url('https://placehold.co/400x800/1e1e1e/white?text=Featured+Course')" }}
          >
            <div className="absolute inset-0 flex flex-col justify-end rounded-2xl bg-gradient-to-t from-black/90 to-transparent p-6">
              <h4 className="mb-2 font-bold">دوره جامع مهندسی پرامپت</h4>
              <p className="text-[#a0a0a0]">از مبتدی تا پیشرفته، به یک متخصص در نوشتن پرام-پت‌های حرفه‌ای تبدیل شوید.</p>
            </div>
          </Link>
          <div className="col-span-1 grid grid-cols-2 gap-6 md:grid-cols-4 lg:col-span-3">
            <Link
              href="/prompts/profile-picture"
              className="flex flex-col items-center rounded-2xl border border-[#2a2a2a] bg-[#1e1e1e] p-6 transition hover:border-primary"
            >
              <SquareUser className="bi bi-person-square text-4xl text-primary" />
              <h6 className="mt-4 font-bold"> دانلود پرامپت پروفایل</h6>
            </Link>
            <Link href="/workflows" className="flex flex-col items-center rounded-2xl border border-[#2a2a2a] bg-[#1e1e1e] p-6 transition hover:border-primary">
              <Cpu className="bi bi-cpu text-4xl text-primary" />
              <h6 className="mt-4 font-bold">ورک‌فلوهای n8n</h6>
            </Link>
            <Link href="/blog" className="flex flex-col items-center rounded-2xl border border-[#2a2a2a] bg-[#1e1e1e] p-6 transition hover:border-primary">
              <Pencil className="bi bi-pencil-square text-4xl text-primary" />
              <h6 className="mt-4 font-bold">مقالات آموزشی</h6>
            </Link>
            <Link
              href="/prompts/design"
              className="flex flex-col items-center rounded-2xl border border-[#2a2a2a] bg-[#1e1e1e] p-6 transition hover:border-primary"
            >
              <Gem className="bi bi-gem text-4xl text-primary" />
              <h6 className="mt-4 font-bold">طراحی لوگو</h6>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Hero
