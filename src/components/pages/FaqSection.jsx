import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

// FAQ data
const FAQ_DATA = [
  {
    question: 'What is RMax?',
    answer: 'Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.'
  },
  {
    question: 'How does it work?',
    answer: 'Our platform provides intuitive tools and features for business management, including customer relationship management, scheduling, invoicing, and more.'
  },
  {
    question: 'How much does it cost?',
    answer: 'We offer flexible pricing plans starting from $17/month for basic features. Check our pricing section for detailed information about plan features and costs.'
  }
];

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="relative mb-6 sm:mb-8">
    <input
      type="text"
      placeholder="Ask Q! e.g Tell me about key Features."
      className="w-full p-3 sm:p-4 pr-10 sm:pr-12 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300 text-sm sm:text-base"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button
      className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-red-500 hover:text-red-600"
      aria-label="Search"
    >
      <Search size={18} className="sm:w-5 sm:h-5" />
    </button>
  </div>
);

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full p-3 sm:p-4 text-left flex justify-between items-center hover:bg-gray-50 gap-4"
      onClick={onToggle}
    >
      <span className="font-medium text-sm sm:text-base">{faq.question}</span>
      {isOpen ? (
        <ChevronUp className="text-gray-500 flex-shrink-0" size={18} />
      ) : (
        <ChevronDown className="text-gray-500 flex-shrink-0" size={18} />
      )}
    </button>
    {isOpen && (
      <div className="p-3 sm:p-4 bg-gray-50 border-t border-gray-200">
        <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
      </div>
    )}
  </div>
);

const Header = () => (
  <div className="text-center mb-8 sm:mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
      Frequently Asked Questions
    </h2>
    <p className="text-gray-600 mb-2 text-sm sm:text-base">
      Find answers to common questions about our services and features.
    </p>
    <p className="text-gray-600 text-sm sm:text-base">
      For more details, contact our support team.
    </p>
  </div>
);


const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestion, setOpenQuestion] = useState('What is RMax?');

  const filteredFaqs = FAQ_DATA.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQuestionToggle = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 sm:py-12 md:py-16">
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="space-y-3 sm:space-y-4">
        {filteredFaqs.map((faq) => (
          <FAQItem
            key={faq.question}
            faq={faq}
            isOpen={openQuestion === faq.question}
            onToggle={() => handleQuestionToggle(faq.question)}
          />
        ))}
      </div>

      <div className="text-center mt-6 sm:mt-8">
        <p className="text-gray-600 text-sm sm:text-base">
          Haven't got your answer?{' '}
          <Link to="/support" className="text-blue-600 hover:text-blue-700">
            Contact our support now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FAQSection;