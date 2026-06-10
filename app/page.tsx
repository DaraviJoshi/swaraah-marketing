import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Stats from '@/components/Stats'
import ExploreHighlight from '@/components/ExploreHighlight'
import ForVendors from '@/components/ForVendors'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <ExploreHighlight />
      <ForVendors />
      <Testimonials />
      <Footer />
    </main>
  )
}
