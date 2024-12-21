import React from 'react';
import { ArrowRight } from 'lucide-react';

// Constants
const PRICING_PLANS = {
  STARTER: {
    name: 'Starter',
    price: 17,
    description: '$17/month, billed monthly'
  },
  PREMIUM: {
    name: 'Premium',
    price: 88,
    description: '$88/month, billed monthly'
  }
};

const FEATURES = [
  { name: 'Users', starter: '1', premium: '15', category: 'Basic Management' },
  { name: 'Branches', starter: '1', premium: '10', category: 'Basic Management' },
  { name: 'Courses', starter: '3', premium: '15/branch', category: 'Basic Management' },
  { name: 'Max. Students Allowed', starter: '25', premium: '500', category: 'Basic Management' },
  { name: 'Communication', starter: '25', premium: 'Yes', category: 'Basic Management' },
  { name: 'Bulk Updates', starter: '25', premium: 'Yes', category: 'Basic Management' },
  { name: 'User Roles', starter: '25', premium: 'Yes', category: 'Basic Management' }
];

const PricingHeader = () => (
  <div className="text-center mb-8 sm:mb-12">
    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
      Flexible Plans,
      <br />
      Transparent Pricing
    </h1>
    <p className="text-gray-600 mb-2 text-sm sm:text-base">Find the Perfect Fit for You</p>
    <p className="text-red-500 text-sm sm:text-base">30-day free trial with money-back guarantee.</p>
  </div>
);

const GetStartedButton = () => (
  <div className="pt-6 text-center">
    <button className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-medium">
      Get Started
      <ArrowRight size={20} />
    </button>
    <p className="text-sm text-gray-500 mt-4">No credit card required</p>
  </div>
);

const MobilePricingCard = ({ plan, features }) => (
  <div className="mb-8 border rounded-lg p-6">
    <div className="text-center mb-6">
      <h3 className="font-semibold mb-2">{plan.name}</h3>
      <p className="text-gray-600">{plan.description}</p>
    </div>
    
    <div className="space-y-4">
      {features.map((feature) => (
        <div key={feature.name} className="flex justify-between py-2 border-t">
          <span className="text-gray-600">{feature.name}</span>
          <span>{plan.name === 'Starter' ? feature.starter : feature.premium}</span>
        </div>
      ))}
    </div>

    <GetStartedButton />
  </div>
);

const DesktopPricingTable = ({ features }) => (
  <div className="hidden md:grid grid-cols-3 gap-6">
    <div className="font-medium">Features</div>
    {Object.values(PRICING_PLANS).map(plan => (
      <div key={plan.name} className="text-center">
        <h3 className="font-semibold mb-2">{plan.name}</h3>
        <p className="text-gray-600">{plan.description}</p>
      </div>
    ))}

    <div className="col-span-3 mt-8">
      <h3 className="font-semibold mb-4">Basic Management</h3>
    </div>

    {features.map((feature) => (
      <React.Fragment key={feature.name}>
        <div className="py-4 border-t text-gray-600">{feature.name}</div>
        <div className="py-4 border-t text-center">{feature.starter}</div>
        <div className="py-4 border-t text-center">{feature.premium}</div>
      </React.Fragment>
    ))}

    <div className="border-t" />
    {Object.values(PRICING_PLANS).map(plan => (
      <div key={plan.name} className="border-t">
        <GetStartedButton />
      </div>
    ))}
  </div>
);

const PricingComparison = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 sm:py-8">
      <PricingHeader />
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Compare our plans</h2>

      {/* Mobile View */}
      <div className="block md:hidden">
        {Object.values(PRICING_PLANS).map((plan) => (
          <MobilePricingCard key={plan.name} plan={plan} features={FEATURES} />
        ))}
      </div>

      {/* Desktop View */}
      <DesktopPricingTable features={FEATURES} />
    </div>
  );
};

export default PricingComparison;