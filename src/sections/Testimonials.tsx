import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Moving from Shopify to WordPress was the best business decision we made last year. We're saving over $2,400 annually in subscription fees and our conversion rate has improved by 18% with our custom-designed store.",
      author: "Sarah",
      role: "Founder",
      company: "Sustainable Living Store",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The migration was smooth and professional. I was worried about losing data or sales during the transition, but everything transferred perfectly with zero downtime. Now I have complete control over my online store.",
      author: "Michael",
      role: "CEO",
      company: "Premium Electronics",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "After years on Shopify, I was hesitant to switch, but the WordPress + WooCommerce combination gives us so much more flexibility. We can finally customize our checkout process exactly how we want it.",
      author: "Emma",
      role: "E-commerce Director",
      company: "Boutique Collection",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from business owners who successfully migrated from Shopify to WordPress.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-blue-100 rounded-full p-6 inline-flex">
                  <svg className="h-16 w-16 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Our Migration Guarantee
                </h3>
                <p className="text-gray-600 mb-4">
                  We guarantee a seamless transition with zero data loss and no downtime for your store. If you're not 100% satisfied with your migration, we'll fix any issues at no additional cost.
                </p>
                <a 
                  href="#contact" 
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded-md transition-colors"
                >
                  Get Your Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;