import React from 'react';
import { Wallet, PaintBucket, BarChart3, Settings, Lock, Globe } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Migrate from Shopify to WordPress?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take control of your e-commerce business with a platform that grows with you,
            without growing monthly fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Wallet}
            title="Lower Long-Term Costs"
            description="Eliminate Shopify's monthly fees and transaction charges. With WordPress + WooCommerce, you only pay for hosting and optional premium plugins."
            accentColor="green"
          />
          
          <FeatureCard
            icon={PaintBucket}
            title="Complete Design Freedom"
            description="Break free from Shopify's template constraints. With WordPress, customize every aspect of your store's design without coding restrictions."
            accentColor="purple"
          />
          
          <FeatureCard
            icon={BarChart3}
            title="Better SEO Control"
            description="WordPress is built for SEO success. Gain access to powerful optimization tools, complete URL control, and faster page load times."
            accentColor="blue"
          />
          
          <FeatureCard
            icon={Settings}
            title="Full Ownership & Control"
            description="Own your platform entirely. No more unexpected feature changes or price increases from third-party platforms."
            accentColor="orange"
          />
          
          <FeatureCard
            icon={Lock}
            title="No Vendor Lock-In"
            description="Maintain complete data ownership with easy export options. You're never trapped in a closed ecosystem with WordPress."
            accentColor="teal"
          />
          
          <FeatureCard
            icon={Globe}
            title="Unlimited Scalability"
            description="WordPress powers over 40% of the web, from small businesses to Fortune 500 companies. Your store can grow without platform limitations."
            accentColor="indigo"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-md transition-colors"
          >
            Start Your Migration Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;