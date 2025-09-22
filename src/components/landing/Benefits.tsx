import { CheckCheck, Library, History, Headphones } from "lucide-react"

export default function Benefits() {
  return (
    <section id="benefits" className=" bg-zinc-900 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">چرا پرامپت بازار؟</h2>
          <p className="text-lg text-gray-400 mt-4">
            ما فقط یک سایت دانلود پرامپت آماده نیستیم، ما شریک رشد و خلاقیت شماییم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <CheckCheck className="w-12 h-12 text-blue-500 mx-auto" />
            <h5 className="font-bold text-white my-3">کیفیت تضمین‌شده</h5>
            <p className="text-gray-400">
              تمام پرامپت‌ها توسط متخصصان ما تست و بهینه‌سازی شده‌اند تا بهترین نتیجه را دریافت کنید.
            </p>
          </div>

          <div>
            <Library className="w-12 h-12 text-blue-500 mx-auto" />
            <h5 className="font-bold text-white my-3">کتابخانه در حال رشد</h5>
            <p className="text-gray-400">
              هر هفته پرامپت‌ها و ورک‌فلوهای جدید به کتابخانه ما اضافه می‌شود تا همیشه به‌روز باشید.
            </p>
          </div>

          <div>
            <History className="w-12 h-12 text-blue-500 mx-auto" />
            <h5 className="font-bold text-white my-3">صرفه‌جویی در زمان</h5>
            <p className="text-gray-400">
              ساعت‌ها آزمون و خطا را حذف کنید و با پرامپت‌های آماده، مستقیماً به نتیجه دلخواه برسید.
            </p>
          </div>

          <div>
            <Headphones className="w-12 h-12 text-blue-500 mx-auto" />
            <h5 className="font-bold text-white my-3">پشتیبانی تخصصی</h5>
            <p className="text-gray-400">
              در هر مرحله از مسیر، از مشاوره و پشتیبانی تیم متخصص ما بهره‌مند شوید.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
