import Link from "next/link"

const Footer = () => {
  return (
      <footer className="  py-8 text-center  ">
        <p>&copy; 2025 تمام حقوق برای promptbazar.ir محفوظ است.</p>
        <div className="mt-2">
          <Link href="/#terms" className="hover:text-primary mx-2">قوانین و مقررات</Link>|
          <Link href="/#privacy" className="hover:text-primary mx-2">حریم خصوصی</Link>
        </div>
      </footer>
  )
}

export default Footer
