import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Target, Users, Lightbulb, Award, Mail, MapPin, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible in semiconductor software.',
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to helping you achieve your goals.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      title: 'Continuous Learning',
      description: 'We stay ahead of industry trends to deliver cutting-edge solutions.',
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every aspect of our products.',
    },
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
    { name: 'Michael Chen', role: 'CTO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
    { name: 'Emily Rodriguez', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
    { name: 'David Kim', role: 'Lead Engineer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
  ];

  const stats = [
    { value: '2019', label: 'Founded' },
    { value: '50+', label: 'Team Members' },
    { value: '10K+', label: 'Customers' },
    { value: '50+', label: 'Countries' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About
                <span className="block bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  IGNYTION
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                We're on a mission to revolutionize semiconductor software solutions, 
                empowering engineers and businesses to innovate faster and more efficiently.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2019, IGNYTION has grown from a small startup to a trusted 
                partner for semiconductor companies worldwide. Our team of experts combines 
                deep industry knowledge with cutting-edge technology to deliver solutions 
                that make a real difference.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white"
              >
                Join Our Team
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to driving innovation in semiconductor software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <Mail className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">contact@ignytion.com</p>
                <p className="text-gray-600">support@ignytion.com</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Phone className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600 text-sm">Mon-Fri, 9AM-6PM PST</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600">123 Innovation Drive</p>
                <p className="text-gray-600">Silicon Valley, CA 94025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of semiconductor professionals using IGNYTION.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              Download Free
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
