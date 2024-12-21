import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Types
const PlanType = {
  STARTER: 'starter',
  PREMIUM: 'premium',
};

const BillingType = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
};

// Configuration
const PRICING_CONFIG = {
  [PlanType.STARTER]: {
    title: 'STARTER',
    prices: {
      [BillingType.MONTHLY]: 17,
      [BillingType.YEARLY]: 153,
    },
    features: [
      { name: 'Commercial License', included: true },
      { name: '100+ HTML UI Elements', included: true },
      { name: 'Unlimited Domain Support', included: true },
      { name: '6 Month Premium Support', included: false },
      { name: 'Life Time Updates', included: false },
    ],
  },
  [PlanType.PREMIUM]: {
    title: 'PREMIUM',
    prices: {
      [BillingType.MONTHLY]: 88,
      [BillingType.YEARLY]: 792,
    },
    features: [
      { name: 'Commercial License', included: true },
      { name: '100+ HTML UI Elements', included: true },
      { name: 'Unlimited Domain Support', included: true },
      { name: '6 Month Premium Support', included: true },
      { name: 'Life Time Updates', included: true },
    ],
  },
};

// Icon Components
const CheckIcon = () => (
  <svg 
    className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M5 13l4 4L19 7" 
    />
  </svg>
);

const CrossIcon = () => (
  <svg 
    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 flex-shrink-0" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M6 18L18 6M6 6l12 12" 
    />
  </svg>
);

// Feature Components
const FeatureItem = ({ name, included }) => (
  <div className="flex items-center text-sm sm:text-base">
    {included ? <CheckIcon /> : <CrossIcon />}
    <span className={included ? '' : 'text-gray-400'}>{name}</span>
  </div>
);

const BillingToggle = ({ isYearly, onToggle }) => (
  <div className="flex justify-center items-center gap-4 mb-8">
    <span className={`text-sm sm:text-base ${isYearly ? 'text-gray-500' : 'text-black'}`}>
      Monthly
    </span>
    <button 
      onClick={onToggle}
      className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer"
      aria-label={`Switch to ${isYearly ? 'monthly' : 'yearly'} billing`}
    >
      <div 
        className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${
          isYearly ? 'left-7' : 'left-1'
        }`} 
      />
    </button>
    <span className={`text-sm sm:text-base ${!isYearly ? 'text-gray-500' : 'text-black'}`}>
      Yearly
    </span>
    {isYearly && <span className="text-red-500 text-sm sm:text-base">SAVE 25%</span>}
  </div>
);

const PricingCard = ({ planType, isYearly }) => {
  const plan = PRICING_CONFIG[planType];
  const billingType = isYearly ? BillingType.YEARLY : BillingType.MONTHLY;
  const price = plan.prices[billingType];

  return (
    <div className="border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="text-center mb-6">
        <h3 className="text-red-500 font-medium mb-4">{plan.title}</h3>
        <div className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="text-xl sm:text-2xl">$</span>
          {price}
          <span className="text-sm sm:text-base font-normal text-gray-500">
            {' '}/ {isYearly ? 'year' : 'month'}
          </span>
        </div>
        <p className="text-gray-500 text-sm">billed {isYearly ? 'yearly' : 'monthly'}</p>
      </div>

      <div className="space-y-4 mb-6">
        {plan.features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>

      <button className="w-full bg-red-50 text-red-500 py-2 sm:py-3 rounded-lg mb-4 hover:bg-red-100 transition-colors text-sm sm:text-base">
        Get Started
      </button>
      <p className="text-center text-gray-500 text-xs sm:text-sm">
        No credit card required
      </p>
    </div>
  );
};

const EnterpriseCTA = () => (
  <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-8">
    <span>Running a Growth Business or Enterprise?</span>
    <div className="flex items-center gap-2">
      <span>Let's connect - </span>
      <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-colors">
        <Link to="/support">Talk to Sales</Link>
      </button>
    </div>
  </div>
);

const PricingHeader = () => (
  <div className="space-y-4 mb-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-center">Choose Plan</h1>
    <h2 className="text-3xl sm:text-4xl font-bold text-center">That's Right For You</h2>
    <p className="text-center text-gray-600 text-sm sm:text-base">
      Simple and transparent pricing. Start for free, upgrade when you love it.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
      <p className="text-red-500">30 day free trial in a button</p>
    </div>
  </div>
);

const PricingPlan = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PricingHeader />
      <EnterpriseCTA />
      <BillingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        <PricingCard planType={PlanType.STARTER} isYearly={isYearly} />
        <PricingCard planType={PlanType.PREMIUM} isYearly={isYearly} />
      </div>

      <div className="text-center mt-8">
        <Link to="/pricing" className="text-blue-600 hover:underline text-sm sm:text-base">
          Explore In-Depth Differences
        </Link>
      </div>
    </div>
  );
};

export default PricingPlan;