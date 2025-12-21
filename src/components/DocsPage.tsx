import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Book, Download, Code, Cpu, GitBranch, Terminal, FileText, Video, Users, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function DocsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

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

  const docCategories = [
    {
      icon: <Book className="w-12 h-12" />,
      title: 'Getting Started',
      description: 'Quick start guides and installation instructions',
      gradient: 'from-orange-500 to-yellow-500',
      links: [
        'Installation Guide',
        'First Project Tutorial',
        'Platform Overview',
        'System Requirements',
      ],
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'EDA Tools',
      description: 'Documentation for synthesis, simulation, and verification',
      gradient: 'from-yellow-500 to-orange-400',
      links: [
        'Synthesis with Yosys',
        'Simulation Guide',
        'Timing Analysis',
        'Verification Flows',
      ],
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'PDKs & Libraries',
      description: 'Process design kits and standard cell libraries',
      gradient: 'from-orange-400 to-yellow-600',
      links: [
        'SkyWater 130nm PDK',
        'Standard Cell Libraries',
        'IP Block Catalog',
        'Custom PDK Setup',
      ],
    },
    {
      icon: <GitBranch className="w-12 h-12" />,
      title: 'Workflows',
      description: 'RTL-to-GDS flows and automation pipelines',
      gradient: 'from-yellow-600 to-orange-500',
      links: [
        'RTL-to-GDS Flow',
        'CI/CD Integration',
        'Automated Testing',
        'Design Validation',
      ],
    },
    {
      icon: <Terminal className="w-12 h-12" />,
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      gradient: 'from-orange-500 to-yellow-500',
      links: [
        'REST API',
        'Python SDK',
        'CLI Commands',
        'Plugin Development',
      ],
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Best Practices',
      description: 'Design patterns and optimization techniques',
      gradient: 'from-yellow-500 to-orange-400',
      links: [
        'Design Guidelines',
        'Performance Optimization',
        'Debugging Tips',
        'Security Best Practices',
      ],
    },
  ];

  const resources = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      count: '50+ videos',
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Case Studies',
      description: 'Real-world implementation examples',
      count: '20+ case studies',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Forum',
      description: 'Get help from the community',
      count: '10K+ members',
    },
  ];

  const popularGuides = [
    {
      title: 'Your First Chip Design',
      description: 'Complete tutorial from RTL to tapeout',
      time: '45 min read',
      difficulty: 'Beginner',
    },
    {
      title: 'GenAI-Assisted Workflows',
      description: 'Leveraging AI for design optimization',
      time: '30 min read',
      difficulty: 'Intermediate',
    },
    {
      title: 'Advanced Place & Route',
      description: 'Optimization techniques for complex designs',
      time: '60 min read',
      difficulty: 'Advanced',
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
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Book className="w-20 h-20 text-orange-600 mx-auto" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Documentation & <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Everything you need to design chips using our open-source platform
            </p>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-6 text-lg rounded-full border-2 border-orange-200 focus:border-orange-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
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
            <h2 className="text-4xl mb-4">
              Browse by Category
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
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
                      className={`mb-6 inline-block p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-2xl text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <div className="space-y-2">
                      {category.links.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href="#"
                          className="block text-orange-600 hover:text-orange-700 hover:underline"
                          whileHover={{ x: 10 }}
                        >
                          → {link}
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4">
              Popular Guides
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularGuides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all backdrop-blur-sm bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {guide.difficulty}
                      </span>
                      <span className="text-sm text-gray-500">{guide.time}</span>
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{guide.description}</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full border-orange-600 text-orange-600 hover:bg-orange-50"
                      >
                        Read Guide
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4">
              Additional Resources
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all backdrop-blur-sm bg-gradient-to-br from-orange-50 to-yellow-50">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="mb-6 inline-block text-orange-600"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {resource.icon}
                    </motion.div>
                    <h3 className="text-2xl text-gray-900 mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <p className="text-orange-600">{resource.count}</p>
                  </CardContent>
                </Card>
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
              Download the platform and follow our getting started guide
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
                    <Download className="w-5 h-5 mr-2" />
                    Download Platform
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
                    Get Support
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
