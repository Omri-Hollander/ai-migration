import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Seamless Migration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've perfected our migration system through hundreds of successful Shopify to WordPress transitions.
          </p>
        </div>
        
        <div className="relative">
          {/* Process timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 transform -translate-x-1/2"></div>
          
          {/* Step 1 */}
          <div className="relative mb-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                <div className="md:text-right">
                  <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Step 1
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Discovery & Planning
                  </h3>
                  <p className="text-gray-600">
                    We analyze your Shopify store structure, products, content, and customer data.
                    Together, we'll create a detailed migration plan customized to your specific needs.
                  </p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
                  1
                </div>
              </div>
              
              <div className="w-full md:w-1/2 md:pl-12">
                <img 
                  src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Discovery and Planning" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative mb-16">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0">
                <div className="md:text-left">
                  <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Step 2
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    WordPress Setup & Design
                  </h3>
                  <p className="text-gray-600">
                    We set up your WordPress site with WooCommerce, install necessary plugins, and customize your theme
                    to match or improve upon your current Shopify design.
                  </p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
                  2
                </div>
              </div>
              
              <div className="w-full md:w-1/2 md:pr-12">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="WordPress Setup and Design" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative mb-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                <div className="md:text-right">
                  <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Step 3
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Content & Data Migration
                  </h3>
                  <p className="text-gray-600">
                    We migrate all your products, categories, customer accounts, orders, blog posts, pages, and media
                    to your new WordPress site with precision.
                  </p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
                  3
                </div>
              </div>
              
              <div className="w-full md:w-1/2 md:pl-12">
                <img 
                  src="https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Content and Data Migration" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0">
                <div className="md:text-left">
                  <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Step 4
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Testing & Launch
                  </h3>
                  <p className="text-gray-600">
                    We thoroughly test your new store to ensure everything works flawlessly, then coordinate a seamless
                    transition with zero downtime for your business.
                  </p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center justify-center z-10">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
                  4
                </div>
              </div>
              
              <div className="w-full md:w-1/2 md:pr-12">
                <img 
                  src="https://images.pexels.com/photos/7604425/pexels-photo-7604425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testing and Launch" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;