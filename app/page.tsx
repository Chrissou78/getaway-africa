"use client";

import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import OpportunitiesSection from '@/components/opportunities-section';
import InsightsSection from '@/components/insights-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  console.log("Main page rendered - Gateway Africa");
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <OpportunitiesSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
