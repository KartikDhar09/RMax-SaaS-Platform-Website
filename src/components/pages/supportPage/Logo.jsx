import React from 'react';

export const Logo = () => (
  <div className="flex items-center gap-2 py-4">
    <div className="flex flex-col items-end">
      <div className="font-bold text-xl relative bottom-[-4px]">AI </div>
      <span className="flex">
        <div className="font-bold text-xl relative top-[-6px]">R</div>
        <div className="font-bold text-xl text-[rgb(160,15,15)] relative top-[-6px]">Max</div>
      </span>
    </div>
    <div className="text-gray-600 text-sm md:text-lg p-2 border-2 border-gray-500 rounded-lg">
      Curious? Let AI Uncover the Answers!
    </div>
  </div>
);