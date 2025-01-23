import { LandingContent } from '@/components/landing-content'
import { LandingFooter } from '@/components/landing-footer'
import { LandingHero } from '@/components/landing-hero'
import { LandingNavbar } from '@/components/landing-navbar'
import { LandingAfter } from '@/components/landing-after'
import { LandingPricing } from '@/components/landing-pricing'
import { LandingFooters } from '@/components/landing-footers'
import { LandingTutos } from '@/components/landing-tutos'
import { LandingCard } from '@/components/landing-card'
import { LandingShowcase } from '@/components/landing-showcase'
import { LandingDesgns } from '@/components/landing-designs'
import { LandingFeatures } from '@/components/landing-features'

const LandingPage = () => (
  <div className="h-full">
    <LandingNavbar />
    <LandingHero />
    <LandingAfter />
    <LandingCard />
    <LandingTutos />
    <LandingShowcase />
    <LandingDesgns />
    <LandingFeatures />
    <LandingPricing />
    <LandingContent />
    {/* <LandingFooter /> */}
    
    <LandingFooters />
  </div>
)

export default LandingPage
