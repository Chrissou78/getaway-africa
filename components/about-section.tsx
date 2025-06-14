"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Globe, Lightbulb } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  console.log("AboutSection component rendered, inView:", inView);

  const values = [
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Committed to projects that create lasting positive impact for communities and the environment.',
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'Building local capacity and creating opportunities that empower African entrepreneurs and businesses.',
    },
    {
      icon: Globe,
      title: 'Global Collaboration',
      description: 'Bridging continents through strategic partnerships that benefit all stakeholders.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering new approaches to business development and investment facilitation in Africa.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-terracotta-50 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-charcoal mb-6">
            About <span className="gradient-text">Gateway Africa</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            We are more than consultants – we are your strategic partners in unlocking Africa's vast potential for sustainable growth and prosperity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mission & Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="african-border p-8 bg-gradient-to-br from-cream to-terracotta-50 rounded-2xl">
              <h3 className="text-2xl font-outfit font-bold text-charcoal mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                To facilitate sustainable investment and business development across Africa by connecting global capital with local opportunities, expertise, and innovation. We believe in Africa's potential to lead the world in sustainable development while creating prosperity for all.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-outfit font-bold text-charcoal">
                Founder's Vision
              </h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                With over 15 years of experience in international business development and a deep understanding of African markets, our founder recognized the need for a bridge between global investors and Africa's untapped potential. Gateway Africa was born from the vision of creating sustainable partnerships that drive mutual growth and positive impact.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-16 h-16 bg-africa-sunset rounded-full flex items-center justify-center">
                  <span className="text-white font-outfit font-bold text-lg">GA</span>
                </div>
                <div>
                  <div className="font-semibold text-charcoal">15+ Years Experience</div>
                  <div className="text-charcoal/60">International Business Development</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full hover-lift border-0 shadow-lg bg-gradient-to-br from-white to-cream">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-terracotta-100 rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-terracotta-600" />
                    </div>
                    <h4 className="text-lg font-outfit font-bold text-charcoal mb-3">
                      {value.title}
                    </h4>
                    <p className="text-charcoal/70">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-outfit font-bold text-charcoal mb-4">
              Our Impact So Far
            </h3>
            <p className="text-xl text-charcoal/70">
              Building bridges, creating opportunities, driving sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Countries Served' },
              { number: '50+', label: 'Partnerships Formed' },
              { number: '$400M+', label: 'Investment Facilitated' },
              { number: '50+', label: 'Projects Completed' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-outfit font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-charcoal/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}