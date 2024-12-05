import React, { useState, useEffect } from 'react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.feature-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      title: "AI-Powered Process Optimization",
      icon: "🤖",
      description: "Optimize manufacturing processes with advanced AI algorithms",
      benefits: [
        "30% reduction in production time",
        "Real-time quality control",
        "Predictive maintenance",
        "Resource optimization"
      ]
    },
    {
      id: 2,
      title: "Smart Factory Integration",
      icon: "🏭",
      description: "Seamlessly connect all your manufacturing equipment",
      benefits: [
        "Centralized control system",
        "IoT sensor integration",
        "Automated workflows",
        "Real-time monitoring"
      ]
    },
    {
      id: 3,
      title: "Advanced Analytics Dashboard",
      icon: "📊",
      description: "Comprehensive insights into your manufacturing operations",
      benefits: [
        "Custom KPI tracking",
        "Performance analytics",
        "Trend analysis",
        "Automated reporting"
      ]
    },
    {
      id: 4,
      title: "Digital Twin Technology",
      icon: "🔄",
      description: "Virtual replica of your manufacturing processes",
      benefits: [
        "Process simulation",
        "Risk-free testing",
        "Optimization modeling",
        "Predictive analysis"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 to-purple-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-text-glow">
            Innovative Features
          </h2>
          <p className="text-purple-200 text-lg max-w-3xl mx-auto">
            Transform your manufacturing process with our cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              id={`feature-${feature.id}`}
              className={`feature-card transform transition-all duration-500 
                ${isVisible[`feature-${feature.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div
                className={`bg-white/10 backdrop-blur-md p-8 rounded-2xl cursor-pointer
                          border border-purple-500/30 transition-all duration-300
                          hover:bg-white/20 hover:border-purple-500/60 hover:scale-105
                          ${activeFeature === feature.id ? 'bg-white/20' : ''}`}
                onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl animate-bounce-subtle">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-purple-200 mb-4">{feature.description}</p>
                    
                    <div className={`grid grid-cols-1 gap-3 overflow-hidden transition-all duration-300
                                  ${activeFeature === feature.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {feature.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-purple-200"
                        >
                          <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#demo"
            className="inline-block px-8 py-4 bg-white text-purple-900 rounded-full 
                     font-bold text-lg transition-all duration-300 
                     hover:scale-105 hover:shadow-xl hover:rotate-1
                     animate-bounce-subtle"
          >
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
