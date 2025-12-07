"use client";

import Link from "next/link";
import { Sparkles, ArrowLeft, Moon } from "lucide-react";

const DreamPromo = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden my-10">
      
      {/* --- پس‌زمینه تیره و رنگی (تم Amber/Gold) --- */}
      <div className="absolute inset-0 bg-[#0c0a09] z-0"> {/* رنگ زمینه بسیار تیره و گرم */}
        
        {/* گرادینت اصلی - طلایی محو */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/40 via-[#1c1917] to-slate-950 opacity-90"></div>
        
        {/* افکت نوری دایره‌ای (Glow) - رنگ‌های امبر و نارنجی */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600 rounded-full blur-[100px] opacity-10"></div>
        
        {/* پترن نقطه‌ای ظریف */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fbbf24 1px, transparent 0)', backgroundSize: '32px 32px' }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 bg-white/5 backdrop-blur-md border border-amber-500/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/50">
          
          {/* --- متن و محتوا --- */}
          <div className="text-center md:text-right max-w-3xl space-y-6 flex-1">
            
            {/* برچسب طلایی */}
            <div className="inline-flex items-center justify-center md:justify-start w-full">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm font-medium">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                  </span>
                  <Sparkles className="w-4 h-4 ml-1 text-amber-300" />
                  ابزار جدید هوش مصنوعی
                </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              معنی خواب‌هاتو از <br className="hidden md:block" />
              {/* گرادینت متنی طلایی */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200">
                هوش مصنوعی بپرس!
              </span> 🌙
            </h2>
            
            <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
              اولین ابزار <strong className="text-amber-100 font-semibold">تعبیر خواب آنلاین</strong> که با مهندسی پرامپت دقیق کار می‌کنه. 
              بدون خرافات، دقیق و <span className="text-amber-400 font-bold">کاملاً رایگان</span>.
            </p>
          </div>

          {/* --- دکمه --- */}
          <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center gap-4">
            {/* دکمه با گرادینت امبر/نارنجی و بهینه شده برای سئو */}
            <Link 
                href="/Tools/dream-interpreter" 
                target="_blank"  // اصلاح شد: _blank درست است
                title="تعبیر خواب آنلاین با هوش مصنوعی (رایگان)"
                className="group relative inline-flex items-center justify-center w-full md:w-auto px-8 py-5 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl hover:from-amber-500 hover:to-orange-500 hover:scale-105 shadow-lg shadow-amber-600/20"
            >
              <Moon className="w-6 h-6 ml-3 fill-yellow-100 text-yellow-100" />
              تعبیر خواب با هوش مصنوعی
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            </Link>
            
            <span className="text-sm text-zinc-500 font-medium">
              تست رایگان • بدون ثبت‌نام
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DreamPromo;