export default function Latest() {
  return (
    <section id="latest" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">جدیدترین پرامپت‌های آماده</h2>
          <p className="text-lg text-gray-400 mt-4">
            نمونه‌ای از آخرین پرامپت‌های اضافه شده به کتابخانه پرامپت بازار.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <a href="#" className="block">
              <img
                src="https://placehold.co/600x400/1e1e1e/8A2BE2?text=Instagram"
                alt="پرامپت اینستاگرام"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-lg font-bold text-white mb-2">
                  پرامپت تولید محتوای اینستاگرام
                </h5>
                <p className="text-gray-400">
                  مجموعه‌ای از پرامپت‌های خلاقانه برای نوشتن کپشن و ایده‌پردازی پست‌های وایرال.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <a href="#" className="block">
              <img
                src="https://placehold.co/600x400/1e1e1e/8A2BE2?text=Photo+Restore"
                alt="پرامپت ترمیم عکس"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-lg font-bold text-white mb-2">
                  پرامپت ترمیم عکس قدیمی
                </h5>
                <p className="text-gray-400">
                  عکس‌های آسیب‌دیده و خاطره‌انگیز خود را با قدرت هوش مصنوعی بازسازی کنید.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <a href="#" className="block">
              <img
                src="https://placehold.co/600x400/1e1e1e/8A2BE2?text=Anime+Style"
                alt="پرامپت انیمه"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h5 className="text-lg font-bold text-white mb-2">
                  پرامپت تبدیل عکس به انیمه
                </h5>
                <p className="text-gray-400">
                  شخصیت‌ها و تصاویر مورد علاقه خود را به سبک انیمه‌های محبوب ژاپنی خلق کنید.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
