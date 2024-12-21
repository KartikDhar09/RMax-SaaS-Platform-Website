import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Star, Briefcase, Building } from 'lucide-react';

const FEATURES_DATA = [
  {
    icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
    title: "Scheduling",
    description: "Manage appointments, classes, and events, workshops with...",
  },
  {
    icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />,
    title: "Client Management & CRM",
    description: "Keep track of customer data, preferences, and interactions to...",
  },
  {
    icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
    title: "AI Powered Insights",
    description: "Know exactly what is happening in business and get actionable...",
  },
  {
    title: "Billing & Payments",
    description: "Streamline invoicing and payments with automated workflows, reducing ...",
    isImage: true,
    image: "/billingVisualization.jpg",
  },
  {
    icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
    title: "Marketing & Engagement Tools",
    description: "Boost client retention and grow your business with integrated...",
  },
  {
    icon: <Building className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />,
    title: "Multi-Location Management",
    description: "Manage multiple locations with ease, assigning roles and permissions...",
  },
];

const Header = () => (
  <div className="text-center mb-8 sm:mb-12 lg:mb-16">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
      Why Rmax?
    </h1>
    <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4 sm:px-6">
      Rmax is designed to simplify and transform the way service businesses operate. 
      From onboarding, scheduling and billing to client management, payments and growth, 
      Rmax integrates everything in one easy-to-use platform connecting all the stake holders.
    </p>
  </div>
);

const FeatureCard = ({ feature }) => (
  <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
    {feature.isImage ? (
      <div className="mb-4 flex-shrink-0">
        <img
          src={feature.image}
          alt={`${feature.title} visualization`}
          className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg"
        />
      </div>
    ) : (
      <div className="mb-3 sm:mb-4 flex-shrink-0">
        {feature.icon}
      </div>
    )}
    
    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
      {feature.title}
    </h3>
    
    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 flex-grow">
      {feature.description}
    </p>
    
    <ViewDetailsLink />
  </div>
);

const ViewDetailsLink = () => (
  <Link
    to="#"
    className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base inline-flex items-center group"
  >
    View details
    <span className="transform transition-transform duration-200 group-hover:translate-x-1">
      →
    </span>
  </Link>
);

const RmaxFeatures = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <Header />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {FEATURES_DATA.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default RmaxFeatures;