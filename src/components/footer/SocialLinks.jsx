import React from 'react';

const SocialLinks = ({ links }) => {
  return (
    <div className="flex space-x-6">
      {links.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="hover:text-white transition-colors duration-200"
          aria-label={social.platform}
        >
          <img 
            src={social.icon}
            alt={social.platform.toLowerCase()}
            className="w-4 h-4 mix-blend-screen"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;