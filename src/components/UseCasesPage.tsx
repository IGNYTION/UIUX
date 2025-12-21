import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Rocket, Building2, GraduationCap, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export function UseCasesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const useCases = [
    {
      icon: <Rocket className="w-16 h-16" />,
      title: 'Startup Tape-Outs',
      subtitle: 'Accelerate Your Silicon Journey',
      description: 'Accelerate iterations, reduce costs, and prototype faster with open tools and automated pipelines.',
      gradient: 'from-orange-500 to-yellow-500',
      benefits: [
        'Eliminate licensing costs',
        'Rapid prototyping cycles',
        'Access to production-ready PDKs',
        'Community support and resources',
        'Scalable from MVP to production',
      ],
      caseStudy: {
        company: 'TechStartup Inc.',
        result: 'Reduced time-to-tapeout by 40% using open-source EDA tools',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
      },
    },
    {
      icon: <Building2 className="w-16 h-16" />,
      title: 'Enterprise Silicon Teams',
      subtitle: 'Modernize Your Workflows',
      description: 'Modernise internal workflows using software-style development and AI assistance without disrupting existing infrastructure.',
      gradient: 'from-yellow-500 to-orange-400',
      benefits: [
        'Integrate with existing tools',
        'AI-assisted debugging and optimization',
        'Automated CI/CD pipelines',
        'Enhanced collaboration features',
        'Reproducible build environments',
      ],
      caseStudy: {
        company: 'Global Semiconductor Corp.',
        result: 'Improved team productivity by 60% with GenAI workflows',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      },
    },
    {
      icon: <GraduationCap className="w-16 h-16" />,
      title: 'Academic & Research',
      subtitle: 'Educate the Next Generation',
      description: 'Teach practical, real-world chip design using open-source tools, PDKs, and reproducible workflows.',
      gradient: 'from-orange-400 to-yellow-600',
      benefits: [
        'Free for educational use',
        'Comprehensive learning materials',
        'Real-world design experience',
        'Research-ready environments',
        'Publication-quality results',
      ],
      caseStudy: {
        company: 'University Research Lab',
        result: 'Published 15+ papers using the platform in academic conferences',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      },
    },
    {
      icon: <Globe className="w-16 h-16" />,
      title: 'Open Hardware Projects',
      subtitle: 'Collaborate Globally',
      description: 'Collaborate globally, share IPs, and ensure designs are reproducible and modular.',
      gradient: 'from-yellow-600 to-orange-500',
      benefits: [
        'Global collaboration tools',
        'Version-controlled IP sharing',
        'Transparent design processes',
        'Community-driven innovation',
        'Cross-platform compatibility',
      ],
      caseStudy: {
        company: 'Open Hardware Initiative',
        result: 'Built a library of 200+ reusable IP blocks with contributors worldwide',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      },
    },
  ];

  return (
    <div className="w-full overflow-hidden">
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
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl opacity-20 blur-xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 90, 0],
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
              Who Benefits From Our <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Platform</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From startups to enterprises, from academia to open-source communities—our platform empowers 
              silicon development for everyone
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Detail */}
      {useCases.map((useCase, index) => (
        <section
          key={index}
          className={`py-20 px-4 relative overflow-hidden ${
            index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-gray-50 to-orange-50'
          }`}
        >
          {/* Parallax background */}
          <motion.div
            className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'bottom-0 left-0'} w-96 h-96 bg-gradient-to-br ${useCase.gradient} rounded-full opacity-10 blur-3xl`}
            style={{
              y: scrollY * (index % 2 === 0 ? 0.3 : -0.3),
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${useCase.gradient} text-white`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {useCase.icon}
                </motion.div>

                <div>
                  <h2 className="text-4xl mb-2">{useCase.title}</h2>
                  <p className="text-xl text-orange-600 mb-4">{useCase.subtitle}</p>
                  <p className="text-lg text-gray-600">{useCase.description}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl text-gray-900">Key Benefits:</h3>
                  {useCase.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Case Study */}
                <motion.div
                  className={`backdrop-blur-sm bg-gradient-to-br ${useCase.gradient} bg-opacity-10 p-6 rounded-xl border-2 border-orange-200`}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm text-orange-600 mb-2">Case Study</p>
                  <p className="text-gray-900 mb-2">{useCase.caseStudy.company}</p>
                  <p className="text-gray-700 italic">"{useCase.caseStudy.result}"</p>
                </motion.div>

                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white shadow-lg"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Image */}
              <motion.div
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, scale: 0.8, rotateY: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={useCase.caseStudy.image}
                    alt={useCase.title}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

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
              Find Your Use Case
            </h2>
            <p className="text-xl mb-8 opacity-90">
              No matter your organization's size or goals, our platform adapts to your needs
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
                    Start Building
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
                    Contact Sales
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
