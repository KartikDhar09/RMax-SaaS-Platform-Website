import React from 'react';
import FooterLink from './FooterLink';

const FooterSection = ({ title, links }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-white font-medium">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <FooterLink {...link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;