import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Logo } from "./Logo.jsx";
import { ContactForm } from "./ContactForm.jsx";
import { ConfirmationDialog } from "./ConfirmationDialog.jsx";
import { SuccessMessage } from "./SuccessMessage.jsx";
import { ContactInfoItem } from "./ContactInfoItem.jsx";

const SupportPage = () => {
  const formRef = useRef(null);
  const confirmationRef = useRef(null);
  const { reset } = useForm();
  const [submissionState, setSubmissionState] = useState({
    isSubmitted: false,
    data: null,
    confirmed: false
  });

  const handleFormSubmit = (data) => {
    setSubmissionState({ isSubmitted: true, data, confirmed: false });
    
    setTimeout(() => {
      confirmationRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 0);
  };

  const handleConfirm = () => {
    console.log("Form submitted with data:", submissionState.data);
    setSubmissionState(prev => ({ ...prev, confirmed: true }));
    reset();
  };

  const handleEdit = () => {
    setSubmissionState({ isSubmitted: false, data: null, confirmed: false });
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full min-h-screen px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <div className="flex items-center justify-center mb-8">
          <Logo />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2">Get in touch with us.</h1>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-12">We're here to assist you.</h2>
        </div>
      </div>
      {/* Form Section */}
      <div className="max-w-3xl mx-auto mb-16" ref={formRef}>
        <ContactForm
          onSubmit={handleFormSubmit}
          isSubmitted={submissionState.isSubmitted}
        />
        {submissionState.isSubmitted && !submissionState.confirmed && (
          <div ref={confirmationRef}>
            <ConfirmationDialog
              data={submissionState.data}
              onEdit={handleEdit}
              onConfirm={handleConfirm}
            />
          </div>
        )}
        {submissionState.confirmed && <SuccessMessage />}
      </div>
      {/* Contact Info Section */}
      <div className="border-t p-4 md:p-8 bg-gray-100 w-full">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm mb-4">Contact Info</h3>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-12">
              <span className="block">We are always</span>
              <span className="block">happy to assist you</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ContactInfoItem
                title="Email Address"
                content="Support@RMax.com"
                hours={true}
              />
              <ContactInfoItem
                title="Contact Number"
                content="+91-8657491236"
                hours={true}
              />
              <ContactInfoItem
                title="Office Address"
                content={
                  <>
                    123 Business Avenue,<br />
                    Tech Hub District,<br />
                    New York, NY 10001
                  </>
                }
                hours={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;