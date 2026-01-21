import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, User, Hammer } from 'lucide-react';
import { useState } from 'react';
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
        <div className="flex justify-between items-center py-2 min-h-[80px]">
          {/* Logo & Status Tags Section */}
          <div className="flex items-center gap-3">
            {/* 1. ALPHA TAG (Stripe style on the left) */}
            {/* Alpha ribbon (strip + 45° text) */}
            <span className="sm:inline-flex relative h-10 w-10 overflow-hidden ">
              {/* vertical strip */}
              {/* <span className="absolute inset-y-0 left-0 w-2 bg-orange-600" /> */}

              {/* rotated text */}
              <span
                className="absolute left-1/2 top-1/2 text-[9px] font-extrabold tracking-[0.22em] text-orange-700"
                style={{ transform: 'translate(-50%, -50%) rotate(-45deg)' }}
              >
                ALPHA
              </span>
            </span>

            {/* ✅ Alpha Version pill (small, with α + v0.1) */}
            {/* <span className=" hidden inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-[10px] font-semibold text-orange-700 shadow-sm">
              <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-orange-500 text-white text-[10px] leading-none">
                ALPHA
              </span>

              <span className="text-orange-400">•</span>
              <span className="font-medium text-orange-700/90">v0.1</span>
            </span> */}

            {/* 2. LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Ignytion"
                className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105"
              />
            </Link>

            {/* 3. ANIMATED HAMMER + TAGS */}
            <div className="flex items-center gap-2 ml-1">
              {/* Hammer Container */}
              <div className="relative flex items-center justify-center h-9 w-9 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                <Hammer
                  className="w-5 h-5 text-orange-600 z-10"
                  style={{
                    transformOrigin: '70% 85%',
                    animation: 'hammer-strike 1.2s infinite ease-in-out',
                  }}
                />
                {/* Visual striking surface */}
                <div className="absolute bottom-2 w-4 h-0.5 bg-gray-300 rounded-full" />
                {/* Impact Spark */}
                <div
                  className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0"
                  style={{ animation: 'spark-pop 1.2s infinite' }}
                />
              </div>

              {/* ✅ Under construction tag (smaller font) */}
              {/* ✅ Under construction tag (ultra small) */}
              <div className="hidden md:flex items-center">
                <span
                  className="inline-flex items-center rounded-sm border border-gray-200 bg-gray-50 px-1 py-[1px] text-[10px] leading-none font-semibold uppercase tracking-[0.22em] text-gray-500 origin-left"
                  style={{ transform: 'scale(0.75)', transformOrigin: 'left center' }}
                >
                  Under Construction
                </span>
              </div>



              {/* Mobile compact tag */}
              <span className="md:hidden inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-semibold text-gray-600 shadow-sm">
                α • v0.1
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${isActive(item.path) ? 'text-orange-600' : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/admin">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <User className="w-4 h-4 mr-2" /> Sign In
              </Button>
            </Link>
            <Link to="/downloads">
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white px-5">
                Download
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white p-4 space-y-3 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.path) ? 'bg-orange-50 text-orange-600' : 'text-gray-600'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Animation Logic */}
      <style>{`
        @keyframes hammer-strike {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(-40deg); } /* Slow wind up */
          35% { transform: rotate(15deg); }  /* Fast downward hit */
          45% { transform: rotate(5deg); }   /* Slight bounce */
          60% { transform: rotate(0deg); }   /* Return to rest */
          100% { transform: rotate(0deg); }
        }

        @keyframes spark-pop {
          0%, 33% { opacity: 0; transform: scale(0); }
          35% { opacity: 1; transform: scale(1.3); } /* Flash on impact */
          50% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 0; }
        }
      `}</style>
    </nav>
  );
}
