'use client';
import HeroSection from './HeroSection';
import QuickAccessCards from './QuickAccessCards';
import StatsSection from './StatsSection';
import ServicesSection from './ServicesSection';
import PackagesSection from './PackagesSection';
import CTABanner from './CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickAccessCards />
      <StatsSection />
      <ServicesSection />
      <PackagesSection />
      <CTABanner />
    </>
  );
}
