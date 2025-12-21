import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Sparkles, Building2, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function ProductsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const editions = [
    {
      name: 'Free Edition',
      icon: <Sparkles className="w-12 h-12 text-orange-600" />,
      description: 'Perfect for individual developers and small teams getting started.',
      price: 'Free',
      features: [
        'Core semiconductor design tools',
        'Basic process simulation',
        'Community support',
        'Monthly updates',
        'Single user license',
        '5 GB cloud storage',
        'Standard documentation',
        'Email support (48h response)',
      ],
      badge: 'Most Popular',
      badgeColor: 'bg-green-500',
      cta: 'Download Free',
      link: '/downloads',
    },
    {
      name: 'Enterprise Edition',
      icon: <Building2 className="w-12 h-12 text-orange-600" />,
      description: 'Advanced features and support for large-scale semiconductor operations.',
      price: 'Custom Pricing',
      features: [
        'All Free Edition features',
        'Advanced AI-powered analysis',
        'Unlimited users',
        'Priority 24/7 support',
        'Custom integrations',
        'Unlimited cloud storage',
        'Dedicated account manager',
        'On-premise deployment option',
        'Advanced security & compliance',
        'Custom training programs',
        'API access with higher limits',
        'White-label options',
      ],
      badge: 'Enterprise',
      badgeColor: 'bg-purple-500',
      cta: 'Contact Sales',
      link: '/about',
    },
  ];

  const comparisonFeatures = [
    { 
      category: 'Design Tools',
      features: [
        { name: 'Circuit Design', free: true, enterprise: true },
        { name: 'Layout Editor', free: true, enterprise: true },
        { name: 'AI-Powered Optimization', free: false, enterprise: true },
        { name: 'Advanced Simulation', free: false, enterprise: true },
      ]
    },
    {
      category: 'Collaboration',
      features: [
        { name: 'Team Workspaces', free: 'Up to 3', enterprise: 'Unlimited' },
        { name: 'Version Control', free: true, enterprise: true },
        { name: 'Real-time Collaboration', free: false, enterprise: true },
        { name: 'Project Templates', free: 'Basic', enterprise: 'Advanced' },
      ]
    },
    {
      category: 'Support & Services',
      features: [
        { name: 'Documentation', free: true, enterprise: true },
        { name: 'Email Support', free: '48h', enterprise: '2h' },
        { name: 'Phone Support', free: false, enterprise: true },
        { name: 'Dedicated Manager', free: false, enterprise: true },
      ]
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-20 px-4 relative overflow-hidden">
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Choose Your
            <motion.span 
              className="block bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              Perfect Plan
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Whether you're just starting out or running large-scale operations, 
            IGNYTION has the right solution for your semiconductor needs.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {editions.map((edition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    z: 50,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="relative overflow-hidden hover:shadow-2xl transition-all h-full">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-100 to-transparent opacity-0"
                      animate={{
                        opacity: hoveredCard === index ? 0.3 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {edition.badge && (
                      <motion.div 
                        className="absolute top-4 right-4"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        <Badge className={`${edition.badgeColor} text-white`}>
                          {edition.badge}
                        </Badge>
                      </motion.div>
                    )}
                    <CardHeader className="pb-8 relative z-10">
                      <motion.div 
                        className="mb-4"
                        animate={{
                          rotate: hoveredCard === index ? 360 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {edition.icon}
                      </motion.div>
                      <CardTitle className="text-3xl">{edition.name}</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {edition.description}
                      </CardDescription>
                      <div className="mt-6">
                        <motion.span 
                          className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
                          animate={{
                            scale: hoveredCard === index ? 1.1 : 1,
                          }}
                        >
                          {edition.price}
                        </motion.span>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {edition.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ x: 10 }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-6 relative z-10">
                      <Link to={edition.link} className="w-full">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            size="lg" 
                            className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white shadow-lg shadow-orange-300"
                          >
                            <Download className="w-5 h-5 mr-2" />
                            {edition.cta}
                          </Button>
                        </motion.div>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Detailed Feature Comparison
            </h2>
            <motion.div 
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              whileHover={{ boxShadow: '0 20px 50px rgba(251, 146, 60, 0.2)' }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Free Edition</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Enterprise Edition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category, catIdx) => (
                      <>
                        <tr key={`cat-${catIdx}`} className="bg-orange-50">
                          <td colSpan={3} className="px-6 py-3 font-semibold text-orange-900">
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature, featIdx) => (
                          <tr key={`${catIdx}-${featIdx}`} className="border-t border-gray-200">
                            <td className="px-6 py-4 text-gray-700">{feature.name}</td>
                            <td className="px-6 py-4 text-center">
                              {typeof feature.free === 'boolean' ? (
                                feature.free ? (
                                  <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )
                              ) : (
                                <span className="text-gray-700">{feature.free}</span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {typeof feature.enterprise === 'boolean' ? (
                                feature.enterprise ? (
                                  <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )
                              ) : (
                                <span className="text-gray-700">{feature.enterprise}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-yellow-600 relative overflow-hidden">
        {/* Animated circles */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Not Sure Which Edition to Choose?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our team is here to help you find the perfect solution for your needs.
          </motion.p>
          <Link to="/about">
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl"
              >
                Talk to an Expert
              </Button>
            </motion.div>
          </Link>
        </div>
      </section>
    </div>
  );
}