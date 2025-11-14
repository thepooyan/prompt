// app/page.tsx
import FAQSection from "@/components/landing/FaqSection"
import LatestBlogsFetcher from "@/components/landing/LatestBlogsFetcher"
import Hero from "@/components/landing/Hero"
import BentoGrid from "@/components/landing/BentoGrid"
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