import { Card, CardContent } from './ui/card';
import { Mail, MessageSquare, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8 text-gray-700" />,
      title: 'Email',
      description: 'General inquiries',
      contact: 'hello@ignytion.io',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-gray-700" />,
      title: 'Forum',
      description: 'Community support',
      contact: 'community.ignytion.io',
    },
    {
      icon: <Github className="w-8 h-8 text-gray-700" />,
      title: 'GitHub',
      description: 'Open source',
      contact: 'github.com/ignytion',
    },
  ];

  const offices = [
    {
      city: 'Bangalore',
      address: 'Indiranagar',
      country: 'India',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl mb-6 text-gray-900">
            Let's Modernise Silicon Together
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out if you're interested in evaluating open, AI-enabled EDA workflows or 
            collaborating on open PDKs and educational programs
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center p-8 border border-gray-200 rounded-lg">
                <div className="mb-4 flex justify-center">{method.icon}</div>
                <h3 className="text-lg mb-2 text-gray-900">{method.title}</h3>
                <p className="text-gray-600 mb-2">{method.description}</p>
                <p className="text-sm text-orange-500">{method.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-2xl mb-6 text-gray-900">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Company</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company"
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Subject *</label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What can we help with?"
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Message *</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more..."
                      className="border-gray-300 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-6 text-gray-900">Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg text-gray-900">{office.city}</h4>
                          <p className="text-gray-600 text-sm">{office.address}</p>
                          <p className="text-gray-500 text-sm">{office.country}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg mb-4 text-gray-900">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg mb-2 text-gray-900">Need immediate help?</h3>
                <p className="text-gray-700 mb-4">
                  Check our documentation or join the community forum
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    Documentation
                  </Button>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    Community Forum
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 text-gray-900">
            Join the Open Silicon Revolution
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start designing chips the modern way with our free platform
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Download for Free
          </Button>
        </div>
      </section>
    </div>
  );
}
