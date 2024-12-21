import { useForm } from "react-hook-form";
import React from 'react';
import { FormInput } from './FormInput';
import { VALIDATION_RULES } from './ValidationRules.js';
export const ContactForm = ({ onSubmit, isSubmitted }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate 
            className={isSubmitted ? 'opacity-50 pointer-events-none' : ''}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <FormInput label="Business Name" error={errors.businessName}>
            <input
              type="text"
              className={`w-full p-3 border rounded-md ${errors.businessName ? 'border-red-500 focus:outline-none ' : 'focus:outline-none'}`}
              placeholder="Search for your business listing"
              {...register('businessName', VALIDATION_RULES.businessName)}
            />
          </FormInput>
  
          <FormInput label="Your Name" error={errors.userName}>
            <input
              type="text"
              placeholder="Enter your name"
              className={`w-full p-3 border rounded-md ${errors.userName ? 'border-red-500 focus:outline-none ' : 'focus:outline-none'}`}
              {...register('userName', VALIDATION_RULES.userName)}
            />
          </FormInput>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <FormInput label="Phone Number" error={errors.phoneNumber}>
            <div className="flex">
              <select className="border rounded-l-md p-3 w-20 md:w-24 appearance-none">
                <option>+91</option>
              </select>
              <input
                type="tel"
                placeholder="e.g 789632145"
                className={`w-full p-3 border-y border-r rounded-r-md ${errors.phoneNumber ? 'border-red-500 focus:outline-none ' : 'focus:outline-none'}`}
                {...register('phoneNumber', VALIDATION_RULES.phoneNumber)}
              />
            </div>
          </FormInput>
  
          <FormInput label="Email Address" error={errors.email}>
            <input
              type="email"
              placeholder="e.g xyz@gmail.com"
              className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500 focus:outline-none ' : 'focus:outline-none'}`}
              {...register('email', VALIDATION_RULES.email)}
            />
          </FormInput>
        </div>
  
        <FormInput label="Message" error={errors.message}>
          <textarea
            placeholder="Write here your message..."
            className={`w-full p-3 border rounded-md h-32 ${errors.message ? 'border-red-500 focus:outline-none ' : 'focus:outline-none'}`}
            {...register('message', VALIDATION_RULES.message)}
          />
        </FormInput>
  
        <div className="mt-6">
          <button className="w-full md:w-auto bg-red-500 text-white px-6 py-3 rounded-md flex items-center justify-center md:justify-start gap-2">
            Leave us a Message
            <span className="text-xl">→</span>
          </button>
        </div>
      </form>
    );
  };