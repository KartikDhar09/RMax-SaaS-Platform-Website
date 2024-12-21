import React from 'react';

export const ContactInfoItem = ({ title, content, hours }) => (
    <div>
      <h4 className="font-medium mb-2">{title}</h4>
      <span className="block h-px w-24 bg-black my-4"></span>
      <div className="text-gray-600 mb-2">{content}</div>
      {hours && (
        <p className="text-sm text-gray-500">
          <span className="block">Assistance hours:</span>
          <span>Monday - Friday 6 am to 8 pm</span>
          <span className="block">EST</span>
        </p>
      )}
    </div>
  );