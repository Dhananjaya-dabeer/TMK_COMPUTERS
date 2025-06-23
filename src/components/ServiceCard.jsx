import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="min-h-[706px] w-[80%] flex flex-col justify-center relative p-6 border border-gray-700/50 rounded-xl bg-black overflow-hidden text-white transform transition duration-300 hover:scale-[1.03] hover:shadow-xl group cursor-pointer">
      {/* Background SVG with slight movement on hover */}
      <svg className="w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 pointer-events-none">
        <defs>
          <pattern
            id="circlePattern"
            x="-10"
            y="-10"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="40" fill="#4D4D4D" opacity="1" />
            <circle cx="10" cy="10" r="10" fill="#222" />
            <circle cx="30" cy="10" r="10" fill="#222" />
            <circle cx="10" cy="30" r="10" fill="#222" />
            <circle cx="30" cy="30" r="10" fill="#222" />
          </pattern>

          <linearGradient id="fadeGradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="black" />
            <stop offset="60%" stopColor="black" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
          <mask id="fadeMask">
            <rect width="100%" height="100%" fill="url(#fadeGradient)" />
          </mask>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#circlePattern)"
          mask="url(#fadeMask)"
        />
      </svg>

      {/* Card Content */}
      <div className="relative z-10 text-center">
        {icon && (
          <div className="flex justify-center">
            <img
              src={icon}
              alt="icon"
              className="w-32 h-40 mb-4 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
