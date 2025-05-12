import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <ShieldCheck className="h-5 w-5 mr-2" />
            <span className="font-bold text-lg">Pay After You Receive Your Website</span>
          </div>
          <span className="hidden sm:block mx-3">•</span>
          <span className="text-blue-100 text-sm">No upfront costs, risk-free migration</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;