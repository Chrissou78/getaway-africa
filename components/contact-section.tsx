"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Download, 
  CheckCircle,
  Globe,
  Users,
  Building
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    investmentInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log("ContactSection component rendered, inView:", inView);

  const handleInputChange = (field: string, value: string) => {
    console.log(`Form field ${field} changed to:`, value);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Form submission started with data:", formData);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted successfully");
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        investmentInterest: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@gatewayafrica.com',
      subtitle: 'General inquiries & partnerships'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Investment consultations'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: 'Lagos, Nigeria',
      subtitle: 'Regional offices across Africa'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri 9AM-6PM WAT',
      subtitle: 'Extended hours for global clients'
    }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-terracotta-50 to-transparent opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-charcoal mb-6">
            Partner <span className="gradient-text">With Us</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Ready to explore investment opportunities in Africa? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl african-border">
              <CardHeader>
                <CardTitle className="text-2xl font-outfit font-bold text-charcoal">
                  Get In Touch
                </CardTitle>
                <p className="text-charcoal/70">
                  Fill out the form below and we'll schedule a consultation within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        className="border-terracotta-200 focus:border-terracotta-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="border-terracotta-200 focus:border-terracotta-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-2 block">
                        Company/Organization
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name"
                        className="border-terracotta-200 focus:border-terracotta-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="border-terracotta-200 focus:border-terracotta-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-2 block">
                        Country/Region
                      </label>
                      <Select onValueChange={(value) => handleInputChange('country', value)}>
                        <SelectTrigger className="border-terracotta-200 focus:border-terracotta-500">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="cn">China</SelectItem>
                          <SelectItem value="jp">Japan</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-2 block">
                        Investment Interest
                      </label>
                      <Select onValueChange={(value) => handleInputChange('investmentInterest', value)}>
                        <SelectTrigger className="border-terracotta-200 focus:border-terracotta-500">
                          <SelectValue placeholder="Select sector" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="renewable">Renewable Energy</SelectItem>
                          <SelectItem value="agritech">Agri-tech</SelectItem>
                          <SelectItem value="logistics">Logistics</SelectItem>
                          <SelectItem value="infrastructure">Green Infrastructure</SelectItem>
                          <SelectItem value="multiple">Multiple Sectors</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-charcoal mb-2 block">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your investment goals and interests..."
                      rows={4}
                      className="border-terracotta-200 focus:border-terracotta-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Additional Resources */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-outfit font-bold text-charcoal mb-6">
                Contact Information
              </h3>
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 glass-effect rounded-xl hover-lift"
                  >
                    <div className="w-12 h-12 bg-terracotta-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-terracotta-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">{info.title}</h4>
                      <p className="text-charcoal/80 font-medium">{info.details}</p>
                      <p className="text-sm text-charcoal/60">{info.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Language Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-outfit font-bold text-charcoal mb-4">
                Multilingual Support
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <Badge key={lang.code} variant="outline" className="p-3 justify-start">
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Download Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-forest-50 to-forest-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Download className="w-6 h-6 text-forest-600 mr-3" />
                    <h3 className="text-xl font-outfit font-bold text-charcoal">
                      Investor Resources
                    </h3>
                  </div>
                  <p className="text-charcoal/70 mb-4">
                    Download our comprehensive investment guide and market overview.
                  </p>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-between border-forest-300 text-forest-700 hover:bg-forest-50"
                      onClick={() => console.log("Download investor pack clicked")}
                    >
                      <span>Investment Guide (PDF)</span>
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between border-forest-300 text-forest-700 hover:bg-forest-50"
                      onClick={() => console.log("Download market overview clicked")}
                    >
                      <span>Market Overview (PDF)</span>
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 text-center"
            >
              <div className="space-y-2">
                <Globe className="w-8 h-8 text-terracotta-600 mx-auto" />
                <div className="text-lg font-outfit font-bold text-charcoal">45+</div>
                <div className="text-xs text-charcoal/60">Countries</div>
              </div>
              <div className="space-y-2">
                <Users className="w-8 h-8 text-gold-600 mx-auto" />
                <div className="text-lg font-outfit font-bold text-charcoal">200+</div>
                <div className="text-xs text-charcoal/60">Partners</div>
              </div>
              <div className="space-y-2">
                <Building className="w-8 h-8 text-forest-600 mx-auto" />
                <div className="text-lg font-outfit font-bold text-charcoal">$2.8B+</div>
                <div className="text-xs text-charcoal/60">Facilitated</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Response Time Promise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center glass-effect rounded-3xl p-8"
        >
          <CheckCircle className="w-12 h-12 text-forest-600 mx-auto mb-4" />
          <h3 className="text-2xl font-outfit font-bold text-charcoal mb-2">
            Our Commitment to You
          </h3>
          <p className="text-lg text-charcoal/70">
            We respond to all inquiries within 24 hours and schedule initial consultations within 48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}