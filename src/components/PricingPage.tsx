import { Card, CardContent } from './ui/card';
import { CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function PricingPage() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      period: 'Forever',
      description: 'Open-source tools + basic workflows',
      features: [
        'All open-source EDA tools',
        'Complete 180nm PDK',
        'Standard cell library',
        'Public IP library access',
        'Community support',
        'Basic documentation',
        'CLI tools',
        'Open-source license (Apache 2.0)',
      ],
      cta: 'Download',
      link: '/downloads',
      highlighted: false,
    },
    {
      name: 'Starter',
      price: 'Custom',
      period: 'Contact us',
      description: 'AI-assisted workflows + collaboration',
      features: [
        'Everything in Free',
        'GenAI-assisted design',
        'Python automation tools',
        'Advanced debugging with AI',
        'Team collaboration (up to 10 users)',
        'Priority email support',
        'Advanced documentation',
        'Monthly office hours',
        'API access',
      ],
      cta: 'Contact Us',
      link: '/contact',
      highlighted: true,
    },
    {
      name: 'Business',
      price: 'Custom',
      period: 'Contact us',
      description: 'Advanced automation + enterprise support',
      features: [
        'Everything in Starter',
        'Advanced CI/CD pipelines',
        'Custom GenAI training',
        'Unlimited team members',
        'Dedicated support channel',
        'SLA guarantees',
        'Custom integrations',
        'Quarterly business reviews',
        'Advanced analytics',
      ],
      cta: 'Contact Us',
      link: '/contact',
      highlighted: false,
    },
    {
      name: 'Custom',
      price: 'Contact Us',
      period: 'Enterprise',
      description: 'Tailored solutions for large teams',
      features: [
        'Everything in Business',
        'On-premise deployment',
        'Custom PDK development',
        'Dedicated infrastructure',
        'White-label options',
        '24/7 premium support',
        'Dedicated account manager',
        'Custom feature development',
        'Training and onboarding',
      ],
      cta: 'Contact Us',
      link: '/contact',
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: 'Are the tools really free?',
      answer: 'Yes! All open-source EDA tools and the 180nm PDK are completely free. You only pay for AI assistance, automation, collaboration features, and enterprise support.',
    },
    {
      question: 'What process node do you support?',
      answer: 'We currently support 180nm process technology with plans to add more nodes in the future based on community demand.',
    },
    {
      question: 'Can I use Python for chip design?',
      answer: 'Yes! Our platform supports Python-based workflows and includes a Python DSL for hardware description, along with GenAI assistance for optimization.',
    },
    {
      question: 'Do you offer educational discounts?',
      answer: 'Yes! Academic institutions and research labs can access premium features at reduced rates. Contact us for details about our educational programs.',
    },
    {
      question: 'What kind of support is included?',
      answer: 'Free tier includes community support. Starter includes priority email support. Business includes dedicated support channels with SLA. Custom includes 24/7 premium support.',
    },
    {
      question: 'Can I try Pro features before committing?',
      answer: 'Yes! We offer a 30-day trial of Starter tier features. Contact us to get started with your trial.',
    },
    {
      question: 'What is GenAI assistance?',
      answer: 'GenAI assistance uses artificial intelligence to help you debug designs, optimize workflows, suggest improvements, and automate repetitive tasks in your chip design process.',
    },
    {
      question: 'Do you support on-premise deployment?',
      answer: 'Yes! On-premise deployment is available with our Custom tier for enterprises that need to keep their design data within their own infrastructure.',
    },
  ];

  const comparison = [
    { feature: 'Open-source EDA tools', free: true, starter: true, business: true, custom: true },
    { feature: '180nm PDK', free: true, starter: true, business: true, custom: true },
    { feature: 'Community support', free: true, starter: true, business: true, custom: true },
    { feature: 'GenAI assistance', free: false, starter: true, business: true, custom: true },
    { feature: 'Python workflows', free: false, starter: true, business: true, custom: true },
    { feature: 'Team collaboration', free: false, starter: '10 users', business: 'Unlimited', custom: 'Unlimited' },
    { feature: 'CI/CD pipelines', free: false, starter: false, business: true, custom: true },
    { feature: 'Priority support', free: false, starter: 'Email', business: 'Dedicated', custom: '24/7' },
    { feature: 'On-premise deployment', free: false, starter: false, business: false, custom: true },
    { feature: 'Custom development', free: false, starter: false, business: false, custom: true },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl mb-6 text-gray-900">
              Open by Default. Pay for Automation and Collaboration.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              All tools, PDKs, and IPs remain open. Pricing applies to AI assistance, automation, 
              collaboration, and enterprise workflows.
            </p>
            <div className="inline-block bg-orange-50 px-6 py-3 rounded-lg border border-orange-200">
              <p className="text-gray-900">
                <span className="font-semibold">Free forever</span> for individual developers and researchers
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card 
                  className={`${
                    tier.highlighted 
                      ? 'border-orange-500 border-2 shadow-lg' 
                      : 'border-gray-200'
                  } relative h-full`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-2xl mb-2 text-gray-900">{tier.name}</h3>
                    <div className="mb-1">
                      <span className="text-3xl text-gray-900">{tier.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{tier.period}</p>
                    <p className="text-gray-600 mb-6 text-sm">{tier.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to={tier.link}>
                      <Button 
                        className={`w-full ${
                          tier.highlighted
                            ? 'bg-orange-500 hover:bg-orange-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl mb-12 text-gray-900 text-center">
              Feature Comparison
            </h2>

            <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 text-gray-900">Free</th>
                    <th className="text-center py-4 px-6 text-gray-900 bg-orange-50">Starter</th>
                    <th className="text-center py-4 px-6 text-gray-900">Business</th>
                    <th className="text-center py-4 px-6 text-gray-900">Custom</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-6 text-gray-700">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {row.free === true ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                        ) : row.free === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-gray-700 text-sm">{row.free}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center bg-orange-50">
                        {row.starter === true ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                        ) : row.starter === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-gray-700 text-sm">{row.starter}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.business === true ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                        ) : row.business === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-gray-700 text-sm">{row.business}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.custom === true ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                        ) : row.custom === false ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-gray-700 text-sm">{row.custom}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl mb-12 text-gray-900 text-center">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg mb-2 text-gray-900">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl mb-6 text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Download our free platform or contact us to discuss premium features
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/downloads">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Download Free
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
