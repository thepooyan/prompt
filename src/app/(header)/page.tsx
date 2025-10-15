// app/page.tsx
import FAQSection from "@/components/landing/FaqSection"
import Latest from "@/components/landing/Latest"
import LatestBlogsFetcher from "@/components/landing/LatestBlogsFetcher"
import Hero from "@/components/landing/Hero"
import BentoGrid from "@/components/landing/BentoGrid"
import { Metadata } from "next"

export default function Home() {
  return (
    <>
      <Hero/>
      <BentoGrid/>
      <Latest/>
      <LatestBlogsFetcher/>
      <FAQSection/>
    </>
  )
}

export const metadata:Metadata = {
  alternates: {
    canonical: "https://promptbazar.ir"
  }
}


