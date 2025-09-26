export default function LatestBlogs() {
  return (
    <section id="blog" className="py-16 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            آخرین مقالات از وبلاگ پرامپت بازار
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            دانش خود را در دنیای **هوش مصنوعی** و **مهندسی پرامپت** به‌روز نگه دارید. با مطالعه این مقالات می‌توانید از **ابزارهای جدید** و **استراتژی‌های بهینه** برای پیشرفت در دنیای هوش مصنوعی استفاده کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* پست 1 */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <a href="#" className="block">
              <img
                src="https://placehold.co/600x400/1e1e1e/8A2BE2?text=Blog+Post+1"
                alt="اشتباهات پرامپت نویسی"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-lg font-bold text-white mb-2">
                  ۵ اشتباه وحشتناک در پرامپت نویسی که ممکنه کیفیت کار شما رو نابود کنه!
                </h5>
                <p className="text-gray-400">
مطمئناً نمی‌خواهید پرامپت نویسی اشتباهی انجام بدید که کارتون رو به فنا بده! توی این مقاله با ۵ اشتباه وحشتناک در پرامپت نویسی آشنا می‌شید که می‌تونند کیفیت خروجی مدل‌های هوش مصنوعی شما رو پایین بیارند. این اشتباهات رو برطرف کنید و یه گام به جلو بردارید!                </p>
              </div>
            </a>
          </div>

          {/* پست 2 */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <a href="#" className="block">
              <img
                src="https://placehold.co/600x400/1e1e1e/8A2BE2?text=Blog+Post+2"
                alt="ابزارهای هوش مصنوعی"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-lg font-bold text-white mb-2">
۶ ابزار هوش مصنوعی که اگر ازشون استفاده نکنید، عقب می‌افتید!                </h5>
                <p className="text-gray-400">
همه چیز به ابزارهای هوش مصنوعی بستگی داره! این مقاله ۶ ابزار هوش مصنوعی رو به شما معرفی می‌کنه که اگر استفاده نکنید، از بقیه عقب می‌افتید! این ابزارها می‌تونند تولید محتوای شما رو به یه سطح دیگه ببرند و شما رو یک سر و گردن از رقبا بالاتر بذارند.                </p>
              </div>
            </a>
          </div>

          {/* پست 3 */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <a href="#" className="block">
              <img
                src="https://placehold.co/600x400/1e1e1e/8A2BE2?text=Blog+Post+3"
                alt="پرامپت نویسی برای لوگو"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-lg font-bold text-white mb-2">
چطور با پرامپت نویسی، یک لوگو حرفه‌ای برای کسب‌وکارتون طراحی کنید؟                </h5>
                <p className="text-gray-400">
همه می‌خوان لوگوهای حرفه‌ای و خلاقانه برای برندشون بسازن، اما آیا شما می‌دونید چطور با پرامپت نویسی می‌تونید یک لوگو به سبک هوش مصنوعی طراحی کنید؟ در این مقاله، راهکارهایی معرفی می‌کنیم که به شما کمک می‌کنن تا لوگوهایی بسازید که همه رو شگفت‌زده کنه.                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
