import React from 'react';
import PricingComparison from './PricingComparison';
import FaqSection from '../FaqSection';

const Pricing = () => {
  return (
    <main className="pricing-container">
      <PricingComparison />
      <FaqSection />
    </main>
  );
};

export default Pricing;