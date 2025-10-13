import { User } from "lucide-react"

const Admin = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full gap-4">
      <User className="w-20 h-20 bg-primary rounded-full p-4  "/>
      <h2 className="text-3xl font-bold">
        به پنل ادمین خوش آمدید!
      </h2>
      <p className="text-md  text-zinc-400">
        جهت ادامه یکی از بخش ها را انتخاب کنید</p>
    </div>
  )
}

export default Admin