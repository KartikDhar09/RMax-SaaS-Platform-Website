import React from 'react';
import { ArrowRight, Stars } from 'lucide-react';
import { Link } from 'react-router-dom';

// Constants
const FEATURES = [
  'Seamless Onboarding',
  'Client Engagement',
  'Generate Report',
  'Revenue Growth'
];

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="flex flex-col items-end whitespace-nowrap">
      <div className="font-bold text-xl relative bottom-[-4px]">AI</div>
      <span className="flex">
        <div className="font-bold text-xl relative top-[-6px]">R</div>
        <div className="font-bold text-xl text-red-800 relative top-[-6px]">Max</div>
      </span>
    </div>
  </div>
);

const Header = () => (
  <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-2 py-2 flex-wrap sm:flex-nowrap">
        <Logo />
        <div className="text-gray-600 text-sm sm:text-base md:text-lg p-2 border-2 border-gray-500 rounded-lg whitespace-nowrap">
          Curious? Let AI Uncover the Answers!
        </div>
      </div>
    </div>
  </header>
);

const ActionButton = ({ to, variant = 'primary', children }) => (
  <Link to={to}>
    <button
      className={`
        px-6 py-3 rounded-lg text-base sm:text-lg transition-colors flex items-center justify-center gap-2
        ${variant === 'primary'
          ? 'bg-red-500 text-white hover:bg-red-600'
          : 'bg-white text-gray-800 border hover:bg-gray-50 font-medium'
        }
      `}
    >
      {children}
    </button>
  </Link>
);

const CTAButtons = () => (
  <div className="flex flex-row justify-center gap-4 mb-8 px-4 w-full max-w-lg mx-auto">
    <ActionButton to="/support" variant="primary">
      Get Started
      <ArrowRight size={20} />
    </ActionButton>
    <ActionButton to="/support" variant="secondary">
      Book A Demo
    </ActionButton>
  </div>
);

const FeatureCard = ({ feature }) => (
  <div className="flex items-center justify-center p-4 rounded-lg border-2 border-gray-200 hover:border-red-500 transition-colors mx-auto w-full sm:w-auto">
    <h3 className="text-base sm:text-lg font-normal whitespace-nowrap cursor-default">
      {feature}
    </h3>
  </div>
);

const FloatingIcon = () => (
  <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
    <div className="bg-gradient-to-br from-red-400 to-pink-500 p-3 sm:p-4 rounded-xl text-white cursor-pointer hover:from-red-500 hover:to-pink-600 transition-all shadow-lg">
      <Stars size={24} />
    </div>
  </div>
);

const Hero = () => (
  <div className="bg-white">
    <Header />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-2">
        Maximize Your Impact
      </h1>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        <span className="text-red-500">Business with </span>
        <span>R</span>
        <span className="text-red-800">Max</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6 px-4 text-base sm:text-lg">
        Enhance your business with Rmax's all-in-one platform—streamlining client
        engagement, automating workflows, and fueling growth.
      </p>
      <CTAButtons />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
      <FloatingIcon />
    </div>
  </div>
);

export default Hero;