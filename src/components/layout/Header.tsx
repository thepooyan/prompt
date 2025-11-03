import Link from 'next/link'
import LoginButton from './LoginButton'
import Logo from '../parts/Logo'
import { Suspense } from 'react'
import Spinner from '../parts/Spinner'
import HeaderSub from './HeaderSub'

const Header = () => {
  return (
      <header className="sticky top-0 w-full bg-zinc-900/30 backdrop-blur-xl  z-50 shadow-zinc-800 shadow-md ">
        <div className="container mx-auto flex items-center justify-between p-2 px-4">
          <Logo/>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className="hover:text-primary">خانه</Link>
            <HeaderSub title='راهنمای جامع' items={[
              {title: "آموزش پرامپت", link: "/what-is-prompt"},
              {title: "آموزش n8n", link: "/what-is-n8n"}
            ]}/>
            <Link href="/Blog" className="hover:text-primary">وبلاگ</Link>
            <HeaderSub title='کتابخانه' items={[
              {title: "دانلود پرامپت", link: "/Prompts"},
              {title: "دانلود n8n", link: "/n8n"}
            ]}/>
          </nav>
        <Suspense fallback={<Spinner/>}>
          <LoginButton/>
        </Suspense>
      </div>
    </header>
  )
}

export default Header
