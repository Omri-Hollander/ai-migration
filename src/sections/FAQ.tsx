import React from 'react';
import FAQItem from '../components/FAQItem';

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How long does the migration process take?",
      answer: "The typical migration timeframe is 1-2 weeks, depending on the size and complexity of your Shopify store. This includes planning, setup, data migration, testing, and final launch. We'll provide you with a specific timeline after our initial discovery call."
    },
    {
      question: "Will my SEO rankings be affected?",
      answer: "We implement a comprehensive SEO preservation strategy to maintain your search rankings. This includes setting up proper 301 redirects, preserving URL structures when possible, and transferring all meta data. Most clients actually see improved SEO performance after migration due to WordPress's superior SEO capabilities."
    },
    {
      question: "What happens to my existing Shopify apps and functionality?",
      answer: "We'll find equivalent WordPress plugins or custom solutions for all your essential Shopify apps. During our discovery phase, we'll create a complete inventory of your current functionality and ensure everything is replicated or improved in your new WordPress store."
    },
    {
      question: "How much will I save by switching from Shopify to WordPress?",
      answer: "Most of our clients save between $1,000-$5,000 annually, depending on their current Shopify plan and app subscriptions. WordPress + WooCommerce only requires hosting costs (typically $20-50/month) and any premium plugin costs you choose. There are no transaction fees or mandatory monthly subscriptions."
    },
    {
      question: "Will my store experience any downtime during migration?",
      answer: "No. We build your WordPress store on a staging environment while your Shopify store continues to operate normally. Only when everything is tested and ready do we switch over, typically taking just minutes to update DNS settings."
    },
    {
      question: "What training and support do you provide after migration?",
      answer: "Every migration package includes comprehensive training on managing your new WordPress store and 30 days of post-migration support. We also offer optional extended support packages for ongoing assistance and maintenance."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about migrating from Shopify to WordPress.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions about migrating your Shopify store?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-md transition-colors"
          >
            Contact Us for Answers
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;