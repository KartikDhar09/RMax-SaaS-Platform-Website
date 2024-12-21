import React from 'react';
import { Link } from 'react-router-dom';
 const FeatureItem = ({ icon, text }) => (
    <Link to="/" className="flex items-center gap-x-3 text-gray-600 hover:text-gray-900">
      {icon}
      <span className="text-sm">{text}</span>
    </Link>
  );
  
export default FeatureItem;