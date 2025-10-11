export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-zinc-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8a2be2]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#6a1bb2]/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/80 border border-zinc-700/50 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8a2be2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8a2be2]"></span>
            </span>
            <span className="text-sm text-zinc-400">بازار پرامپت‌های هوش مصنوعی</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            <span className="text-zinc-100">دنیای</span>{" "}
            <span className="bg-gradient-to-l from-[#8a2be2] to-[#b47eff] bg-clip-text text-transparent">
              پرامپت‌های
            </span>
            <br />
            <span className="text-zinc-100">حرفه‌ای را کشف کنید</span>
          </h2>

          <p className="text-lg sm:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            با بهترین مجموعه پرامپت‌های هوش مصنوعی، کار خود را سریع‌تر و حرفه‌ای‌تر انجام دهید. از تولید محتوا تا طراحی و
            برنامه‌نویسی.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-l from-[#8a2be2] to-[#6a1bb2] text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8a2be2]/20">
              <span className="relative z-10">شروع کنید</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-l from-[#9a3bf2] to-[#7a2bc2] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="px-8 py-4 bg-zinc-800/80 backdrop-blur-sm text-zinc-100 rounded-xl font-medium border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 hover:bg-zinc-800">
              مشاهده نمونه‌ها
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

