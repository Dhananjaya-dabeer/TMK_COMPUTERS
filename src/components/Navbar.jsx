import React from "react";

const Navbar = ({ setActiveContent, activeContent }) => {
  return (
    <header className="bg-black z-50 top-0 sticky border-b border-b-[#0F0F0F33] shadow-sm ">
      <div className="px-6 py-6">
        <nav className="flex items-center justify-between">
          <button
            className="text-2xl font-bold tracking-wide"
            onClick={() => setActiveContent("home")}
          >
            TMK COMPUTERS
          </button>
          <div className="hidden md:flex space-x-8">
            <button
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                activeContent === "home" &&
                `bg-[#1F1F1F] px-4 py-3 rounded-r-3xl rounded-l-3xl`
              }`}
              onClick={() => setActiveContent("home")}
            >
              Home
            </button>
            <button
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                activeContent === "services" &&
                `bg-[#1F1F1F] px-4 py-3 rounded-r-3xl rounded-l-3xl`
              }`}
              onClick={() => setActiveContent("services")}
            >
              Services
            </button>
            <button
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                activeContent === "about" &&
                `bg-[#1F1F1F] px-4 py-3 rounded-r-3xl rounded-l-3xl`
              }`}
              onClick={() => setActiveContent("about")}
            >
              About Us
            </button>
            <button
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                activeContent === "contact" &&
                `bg-[#1F1F1F] px-4 py-3 rounded-r-3xl rounded-l-3xl`
              }`}
              onClick={() => setActiveContent("contact")}
            >
              Contact Us
            </button>
            <button
              className={`text-white hover:text-gray-300 transition-colors font-medium ${
                activeContent === "career" &&
                `bg-[#1F1F1F] px-4 py-3 rounded-r-3xl rounded-l-3xl`
              }`}
              onClick={() => setActiveContent("career")}
            >
              Career
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
