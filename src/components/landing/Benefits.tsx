import { CheckCheck, Library, History, Headphones } from "lucide-react"

export default function Benefits() {
  return (
    <section id="benefits" className="bg-zinc-900 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white">چرا پرامپت بازار؟</h3>
          <p className="text-lg text-gray-400 mt-4">
            ما تنها یک سایت دانلود پرامپت آماده نیستیم. پرامپت بازار شریک شما در رشد کسب‌وکار و خلاقیت است.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <CheckCheck className="w-12 h-12 text-blue-500 mx-auto" />
            <h5 className="font-bold text-white my-3">کیفیت تضمین‌شده</h5>
            <p className="text-gray-400">
              تمامی پرامپت‌های هوش مصنوعی توسط متخصصان ما تست و بهینه‌سازی شده‌اند تا بهترین نتیجه ممکن را دریافت کنید.
            </p>
          </div>

          <div>
            <Library className="w-12 h-12 text-blue-500 mx-auto" />
            <h5 className="font-bold text-white my-3">کتابخانه در حال رشد</h5>
            <p className="text-gray-400">
              هر هفته پرامپت‌ها و ورک‌فلوهای جدید به کتابخانه پرامپت بازار اضافه می‌شود تا شما همیشه به‌روز باشید.
            </p>
          </div>

          <div>
            <History className="w-12 h-12 text-blue-500 mx-auto" />
            <h5 className="font-bold text-white my-3">صرفه‌جویی در زمان</h5>
            <p className="text-gray-400">
              با پرامپت‌های آماده، ساعت‌ها آزمون و خطا را حذف کنید و سریع‌تر به نتایج دقیق برسید.
            </p>
          </div>

          <div>
            <Headphones className="w-12 h-12 text-blue-500 mx-auto" />
            <h5 className="font-bold text-white my-3">پشتیبانی تخصصی</h5>
            <p className="text-gray-400">
              از مشاوره و پشتیبانی تخصصی تیم ما در هر مرحله از مسیر پرامپت نویسی و آموزش n8n بهره‌مند شوید.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
