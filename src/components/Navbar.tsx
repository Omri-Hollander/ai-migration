import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">WP Migrate</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-700 hover:text-blue-700 transition-colors">Benefits</a>
            <a href="#process" className="text-gray-700 hover:text-blue-700 transition-colors">Process</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-700 transition-colors">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-700 transition-colors">FAQ</a>
            <a href="#contact" className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition-colors flex items-center">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#benefits"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#process"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Process
            </a>
            <a 
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-700 text-white hover:bg-blue-800"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;