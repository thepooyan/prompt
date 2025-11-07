// app/page.tsx
import FAQSection from "@/components/landing/FaqSection"
import LatestBlogsFetcher from "@/components/landing/LatestBlogsFetcher"
import Hero from "@/components/landing/Hero"
import BentoGrid from "@/components/landing/BentoGrid"
import { Metadata } from "next"
import LatestPrompts from "@/components/landing/LatestPrompts"


export default function Home() {
  return (
    <>
      <Hero/>
      <BentoGrid/>
      <LatestPrompts/>
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


