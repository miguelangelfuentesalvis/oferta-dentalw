import { Hero } from '@/components/landing/hero';
import { CountdownBanner } from '@/components/landing/countdown-banner';
import { WhatsIncluded } from '@/components/landing/whats-included';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Technology } from '@/components/landing/technology';
import { Faq } from '@/components/landing/faq';
import { Cta } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';
import { FloatingCta } from '@/components/landing/floating-cta';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Hero />
      <CountdownBanner />
      <WhatsIncluded />
      <HowItWorks />
      <Technology />
      <Faq />
      <Cta />
      <Footer />
      <FloatingCta />
    </div>
  );
}
