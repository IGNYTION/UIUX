import { Card, CardContent } from './ui/card';
import { Book, Code, Cpu, Terminal, Video, FileText, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: <Book className="w-8 h-8 text-gray-700" />,
      title: 'Getting Started',
      description: 'Installation and first project',
      links: [
        'Installation Guide',
        'First Chip Tutorial',
        'Platform Overview',
        'System Requirements',
      ],
    },
    {
      icon: <Code className="w-8 h-8 text-gray-700" />,
      title: 'EDA Tools',
      description: 'Synthesis and verification',
      links: [
        'Yosys Synthesis',
        'Verilator Simulation',
        'Timing Analysis',
        'Verification Guide',
      ],
    },
    {
      icon: <Cpu className="w-8 h-8 text-gray-700" />,
      title: '180nm PDK',
      description: 'Process design kit details',
      links: [
        'PDK Overview',
        'Standard Cells',
        'Design Rules',
        'I/O Pads',
      ],
    },
    {
      icon: <Terminal className="w-8 h-8 text-gray-700" />,
      title: 'Python Workflows',
      description: 'Automation and scripting',
      links: [
        'Python DSL Guide',
        'GenAI Integration',
        'CI/CD Setup',
        'API Reference',
      ],
    },
  ];

  const guides = [
    {
      title: 'Your First 180nm Chip',
      description: 'Complete RTL-to-GDS tutorial',
      time: '30 min',
      level: 'Beginner',
    },
    {
      title: 'Python-Based Design',
      description: 'Using Python DSL for hardware',
      time: '20 min',
      level: 'Intermediate',
    },
    {
      title: 'GenAI Workflows',
      description: 'AI-assisted optimization',
      time: '25 min',
      level: 'Advanced',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl mb-6 text-gray-900">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to design chips using our platform
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-8">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl mb-2 text-gray-900">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="space-y-2">
                    {category.links.map((link, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block text-orange-500 hover:text-orange-600 text-sm"
                      >
                        → {link}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">
            Popular Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      guide.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      guide.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {guide.level}
                    </span>
                    <span className="text-sm text-gray-500">{guide.time}</span>
                  </div>
                  <h3 className="text-lg mb-2 text-gray-900">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">
            Additional Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <Video className="w-8 h-8 mx-auto mb-4 text-gray-700" />
              <h3 className="text-lg mb-2 text-gray-900">Video Tutorials</h3>
              <p className="text-gray-600 mb-2">Step-by-step guides</p>
              <p className="text-sm text-gray-500">30+ videos</p>
            </div>

            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <FileText className="w-8 h-8 mx-auto mb-4 text-gray-700" />
              <h3 className="text-lg mb-2 text-gray-900">Case Studies</h3>
              <p className="text-gray-600 mb-2">Real implementations</p>
              <p className="text-sm text-gray-500">15+ case studies</p>
            </div>

            <div className="text-center p-8 border border-gray-200 rounded-lg">
              <Book className="w-8 h-8 mx-auto mb-4 text-gray-700" />
              <h3 className="text-lg mb-2 text-gray-900">API Reference</h3>
              <p className="text-gray-600 mb-2">Complete documentation</p>
              <p className="text-sm text-gray-500">Full reference</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 text-gray-900">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Download the platform and follow our getting started guide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/downloads">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Download Platform
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Get Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
