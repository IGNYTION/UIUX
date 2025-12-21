import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { CheckCircle, Sparkles, Zap, Building2, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export function PricingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const pricingTiers = [
    {
      name: 'Free',
      icon: <Sparkles className="w-8 h-8" />,
      price: '$0',
      period: 'Forever',
      description: 'Open-source tools + basic workflows',
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'All open-source EDA tools',
        'Basic PDK access (SkyWater 130nm)',
        'Community support',
        'Standard workflows',
        'Public IP library access',
        'Basic documentation',
        'Monthly webinars',
      ],
      cta: 'Download for Free',
      link: '/downloads',
      highlighted: false,
      popular: false,
    },
    {
      name: 'Starter',
      icon: <Zap className="w-8 h-8" />,
      price: 'Custom',
      period: 'Contact us',
      description: 'AI-assisted workflows + collaboration',
      gradient: 'from-orange-500 to-yellow-500',
      features: [
        'Everything in Free',
        'GenAI-assisted design and debugging',
        'Team collaboration tools (up to 10 users)',
        'Priority email support',
        'Advanced PDK access',
        'Private IP repositories',
        'Automated testing pipelines',
        'Monthly design reviews',
      ],
      cta: 'Contact Us',
      link: '/contact',
      highlighted: true,
      popular: true,
    },
    {
      name: 'Business',
      icon: <Building2 className="w-8 h-8" />,
      price: 'Custom',
      period: 'Contact us',
      description: 'Advanced automation + enterprise support',
      gradient: 'from-blue-500 to-indigo-500',
      features: [
        'Everything in Starter',
        'Advanced CI/CD pipelines',
        'Custom IP libraries',
        'Dedicated support engineer',
        'Unlimited users',
        'SSO integration',
        'Advanced analytics and reporting',
        'Quarterly business reviews',
        'Custom training sessions',
      ],
      cta: 'Contact Us',
      link: '/contact',
      highlighted: false,
      popular: false,
    },
    {
      name: 'Enterprise',
      icon: <Building2 className="w-8 h-8" />,
      price: 'Custom',
      period: 'Contact us',
      description: 'Tailored solutions for large teams',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Everything in Business',
        'Custom integrations with existing tools',
        'On-premise deployment options',
        '24/7 premium support',
        'Custom SLA guarantees',
        'Dedicated account manager',
        'White-glove onboarding',
        'Custom PDK development',
        'Priority feature requests',
      ],
      cta: 'Contact Us',
      link: '/contact',
      highlighted: false,
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Are the tools really free?',
      answer: 'Yes! All open-source EDA tools, PDKs, and basic workflows are completely free. You only pay for AI assistance, advanced automation, and enterprise features.',
    },
    {
      question: 'Can I switch between tiers?',
      answer: 'Absolutely! You can upgrade or downgrade at any time. Contact our sales team to discuss your needs.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, ACH transfers, and can arrange annual invoicing for enterprise customers.',
    },
    {
      question: 'Do you offer educational discounts?',
      answer: 'Yes! Academic institutions and research labs can access premium features at significantly reduced rates. Contact us for details.',
    },
    {
      question: 'What kind of support is included?',
      answer: 'Free tier includes community support. Paid tiers include email support (Starter), dedicated support engineer (Business), and 24/7 premium support (Enterprise).',
    },
    {
      question: 'Can I try premium features before committing?',
      answer: 'Yes! We offer a 30-day trial of our Starter plan. Contact us to get started.',
    },
  ];

  return (
    <div className="w-full overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-24 px-4 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.3), transparent 50%)`,
          }}
        />

        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              Open by Default. Pay for <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Automation and Collaboration</span>.
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              All tools, PDKs, and IPs remain open. Pricing applies to AI assistance, automation, 
              collaboration, and enterprise workflows.
            </p>
            <motion.div
              className="inline-block bg-gradient-to-r from-orange-100 to-yellow-100 px-6 py-3 rounded-full border border-orange-300"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-orange-800">
                <span className="font-semibold">Free forever</span> for individual developers and small teams
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className={`h-full shadow-lg hover:shadow-2xl transition-all relative overflow-hidden ${
                  tier.highlighted
                    ? 'border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-yellow-50'
                    : 'border-gray-200 bg-white'
                }`}>
                  {tier.popular && (
                    <motion.div
                      className="absolute top-0 right-0 bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-4 py-1 rounded-bl-lg text-sm"
                      initial={{ x: 100 }}
                      whileInView={{ x: 0 }}
                      viewport={{ once: true }}
                    >
                      Most Popular
                    </motion.div>
                  )}
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <motion.div
                        className={`mb-4 inline-block p-3 rounded-xl bg-gradient-to-br ${tier.gradient} text-white`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {tier.icon}
                      </motion.div>
                      
                      <h3 className="text-2xl text-gray-900 mb-2">{tier.name}</h3>
                      
                      <div className="mb-2">
                        <span className="text-4xl bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                          {tier.price}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-500 mb-4">{tier.period}</p>
                      <p className="text-gray-600 mb-6">{tier.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {tier.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link to={tier.link} className="mt-auto">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          className={`w-full ${
                            tier.highlighted
                              ? 'bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white'
                              : 'bg-white text-orange-600 border border-orange-600 hover:bg-orange-50'
                          }`}
                        >
                          {tier.cta}
                        </Button>
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-xl text-gray-600">
              Contact our team for a personalized recommendation
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-gradient-to-br from-white to-orange-50 p-6 rounded-xl shadow-lg border border-orange-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgb(251, 146, 60)' }}
              >
                <h3 className="text-xl text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-yellow-600 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Download our free platform today or contact us to discuss enterprise needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/downloads">
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl"
                  >
                    Start Free
                  </Button>
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Talk to Sales
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
