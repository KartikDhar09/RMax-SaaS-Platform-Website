export const VALIDATION_RULES = {
    businessName: {
      required: 'Business name is required',
      minLength: { value: 6, message: 'Business name must be at least 6 characters' },
      maxLength: { value: 50, message: 'Business name cannot exceed 50 characters' },
      pattern: { 
        value: /^[a-zA-Z0-9\s&'-]+$/,
        message: 'Business name can only contain letters, numbers, spaces, and &\'-'
      }
    },
    userName: {
      required: 'Your name is required',
      minLength: { value: 2, message: 'Name must be at least 2 characters' },
      maxLength: { value: 50, message: 'Name cannot exceed 50 characters' },
      pattern: {
        value: /^[a-zA-Z\s'-]+$/,
        message: 'Name can only contain letters, spaces, and \'-'
      }
    },
    phoneNumber: {
      required: 'Phone number is required',
      pattern: {
        value: /^[0-9]{10}$/,
        message: 'Please enter a valid 10-digit phone number'
      }
    },
    email: {
      required: 'Email address is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Please enter a valid email address'
      }
    },
    message: {
      required: 'Message is required',
      minLength: { value: 10, message: 'Message must be at least 10 characters' },
      maxLength: { value: 500, message: 'Message cannot exceed 500 characters' }
    }
  };