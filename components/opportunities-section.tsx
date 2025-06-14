"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Wheat, Truck, Building2, MapPin, Calendar, DollarSign } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function OpportunitiesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  console.log("OpportunitiesSection component rendered, inView:", inView);

  const sectors = [
    {
      icon: Zap,
      title: 'Renewable Energy',
      description: 'Solar, wind, and hydroelectric projects across the continent',
      projects: '45+ Active Projects',
      investment: '$2.1B+ Available',
      color: 'forest'
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Infrastructure, warehousing, and transportation networks',
      projects: '32+ Active Projects',
      investment: '$1.3B+ Available',
      color: 'terracotta'
    },
    {
      icon: Building2,
      title: 'Green Infrastructure',
      description: 'Sustainable urban development and smart city projects',
      projects: '18+ Active Projects',
      investment: '$950M+ Available',
      color: 'forest'
    }
  ];

  const featuredOpportunities = [
    {
      title: 'West Africa Solar Grid Initiative',
      location: 'Ghana, Nigeria, Senegal',
      sector: 'Renewable Energy',
      investment: '$450M',
      timeline: 'Q2 2025 - Q4 2027',
      description: 'Multi-country solar infrastructure project connecting 3 million households to clean energy.',
      status: 'Investment Ready',
      highlights: ['Government backing', 'EU co-financing', 'Local partnerships secured']
    },
    {
      title: 'Cross-Border Logistics Hub',
      location: 'Rwanda, DRC',
      sector: 'Logistics',
      investment: '$200M',
      timeline: 'Q1 2025 - Q4 2026',
      description: 'Regional logistics center facilitating trade across East and Central Africa.',
      status: 'Early Stage',
      highlights: ['Strategic location', 'Government support', 'High ROI potential']
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'terracotta':
        return {
          bg: 'bg-terracotta-100',
          icon: 'text-terracotta-600',
          badge: 'bg-terracotta-100 text-terracotta-700'
        };
      case 'gold':
        return {
          bg: 'bg-gold-100',
          icon: 'text-gold-600',
          badge: 'bg-gold-100 text-gold-700'
        };
      case 'forest':
        return {
          bg: 'bg-forest-100',
          icon: 'text-forest-600',
          badge: 'bg-forest-100 text-forest-700'
        };
      default:
        return {
          bg: 'bg-terracotta-100',
          icon: 'text-terracotta-600',
          badge: 'bg-terracotta-100 text-terracotta-700'
        };
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Investment Ready':
        return 'bg-forest-100 text-forest-700';
      case 'Due Diligence':
        return 'bg-gold-100 text-gold-700';
      case 'Early Stage':
        return 'bg-terracotta-100 text-terracotta-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="opportunities" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-terracotta-50 to-transparent opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-charcoal mb-6">
            Investment <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Discover high-impact investment opportunities across Africa's fastest-growing sectors.
          </p>
        </motion.div>

        {/* Sectors Overview */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {sectors.map((sector, index) => {
            const colors = getColorClasses(sector.color);
            
            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <Card className="h-full hover-lift border-0 shadow-lg bg-gradient-to-br from-white to-cream">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <sector.icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <h3 className="text-lg font-outfit font-bold text-charcoal mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 mb-4">
                      {sector.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-charcoal">
                        {sector.projects}
                      </div>
                      <div className="text-sm font-medium gradient-text">
                        {sector.investment}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-outfit font-bold text-charcoal mb-4">
              Featured Investment Opportunities
            </h3>
            <p className="text-lg text-charcoal/70">
              Ready-to-invest projects with comprehensive due diligence completed
            </p>
          </div>

          <div className="space-y-8">
            {featuredOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              >
                <Card className="hover-lift border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl font-outfit font-bold text-charcoal mb-2">
                          {opportunity.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-charcoal/70">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {opportunity.location}
                          </div>
                          <Badge className={getStatusColor(opportunity.status)}>
                            {opportunity.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right lg:text-left">
                        <div className="text-2xl font-outfit font-bold gradient-text">
                          {opportunity.investment}
                        </div>
                        <div className="text-sm text-charcoal/60">
                          Investment Required
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-charcoal/80">
                      {opportunity.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-charcoal">Project Details:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-charcoal/70">
                            <Calendar className="w-4 h-4 mr-2" />
                            Timeline: {opportunity.timeline}
                          </div>
                          <div className="flex items-center text-charcoal/70">
                            <Building2 className="w-4 h-4 mr-2" />
                            Sector: {opportunity.sector}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-charcoal">Key Highlights:</h4>
                        <ul className="space-y-1 text-sm">
                          {opportunity.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-center text-charcoal/70">
                              <div className="w-2 h-2 bg-terracotta-400 rounded-full mr-3"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button 
                        className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
                        onClick={() => {
                          console.log(`Request details for ${opportunity.title} clicked`);
                          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Request Detailed Information
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-terracotta-300 text-terracotta-600 hover:bg-terracotta-50"
                        onClick={() => {
                          console.log(`Schedule call for ${opportunity.title} clicked`);
                          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Schedule a Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center glass-effect rounded-3xl p-12"
        >
          <h3 className="text-3xl font-outfit font-bold text-charcoal mb-4">
            Ready to Explore More Opportunities?
          </h3>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Access our complete portfolio of investment-ready projects and get personalized recommendations based on your investment criteria.
          </p>
          <Button 
            size="lg"
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
            onClick={() => {
              console.log("Download investor pack clicked");
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Download Investor Pack
          </Button>
        </motion.div>
      </div>
    </section>
  );
}