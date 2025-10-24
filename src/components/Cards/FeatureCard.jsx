import React from 'react';

const FeatureCard = ({ title, description, action, onClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      <button 
        onClick={onClick}
        className="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center space-x-1"
      >
        <span>{action}</span>
        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  );
};

export default FeatureCard;