import { CpuIcon, Download, DownloadCloud, Edit, GraduationCap, Lamp } from "lucide-react"
import Link from "next/link"

interface p {
  href: string,
  Icon: any,
  title: string,
  p: string
}
const Box = ({href, Icon, title, p}:p) => {
  return (
    <Link href="/" className="bg-zinc-800 rounded-md border border-[#2a2a2a]  p-8 transition hover:border-primary ">
      <Icon className="text-primary w-10 mb-5" size={50}/>
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      <p>{p}</p>
    </Link>
  )
}

const Hero = () => {
  return (
      <section id="home" className="flex items-center justify-center py-10">
        <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Box title="تیتر اول" p="تیتر اول توضیح هم دارد" Icon={Lamp} href="/" />
          <Box title="" p="" Icon={CpuIcon} href="/"/>
          <Box title="" p="" Icon={Download} href="/"/>
          <Box title="" p="" Icon={DownloadCloud} href="/"/>
          <Box title="" p="" Icon={Edit} href="/"/>
          <Box title="" p="" Icon={GraduationCap} href="/"/>
        </div>
      </section>
  )
}

export default Hero
