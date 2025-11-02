import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ReactNode } from "react"

const layout = ({children}:{children: ReactNode}) => {
  return (
    <main dir="rtl" className="bg-background text-[#e0e0e0] font-[Vazirmatn] min-h-dvh pt-28">
        <Header/>
        {children}
        <Footer/>
    </main>
  )
}

export default layout
