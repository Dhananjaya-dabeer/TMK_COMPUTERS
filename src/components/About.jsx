import React from "react";
import rocket from "../../src/assets/Rocket.svg";
import GetInTouchCard from "./GetInTouchCard";
import ContactCard from "./ContactCard";
import EnquireyCard from "./EnquireyCard";
import FeatureCard from "./FeatureCard";
const About = () => {
  return (
    <div>
      <section className="relative min-h-screen flex items-center">
        <svg className="w-[50%] h-[60%] absolute inset-0">
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

            <linearGradient
              id="fadeGradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
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

        <div className="px-6 relative z-10 container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 max-w-2xl">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  About <span className="text-gray-500">Us</span>
                </h1>

                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed italic">
                    TMK Computers is a software company based in Pune, India.
                    Our Specialization is in designing and building cloud-native
                    large distributed systems. We are building softwares in
                    various domains like banking, loyalty, e-commerce,
                    retailing, tourism, entertainment, etc. We are company with
                    Agile Principles & Values.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Content - Rocket Illustration */}
            <div className="flex justify-end items-center">
              <img
                src={rocket}
                alt="Image"
                className="max-w-[456px] max-h-[496px]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto container px-6">
        <GetInTouchCard />
        <div className="m-10 text-xl">
          <h2 className="text-center">Contact Us Via</h2>
        </div>
        <ContactCard />
        <div className="flex flex-col items-center m-10">
          <h1 className="text-xl">Online Enquiry Form</h1>
          <p className="text-[#808080]">
            Please fill in the following details, and we'll get back to you
            within 24 hours.
          </p>
        </div>
        <EnquireyCard />
        <div className="mt-10 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 justify-between">
            <FeatureCard
              icon="clock"
              title="Our Response"
              description="We understand the importance of timely responses, and our team is committed to addressing your inquiries promptly. Whether you have a specific project in mind, need advice on digital strategies, or want to explore partnership opportunities, we are here to assist you at every step."
            />
            <FeatureCard
              icon="shield"
              title="Privacy Assurance"
              description="At TMK Computers, we prioritize your privacy and protect your personal information in compliance with data protection regulations. Rest assured that your details will only be used for the purpose of addressing your inquiries and will not be shared with third parties without your consent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
