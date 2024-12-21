import React from 'react';
import FooterSection from './FooterSection.jsx';
import SocialLinks from './SocialLinks.jsx';
import { footerSections, socialLinks } from './FooterData.js';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerSections.map((section, index) => (
            <FooterSection key={index} {...section} />
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Copyright, All Right Reserved@itMax
            </p>
            <SocialLinks links={socialLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;