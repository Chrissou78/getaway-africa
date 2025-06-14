"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight,
  Heart
} from 'lucide-react';

export default function Footer() {
  console.log("Footer component rendered");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription attempted");
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    console.log("Newsletter email:", email);
    form.reset();
  };

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#about' },
      { label: 'Careers', href: '#contact' },
      { label: 'News & Press', href: '#insights' }
    ],
    services: [
      { label: 'Investment Facilitation', href: '#services' },
      { label: 'Market Entry', href: '#services' },
      { label: 'Export Advisory', href: '#services' },
      { label: 'Sustainable Energy', href: '#services' }
    ],
    resources: [
      { label: 'Market Insights', href: '#insights' },
      { label: 'Investment Guide', href: '#contact' },
      { label: 'Case Studies', href: '#opportunities' },
      { label: 'Research Reports', href: '#insights' }
    ],
    investors: [
      { label: 'Investment Opportunities', href: '#opportunities' },
      { label: 'Due Diligence', href: '#contact' },
      { label: 'Portfolio Support', href: '#contact' },
      { label: 'ESG Framework', href: '#insights' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const handleLinkClick = (href: string) => {
    console.log("Footer link clicked:", href);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-african-pattern opacity-5"></div>
      
      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-outfit font-bold mb-4">
                Stay Connected with African Markets
              </h3>
              <p className="text-white/70 mb-6">
                Get weekly insights on investment opportunities, market trends, and business developments across Africa.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-terracotta-400"
                />
                <Button 
                  type="submit"
                  className="bg-terracotta-500 hover:bg-terracotta-600 text-white whitespace-nowrap group"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-africa-sunset rounded-lg flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-outfit font-bold gradient-text">
                    Gateway Africa
                  </h2>
                  <p className="text-sm text-terracotta-300 font-medium">
                    Investment Platform
                  </p>
                </div>
              </div>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                Connecting global investors and companies to Africa's most promising opportunities in sustainable energy, exports, and business development.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-white/60">
                  <Mail className="w-4 h-4 mr-3" />
                  hello@gatewayafrica.com
                </div>
                <div className="flex items-center text-white/60">
                  <Phone className="w-4 h-4 mr-3" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-white/60">
                  <MapPin className="w-4 h-4 mr-3" />
                  Lagos, Nigeria
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-outfit font-semibold mb-4 capitalize">
                  {category === 'investors' ? 'For Investors' : category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-white/70 hover:text-terracotta-300 transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <Separator className="bg-white/10 mb-8" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-white/60 text-sm">
                © 2025 Gateway Africa. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <button className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </button>
                <button className="text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </button>
                <button className="text-white/60 hover:text-white transition-colors">
                  Cookie Policy
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-terracotta-500 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`${social.label} social link clicked`);
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Love Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-8 border-t border-white/10"
          >
            <p className="text-white/50 text-sm flex items-center justify-center">
              Made with 
              <Heart className="w-4 h-4 mx-1 text-terracotta-400 fill-current" />
              for Africa's future
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}