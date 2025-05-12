import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

const PopupOffer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-fade-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">
            Limited Time Offer – Migrate for Just $99!
          </h3>
          <p className="text-gray-600">
            Get your store migrated professionally with our Basic Package
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>Complete data migration with zero downtime</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>60 days of technical support included</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>30-day money-back guarantee</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>24/7 support request reception</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <p className="text-blue-700 font-medium text-center">
            Pay only after your website is successfully migrated!
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <a
            href="#contact"
            onClick={() => setIsVisible(false)}
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors"
          >
            Claim My Spot
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupOffer;