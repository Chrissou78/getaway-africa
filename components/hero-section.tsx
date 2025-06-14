"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Globe, Users } from 'lucide-react';

export default function HeroSection() {
  console.log("HeroSection component rendered");

  const handleCTAClick = () => {
    console.log("CTA button clicked");
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: TrendingUp, value: '$400M+', label: 'Investment Facilitated' },
    { icon: Globe, value: '25+', label: 'African Markets' },
    { icon: Users, value: '50+', label: 'Global Partners' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-terracotta-50 to-gold-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-african-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-terracotta-200 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gold-200 rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-forest-200 rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold leading-tight mb-6">
            <span className="gradient-text">Build with Africa.</span>
            <br />
            <span className="text-charcoal">Invest in the Future.</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-charcoal/80 max-w-3xl mx-auto mb-8 font-medium"
          >
            Gateway Africa connects global investors and companies to Africa's most promising opportunities in sustainable energy, exports, and business development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 text-lg font-semibold rounded-xl hover-lift group"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#opportunities')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-terracotta-300 text-terracotta-600 hover:bg-terracotta-50 px-8 py-4 text-lg font-semibold rounded-xl hover-lift"
            >
              Explore Opportunities
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="glass-effect rounded-2xl p-6 hover-lift"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-terracotta-600" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-outfit font-bold text-charcoal mb-2">
                  {stat.value}
                </div>
                <div className="text-charcoal/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-charcoal/60 mb-2">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-terracotta-400 to-transparent animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}