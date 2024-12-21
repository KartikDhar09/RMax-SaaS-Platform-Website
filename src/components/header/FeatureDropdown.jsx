import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import FeatureItem from './FeatureItem.jsx';
import {FEATURES_DATA}  from './Constants.jsx';
export const FeatureDropdown = ({ isOpen, windowWidth, onClose }) => {
    const getDropdownWidth = () => {
      if (windowWidth >= 1280) return "w-[90vw] max-w-7xl";
      if (windowWidth >= 768) return "w-[95vw]";
      return "w-full";
    };
  
    const getColumnsLayout = () => {
      if (windowWidth >= 1024) return "grid-cols-4";
      if (windowWidth >= 768) return "grid-cols-3";
      return "grid-cols-1";
    };
  
    const manageItemsPerColumn = Math.ceil(FEATURES_DATA.Manage.length / 2);
    const manageColumns = {
      first: FEATURES_DATA.Manage.slice(0, manageItemsPerColumn),
      second: FEATURES_DATA.Manage.slice(manageItemsPerColumn)
    };
  
    const renderFeatureCategory = (title, items, isDoubleColumn = false) => (
      <div className={`p-4 lg:p-6 ${isDoubleColumn ? 'col-span-2 border-l border-r border-gray-200' : ''}`}>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        {isDoubleColumn ? (
          <div className="grid grid-cols-2 gap-x-8">
            <ul className="space-y-3">
              {manageColumns.first.map((item, idx) => (
                <li key={idx}><FeatureItem {...item} /></li>
              ))}
            </ul>
            <ul className="space-y-3">
              {manageColumns.second.map((item, idx) => (
                <li key={idx}><FeatureItem {...item} /></li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="space-y-3">
            {items.map((item, idx) => (
              <li key={idx}><FeatureItem {...item} /></li>
            ))}
          </ul>
        )}
      </div>
    );
  
    if (!isOpen) return null;
  
    return (
      <div className={`fixed left-1/2 z-10 mt-2 ${getDropdownWidth()} -translate-x-1/2 bg-white shadow-lg rounded-lg mx-4`}
           style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <div className={`grid ${getColumnsLayout()} divide-y md:divide-y-0 md:divide-x`}>
          {renderFeatureCategory('Discover', FEATURES_DATA.Discover)}
          {renderFeatureCategory('Manage', FEATURES_DATA.Manage, true)}
          {renderFeatureCategory('Grow', FEATURES_DATA.Grow)}
        </div>
        <div className="bg-gray-50 p-4 rounded-b-lg">
          <Link to="#" className="flex items-center justify-center text-[#ff3b30] hover:text-[#ff2419] gap-x-2">
            See all features
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  };
  