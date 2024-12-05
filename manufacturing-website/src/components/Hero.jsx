import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(159, 122, 234, ${Math.random() * 0.5})`; // Purple with random opacity
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas id="particle-canvas" className="absolute top-0 left-0 w-full h-full -z-10" />
      
      <div className="relative bg-gradient-to-r from-purple-light/80 to-white/80 backdrop-blur-sm pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center perspective-1000">
            <div className="transform-3d rotate-x-10 mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-purple-dark mb-6 opacity-0 animate-fadeInUp">
                Revolutionizing AI Solutions<br />
                <span className="animate-text-shine">for Modern Business</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 opacity-0 animate-fadeInUp animate-delay-200">
                Empowering businesses with cutting-edge AI technology and innovative solutions
              </p>
              <button className="bg-gradient-purple text-white px-8 py-4 rounded-full text-lg hover:bg-gradient-purple-dark transition-all hover:scale-105 opacity-0 animate-scaleIn animate-delay-300 hover:shadow-purple">
                Transform Your Business
              </button>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 perspective-1000">
              <div className="transform hover:scale-105 hover:rotate-y-180 transition-transform duration-500">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 opacity-0 animate-slideInLeft animate-glow">
                  <div className="text-5xl mb-4 animate-float">🤖</div>
                  <h3 className="text-xl font-bold text-primary mb-3 animate-pulse-slow">AI-Powered Analytics</h3>
                  <p className="text-gray-600">Real-time insights and predictive modeling</p>
                </div>
              </div>
              
              <div className="transform hover:scale-105 hover:rotate-y-180 transition-transform duration-500">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 opacity-0 animate-slideInLeft animate-delay-200 animate-glow">
                  <div className="text-5xl mb-4 animate-shake">⚡</div>
                  <h3 className="text-xl font-bold text-primary mb-3 animate-pulse-slow">Smart Automation</h3>
                  <p className="text-gray-600">Streamline workflows with intelligent automation</p>
                </div>
              </div>
              
              <div className="transform hover:scale-105 hover:rotate-y-180 transition-transform duration-500">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 opacity-0 animate-slideInLeft animate-delay-300 animate-glow">
                  <div className="text-5xl mb-4 animate-float">🔒</div>
                  <h3 className="text-xl font-bold text-primary mb-3 animate-pulse-slow">Enhanced Security</h3>
                  <p className="text-gray-600">Advanced ML-based threat detection</p>
                </div>
              </div>
              
              <div className="transform hover:scale-105 hover:rotate-y-180 transition-transform duration-500">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 opacity-0 animate-slideInLeft animate-delay-400 animate-glow">
                  <div className="text-5xl mb-4 animate-shake">📈</div>
                  <h3 className="text-xl font-bold text-primary mb-3 animate-pulse-slow">Scalable Growth</h3>
                  <p className="text-gray-600">Future-proof solutions that grow with you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
