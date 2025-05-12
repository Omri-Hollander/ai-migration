import React from 'react';
import LeadForm from '../components/LeadForm';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Break Free from Shopify and Save?
            </h2>
            
            <p className="text-xl opacity-90 mb-8">
              Get a personalized migration plan and no-obligation quote for your Shopify to WordPress transition. Our experts will analyze your current store and provide custom recommendations.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">What You'll Receive:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom migration plan for your specific store</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Detailed cost breakdown and ROI analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Timeline for implementation with key milestones</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>WordPress theme recommendations for your business</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Expert consultation with a migration specialist</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-4">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120" alt="Customer" className="h-10 w-10 rounded-full border-2 border-blue-800" />
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120" alt="Customer" className="h-10 w-10 rounded-full border-2 border-blue-800" />
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120" alt="Customer" className="h-10 w-10 rounded-full border-2 border-blue-800" />
              </div>
              <p className="text-sm opacity-90">
                Joined by <span className="font-bold">500+</span> store owners who migrated successfully
              </p>
            </div>
          </div>
          
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;