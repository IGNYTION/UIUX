import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Download, Calendar, FileText, CheckCircle, Apple, Monitor, Smartphone } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'framer-motion';

export function DownloadsPage() {
  const [selectedOS, setSelectedOS] = useState('windows');
  const [hoveredVersion, setHoveredVersion] = useState<number | null>(null);

  const versions = [
    {
      version: '3.2.0',
      releaseDate: '2025-11-15',
      type: 'Latest Stable',
      badge: 'Recommended',
      badgeColor: 'bg-green-500',
      features: [
        'Enhanced AI-powered defect detection',
        'Improved performance (40% faster)',
        'New collaboration features',
        'Bug fixes and stability improvements',
      ],
      downloads: {
        windows: { size: '245 MB', url: '#' },
        macos: { size: '238 MB', url: '#' },
        linux: { size: '251 MB', url: '#' },
      },
    },
    {
      version: '3.1.5',
      releaseDate: '2025-10-20',
      type: 'Stable',
      features: [
        'Security updates',
        'Minor bug fixes',
        'Performance optimizations',
      ],
      downloads: {
        windows: { size: '242 MB', url: '#' },
        macos: { size: '235 MB', url: '#' },
        linux: { size: '248 MB', url: '#' },
      },
    },
    {
      version: '3.0.0',
      releaseDate: '2025-09-01',
      type: 'Major Release',
      features: [
        'Complete UI redesign',
        'New simulation engine',
        'Advanced analytics dashboard',
        'Cross-platform improvements',
      ],
      downloads: {
        windows: { size: '240 MB', url: '#' },
        macos: { size: '233 MB', url: '#' },
        linux: { size: '246 MB', url: '#' },
      },
    },
  ];

  const systemRequirements = {
    windows: {
      minimum: [
        'Windows 10 (64-bit) or later',
        'Intel Core i5 or equivalent',
        '8 GB RAM',
        '2 GB available disk space',
        'DirectX 11 compatible graphics',
      ],
      recommended: [
        'Windows 11 (64-bit)',
        'Intel Core i7 or equivalent',
        '16 GB RAM',
        '5 GB available disk space',
        'Dedicated GPU with 4GB VRAM',
      ],
    },
    macos: {
      minimum: [
        'macOS 12 Monterey or later',
        'Apple M1 or Intel Core i5',
        '8 GB RAM',
        '2 GB available disk space',
        'Metal-compatible graphics',
      ],
      recommended: [
        'macOS 14 Sonoma or later',
        'Apple M2 or M3',
        '16 GB RAM',
        '5 GB available disk space',
        'Apple Silicon GPU',
      ],
    },
    linux: {
      minimum: [
        'Ubuntu 20.04 LTS or equivalent',
        'Intel Core i5 or equivalent',
        '8 GB RAM',
        '2 GB available disk space',
        'OpenGL 3.3 compatible graphics',
      ],
      recommended: [
        'Ubuntu 22.04 LTS or later',
        'Intel Core i7 or AMD Ryzen 7',
        '16 GB RAM',
        '5 GB available disk space',
        'Dedicated GPU with 4GB VRAM',
      ],
    },
  };

  const handleDownload = (version: string, os: string) => {
    toast.success(`Downloading IGNYTION ${version} for ${os}`);
  };

  const getOSIcon = (os: string) => {
    switch (os) {
      case 'windows':
        return <Monitor className="w-5 h-5" />;
      case 'macos':
        return <Apple className="w-5 h-5" />;
      case 'linux':
        return <Smartphone className="w-5 h-5" />;
      default:
        return <Download className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            Download
            <motion.span 
              className="block bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              IGNYTION
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Get the latest version of IGNYTION for your platform. Free for individual use, 
            with enterprise options available.
          </motion.p>
        </div>
      </section>

      {/* Platform Selector */}
      <section className="py-12 px-4 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['windows', 'macos', 'linux'].map((os, index) => (
              <motion.button
                key={os}
                onClick={() => setSelectedOS(os)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  selectedOS === os
                    ? 'border-orange-600 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-300'
                }`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 10px 30px rgba(251, 146, 60, 0.2)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="flex items-center justify-center space-x-3"
                  animate={{
                    rotateY: selectedOS === os ? [0, 360] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {getOSIcon(os)}
                  <span className="font-semibold text-gray-900 capitalize">{os}</span>
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Versions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Available Versions
          </motion.h2>
          
          <div className="space-y-6">
            {versions.map((version, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredVersion(index)}
                onHoverEnd={() => setHoveredVersion(null)}
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 50px rgba(251, 146, 60, 0.2)',
                  }}
                >
                  <Card className="overflow-hidden relative">
                    {/* Animated background on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-100 via-yellow-100 to-orange-100 opacity-0"
                      animate={{
                        opacity: hoveredVersion === index ? 0.3 : 0,
                        backgroundPosition: hoveredVersion === index ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
                      }}
                      transition={{ duration: 2 }}
                    />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <motion.div
                              animate={{
                                scale: hoveredVersion === index ? 1.1 : 1,
                              }}
                            >
                              <CardTitle className="text-2xl">Version {version.version}</CardTitle>
                            </motion.div>
                            {version.badge && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                              >
                                <Badge className={`${version.badgeColor} text-white`}>
                                  {version.badge}
                                </Badge>
                              </motion.div>
                            )}
                            <Badge variant="outline">{version.type}</Badge>
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Released on {new Date(version.releaseDate).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </CardDescription>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            size="lg"
                            onClick={() => handleDownload(version.version, selectedOS)}
                            className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white shadow-lg shadow-orange-300"
                          >
                            <Download className="w-5 h-5 mr-2" />
                            Download ({version.downloads[selectedOS as keyof typeof version.downloads].size})
                          </Button>
                        </motion.div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">What's New:</h4>
                          <ul className="space-y-2">
                            {version.features.map((feature, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-start space-x-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ x: 10 }}
                              >
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                          <motion.div whileHover={{ scale: 1.05 }}>
                            <Button variant="ghost" size="sm">
                              <FileText className="w-4 h-4 mr-2" />
                              Release Notes
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }}>
                            <Button variant="ghost" size="sm">
                              View Changelog
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">System Requirements</h2>
          
          <Tabs defaultValue="windows" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
              <TabsTrigger value="windows">Windows</TabsTrigger>
              <TabsTrigger value="macos">macOS</TabsTrigger>
              <TabsTrigger value="linux">Linux</TabsTrigger>
            </TabsList>
            
            {Object.entries(systemRequirements).map(([os, requirements]) => (
              <TabsContent key={os} value={os}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Minimum Requirements</CardTitle>
                      <CardDescription>
                        Basic requirements to run IGNYTION
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {requirements.minimum.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Recommended Requirements</CardTitle>
                      <CardDescription>
                        For optimal performance and experience
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {requirements.recommended.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Need Help Installing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Check our installation guides and documentation for step-by-step instructions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}