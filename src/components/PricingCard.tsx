import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-xl p-8 ${isPopular ? 'border-2 border-blue-500 relative' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="mb-8">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-500 ml-2">one-time</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${feature.included ? 'text-green-500' : 'text-gray-300'}`} />
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <a
        href="#contact"
        className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
          isPopular
            ? 'bg-blue-700 text-white hover:bg-blue-800'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
};

export default PricingCard;