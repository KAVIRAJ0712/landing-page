import React from 'react';

const ServiceCard = ({ title, description }) => (
  <div className="bg-primary bg-opacity-95 p-6 rounded-lg hover:bg-opacity-100 transition-all cursor-pointer">
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-200 text-sm">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Production and Assembly",
      description: "Streamline operations with efficient assembly processes and quality assurance.",
    },
    {
      title: "Custom Manufacturing",
      description: "Custom solutions that align with design and manufacturing requirements.",
    },
    {
      title: "Quality Control",
      description: "Rigorous testing and inspection to ensure product excellence.",
    },
    {
      title: "Technology and Innovation",
      description: "Cutting-edge manufacturing technologies and ongoing innovation.",
    },
    {
      title: "Packaging and Logistics",
      description: "End-to-end packaging solutions designed for efficiency.",
    },
    {
      title: "Consulting Market Research",
      description: "Strategic market analysis and product strategy advice.",
    },
  ];

  return (
    <div className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Efficient and Integrated<br />Manufacturing Services
        </h2>
        <p className="text-gray-300 text-center mb-12">
          Tailored solutions delivering quality manufacturing services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
