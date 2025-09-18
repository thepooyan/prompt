// app/page.tsx
import Benefits from "@/components/landing/Benefits"
import FAQSection from "@/components/landing/FaqSection"
import Latest from "@/components/landing/Latest"
import LatestBlogs from "@/components/landing/LatestBlogs"
import Hero from "@/components/layout/Hero"

export default function Home() {
  return (
    <>
      <Hero/>
      <Benefits/>
      <Latest/>
      <LatestBlogs/>
      <FAQSection/>
    </>
  )
}
