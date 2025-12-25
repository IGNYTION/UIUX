import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Download, ArrowRight, Check, Github, BookOpen, Users, Zap, Shield, Code } from 'lucide-react';
import { motion } from 'motion/react';

export function HomePage() {
  const problems = [
    'Proprietary EDA licenses slowing innovation',
    'Manual, error-prone workflows',
    'Fragmented toolchains and limited interoperability',
    'Steep learning curves and high entry barriers',
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8 text-gray-700" />,
      title: 'Open-Source EDA Tools',
      description: 'Complete synthesis, simulation, and verification suite—all free to use',
    },
    {
      icon: <Shield className="w-8 h-8 text-gray-700" />,
      title: 'Open PDKs for 180nm',
      description: 'Production-ready process design kits with full documentation',
    },
    {
      icon: <Zap className="w-8 h-8 text-gray-700" />,
      title: 'Reusable IP Library',
      description: 'Pre-verified, modular blocks with version control',
    },
    {
      icon: <Github className="w-8 h-8 text-gray-700" />,
      title: 'Python-Based Workflows',
      description: 'Scriptable flows with GenAI assistance for automation',
    },
  ];

  const workflow = [
    {
      step: '1',
      title: 'Design in RTL / Python',
      description: 'Write Verilog or use Python DSL',
    },
    {
      step: '2',
      title: 'GenAI Assistance',
      description: 'AI suggests flows, debugs, optimizes',
    },
    {
      step: '3',
      title: 'Automated CI/CD',
      description: 'Run synthesis, place & route',
    },
    {
      step: '4',
      title: 'Tapeout-Ready',
      description: 'GDS files for 180nm fabrication',
    },
  ];

  const useCases = [
    {
      title: 'Startup Tape-Outs',
      description: 'Accelerate iterations, reduce costs, and prototype faster with open tools and automated pipelines.',
    },
    {
      title: 'Enterprise Silicon Teams',
      description: 'Modernise internal workflows using software-style development and AI assistance without disrupting existing infrastructure.',
    },
    {
      title: 'Academic & Research',
      description: 'Teach practical, real-world chip design using open-source tools, PDKs, and reproducible workflows.',
    },
    {
      title: 'Open Hardware Projects',
      description: 'Collaborate globally, share IPs, and ensure designs are reproducible and modular.',
    },
  ];

  const aiFeatures = [
    'GenAI Assistance: Suggests flows, debugs errors, optimises designs',
    'CI/CD Pipelines: Automates repetitive tasks and regression testing',
    'Open Tools & IPs: Modular, reusable, and vendor-neutral',
    'Reproducible Environments: Easy onboarding and consistent results',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl mb-8 text-gray-900 tracking-tight">
              Democratise and Modernise Chip Design using Open Source
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            An Platform unifying open source EDA tools, PDKs, and Reusable Open IP Cores, Enhanced with Python-based, GenAI-assisted workflows to make silicon development as accessible and iterative as software—without licenses or lock-in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/downloads">
                <Button 
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download for Free
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              Open-source foundations • Modern workflows • GenAI-assisted • No vendor lock-in
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 text-gray-900">
              Chip Design is Powerful — But Still Too Hard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Despite rapid progress in software engineering, chip design remains fragmented, slow, 
              and often locked behind proprietary tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <p className="text-gray-700">{problem}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-gray-700 italic">
              We believe silicon design should be as easy and iterative as software development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 text-gray-900">
              A Modern, Open Platform for Silicon Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unifying the open silicon stack with Python and GenAI workflows
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 border border-gray-200 rounded-lg hover:border-orange-500 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 text-gray-900">
              From Idea to Tapeout — Simplified
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {workflow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg border border-gray-200 max-w-4xl mx-auto"
          >
            <h3 className="text-xl mb-6 text-gray-900 text-center">Platform Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 text-gray-900">
              Who Benefits From Our Platform
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-gray-200 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-xl mb-3 text-gray-900">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-10"
          >
            <Link to="/use-cases">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                View All Use Cases
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 text-gray-900">
              Open by Default. Pay for Automation and Collaboration.
            </h2>
            <p className="text-xl text-gray-600">
              All tools, PDKs, and IPs remain open. Pricing applies to AI assistance, automation, collaboration, and enterprise workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Free', price: '$0', desc: 'Open-source tools + basic workflows' },
              { name: 'Starter', price: 'Custom', desc: 'AI-assisted workflows + collaboration', popular: true },
              { name: 'Business', price: 'Custom', desc: 'Advanced automation + enterprise support' },
              { name: 'Custom', price: 'Contact', desc: 'Tailored solutions for large teams' },
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className={tier.popular ? 'border-orange-500 border-2 relative' : 'border-gray-200'}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                        Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2 text-gray-900">{tier.name}</h3>
                    <p className="text-3xl mb-2 text-gray-900">{tier.price}</p>
                    <p className="text-gray-600 text-sm mb-4">{tier.desc}</p>
                    <Link to={tier.name === 'Free' ? '/downloads' : '/contact'}>
                      <Button className={`w-full ${tier.popular ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}>
                        {tier.name === 'Free' ? 'Download' : 'Contact Us'}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/pricing" className="text-orange-500 hover:text-orange-600">
              View detailed pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-6 text-gray-900">
              Get Started With Open Silicon Development
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Download the platform to design chips using open-source EDA tools, open PDKs, and 
              reusable IPs with software-like, AI-assisted workflows—without licenses or vendor lock-in.
            </p>
            <Link to="/downloads">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                <Download className="w-5 h-5 mr-2" />
                Download for Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-6 text-gray-900">
              Let's Modernise Silicon Together
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Reach out if you're interested in:
            </p>
            <div className="max-w-2xl mx-auto mb-8">
              <div className="grid grid-cols-1 gap-4 text-left">
                {[
                  'Evaluating open, AI-enabled EDA workflows',
                  'Building software-like pipelines for chip design',
                  'Collaborating on open PDKs, IPs, or educational programs',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Trust Strip */}
      <section className="bg-white py-12 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Github className="w-8 h-8 mx-auto mb-3 text-gray-700" />
              <h3 className="text-lg mb-2 text-gray-900">Open Source</h3>
              <p className="text-gray-600 text-sm">Open-source EDA • Open PDKs</p>
            </div>
            <div>
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-gray-700" />
              <h3 className="text-lg mb-2 text-gray-900">Reusable IPs</h3>
              <p className="text-gray-600 text-sm">Modular, verified components</p>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-3 text-gray-700" />
              <h3 className="text-lg mb-2 text-gray-900">GenAI Workflows</h3>
              <p className="text-gray-600 text-sm">Software-like pipelines</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
