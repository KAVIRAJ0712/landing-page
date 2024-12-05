import React from 'react';

const PricingCard = ({ title, price, features, isPopular }) => (
  <div className={`p-8 rounded-lg ${isPopular ? 'bg-primary text-white' : 'bg-gray-900 text-white'}`}>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="mb-6">
      <span className="text-3xl font-bold">${price}</span>
      <span className="text-gray-300">/mo</span>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-2 rounded-full ${isPopular ? 'bg-white text-primary' : 'bg-primary text-white'} hover:opacity-90`}>
      Get Started
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      price: "39",
      features: [
        "Production up to 1,000 units/month",
        "24/7 tech support",
        "Quality control monitoring",
        "Basic analytics"
      ]
    },
    {
      title: "Enterprise",
      price: "99",
      features: [
        "Unlimited production units",
        "Dedicated account manager",
        "Premium manufacturing solutions",
        "Advanced analytics dashboard"
      ],
      isPopular: true
    }
  ];

  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tailored Plans for Your<br />Manufacturing Scale
          </h2>
          <p className="text-gray-400">
            Flexible pricing to any business size
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Professional</h3>
            <p className="text-gray-400 mb-4">Designed for large-scale manufacturing needs</p>
            <button className="bg-secondary text-primary px-8 py-2 rounded-full hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
