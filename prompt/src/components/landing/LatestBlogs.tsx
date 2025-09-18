export default function LatestBlogs() {
  return (
    <section id="blog" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            آخرین مقالات از وبلاگ پرامپت بازار
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            دانش خود را در دنیای هوش مصنوعی و مهندسی پرامپت به‌روز نگه دارید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <a href="#" className="block">
              <img
                src="https://placehold.co/600x400/1e1e1e/8A2BE2?text=Blog+Post+1"
                alt="اشتباهات پرامپت نویسی"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-lg font-bold text-white mb-2">
                  ۵ اشتباه رایج در پرامپت نویسی که باید از آنها دوری کنید
                </h5>
                <p className="text-gray-400">
                  یاد بگیرید چگونه با پرهیز از چند خطای ساده، کیفیت خروجی هوش مصنوعی را چندین برابر کنید.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <a href="#" className="block">
              <img
                src="https://placehold.co/600x400/1e1e1e/8A2BE2?text=Blog+Post+2"
                alt="ابزارهای هوش مصنوعی"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-lg font-bold text-white mb-2">
                  معرفی 6 ابزار هوش مصنوعی که هر تولیدکننده محتوایی باید بشناسد
                </h5>
                <p className="text-gray-400">
                  با بهترین و جدیدترین ابزارهای هوش مصنوعی برای تولید محتوای متنی و تصویری آشنا شوید.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <a href="#" className="block">
              <img
                src="https://placehold.co/600x400/1e1e1e/8A2BE2?text=Blog+Post+3"
                alt="پرامپت نویسی برای لوگو"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-lg font-bold text-white mb-2">
                  راهنمای قدم به قدم پرامپت نویسی برای طراحی لوگو
                </h5>
                <p className="text-gray-400">
                  چگونه پرامپت‌هایی بنویسیم که لوگوهای حرفه‌ای و خلاقانه برای کسب‌وکار شما تولید کنند.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
