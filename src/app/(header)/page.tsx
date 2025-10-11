// app/page.tsx
import FAQSection from "@/components/landing/FaqSection"
import Latest from "@/components/landing/Latest"
import LatestBlogsFetcher from "@/components/landing/LatestBlogsFetcher"
import Hero from "@/components/landing/Hero"
import BentoGrid from "@/components/landing/BentoGrid"

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
