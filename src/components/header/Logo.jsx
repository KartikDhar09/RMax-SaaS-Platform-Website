import React from 'react';
import { Link } from 'react-router-dom';
export const Logo = () => (
    <Link to="/" className="flex items-center text-xl font-bold">
      <span className="text-black">R</span>
      <span className="text-[rgb(160,15,15)]">Max</span>
    </Link>
  );