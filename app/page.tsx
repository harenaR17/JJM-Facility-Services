import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { VideoSection } from '@/components/video-section'
import { Services } from '@/components/services'
import { BeforeAfter } from '@/components/before-after'
import { DemoVideoBanner } from '@/components/demo-video-banner'
import { WhyUs } from '@/components/why-us'
import { Testimonials } from '@/components/testimonials'
import { About } from '@/components/about'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { StickyMobileCta } from '@/components/sticky-mobile-cta'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <VideoSection />
        <Services />
        <BeforeAfter />
        {/* <DemoVideoBanner /> */}{/* Disabled — monobrosse section */}
        <WhyUs />
        <Testimonials />
        <About />
        <CtaSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  )
}
