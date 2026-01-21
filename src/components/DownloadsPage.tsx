import { useMemo, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import {
  Download,
  Check,
  FileText,
  Terminal,
  BookOpen,
  Lock,
  Monitor,
  Laptop,
  Apple,
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

type PlatformId = 'windows' | 'linux' | 'macos';

export function DownloadsPage() {
  const [selectedOS, setSelectedOS] = useState<PlatformId>('linux');

  const handleDownloadCLI = (platform: string, version: string) => {
    toast.success(`Downloading Ignytion CLI ${version} for ${platform}...`);
  };

  const handleDownloadGUI = () => {
    toast.info('GUI download is coming soon. CLI is available now.');
  };

  const releases = useMemo(
    () => [
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
          { name: 'Windows', id: 'windows' as PlatformId, size: '520 MB', icon: Laptop },
          { name: 'Linux', id: 'linux' as PlatformId, size: '450 MB', icon: Terminal },
          { name: 'macOS', id: 'macos' as PlatformId, size: '445 MB', icon: Apple },
        ],
      },
    ],
    []
  );

  const requirements = [
    'Windows 10/11, Linux (Ubuntu 20.04+, Fedora 34+) or macOS 11+',
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
          <h1 className="text-5xl mb-6 text-gray-900">Download Ignytion</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with open-source chip design for 180nm. All tools, PDKs, and libraries
            included—completely free.
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {releases.map((release, index) => {
            const selectedPlatform = release.platforms.find((p) => p.id === selectedOS);

            return (
              <Card key={index} className="border border-gray-200 mb-10 shadow-sm">
                {/* subtle top row instead of highlighted box */}
                <div className="px-8 pt-8 pb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-3xl text-gray-900">Version {release.version}</h2>
                    <p className="text-gray-600 mt-1">
                      Released{' '}
                      {new Date(release.releaseDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                        {release.type}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                      <span className="inline-flex h-2 w-2 rounded-full bg-orange-500" />
                      Recommended
                    </span>
                  </div>
                </div>

                <CardContent className="px-8 pb-8">
                  {/* Included */}
                  <div className="mt-6 mb-10">
                    <h3 className="text-lg mb-4 text-gray-900">What&apos;s Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {release.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product split */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                    {/* Lite (CLI) */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <Terminal className="w-5 h-5 text-gray-800" />
                            <h3 className="text-lg font-semibold text-gray-900">Ignytion Lite</h3>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">
                              CLI
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            Lightweight distribution for engineers. Full toolchain + workflows via command line.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 space-y-2 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span>Installer + CLI binary</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span>Same PDKs, tools, and libraries</span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button
                          size="lg"
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                          onClick={() =>
                            handleDownloadCLI(selectedPlatform?.name ?? selectedOS, release.version)
                          }
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Download CLI
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">
                          {selectedPlatform?.name} • {selectedPlatform?.size}
                        </p>
                      </div>
                    </div>

                    {/* GUI */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <Monitor className="w-5 h-5 text-gray-800" />
                            <h3 className="text-lg font-semibold text-gray-900">Ignytion Studio</h3>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700">
                              GUI
                            </span>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full border border-gray-200 bg-gray-100 text-gray-600">
                              Coming soon
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            A visual desktop experience for projects, flows, and tool orchestration. Not released yet.
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 space-y-2 text-sm text-gray-700 opacity-90">
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-gray-600" />
                          <span>GUI package will be enabled later</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-gray-600" />
                          <span>Sign up for updates (coming soon)</span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full border-gray-300 text-gray-700"
                          disabled
                          onClick={handleDownloadGUI}
                          title="GUI download is coming soon"
                        >
                          <Lock className="w-5 h-5 mr-2" />
                          Download GUI
                        </Button>
                        <p className="text-xs text-gray-500 mt-2">Available soon on Windows / macOS / Linux</p>
                      </div>
                    </div>
                  </div>

                  {/* Platform selector */}
                  <div>
                    <h3 className="text-lg text-gray-900 mb-4">Select Platform</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {release.platforms.map((platform) => {
                        const Icon = platform.icon;
                        const active = selectedOS === platform.id;

                        return (
                          <button
                            key={platform.id}
                            type="button"
                            onClick={() => setSelectedOS(platform.id)}
                            className={`text-left rounded-2xl border p-4 transition-all ${
                              active
                                ? 'border-orange-300 bg-orange-50'
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span
                                  className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border ${
                                    active ? 'border-orange-200 bg-white' : 'border-gray-200 bg-gray-50'
                                  }`}
                                >
                                  <Icon className="w-5 h-5 text-gray-700" />
                                </span>
                                <div>
                                  <div className="text-sm font-semibold text-gray-900">{platform.name}</div>
                                  <div className="text-xs text-gray-500">{platform.size}</div>
                                </div>
                              </div>
                              {active && <Check className="w-5 h-5 text-orange-500" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <p className="text-sm text-gray-500 mt-4">
                      CLI downloads are available now. GUI is under development and will be enabled in a future release.
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
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
          <h2 className="text-3xl mb-8 text-gray-900 text-center">Installation</h2>

          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-lg mb-4 text-gray-900">Windows / Linux / macOS</h3>
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
          <h2 className="text-3xl mb-12 text-gray-900 text-center">Next Steps</h2>

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
              <p className="text-gray-600 mb-4">See what&apos;s new</p>
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
            Ignytion is licensed under the Apache 2.0 license. Free to use for commercial and non-commercial purposes.
            See{' '}
            <a href="#" className="text-orange-500 hover:text-orange-600">
              license details
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
