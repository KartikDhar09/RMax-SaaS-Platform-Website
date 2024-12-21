import React from 'react';

const UserIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    {...props}
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
);

const DownloadIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CalendarIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
  </svg>
);

const ONBOARDING_STEPS = [
  {
    id: 'profile',
    icon: UserIcon,
    title: "Claim your preset profile",
    description: "Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today."
  },
  {
    id: 'services',
    icon: DownloadIcon,
    title: "Add services",
    description: "Make use of multiple scheduling, pricing options to add services. Choose from pre-created scheduling templates."
  },
  {
    id: 'website',
    icon: CalendarIcon,
    title: "Built Website",
    description: "Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient Client experience."
  }
];

const Header = ({ title, subtitle }) => (
  <div className="text-center mb-8 sm:mb-12">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
      {title}
    </h1>
    <p className="text-gray-600 text-sm sm:text-base">
      {subtitle}
    </p>
  </div>
);

const StepIcon = ({ icon: Icon }) => (
  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 sm:mb-6">
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center">
      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
    </div>
  </div>
);

const Connector = () => (
  <div className="hidden md:block absolute top-8 sm:top-10 left-full w-16 lg:w-32 h-4">
    <svg 
      className="w-full h-full text-gray-300" 
      viewBox="0 0 100 24" 
      fill="none" 
      stroke="currentColor"
    >
      <path d="M0 12 C30 12, 70 12, 100 12" strokeWidth="2" />
    </svg>
  </div>
);

const Step = ({ icon, title, description, isLast }) => (
  <div className="flex flex-col items-center text-center flex-1 max-w-sm">
    <div className="relative">
      <StepIcon icon={icon} />
      {!isLast && <Connector />}
    </div>
    <span className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{title}</span>
    <p className="text-gray-600 text-sm sm:text-base">
      {description}
    </p>
  </div>
);

const OnboardingSteps = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <Header
      title="Onboard business in 3 simple steps"
      subtitle="Quick assisted onboarding with 30day free trial. No credit card needed."
    />
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
      {ONBOARDING_STEPS.map((step, index) => (
        <Step
          key={step.id}
          icon={step.icon}
          title={step.title}
          description={step.description}
          isLast={index === ONBOARDING_STEPS.length - 1}
        />
      ))}
    </div>
  </div>
);

export default OnboardingSteps;