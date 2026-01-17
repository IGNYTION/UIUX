import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
// Ensure this path matches where you saved the high-res extracted logo
import logo from '../assets/ignytion_logo.png'; 

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Platform', path: '/platform' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Docs', path: '/docs' },
    { name: 'Downloads', path: '/downloads' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CHANGES: 
          1. Removed h-20 (fixed height) to prevent overlap.
          2. Added min-h-[80px] to maintain a standard feel.
          3. Added py-2 to give breathing room for a larger logo.
        */}
        <div className="flex justify-between items-center py-2 min-h-[80px]">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Ignytion" 
              /* h-12 (48px) on mobile
                md:h-20 (80px) on desktop to make it much larger
                object-contain ensures it doesn't distort
              */
              className="h-12 md:h-20 w-auto object-contain transition-transform hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors font-medium text-sm lg:text-base ${
                  isActive(item.path)
                    ? 'text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link to="/admin">
              <Button variant="ghost" className="text-gray-700 text-sm">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="text-gray-700 text-sm">
                Contact
              </Button>
            </Link>
            <Link to="/downloads">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-2">
                Download
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-orange-50 text-orange-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-gray-700">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </Link>
              <Link to="/downloads" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Download
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}