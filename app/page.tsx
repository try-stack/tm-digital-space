// Server Component — no 'use client' so Next.js SSR renders full HTML for crawlers
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTAContactSection from '@/components/sections/CTAContactSection';
import ScrollProgress from '@/components/ui/ScrollProgress';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ThemeToggle from '@/components/ui/ThemeToggle';
import PageLoader from '@/components/ui/PageLoader';
import StickyCtaBar from '@/components/ui/StickyCtaBar';

export default function Home() {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen">
        <ScrollProgress />
        <ThemeToggle />
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <WhyChooseSection />
          <ProcessSection />
          <TestimonialsSection />
          <CTAContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
        <StickyCtaBar />
        <ScrollToTop />
      </div>
    </>
  );
}
