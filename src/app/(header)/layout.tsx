import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ReactNode } from "react"

const layout = ({children}:{children: ReactNode}) => {
  return (
    <main dir="rtl" className="min-h-dvh">
        <Header/>
        {children}
        <Footer/>
    </main>
  )
}

export default layout
