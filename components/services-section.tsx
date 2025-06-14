"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Building, Truck, Zap, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  console.log("ServicesSection component rendered, inView:", inView);

  const services = [
    {
      icon: TrendingUp,
      title: 'Investment Facilitation',
      description: 'Connect global investors with vetted African opportunities across multiple sectors.',
      features: [
        'Due diligence and risk assessment',
        'Regulatory compliance guidance',
        'Local partnership facilitation',
        'Investment structuring support'
      ],
      color: 'terracotta'
    },
    {
      icon: Building,
      title: 'Market Entry & Business Development',
      description: 'Strategic guidance for companies looking to establish or expand operations in Africa.',
      features: [
        'Market research and analysis',
        'Business strategy development',
        'Local network establishment',
        'Operational setup support'
      ],
      color: 'gold'
    },
    {
      icon: Truck,
      title: 'Export Advisory',
      description: 'Comprehensive support for exporters exploring African trade opportunities.',
      features: [
        'Trade route optimization',
        'Regulatory navigation',
        'Distribution partnerships',
        'Market positioning strategy'
      ],
      color: 'forest'
    },
    {
      icon: Zap,
      title: 'Sustainable Energy Projects',
      description: 'Specialized focus on renewable energy and green infrastructure development.',
      features: [
        'Project identification and scoping',
        'Technology partnerships',
        'Financing solutions',
        'Community engagement'
      ],
      color: 'terracotta'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'terracotta':
        return {
          bg: 'bg-terracotta-100',
          icon: 'text-terracotta-600',
          button: 'bg-terracotta-500 hover:bg-terracotta-600'
        };
      case 'gold':
        return {
          bg: 'bg-gold-100',
          icon: 'text-gold-600',
          button: 'bg-gold-500 hover:bg-gold-600'
        };
      case 'forest':
        return {
          bg: 'bg-forest-100',
          icon: 'text-forest-600',
          button: 'bg-forest-500 hover:bg-forest-600'
        };
      default:
        return {
          bg: 'bg-terracotta-100',
          icon: 'text-terracotta-600',
          button: 'bg-terracotta-500 hover:bg-terracotta-600'
        };
    }
  };

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-br from-cream to-terracotta-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-african-pattern opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-charcoal mb-6">
            What <span className="gradient-text">We Do</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            From investment facilitation to sustainable energy projects, we provide comprehensive services to unlock Africa's potential.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-4`}>
                      <service.icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <CardTitle className="text-2xl font-outfit font-bold text-charcoal">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-charcoal/80">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-charcoal">Key Services:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-charcoal/70">
                            <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className={`${colors.button} text-white group w-full mt-6`}
                      onClick={() => {
                        console.log(`Learn more about ${service.title} clicked`);
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Case Study Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-forest-100 text-forest-700 rounded-full text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Featured Project
              </div>
              <h3 className="text-3xl font-outfit font-bold text-charcoal mb-4">
                Solar Infrastructure Development
              </h3>
              <p className="text-lg text-charcoal/80 mb-6">
                Successfully facilitated $180M investment for a 150MW solar farm project in Kenya, 
                creating 500+ local jobs and providing clean energy to 200,000 households.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-outfit font-bold text-forest-600">$180M</div>
                  <div className="text-sm text-charcoal/60">Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-outfit font-bold text-forest-600">500+</div>
                  <div className="text-sm text-charcoal/60">Jobs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-outfit font-bold text-forest-600">200K</div>
                  <div className="text-sm text-charcoal/60">Households</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-forest-200 to-forest-300 rounded-2xl flex items-center justify-center">
                <div className="text-forest-700 text-center">
                  <Zap className="w-16 h-16 mx-auto mb-4" />
                  <div className="text-lg font-semibold">Solar Farm Visualization</div>
                  <div className="text-sm opacity-75">Kenya Project</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-300 rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-terracotta-300 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}