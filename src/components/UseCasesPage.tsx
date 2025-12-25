import { Card, CardContent } from './ui/card';
import { Rocket, Building2, GraduationCap, Globe, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export function UseCasesPage() {
  const useCases = [
    {
      icon: <Rocket className="w-12 h-12 text-gray-700" />,
      title: 'Startup Tape-Outs',
      description: 'Accelerate iterations, reduce costs, and prototype faster with open tools and automated pipelines',
      benefits: [
        'Zero licensing costs',
        'Rapid prototyping cycles',
        'Access to 180nm PDK',
        'Community support',
        'Python automation',
      ],
      example: 'TechStartup Inc. reduced time-to-tapeout by 40% using our platform',
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-gray-700" />,
      title: 'Academic Research',
      description: 'Teach practical, real-world chip design using open-source tools and reproducible workflows',
      benefits: [
        'Free for education',
        'Learning materials included',
        'Real-world experience',
        'Publication-ready results',
        'Reproducible environments',
      ],
      example: 'University research labs published 15+ papers using the platform',
    },
    {
      icon: <Globe className="w-12 h-12 text-gray-700" />,
      title: 'Open Hardware Projects',
      description: 'Collaborate globally, share IPs, and ensure designs are reproducible and modular',
      benefits: [
        'Global collaboration',
        'Version-controlled IPs',
        'Transparent processes',
        'Community-driven',
        'Cross-platform compatible',
      ],
      example: 'Open Hardware Initiative built 200+ reusable IP blocks',
    },
    {
      icon: <Building2 className="w-12 h-12 text-gray-700" />,
      title: 'Enterprise Teams',
      description: 'Modernize internal workflows using Python-based development and AI assistance',
      benefits: [
        'Integrate with existing tools',
        'AI-assisted debugging',
        'Automated CI/CD',
        'Team collaboration',
        'Reproducible builds',
      ],
      example: 'Global Semiconductor Corp. improved productivity by 60%',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl mb-6 text-gray-900">
            Who Benefits From Our Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to enterprises, from academia to open-source communities—our platform 
            empowers silicon development for everyone
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {useCases.map((useCase, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-6">{useCase.icon}</div>
                <h2 className="text-3xl mb-4 text-gray-900">{useCase.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{useCase.description}</p>
                
                <div className="space-y-3 mb-6">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                  <p className="text-sm text-gray-600 mb-1">Case Study</p>
                  <p className="text-gray-900">{useCase.example}</p>
                </div>

                <Link to="/contact">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <Card className="border-gray-200">
                  <CardContent className="p-8">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Diagram / Illustration</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 text-gray-900">
            Find Your Use Case
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            No matter your organization's size or goals, our platform adapts to your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/downloads">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Start Building
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
