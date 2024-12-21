import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ href, icon, text }) => {
  const renderIcon = () => {
    if (!icon) return null;
    
    if (icon === 'apple') {
      return <img src="/appleLogo.png" alt="apple-Logo" className="w-4 h-4" />;
    }
    
    if (icon === 'google') {
      return <img src="/androidLogo.png" alt="android-Logo" className="w-4 h-4" />;
    }
  };

  return (
    <Link
      to={href}
      className="hover:text-white transition-colors duration-200 flex items-center gap-2"
    >
      {renderIcon()}
      <span>{text}</span>
    </Link>
  );
};

export default FooterLink;