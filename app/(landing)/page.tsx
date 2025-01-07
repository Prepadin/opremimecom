import { LandingContent } from '@/components/landing-content'
import { LandingFooter } from '@/components/landing-footer'
import { LandingHero } from '@/components/landing-hero'
import { LandingNavbar } from '@/components/landing-navbar'
import { LandingAfter } from '@/components/landing-after'
import { LandingPricing } from '@/components/landing-pricing'
import { LandingFooters } from '@/components/landing-footers'

const LandingPage = () => (
  <div className="h-full">
    <LandingNavbar />
    <LandingHero />
    <LandingAfter />
    <LandingPricing />
    <LandingContent />
    {/* <LandingFooter /> */}
    <LandingFooters />
  </div>
)

export default LandingPage
