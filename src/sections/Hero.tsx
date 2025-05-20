import React from 'react';
import { ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-10 md:pt-32 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              Escape Shopify's Limitations with 
              <span className="text-blue-700"> WordPress Freedom</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Seamlessly migrate your Shopify store to WordPress + WooCommerce. Gain complete control,
              save on monthly fees, and unlock unlimited customization potential.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md font-medium flex items-center transition-colors"
              >
                Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a
                href="#process"
                className="text-blue-700 hover:text-blue-800 font-medium flex items-center transition-colors"
              >
                See How It Works <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <span className="flex items-center mr-4">
                <svg className="h-5 w-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Zero Downtime
              </span>
              
              <span className="flex items-center mr-4">
                <svg className="h-5 w-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Full Data Migration
              </span>
              
              <span className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free 30-Day Support
              </span>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 p-2 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <img
                src="src/ShopifyToWordpress.png"
                alt="Shopify to WordPress Migration"
                className="rounded-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
