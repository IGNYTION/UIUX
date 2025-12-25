import { Card, CardContent } from './ui/card';
import { Code, Cpu, GitBranch, Terminal, Check, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export function PlatformPage() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-gray-700" />,
      title: 'Open-Source EDA Tools',
      description: 'Complete suite of synthesis, simulation, and verification',
      items: [
        'Yosys for RTL synthesis',
        'Verilator for simulation',
        'OpenROAD for place & route',
        'Magic for layout editing',
      ],
    },
    {
      icon: <Cpu className="w-8 h-8 text-gray-700" />,
      title: 'Open PDK for 180nm',
      description: 'Production-ready process design kit',
      items: [
        'Standard cell library',
        'I/O cells and pads',
        'Design rules (DRC/LVS)',
        'Extraction models',
      ],
    },
    {
      icon: <GitBranch className="w-8 h-8 text-gray-700" />,
      title: 'Reusable IP Blocks',
      description: 'Pre-verified modular components',
      items: [
        'Digital peripherals',
        'Memory controllers',
        'Interface protocols',
        'Version controlled',
      ],
    },
    {
      icon: <Terminal className="w-8 h-8 text-gray-700" />,
      title: 'Python Workflows',
      description: 'Scriptable automation with GenAI',
      items: [
        'Python-based DSL',
        'AI-assisted debugging',
        'Automated optimization',
        'CI/CD integration',
      ],
    },
  ];

  const specs = [
    { label: 'Process Node', value: '180nm' },
    { label: 'Voltage', value: '1.8V / 3.3V' },
    { label: 'Design Languages', value: 'Verilog, VHDL, Python' },
    { label: 'Operating System', value: 'Linux, macOS' },
    { label: 'License', value: 'Apache 2.0' },
    { label: 'Community', value: 'Open source' },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl mb-6 text-gray-900">
            The Open Silicon Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform for 180nm chip design that unifies open-source EDA tools, 
            PDKs, and reusable IPs with Python-based workflows
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">
            Platform Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-8">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-700">
                        <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">
            Technical Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {specs.map((spec, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">{spec.label}</p>
                <p className="text-lg text-gray-900">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-gray-900 text-center">
            Development Workflow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Design</h3>
              <p className="text-gray-600">Write RTL in Verilog or use Python DSL</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Synthesize</h3>
              <p className="text-gray-600">Convert RTL to gate-level netlist</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Place & Route</h3>
              <p className="text-gray-600">Physical implementation for 180nm</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg mb-2 text-gray-900">Verify</h3>
              <p className="text-gray-600">DRC/LVS checks and tapeout</p>
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
            Download the platform and start designing chips today
          </p>
          <Link to="/downloads">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              <Download className="w-5 h-5 mr-2" />
              Download for Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
