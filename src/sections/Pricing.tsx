import React from 'react';
import PricingCard from '../components/PricingCard';
import { ShieldCheck } from 'lucide-react';

const Pricing: React.FC = () => {
  const basicFeatures = [
    { text: 'Pre-migration Technical Consultancy', included: true },
    { text: 'Unlimited Free Demo Migration', included: true },
    { text: 'Data Migration', included: true },
    { text: 'Perform Migration', included: true },
    { text: 'Additional Migration Options', included: true },
    { text: 'Data Security', included: true },
    { text: 'Unlimited Free Recent Migrations', included: true },
    { text: 'Unlimited Free Smart-update', included: true },
    { text: 'Free Re-migration', included: true },
    { text: '60-day Technical Support', included: true },
    { text: '30-day Money Back Guarantee', included: true },
    { text: 'Exclusive Deals & Discounts From Top-rated Apps', included: true },
    { text: 'Support via Ticket & Email', included: true },
    { text: '24/7 Support Request Reception', included: true },
    { text: '24-hour Response Time Commitment', included: true },
  ];

  const proFeatures = [
    ...basicFeatures,
    { text: 'Priority Support with 12-hour Response Time', included: true },
    { text: 'Custom Theme Development', included: true },
    { text: 'SEO Migration & Optimization', included: true },
    { text: '90-day Technical Support', included: true },
    { text: 'Phone Support', included: true },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your migration needs with our all-inclusive packages.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600/10 to-blue-700/10 rounded-xl p-6 mb-12 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center text-blue-700">
              <ShieldCheck className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">Pay After You Receive Your Website</span>
            </div>
            <span className="text-blue-600 text-sm">No upfront costs, risk-free migration</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            name="Standard Migration"
            price={99}
            description="Perfect for small to medium-sized Shopify stores looking for a seamless transition to WordPress."
            features={basicFeatures}
          />
          
          <PricingCard
            name="Premium Migration"
            price={199}
            description="Ideal for larger stores needing advanced customization and priority support."
            features={proFeatures}
            isPopular={true}
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom solution? Contact us for a tailored migration package.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-md transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;