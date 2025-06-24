import React from "react";
import pc from "../../src/assets/pc.svg";
import rocketIcon from "../../src/assets/rocketIcon.svg";
import switchIcon from "../../src/assets/switch.svg";
import money from "../../src/assets/money.svg";
import crowd from "../../src/assets/crowd.svg";
import media from "../../src/assets/crowd.svg";
import lab from "../../src/assets/lab.svg";
import eCommerce from "../../src/assets/eCommerce.svg";
import terminal from "../../src/assets/terminal.svg";
import ServiceCard from "./ServiceCard";
const Services = () => {
  const services = [
    {
      icon: pc,
      title: "IT Consultation",
      description:
        "Get expert advice to align your IT strategy with business goals. We optimize your tech infrastructure for efficiency, scalability, and growth.",
    },
    {
      icon: switchIcon,
      title: "Market Research",
      description:
        "Gain valuable insights into your target market. Our data-driven research helps you make informed decisions and stay ahead of the competition.",
    },
    {
      icon: rocketIcon,
      title: "Startup Consultation",
      description:
        "Turn your idea into a viable business. We guide startups with planning, product strategy, and go-to-market execution.",
    },
    {
      icon: money,
      title: "Private Equity & Venture Capital",
      description:
        "Connect with top investors. We help you pitch and grow with the right funding.",
    },
    {
      icon: crowd,
      title: "Crowdfunding Services",
      description:
        "Launch your campaign with confidence. From strategy to promotion, we help you attract supporters and meet funding goals.",
    },
    {
      icon: media,
      title: "Media & Streaming Platform",
      description:
        "Create video, audio, and live platforms that are secure, scalable, and user-friendly.",
    },
    {
      icon: lab,
      title: "Maker's Lab",
      description:
        "Innovate, experiment, and build. Our Maker's Lab offers a creative tech space to prototype, test, and launch new ideas.",
    },
    {
      icon: eCommerce,
      title: "E-commerce, Retail & Loyalty",
      description:
        "Launch and grow your online store with smart e-commerce and loyalty solutions.",
    },
    {
      icon: terminal,
      title: "IT Consultation",
      description:
        "Align your tech with your business goals. We offer expert IT guidance for scalable and efficient growth.",
    },
  ];
  return (
    <section className="min-h-screen container mx-auto">
      <div className="flex flex-col space-y-10">
        <h1 className="text-6xl text-[#666666] text-center">
          Our <span className="text-white">Services</span>
        </h1>
        <p>
          Our comprehensive range of services includes web design, mobile app
          development, SEO, social media marketing, and more. Whether you're a
          startup or an established enterprise, our experts will craft solutions
          that drive results.
        </p>
      </div>
      <div className="px-6 py-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-20 max-w-7xl mx-auto py-5 gap-3">
          {services.map((service, index) => (
            <ServiceCard
              uniqueId={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
