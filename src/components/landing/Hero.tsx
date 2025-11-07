import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-accent/40 ">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent mb-8 ">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground ">بازار پرامپت‌های هوش مصنوعی</span>
          </div>

          <Image src="/logo.png" width={250} height={250} alt="prompt Bazar's logo" className="m-auto"/>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance  ">
            آکادمی 
            <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent"> پرامپت </span> 
            و اتوماسیون n8n
            <br />
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            با استفاده از آموزش‌های تخصصی پرامپت نویسی و n8n، به‌طور سریع و آسان مهارت‌های خود را به سطح حرفه‌ای برسانید. با پرامپت‌های آماده و ورک‌فلوهای اختصاصی ما، فرآیندهای کسب‌وکار خود را خودکار کنید و زمان‌تان را صرف کارهای مهم‌تر کنید.
            </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-l from-primary to-secondary/70 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <Link href="/what-is-prompt">
              <span className="relative z-10">آموزش پرامپت‌ها را شروع کنی</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-l from-secondary to-secondary/70 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            </button>
            <button className="px-8 py-4 bg-accent/90 backdrop-blur-sm text-accent-foreground rounded-xl font-medium border border-accent-foreground/5 hover:border-accent-foreground/10 transition-all duration-300 hover:bg-accent">
            <Link href="/Prompts">
              پرامپت‌های آماده را دانلود کنید
            </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

