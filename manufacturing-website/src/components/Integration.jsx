import React from 'react';

const Integration = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Top Companies<br />with Seamless Integrations
            </h2>
            <p className="text-gray-600 mb-8">
              Experience seamless integration with all your essential industries, designed to streamline your manufacturing process while maintaining quality.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90">
              Work With Us
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="bg-secondary rounded-lg p-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary bg-opacity-20 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
