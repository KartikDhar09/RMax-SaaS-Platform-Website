import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {Logo} from './Logo.jsx';
import {FeatureDropdown} from './FeatureDropdown.jsx';
import {MobileMenu} from './MobileMenu.jsx';
import {useWindowWidth} from './useWindowWidth.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isFeaturesOpen, setFeaturesOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const solutionsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (windowWidth >= 768) {
        if (featuresRef.current && !featuresRef.current.contains(event.target) && 
            !event.target.closest('button')?.contains(event.target.closest('.features-button'))) {
          setFeaturesOpen(false);
        }
        if (solutionsRef.current && !solutionsRef.current.contains(event.target) && 
            !event.target.closest('button')?.contains(event.target.closest('.solutions-button'))) {
          setSolutionsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [windowWidth]);

  return (
    <header className="bg-white shadow-sm relative border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Home
            </Link>

            <div className="relative" ref={featuresRef}>
              <button 
                onClick={() => setFeaturesOpen(!isFeaturesOpen)}
                className="features-button text-gray-700 text-sm font-medium group inline-flex items-center hover:text-gray-900"
              >
                Features
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <FeatureDropdown 
                isOpen={isFeaturesOpen}
                windowWidth={windowWidth}
                onClose={() => setFeaturesOpen(false)}
              />
            </div>

            <Link to="/pricing" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Pricing
            </Link>

            <div className="relative" ref={solutionsRef}>
              <button 
                onClick={() => setSolutionsOpen(!isSolutionsOpen)}
                className="solutions-button text-gray-700 text-sm font-medium group inline-flex items-center hover:text-gray-900"
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isSolutionsOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white">
                  <div className="py-1">
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Solution 1
                    </Link>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Solution 2
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Login
            </Link>
            <Link to="/support" className="bg-[#ff3b30] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#ff2419] transition-colors">
              Try For Free
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>

        <MobileMenu
            isOpen={isOpen}
            isFeaturesOpen={isFeaturesOpen}
            isSolutionsOpen={isSolutionsOpen}
            setFeaturesOpen={setFeaturesOpen}
            setSolutionsOpen={setSolutionsOpen}
          />
        </nav>
    </header>
  );
};

export default Header;