import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { BookOpen, Video, FileText, Code, Search, ArrowRight, Download } from 'lucide-react';

export function ResourcesPage() {
  const categories = [
    {
      icon: <BookOpen className="w-8 h-8 text-orange-600" />,
      title: 'Documentation',
      description: 'Complete guides and API references',
      count: '150+ Articles',
    },
    {
      icon: <Video className="w-8 h-8 text-orange-600" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      count: '45+ Videos',
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      title: 'Case Studies',
      description: 'Real-world success stories',
      count: '20+ Stories',
    },
    {
      icon: <Code className="w-8 h-8 text-orange-600" />,
      title: 'Code Examples',
      description: 'Sample projects and snippets',
      count: '100+ Examples',
    },
  ];

  const popularDocs = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics and set up your first project',
      category: 'Beginner',
      readTime: '10 min read',
    },
    {
      title: 'Advanced Simulation Techniques',
      description: 'Master complex simulation scenarios',
      category: 'Advanced',
      readTime: '25 min read',
    },
    {
      title: 'API Integration Guide',
      description: 'Connect IGNYTION with your existing tools',
      category: 'Integration',
      readTime: '15 min read',
    },
    {
      title: 'Performance Optimization',
      description: 'Tips to maximize speed and efficiency',
      category: 'Performance',
      readTime: '20 min read',
    },
    {
      title: 'Security Best Practices',
      description: 'Keep your projects secure and compliant',
      category: 'Security',
      readTime: '12 min read',
    },
    {
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to frequently encountered problems',
      category: 'Support',
      readTime: '8 min read',
    },
  ];

  const tutorials = [
    {
      title: 'Introduction to IGNYTION',
      duration: '12:45',
      level: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    },
    {
      title: 'Building Your First Chip Design',
      duration: '28:30',
      level: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
    },
    {
      title: 'Advanced Process Automation',
      duration: '35:15',
      level: 'Advanced',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    },
  ];

  const downloads = [
    {
      title: 'IGNYTION Quick Reference Guide',
      type: 'PDF',
      size: '2.5 MB',
    },
    {
      title: 'API Documentation',
      type: 'PDF',
      size: '5.8 MB',
    },
    {
      title: 'Sample Projects Pack',
      type: 'ZIP',
      size: '45 MB',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learning
            <span className="block bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to master IGNYTION, from beginner guides to advanced tutorials.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search documentation, tutorials, and guides..."
              className="pl-12 py-6 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <Badge variant="outline" className="text-orange-600">
                    {category.count}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Documentation
            </h2>
            <Button variant="ghost" className="text-orange-600">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{doc.category}</Badge>
                    <span className="text-sm text-gray-500">{doc.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-orange-600 p-0">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Video Tutorials
            </h2>
            <Button variant="ghost" className="text-orange-600">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-orange-600 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-black bg-opacity-70 text-white">
                    {tutorial.duration}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{tutorial.level}</Badge>
                  <h3 className="font-semibold text-gray-900">{tutorial.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Downloadable Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloads.map((download, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="w-10 h-10 text-orange-600" />
                    <div className="text-right">
                      <Badge variant="outline">{download.type}</Badge>
                      <p className="text-sm text-gray-500 mt-1">{download.size}</p>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {download.title}
                  </h3>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is here to help you find the answers you need.
          </p>
          <Button 
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100"
          >
            Contact Support
          </Button>
        </div>
      </section>
    </div>
  );
}
