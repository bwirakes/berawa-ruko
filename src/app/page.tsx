import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Opportunity from '@/components/Opportunity'
import Location from '@/components/Location'
import TenantPotential from '@/components/TenantPotential'
import Investment from '@/components/Investment'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Opportunity />
      <Gallery />
      <Location />
      <TenantPotential />
      <Investment />
      <Contact />
      <Footer />
    </div>
  )
} 