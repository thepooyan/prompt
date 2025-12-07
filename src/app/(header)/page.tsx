// app/page.tsx
import FAQSection from "@/components/landing/FaqSection"
import LatestBlogsFetcher from "@/components/landing/LatestBlogsFetcher"
import Hero from "@/components/landing/Hero"
import BentoGrid from "@/components/landing/BentoGrid"
import LatestPrompts from "@/components/landing/LatestPrompts"
import DreamPromo from "@/components/landing/DreamPromo"

export default function Home() {
  return (
    <>
      <Hero/>
      <BentoGrid/>
      <LatestPrompts type={"prompt" as const}/>
      <DreamPromo/>
      <LatestPrompts type={"n8n" as const}/>
      <LatestBlogsFetcher/>
      <FAQSection/>
    </>
  )
}
