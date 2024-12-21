import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024
};

const SERVICES = [
  {
    title: 'Sports',
    image: '/sports.jpg',
    description: 'From fitness studios to sports academies, Rmax empowers sports businesses',
    link: 'Know more...'
  },
  {
    title: 'Healthcare & Wellness',
    image: '/healthcare.jpg',
    description: 'Health and wellness service providers—from yoga instructors and gyms',
    link: 'Know more...'
  },
  {
    title: 'Learning Activities',
    image: '/learningActivities.jpg',
    description: 'Tutors, educators, and learning centers—from music schools to art studios',
    link: 'Know more...'
  },
  {
    title: 'Healthcare & Wellness',
    image: '/healthcare.jpg',
    description: 'Health and wellness service providers—from yoga instructors and gyms',
    link: 'Know more...'
  }
];

// Custom Hook
const useResponsiveCards = (totalItems) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [totalSlides, setTotalSlides] = useState(totalItems);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newVisibleCards = 1;

      if (width >= BREAKPOINTS.tablet) {
        newVisibleCards = 3;
      } else if (width >= BREAKPOINTS.mobile) {
        newVisibleCards = 2;
      }

      setVisibleCards(newVisibleCards);
      setTotalSlides(totalItems - (newVisibleCards - 1));
      setCurrentIndex(prev => Math.min(prev, totalItems - newVisibleCards));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalItems]);

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);

  const getVisibleCards = (items) => {
    return Array.from({ length: visibleCards }, (_, i) => {
      const index = (currentIndex + i) % items.length;
      return items[index];
    });
  };

  return {
    currentIndex,
    visibleCards,
    nextSlide,
    prevSlide,
    getVisibleCards,
    showNavigation: totalItems > visibleCards
  };
};

// Component: Navigation Button
const NavigationButton = ({ direction, onClick, children }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 ${
      direction === 'left' ? 'left-0 -translate-x-4' : 'right-0 translate-x-4'
    } bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10`}
    aria-label={`${direction === 'left' ? 'Previous' : 'Next'} slide`}
  >
    {children}
  </button>
);

// Component: Header
const Header = () => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold mb-4">
      Empowering Service<br />
      Providers Across Industries
    </h1>
    <p className="text-gray-600 max-w-3xl mx-auto">
      Whether you're in sports, education, wellness, household services, or niche markets,
      our technology simplifies your business operations, making it easier for you to focus on what you do best.
    </p>
  </div>
);

// Component: Service Card
const ServiceCard = ({ title, image, description, link }) => (
  <div className="flex flex-col transform transition-all duration-300">
    <div className="rounded-lg overflow-hidden mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-2">
      {description}
      <span className="text-blue-600 hover:text-blue-700 cursor-pointer ml-1">
        <Link to="#">{link}</Link>
      </span>
    </p>
  </div>
);

const ServiceProvider = () => {
  const {
    getVisibleCards,
    nextSlide,
    prevSlide,
    showNavigation,
    currentIndex
  } = useResponsiveCards(SERVICES.length);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Header />
      
      <div className="relative">
        {showNavigation && (
          <>
            <NavigationButton direction="left" onClick={prevSlide}>
              <ChevronLeft className="w-6 h-6" />
            </NavigationButton>
            <NavigationButton direction="right" onClick={nextSlide}>
              <ChevronRight className="w-6 h-6" />
            </NavigationButton>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
          {getVisibleCards(SERVICES).map((service, index) => (
            <ServiceCard
              key={`${service.title}-${currentIndex}-${index}`}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;