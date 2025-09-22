export default function PromptGuide() {
  return (
    <main className="font-[Vazirmatn] bg-[#121212] text-[#e0e0e0]">
      <section
        className="text-center py-24 px-4"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(138,43,226,0.2), rgba(18,18,18,0.1)), url('https://placehold.co/1920x500/121212/8A2BE2?text=Prompt+Engineering')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            پرامپت چیست؟ راهنمای جامع مهندسی پرامپت
          </h1>
          <p className="mt-4 text-lg text-[#a0a0a0]">
            در این راهنمای کامل، با اصول پرامپت نویسی آشنا شوید و یاد بگیرید
            چگونه با هوش مصنوعی به زبان خودش صحبت کنید.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold border-b border-[#2a2a2a] pb-2 mt-12">
            <i className="bi bi-lightbulb text-[#8A2BE2]"></i>
            بخش ۱: پرامپت چیست به زبان ساده؟
          </h2>
          <p className="mt-4 text-[#a0a0a0] leading-relaxed text-lg">
            <strong className="text-[#e0e0e0]">پرامپت (Prompt)</strong> به زبان
            ساده، همان دستور یا درخواستی است که شما به یک مدل هوش مصنوعی
            (مانند ChatGPT یا Midjourney) می‌دهید. این دستور می‌تواند یک سوال،
            یک جمله یا مجموعه‌ای از دستورالعمل‌های دقیق باشد...
          </p>

          <h2 className="flex items-center gap-2 text-2xl font-bold border-b border-[#2a2a2a] pb-2 mt-12">
            <i className="bi bi-pencil-ruler text-[#8A2BE2]"></i>
            بخش ۲: پرامپت نویسی چیست و چرا یک مهارت کلیدی است؟
          </h2>
          <p className="mt-4 text-[#a0a0a0] leading-relaxed text-lg">
            <strong className="text-[#e0e0e0]">پرامپت نویسی (Prompt Engineering)</strong>{" "}
            هنر و علم طراحی بهترین دستورات برای هوش مصنوعی است...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="border border-[#2a2a2a] rounded-lg bg-[#1e1e1e] p-4 text-center">
              <h5 className="font-bold text-red-500">❌ پرامپت ضعیف</h5>
              <code className="block mt-2">یک لوگو برای کافی شاپ</code>
              <img
                src="https://placehold.co/400x250/1e1e1e/a0a0a0?text=Generic+Output"
                className="rounded mt-3 mx-auto"
                alt="خروجی ضعیف"
              />
            </div>
            <div className="border border-[#2a2a2a] rounded-lg bg-[#1e1e1e] p-4 text-center">
              <h5 className="font-bold text-green-500">✅ پرامپت حرفه‌ای</h5>
              <code className="block mt-2">
                لوگوی مینیمال برای کافی شاپ "کافئین"، آیکون فنجان و بخار...
              </code>
              <img
                src="https://placehold.co/400x250/1e1e1e/8A2BE2?text=Professional+Output"
                className="rounded mt-3 mx-auto"
                alt="خروجی حرفه‌ای"
              />
            </div>
          </div>

          <blockquote className="bg-[#1e1e1e] border-r-4 border-[#8A2BE2] p-4 my-6">
            <p className="text-[#a0a0a0]">
              برای رسیدن به نتایج حرفه‌ای، نیازی به آزمون و خطا ندارید. از{" "}
              <a href="/prompts" className="text-[#8A2BE2] font-medium">
                پرامپت‌های آماده
              </a>{" "}
              ما استفاده کنید.
            </p>
          </blockquote>

          <h2 className="flex items-center gap-2 text-2xl font-bold border-b border-[#2a2a2a] pb-2 mt-12">
            <i className="bi bi-journal-check text-[#8A2BE2]"></i>
            بخش ۳: اصول کلیدی و اساسی پرامپت نویسی
          </h2>
          <p className="mt-4 text-[#a0a0a0] text-lg leading-relaxed">
            برای نوشتن یک پرامپت قدرتمند، این اصول را به خاطر بسپارید...
          </p>

          <h3 className="flex items-center gap-2 text-xl font-bold mt-8">
            <i className="bi bi-bullseye text-[#8A2BE2]"></i> ۱. شفافیت و دقت
          </h3>
          <p className="text-[#a0a0a0] leading-relaxed mt-2">
            از کلی‌گویی پرهیز کنید...
          </p>

          <h3 className="flex items-center gap-2 text-xl font-bold mt-8">
            <i className="bi bi-person-video3 text-[#8A2BE2]"></i> ۲. نقش دادن
          </h3>
          <p className="text-[#a0a0a0] leading-relaxed mt-2">
            به هوش مصنوعی یک شخصیت و تخصص بدهید...
          </p>

          <h2 className="flex items-center gap-2 text-2xl font-bold border-b border-[#2a2a2a] pb-2 mt-12">
            <i className="bi bi-collection text-[#8A2BE2]"></i>
            بخش ۴: انواع پرامپت‌ها
          </h2>
          <ul className="list-disc pr-6 space-y-2 text-[#a0a0a0] mt-4">
            <li>
              <strong className="text-[#e0e0e0]">پرامپت‌های تولید تصویر:</strong>{" "}
              <a href="/prompts/profile-picture" className="text-[#8A2BE2]">
                ورود به بخش پرامپت‌های تصویری
              </a>
            </li>
            <li>
              <strong className="text-[#e0e0e0]">پرامپت‌های تولید محتوا:</strong>{" "}
              <a href="/prompts/content-creation" className="text-[#8A2BE2]">
                ورود به بخش پرامپت‌های متنی
              </a>
            </li>
            <li>
              <strong className="text-[#e0e0e0]">پرامپت‌های طراحی و دیزاین:</strong>{" "}
              <a href="/prompts/design" className="text-[#8A2BE2]">
                ورود به بخش پرامپت‌های طراحی
              </a>
            </li>
            <li>
              <strong className="text-[#e0e0e0]">پرامپت‌های تخصصی:</strong>{" "}
              <a href="/prompts/professional" className="text-[#8A2BE2]">
                ورود به بخش پرامپت‌های تخصصی
              </a>
            </li>
          </ul>

          <h2 className="flex items-center gap-2 text-2xl font-bold border-b border-[#2a2a2a] pb-2 mt-12">
            <i className="bi bi-compass text-[#8A2BE2]"></i>
            بخش ۵: شروع مسیر شما
          </h2>
          <ol className="list-decimal pr-6 space-y-2 text-[#a0a0a0] mt-4">
            <li>
              <strong className="text-[#e0e0e0]">یادگیری اصول پایه:</strong>{" "}
              <a href="/blog" className="text-[#8A2BE2]">
                وبلاگ ما
              </a>
            </li>
            <li>
              <strong className="text-[#e0e0e0]">آزمایش با پرامپت‌های رایگان:</strong>{" "}
              <a href="/prompts/free" className="text-[#8A2BE2]">
                پرامپت‌های رایگان
              </a>
            </li>
            <li>
              <strong className="text-[#e0e0e0]">الهام از حرفه‌ای‌ها:</strong>{" "}
              <a href="/pricing" className="text-[#8A2BE2]">
                اشتراک ویژه
              </a>
            </li>
          </ol>

          <div className="bg-[#1e1e1e] text-center p-6 rounded-xl mt-10">
            <h4 className="font-bold text-xl">آماده شروع هستید؟</h4>
            <p className="mt-2 text-[#a0a0a0]">
              گشت و گذار در کتابخانه بزرگ پرامپت بازار و دانلود پرامپت‌های
              رایگان را از اینجا شروع کنید.
            </p>
            <a
              href="/prompts"
              className="inline-block mt-4 px-6 py-3 bg-[#8A2BE2] text-white rounded-lg text-lg"
            >
              مشاهده همه پرامپت‌ها
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
