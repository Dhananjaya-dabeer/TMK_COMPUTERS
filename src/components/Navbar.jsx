import React from "react";

const Navbar = ({ setActiveContent }) => {
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
              className="text-white hover:text-gray-300 transition-colors font-medium"
              onClick={() => setActiveContent("home")}
            >
              Home
            </button>
            <button
              href="#"
              className="text-white hover:text-gray-300 transition-colors font-medium"
              onClick={() => setActiveContent("services")}
            >
              Services
            </button>
            <button
              href="#"
              className="text-white hover:text-gray-300 transition-colors font-medium"
              onClick={() => setActiveContent("about")}
            >
              About Us
            </button>
            <button
              href="#"
              className="text-white hover:text-gray-300 transition-colors font-medium"
              onClick={() => setActiveContent("contact")}
            >
              Contact Us
            </button>
            <button
              href="#"
              className="text-white hover:text-gray-300 transition-colors font-medium"
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
