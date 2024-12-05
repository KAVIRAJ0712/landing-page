import React, { useEffect, useRef } from 'react';

const Benefits = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observerRef.current.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Feature */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-text-glow">
            Revolutionary AI Manufacturing
          </h2>
          <p className="text-purple-200 text-lg max-w-3xl mx-auto">
            Transform your manufacturing process with cutting-edge AI technology
          </p>
        </div>

        {/* Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: "🔮",
              title: "Predictive Analytics",
              description: "AI-powered insights for optimal production planning"
            },
            {
              icon: "⚡",
              title: "Real-time Monitoring",
              description: "Instant alerts and performance tracking"
            },
            {
              icon: "🎯",
              title: "Quality Assurance",
              description: "Automated quality control and defect detection"
            }
          ].map((card, index) => (
            <div 
              key={index}
              className="animate-on-scroll group perspective-card"
            >
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-glow 
                           transform transition-all duration-500 hover:scale-105 
                           hover:rotate-y-10 hover:bg-white/20">
                <div className="text-5xl mb-4 animate-float">{card.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-purple-200">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-on-scroll">
          {[
            { value: "99%", label: "Accuracy Rate" },
            { value: "50%", label: "Cost Reduction" },
            { value: "2x", label: "Productivity" },
            { value: "24/7", label: "Monitoring" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl font-bold text-white mb-2 
                           group-hover:animate-pulse-fast">{stat.value}</div>
              <div className="text-purple-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-on-scroll">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-purple-900 rounded-full 
                     font-bold text-lg transform transition-all duration-300 
                     hover:scale-105 hover:shadow-xl hover:rotate-1
                     animate-bounce-subtle"
          >
            Start Your AI Journey
          </a>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 
                     bg-purple-600 rounded-full mix-blend-multiply 
                     filter blur-xl opacity-70 animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 
                     bg-purple-400 rounded-full mix-blend-multiply 
                     filter blur-xl opacity-70 animate-float-reverse"></div>
      </div>
    </section>
  );
};

export default Benefits;
