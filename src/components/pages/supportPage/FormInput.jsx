import React from 'react';

export const FormInput = ({ label, error, children }) => (
    <div>
      <label className="block mb-2">
        {label}<span className="text-red-500">*</span>
      </label>
      {children}
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
  