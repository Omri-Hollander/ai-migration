import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  accentColor = 'blue'
}) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-700',
    orange: 'bg-orange-100 text-orange-700',
    green: 'bg-green-100 text-green-700',
    purple: 'bg-purple-100 text-purple-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    teal: 'bg-teal-100 text-teal-700'
  };
  
  const colorClass = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.blue;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
      <div className={`inline-flex p-3 rounded-full mb-5 ${colorClass}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;