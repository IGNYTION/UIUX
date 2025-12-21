import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Code, Cpu, GitBranch, Bot, RefreshCw, Shield, Zap, CheckCircle, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export function PlatformPage() {
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

  const platformFeatures = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Open-source EDA Tools',
      description: 'Complete suite of synthesis, simulation, P&R, and verification tools—all free to use',
      details: [
        'RTL synthesis and optimization',
        'Timing and power analysis',
        'Physical design and layout',
        'Verification and validation',
      ],
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Open PDKs',
      description: 'Versioned, foundry-aligned process design kits that are easy to integrate',
      details: [
        'Multiple foundry support',
        'Version control and tracking',
        'Easy integration with tools',
        'Community contributions',
      ],
    },
    {
      icon: <GitBranch className="w-12 h-12" />,
      title: 'Reusable IPs',
      description: 'Modular intellectual property blocks with full traceability and version control',
      details: [
        'Pre-verified IP blocks',
        'Modular architecture',
        'Full documentation',
        'Version management',
      ],
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'GenAI-Assisted Workflows',
      description: 'Accelerate design, debugging, and optimization with AI assistance',
      details: [
        'Intelligent code suggestions',
        'Automated error detection',
        'Design optimization',
        'Documentation generation',
      ],
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: 'CI/CD Pipelines',
      description: 'Automated, repeatable RTL-to-GDS flows with continuous integration',
      details: [
        'Automated testing',
        'Regression detection',
        'Build automation',
        'Deployment pipelines',
      ],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Reproducible Environments',
      description: 'Versioned toolchains and one-click setup for consistent results',
      details: [
        'Docker containers',
        'Environment snapshots',
        'Easy onboarding',
        'Consistent builds',
      ],
    },
  ];

  const technicalSpecs = [
    { label: 'Supported Process Nodes', value: '180nm - 7nm' },
    { label: 'Design Languages', value: 'Verilog, VHDL, SystemVerilog' },
    { label: 'Simulation Engines', value: 'Verilator, Icarus, GHDL' },
    { label: 'Synthesis Tools', value: 'Yosys, ABC' },
    { label: 'Place & Route', value: 'OpenROAD, Magic' },
    { label: 'Supported OS', value: 'Linux, macOS, Windows (WSL)' },
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

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-20 h-20 text-orange-600 mx-auto" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl mb-6">
              The <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Open Silicon</span> Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive, modern platform for chip design that unifies open-source EDA tools, 
              PDKs, and reusable IPs with GenAI-assisted workflows.
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              alt="Platform Overview"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Platform Features */}
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
            <h2 className="text-4xl md:text-5xl mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for modern chip design, from RTL to GDS
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: '1000px' }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all backdrop-blur-sm bg-gradient-to-br from-white to-orange-50">
                  <CardContent className="p-8">
                    <motion.div
                      className="mb-6 text-orange-600 inline-block"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
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
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-standard support and compatibility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-sm bg-white/80 p-6 rounded-xl shadow-lg border border-orange-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, borderColor: 'rgb(251, 146, 60)' }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{spec.label}</p>
                    <p className="text-gray-900">{spec.value}</p>
                  </div>
                  <Zap className="w-5 h-5 text-orange-600" />
                </div>
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
              Ready to Start Building?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Download the platform today and experience the future of open silicon development
            </p>
            <Link to="/downloads">
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl text-xl px-8 py-6"
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download for Free
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
