import React from "react";

const JourneyCard = ({ icon, title, description, uniqueId }) => {
  return (
    <div
      className="group py-20 from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-r border-r-gray-700/50
 p-8 hover:border-gray-600/50 transition-all duration-500 "
      key={uniqueId}
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600 group-hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
            <img
              src={icon}
              className="w-full h-full text-gray-300 group-hover:text-blue-400 transition-colors duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        <button className="inline-flex items-center bg-[#262626] p-3 rounded-l-3xl rounded-r-3xl text-gray-400 hover:text-blue-400 transition-colors duration-300 group-hover:translate-x-1 transform">
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default JourneyCard;
