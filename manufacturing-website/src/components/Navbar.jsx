import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold animate-neon">
            Doqude
          </div>
          <div className="text-2xl font-bold animate-3d-bounce text-primary">
            AI
          </div>
        </div>

        <div className="space-x-8">
          <a 
            href="Hero" 
            className="nav-link text-gray-600 hover:text-primary animate-slide-in animate-text-shine font-semibold"
            style={{ animationDelay: '200ms' }}
          >
            Features
          </a>
          <a 
            href="#about-us" 
            className="nav-link text-gray-600 hover:text-primary animate-slide-in animate-text-shine font-semibold"
            style={{ animationDelay: '400ms' }}
          >
            About Us
          </a>
        </div>

        <a 
          href="https://forms.gle/WGXi8HF5phkFUz4ZA" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="animate-gradient text-white px-6 py-2 rounded-full transition-all hover:scale-105 hover:shadow-lg"
        >
         Google Form
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
