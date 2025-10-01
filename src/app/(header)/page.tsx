// app/page.tsx
import Benefits from "@/components/landing/Benefits"
import FAQSection from "@/components/landing/FaqSection"
import Latest from "@/components/landing/Latest"
import LatestBlogsFetcher from "@/components/landing/LatestBlogsFetcher"
import Hero from "@/components/landing/Hero"

export default function Home() {
  return (
    <>
      <Hero/>
      <Benefits/>
      <Latest/>
      <LatestBlogsFetcher/>
      <FAQSection/>
    </>
  )
}
