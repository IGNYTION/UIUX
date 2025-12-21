import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                IGNYTION
              </span>
            </div>
            <p className="text-sm text-gray-400">
              An open-source EDA platform unifying tools, PDKs, and reusable IPs with GenAI-assisted workflows.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/platform" className="hover:text-orange-400 transition-colors text-sm">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="hover:text-orange-400 transition-colors text-sm">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-orange-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-orange-400 transition-colors text-sm">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/docs" className="hover:text-orange-400 transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-orange-400 transition-colors text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              contact@ignytion.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <div className="mb-4">
            <p className="text-xs text-gray-500">
              Open-source EDA • Open PDKs • Reusable IPs • GenAI-assisted workflows • Software-like pipelines
            </p>
          </div>
          <p>&copy; {new Date().getFullYear()} IGNYTION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}