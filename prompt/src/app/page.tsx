// app/page.tsx
import Benefits from "@/components/landing/Benefits"
import FAQSection from "@/components/landing/FaqSection"
import Latest from "@/components/landing/Latest"
import LatestBlogs from "@/components/landing/LatestBlogs"
import { Cpu, Gem, Pencil, SquareUser } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main dir="rtl" className="bg-[#121212] text-[#e0e0e0] font-[Vazirmatn]">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-[#1e1e1e]/85 backdrop-blur-md z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="#home" className="font-bold text-xl">پرامپت بازار</Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="hover:text-[#8A2BE2]">خانه</Link>
            <Link href="/prompt" target="_blank" className="hover:text-[#8A2BE2] flex items-center gap-1">
              راهنمای جامع <i className="bi bi-box-arrow-up-right text-sm" />
            </Link>
            <Link href="#blog" className="hover:text-[#8A2BE2]">وبلاگ</Link>
            <Link href="/prompts" target="_blank" className="hover:text-[#8A2BE2] flex items-center gap-1">
              کتابخانه کامل <i className="bi bi-box-arrow-up-right text-sm" />
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-[#8A2BE2] text-lg"><i className="bi bi-headset" /></Link>
            <Link href="#" className="hover:text-[#8A2BE2] text-lg"><i className="bi bi-cart3" /></Link>
            <Link href="#" className="bg-[#8A2BE2] px-4 py-2 rounded-lg font-medium">ثبت‌نام / ورود</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-28">
        <div className="container mx-auto grid lg:grid-cols-[2.5fr,1fr] gap-6">
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row gap-6 bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#8A2BE2] transition">
              <div>
                <h1 className="text-3xl font-extrabold">آکادمی پرامپت بازار</h1>
                <p className="mt-3 text-[#a0a0a0]">
                  مرجع تخصصی دانلود پرامپت‌های آماده و ورک‌فلوهای اتوماسیون. خلاقیت و کسب‌وکار خود را با ابزارهای حرفه‌ای هوش مصنوعی متحول کنید.
                </p>
                <Link href="/prompts" target="_blank" className="mt-4 inline-block bg-[#8A2BE2] px-5 py-3 rounded-lg font-bold">
                  ورود به کتابخانه پرامپت‌ها
                </Link>
              </div>
              <img src="https://placehold.co/300x200/1e1e1e/8A2BE2?text=PromptBazar" alt="آکادمی پرامپت بازار" width={300} height={200} className="rounded-lg" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/prompts/profile-picture" className="flex flex-col items-center bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#8A2BE2] transition">
                <SquareUser className="bi bi-person-square text-4xl text-[#8A2BE2]" />
                <h6 className="mt-4 font-bold">پرامپت پروفایل</h6>
              </Link>
              <Link href="/workflows" className="flex flex-col items-center bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#8A2BE2] transition">
                <Cpu className="bi bi-cpu text-4xl text-[#8A2BE2]" />
                <h6 className="mt-4 font-bold">ورک‌فلوهای n8n</h6>
              </Link>
              <Link href="/blog" className="flex flex-col items-center bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#8A2BE2] transition">
                <Pencil className="bi bi-pencil-square text-4xl text-[#8A2BE2]" />
                <h6 className="mt-4 font-bold">مقالات آموزشی</h6>
              </Link>
              <Link href="/prompts/design" className="flex flex-col items-center bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#8A2BE2] transition">
                <Gem className="bi bi-gem text-4xl text-[#8A2BE2]" />
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

      <Benefits/>
      <Latest/>
      <LatestBlogs/>
      <FAQSection/>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-[#a0a0a0]">
        <p>&copy; 2025 تمام حقوق برای promptbazar.ir محفوظ است.</p>
        <div className="mt-2">
          <Link href="/terms" className="hover:text-[#8A2BE2] mx-2">قوانین و مقررات</Link>|
          <Link href="/privacy" className="hover:text-[#8A2BE2] mx-2">حریم خصوصی</Link>
        </div>
      </footer>
    </main>
  )
}
