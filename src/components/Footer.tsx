import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/ignytion_logo.png'; 

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Trust Strip */}
      <div className="border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
            <span>Open-source EDA</span>
            <span className="text-gray-300">•</span>
            <span>Open PDKs</span>
            <span className="text-gray-300">•</span>
            <span>Reusable IPs</span>
            <span className="text-gray-300">•</span>
            <span>GenAI-assisted workflows</span>
            <span className="text-gray-300">•</span>
            <span>Software-like pipelines</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Ignytion" className="h-10" />
            </Link>
            <p className="text-sm text-gray-600">
              Open-source EDA platform for 180nm chip design
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm mb-4 text-gray-900">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/platform" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm mb-4 text-gray-900">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/docs" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Community Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm mb-4 text-gray-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Ignytion. Open-source EDA platform.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}