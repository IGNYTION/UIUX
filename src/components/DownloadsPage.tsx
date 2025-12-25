import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Download, Check, FileText, Terminal, BookOpen } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function DownloadsPage() {
  const [selectedOS, setSelectedOS] = useState('linux');

  const handleDownload = (platform: string, version: string) => {
    toast.success(`Downloading Ignytion ${version} for ${platform}...`);
  };

  const versions = [
    {
      version: '1.0.0',
      releaseDate: '2025-01-15',
      type: 'Latest Stable',
      recommended: true,
      features: [
        'Complete 180nm PDK',
        'All open-source EDA tools',
        'Python workflow support',
        'GenAI assistance',
        'Standard cell library',
      ],
      platforms: [
        { name: 'Linux', id: 'linux', size: '450 MB' },
        { name: 'macOS', id: 'macos', size: '445 MB' },
      ],
    },
  ];

  const requirements = [
    'Linux (Ubuntu 20.04+, Fedora 34+) or macOS 11+',
    '8 GB RAM minimum (16 GB recommended)',
    '10 GB free disk space',
    'Python 3.8 or higher',
    'Git installed',
  ];

  const quickStart = [
    'Download and extract the archive',
    'Run the installation script',
    'Follow the getting started guide',
    'Create your first chip design',
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl mb-6 text-gray-900">
            Download Ignytion
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with open-source chip design for 180nm. All tools, PDKs, and libraries 
            included—completely free.
          </p>
        </div>
      </section>

      {/* Main Download */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {versions.map((release, index) => (
            <Card key={index} className={`${release.recommended ? 'border-orange-500 border-2' : 'border-gray-200'} mb-8`}>
              {release.recommended && (
                <div className="bg-orange-500 text-white px-6 py-2 rounded-t-lg">
                  <p className="text-sm">Recommended Release</p>
                </div>
              )}
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h2 className="text-3xl mb-2 text-gray-900">Version {release.version}</h2>
                    <p className="text-gray-600">
                      Released {new Date(release.releaseDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                      {release.type}
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg mb-4 text-gray-900">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {release.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg text-gray-900">Select Platform</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {release.platforms.map((platform) => (
                      <div
                        key={platform.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                          selectedOS === platform.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedOS(platform.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg text-gray-900">{platform.name}</h4>
                            <p className="text-sm text-gray-600">{platform.size}</p>
                          </div>
                          {selectedOS === platform.id && (
                            <Check className="w-6 h-6 text-orange-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => handleDownload(selectedOS, release.version)}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download for {release.platforms.find(p => p.id === selectedOS)?.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* System Requirements */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <Terminal className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="text-xl mb-4 text-gray-900">System Requirements</h3>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-8">
                <BookOpen className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="text-xl mb-4 text-gray-900">Quick Start</h3>
                <ol className="space-y-3">
                  {quickStart.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 mt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 text-gray-900 text-center">
            Installation
          </h2>

          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-lg mb-4 text-gray-900">Linux / macOS</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4 overflow-x-auto">
                <p># Extract the archive</p>
                <p>tar -xzf ignytion-1.0.0-linux.tar.gz</p>
                <p className="mt-2"># Run installer</p>
                <p>cd ignytion-1.0.0</p>
                <p>./install.sh</p>
                <p className="mt-2"># Verify installation</p>
                <p>ignytion --version</p>
              </div>
              <p className="text-gray-600">
                For detailed installation instructions, see our{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600">
                  installation guide
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">
            Next Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200 rounded-lg bg-white">
              <BookOpen className="w-8 h-8 mx-auto mb-4 text-gray-700" />
              <h3 className="text-lg mb-2 text-gray-900">Documentation</h3>
              <p className="text-gray-600 mb-4">Complete guides and tutorials</p>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Read Docs
              </Button>
            </div>

            <div className="text-center p-8 border border-gray-200 rounded-lg bg-white">
              <FileText className="w-8 h-8 mx-auto mb-4 text-gray-700" />
              <h3 className="text-lg mb-2 text-gray-900">Release Notes</h3>
              <p className="text-gray-600 mb-4">See what's new</p>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                View Changes
              </Button>
            </div>

            <div className="text-center p-8 border border-gray-200 rounded-lg bg-white">
              <Terminal className="w-8 h-8 mx-auto mb-4 text-gray-700" />
              <h3 className="text-lg mb-2 text-gray-900">Get Help</h3>
              <p className="text-gray-600 mb-4">Community support</p>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Ask Question
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* License */}
      <section className="bg-white py-16 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl mb-4 text-gray-900">Open Source License</h3>
          <p className="text-gray-600">
            Ignytion is licensed under the Apache 2.0 license. Free to use for commercial and 
            non-commercial purposes. See{' '}
            <a href="#" className="text-orange-500 hover:text-orange-600">
              license details
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
