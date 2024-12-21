import React from 'react';
import FAQSection from '../FaqSection.jsx';
import Hero from './Hero.jsx';
import OnboardingSteps from './OnboardingSteps.jsx';
import RmaxFeatures from './RmaxFeatures.jsx';
import ServiceProvider from './ServiceProvider.jsx';
import PricingPlan from './PricingPlan.jsx';
import BusinessApp from './BusinessApp.jsx';

function LandingPage() {
  return (
    <div className="min-h-screen">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section className="py-12 md:py-16">
          <Hero />
        </section>

       
        <section className="py-12 md:py-16 bg-gray-50">
          <OnboardingSteps />
        </section>

       
        <section className="py-12 md:py-16">
          <RmaxFeatures />
        </section>

       
        <section className="py-12 md:py-16 bg-gray-50">
          <ServiceProvider />
        </section>

        
        <section className="py-12 md:py-16">
          <PricingPlan />
        </section>

       
        <section className="py-12 md:py-16 bg-gray-50">
          <BusinessApp />
        </section>

        
        <section className="py-12 md:py-16">
          <FAQSection />
        </section>
      </div>
    </div>
  );
}

export default LandingPage;