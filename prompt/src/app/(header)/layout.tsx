import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ReactNode } from "react"

const layout = ({children}:{children: ReactNode}) => {
  return (
    <main dir="rtl" className="bg-[#121212] text-[#e0e0e0] font-[Vazirmatn] ">
        <Header/>
        {children}
        <Footer/>
    </main>
  )
}

export default layout