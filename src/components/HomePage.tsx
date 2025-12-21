import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Download, Mail, CheckCircle, Lightbulb, Cpu, GitBranch, Bot, Rocket, GraduationCap, Building2, Globe, Zap, Shield, Code, RefreshCw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const problemPoints = [
    'Proprietary EDA licenses slowing innovation',
    'Manual, error-prone workflows',
    'PDKs and IPs difficult to access or integrate',
    'No easy way to scale or reproduce designs',
    'Limited adoption of AI or automation in workflows',
  ];

  const solutionFeatures = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Open-source EDA tools',
      description: 'Synthesis, simulation, P&R, verification—all free to use',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Open PDKs',
      description: 'Versioned, foundry-aligned, easy to integrate',
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'Reusable IPs',
      description: 'Modular blocks with traceability and version control',
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'GenAI-Assisted Workflows',
      description: 'Accelerates design, debugging, and optimisation',
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Software-style CI/CD pipelines',
      description: 'Automated, repeatable RTL-to-GDS flows',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reproducible environments',
      description: 'Versioned toolchains and one-click setup',
    },
  ];

  const useCases = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: 'Startup Tape-Outs',
      description: 'Accelerate iterations, reduce costs, and prototype faster with open tools and automated pipelines.',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Enterprise Silicon Teams',
      description: 'Modernise internal workflows using software-style development and AI assistance without disrupting existing infrastructure.',
      gradient: 'from-yellow-500 to-orange-400',
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Academic & Research',
      description: 'Teach practical, real-world chip design using open-source tools, PDKs, and reproducible workflows.',
      gradient: 'from-orange-400 to-yellow-600',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Open Hardware Projects',
      description: 'Collaborate globally, share IPs, and ensure designs are reproducible and modular.',
      gradient: 'from-yellow-600 to-orange-500',
    },
  ];

  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      description: 'Open-source tools + basic workflows',
      features: [
        'All open-source EDA tools',
        'Basic PDK access',
        'Community support',
        'Standard workflows',
      ],
      cta: 'Download for Free',
      link: '/downloads',
      highlighted: false,
    },
    {
      name: 'Starter',
      price: 'Custom',
      description: 'AI-assisted workflows + collaboration',
      features: [
        'Everything in Free',
        'GenAI-assisted design',
        'Team collaboration tools',
        'Priority support',
      ],
      cta: 'Contact Us',
      link: '/contact',
      highlighted: true,
    },
    {
      name: 'Business',
      price: 'Custom',
      description: 'Advanced automation + enterprise support',
      features: [
        'Everything in Starter',
        'Advanced CI/CD pipelines',
        'Custom IP libraries',
        'Dedicated support',
      ],
      cta: 'Contact Us',
      link: '/contact',
      highlighted: false,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large teams',
      features: [
        'Everything in Business',
        'Custom integrations',
        'On-premise deployment',
        '24/7 premium support',
      ],
      cta: 'Contact Us',
      link: '/contact',
      highlighted: false,
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-20 px-4 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.3), transparent 50%)`,
          }}
        />
        
        {/* Floating 3D Shapes */}
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
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-2xl opacity-15 blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-4 py-2 rounded-full text-sm">
                  Open-source foundations • Modern workflows • GenAI-assisted • No vendor lock-in
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span 
                  className="block bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  An Open Platform to Democratise and Modernise Chip Design
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                An open-source EDA platform unifying tools, PDKs, and reusable IPs, enhanced with GenAI-assisted workflows to make silicon development as accessible and iterative as software—without licenses or lock-in.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link to="/downloads">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white shadow-lg shadow-orange-300"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download for Free
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-orange-600 text-orange-600 hover:bg-orange-50"
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`,
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  alt="Chip Design Technology"
                  className="w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated grid background */}
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
            backgroundImage: 'linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <Lightbulb className="w-16 h-16 text-orange-400 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Chip Design is Powerful — But Still Too Hard
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Despite rapid progress in software engineering, chip design remains fragmented, slow, 
              and often locked behind proprietary tools. Challenges include:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problemPoints.map((problem, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-orange-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(251, 146, 60, 0.5)',
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Zap className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                </motion.div>
                <span className="text-gray-200">{problem}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-2xl text-orange-400 italic">
              We believe silicon design should be as easy and iterative as software development—accessible to everyone.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-10 blur-3xl"
          style={{
            y: scrollY * 0.5,
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              A Modern, <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Open Platform</span> for Silicon Development
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We unify the open silicon stack and modernise workflows with GenAI and software-style pipelines:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: '1000px' }}
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all h-full backdrop-blur-sm bg-gradient-to-br from-orange-50 to-yellow-50">
                  <CardContent className="p-6">
                    <motion.div 
                      className="mb-4 text-orange-600"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl text-gray-600 italic">
              Start designing chips the modern way—download for free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-10 blur-3xl"
          style={{
            y: scrollY * 0.3,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              From Idea to Tapeout — <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Simplified</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl shadow-lg border border-orange-200"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Bot className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-gray-900 mb-2">GenAI Assistance</h3>
                    <p className="text-gray-600">Suggests flows, debugs errors, optimises designs</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl shadow-lg border border-orange-200"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <RefreshCw className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-gray-900 mb-2">CI/CD Pipelines</h3>
                    <p className="text-gray-600">Automates repetitive tasks and regression testing</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl shadow-lg border border-orange-200"
                whileHover={{ scale: 1.02, x: -10 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Open Tools & IPs</h3>
                    <p className="text-gray-600">Modular, reusable, and vendor-neutral</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl shadow-lg border border-orange-200"
                whileHover={{ scale: 1.02, x: -10 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Shield className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Reproducible Environments</h3>
                    <p className="text-gray-600">Easy onboarding and consistent results</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Who Benefits From Our Platform
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: '1000px' }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all h-full backdrop-blur-sm bg-gradient-to-br from-white to-orange-50 overflow-hidden relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-5`}
                    whileHover={{ opacity: 0.1 }}
                  />
                  <CardContent className="p-8 relative z-10">
                    <motion.div 
                      className={`mb-6 inline-block p-4 rounded-2xl bg-gradient-to-br ${useCase.gradient} text-white`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {useCase.icon}
                    </motion.div>
                    <h3 className="text-2xl text-gray-900 mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Open by Default. Pay for <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Automation and Collaboration</span>.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              All tools, PDKs, and IPs remain open. Pricing applies to AI assistance, automation, collaboration, and enterprise workflows.
            </p>
          </motion.div>

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
                  {tier.highlighted && (
                    <motion.div 
                      className="absolute top-0 right-0 bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-4 py-1 rounded-bl-lg text-sm"
                      initial={{ x: 100 }}
                      whileInView={{ x: 0 }}
                      viewport={{ once: true }}
                    >
                      Popular
                    </motion.div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-900 mb-2">{tier.name}</h3>
                      <div className="text-4xl mb-2">
                        <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                          {tier.price}
                        </span>
                      </div>
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

      {/* Download Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Download className="w-20 h-20 mx-auto text-orange-600" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Get Started With <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Open Silicon Development</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Download the platform to design chips using open-source EDA tools, open PDKs, and reusable IPs 
              with software-like, AI-assisted workflows—without licenses or vendor lock-in.
            </p>
            <Link to="/downloads">
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white shadow-xl shadow-orange-300 text-xl px-8 py-6"
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download for Free
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-yellow-600 relative overflow-hidden">
        {/* Animated Background Pattern */}
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
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Mail className="w-16 h-16 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Let's Modernise Silicon Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Reach out if you're interested in evaluating open, AI-enabled EDA workflows, building software-like pipelines for chip design, or collaborating on open PDKs, IPs, or educational programs.
            </p>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl text-xl px-8 py-6"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
