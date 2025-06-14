"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, TrendingUp, Globe, FileText, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function InsightsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  console.log("InsightsSection component rendered, inView:", inView);

  const featuredInsights = [
    {
      type: 'Market Report',
      title: 'Africa Energy Outlook 2025',
      excerpt: 'Comprehensive analysis of renewable energy trends and investment opportunities across 15 African markets.',
      readTime: '12 min read',
      date: 'March 2025',
      category: 'Energy',
      featured: true
    },
    {
      type: 'Industry Analysis',
      title: 'The Rise of African Fintech',
      excerpt: 'How digital financial services are revolutionizing commerce and creating new investment opportunities.',
      readTime: '8 min read',
      date: 'February 2025',
      category: 'Technology',
      featured: false
    },
    {
      type: 'Investment Guide',
      title: 'Navigating ESG in African Markets',
      excerpt: 'Best practices for sustainable investing and compliance with international ESG standards.',
      readTime: '15 min read',
      date: 'January 2025',
      category: 'ESG',
      featured: false
    }
  ];

  const marketTrends = [
    {
      title: 'Solar Energy Adoption',
      change: '+285%',
      description: 'YoY growth in solar installations across West Africa',
      positive: true
    },
    {
      title: 'Foreign Investment',
      change: '+45%',
      description: 'Increase in FDI into African sustainable projects',
      positive: true
    },
    {
      title: 'Trade Volume',
      change: '+67%',
      description: 'Growth in intra-African trade partnerships',
      positive: true
    },
    {
      title: 'Green Bonds',
      change: '+120%',
      description: 'African green bond issuance growth',
      positive: true
    }
  ];

  const reports = [
    {
      title: 'Q4 2024 Investment Review',
      description: 'Quarterly analysis of investment flows and opportunities',
      type: 'PDF Report',
      pages: '24 pages'
    },
    {
      title: 'Africa Trade Corridors Guide',
      description: 'Comprehensive guide to major trade routes and logistics',
      type: 'Interactive Guide',
      pages: '45 pages'
    },
    {
      title: 'ESG Framework for Africa',
      description: 'Implementation guide for sustainable investment practices',
      type: 'White Paper',
      pages: '32 pages'
    }
  ];

  return (
    <section id="insights" ref={ref} className="py-20 bg-gradient-to-br from-cream to-gold-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-african-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-charcoal mb-6">
            Market <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Stay ahead with our latest research, analysis, and thought leadership on African markets and investment trends.
          </p>
        </motion.div>

        {/* Market Trends */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {marketTrends.map((trend, index) => (
            <motion.div
              key={trend.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-effect rounded-2xl p-6 text-center hover-lift"
            >
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-forest-600" />
              </div>
              <div className={`text-2xl font-outfit font-bold mb-2 ${
                trend.positive ? 'text-forest-600' : 'text-terracotta-600'
              }`}>
                {trend.change}
              </div>
              <h3 className="font-semibold text-charcoal mb-2 text-sm">
                {trend.title}
              </h3>
              <p className="text-xs text-charcoal/60">
                {trend.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Articles */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-outfit font-bold text-charcoal mb-6">
                Latest Insights
              </h3>
            </motion.div>

            <div className="space-y-6">
              {featuredInsights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className={`hover-lift border-0 shadow-lg ${
                    insight.featured ? 'african-border bg-gradient-to-br from-white to-terracotta-50' : 'bg-white'
                  }`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-terracotta-100 text-terracotta-700">
                          {insight.type}
                        </Badge>
                        {insight.featured && (
                          <Badge className="bg-gold-100 text-gold-700">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl font-outfit font-bold text-charcoal hover:text-terracotta-600 transition-colors cursor-pointer">
                        {insight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-charcoal/80">
                        {insight.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-charcoal/60">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {insight.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {insight.readTime}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {insight.category}
                          </Badge>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-terracotta-600 hover:text-terracotta-700 group"
                          onClick={() => {
                            console.log(`Read article: ${insight.title} clicked`);
                          }}
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reports & Downloads */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-outfit font-bold text-charcoal mb-6">
                Reports & Downloads
              </h3>
              
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <motion.div
                    key={report.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <Card className="hover-lift border-0 shadow-md bg-white">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-terracotta-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="w-5 h-5 text-terracotta-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-charcoal text-sm mb-1">
                              {report.title}
                            </h4>
                            <p className="text-xs text-charcoal/70 mb-2">
                              {report.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="text-xs text-charcoal/60">
                                {report.type} • {report.pages}
                              </div>
                              <Button 
                                size="sm" 
                                variant="ghost"
                                className="text-xs text-terracotta-600 hover:text-terracotta-700 p-0 h-auto"
                                onClick={() => {
                                  console.log(`Download report: ${report.title} clicked`);
                                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                              >
                                Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-8"
              >
                <Card className="border-0 shadow-lg bg-gradient-to-br from-forest-50 to-forest-100">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-8 h-8 text-forest-600 mx-auto mb-3" />
                    <h4 className="font-outfit font-bold text-charcoal mb-2">
                      Weekly Insights
                    </h4>
                    <p className="text-sm text-charcoal/70 mb-4">
                      Get our latest market analysis and investment opportunities delivered to your inbox.
                    </p>
                    <Button 
                      className="bg-forest-600 hover:bg-forest-700 text-white w-full"
                      onClick={() => {
                        console.log("Newsletter signup clicked");
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Subscribe Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Thought Leadership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center glass-effect rounded-3xl p-12"
        >
          <h3 className="text-3xl font-outfit font-bold text-charcoal mb-4">
            Need Custom Market Research?
          </h3>
          <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto">
            Our research team can provide tailored market analysis and investment reports specific to your interests and investment criteria.
          </p>
          <Button 
            size="lg"
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
            onClick={() => {
              console.log("Request custom research clicked");
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request Custom Research
          </Button>
        </motion.div>
      </div>
    </section>
  );
}