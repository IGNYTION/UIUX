import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Mail, MessageSquare, Phone, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Us',
      description: 'General inquiries and support',
      contact: 'hello@ignytion.io',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Quick questions and immediate help',
      contact: 'Available 9am-5pm EST',
      gradient: 'from-yellow-500 to-orange-400',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Call Us',
      description: 'Speak with our sales team',
      contact: '+1 (555) 123-4567',
      gradient: 'from-orange-400 to-yellow-600',
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Silicon Valley Blvd, Suite 100',
      country: 'USA',
    },
    {
      city: 'London',
      address: '456 Tech Street, Floor 5',
      country: 'UK',
    },
    {
      city: 'Bangalore',
      address: '789 Innovation Park, Tower B',
      country: 'India',
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: 'GitHub', url: '#' },
    { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', url: '#' },
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', url: '#' },
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
            rotate: [0, 180, 0],
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
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Mail className="w-20 h-20 text-orange-600 mx-auto" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Let's Modernise <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">Silicon Together</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Reach out if you're interested in evaluating open, AI-enabled EDA workflows, building software-like 
              pipelines for chip design, or collaborating on open PDKs, IPs, or educational programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all backdrop-blur-sm bg-gradient-to-br from-white to-orange-50">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className={`mb-6 inline-block p-4 rounded-2xl bg-gradient-to-br ${method.gradient} text-white`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {method.icon}
                    </motion.div>
                    <h3 className="text-2xl text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <p className="text-orange-600">{method.contact}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl text-gray-900 mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Email *</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Company</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Subject *</label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What can we help you with?"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Message *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your project or inquiry..."
                        className="w-full min-h-[150px]"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white shadow-lg"
                        size="lg"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">Our Offices</h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <motion.div
                      key={index}
                      className="backdrop-blur-sm bg-white/80 p-6 rounded-xl shadow-lg border border-orange-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl text-gray-900 mb-1">{office.city}</h3>
                          <p className="text-gray-600">{office.address}</p>
                          <p className="text-gray-500 text-sm mt-1">{office.country}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                className="backdrop-blur-sm bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-xl border border-orange-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl text-gray-900 mb-2">Need immediate assistance?</h3>
                <p className="text-gray-700 mb-4">
                  Check out our documentation or join our community forum for quick answers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50"
                  >
                    Documentation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50"
                  >
                    Community Forum
                  </Button>
                </div>
              </motion.div>
            </motion.div>
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
              Join the Open Silicon Revolution
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start designing chips the modern way with our free platform
            </p>
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl text-xl px-8 py-6"
              >
                Download for Free
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
