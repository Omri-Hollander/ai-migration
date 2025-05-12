import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  storeUrl: string;
  message: string;
}

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    storeUrl: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Validate form
    if (!formData.name || !formData.email || !formData.storeUrl) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          storeUrl: '',
          message: '',
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Get Your Free Migration Quote</h3>
      
      {isSubmitted ? (
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-medium text-green-800">Thank You!</h4>
          <p className="mt-2 text-green-700">
            We've received your information and will contact you shortly with a custom migration plan.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="John Smith"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="storeUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Current Shopify Store URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              id="storeUrl"
              name="storeUrl"
              value={formData.storeUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="https://your-store.myshopify.com"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Tell us more about your store and migration needs..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md text-white font-medium ${
              isSubmitting ? 'bg-blue-400' : 'bg-blue-700 hover:bg-blue-800'
            } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
          </button>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
            We'll never share your information.
          </p>
        </form>
      )}
    </div>
  );
};

export default LeadForm;