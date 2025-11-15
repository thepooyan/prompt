import Link from "next/link";
import Image from "next/image";
import { getLogoUrl } from "@/config/config";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-sidebar text-sidebar-foreground ">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent mb-8 ">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-accent-foreground ">بازار پرامپت‌های هوش مصنوعی</span>
          </div>

          <Image src={getLogoUrl()} width={250} height={250} alt="prompt Bazar's logo" className="m-auto"/>

          {/* ----- این بخش تغییر کرده است ----- */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance  ">
            <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
              قدرت AI، مخصوص بازار ایران.
            </span>
          </h1>
          {/* ----- پایان بخش تغییر کرده ----- */}

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            پیچیدگی ابزارهای جهانی هوش مصنوعی و اتوماسیون را کنار بگذارید. پرامپت بازار، هوش مصنوعی و n8n را به راه‌حل‌های آماده، فارسی و مخصوص بازار ایران تبدیل می‌کند تا کسب‌وکارها و متخصصان بتوانند سریع‌تر، باکیفیت‌تر و متناسب با نیازهای بومی خود رشد کنند.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-l from-primary to-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            {/* پیشنهاد می‌شود لینک را به حروف کوچک تغییر دهید: /prompt -> /prompts */}
            <Link href="/Prompts"> 
              <span className="relative z-10">کتابخانه پرامپت‌ها</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-l from-secondary to-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            </button>
            <button className="px-8 py-4 bg-secondary text-secondary-foreground backdrop-blur-sm rounded-xl font-medium border border-accent-foreground/5 hover:border-accent-foreground/10 transition-all duration-300 hover:bg-accent">
             {/* پیشنهاد می‌شود لینک را به حروف کوچک تغییر دهید: /N8N -> /workflows */}
            <Link href="/n8n">
              کتابخانه N8N
            </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
