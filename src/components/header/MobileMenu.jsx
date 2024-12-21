import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { FEATURES_DATA } from './Constants.jsx';

export const MobileMenu = ({ isOpen, isFeaturesOpen, isSolutionsOpen, setFeaturesOpen, setSolutionsOpen }) => {
    if (!isOpen) return null;
  
    const renderMobileFeatures = () => (
      <div className="pl-3">
        {Object.entries(FEATURES_DATA).map(([category, items]) => (
          <div key={category} className="mb-4">
            <h3 className="text-sm font-semibold text-gray-900 px-3 py-2">{category}</h3>
            <div className="space-y-2">
              {items.map((item, idx) => (
                <Link key={idx} to="/" className="flex items-center gap-x-3 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium text-[#ff3b30] hover:text-[#ff2419]">
          See all features
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    );
  
    return (
      <div className="md:hidden overflow-y-auto max-h-[80vh]">
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Home
          </Link>
          
          <div onClick={() => setFeaturesOpen(!isFeaturesOpen)}
               className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
               role="button"
               tabIndex={0}>
            <div className="flex items-center justify-between">
              <span>Features</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`} />
            </div>
          </div>
          
          {isFeaturesOpen && renderMobileFeatures()}
  
          <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Pricing
          </Link>
  
          <button onClick={() => setSolutionsOpen(!isSolutionsOpen)}
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Solutions
          </button>
          
          {isSolutionsOpen && (
            <div className="pl-6">
              <Link to="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Solution 1
              </Link>
              <Link to="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Solution 2
              </Link>
            </div>
          )}
  
          <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
            Login
          </Link>
          <Link to="/support" className="block px-3 py-2 text-base font-medium text-white bg-[#ff3b30] hover:bg-[#ff2419] transition-colors">
            Try For Free
          </Link>
        </div>
      </div>
    );
  };