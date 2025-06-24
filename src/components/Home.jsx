import rocket from "../../src/assets/Rocket.svg";
import Sparkles from "../../src/assets/Star.svg";
import Lightbulb from "../../src/assets/Idea.svg";
import Zap from "../../src/assets/Cursor.svg";
import Smartphone from "../../src/assets/Mobile.svg";
import Bolt from "../../src/assets/Thunder.svg";
import Utility from "../../src/assets/Utility.svg";
import JourneyCard from "./JourneyCard";

const Home = () => {
  const digitalJourney = [
    {
      icon: Sparkles,
      title: "Expertise Across Industries",
      description:
        "We deliver proven solutions for all business types, from startups to enterprises.",
      delay: 100,
    },
    {
      icon: Lightbulb,
      title: "End-to-End Services",
      description: "All your digital needs handled under one roof.",
      delay: 200,
    },
    {
      icon: Zap,
      title: "Creative & Strategic Thinking",
      description: "We mix design flair with smart strategies that work.",
      delay: 300,
    },
    {
      icon: Smartphone,
      title: "Results-Driven Approach",
      description: "We focus on outcomes that grow your business.",
      delay: 400,
    },
    {
      icon: Bolt,
      title: "Cutting-Edge Technology",
      description: "We use the latest tools to keep you ahead of the curve.",
      delay: 500,
    },
    {
      icon: Utility,
      title: "Client-Centric Process",
      description: "Your goals guide every step we take.",
      delay: 600,
    },
  ];

  return (
    <div className="min-h-scree">
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
            {/* 
            <radialGradient id="radialMask" cx="50%" cy="50%" r="75%">
              <stop offset="0%" stop-color="black" />
              <stop offset="60%" stop-color="black" />
              <stop offset="100%" stop-color="white" />
            </radialGradient> */}
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
                  Digital <span className="text-gray-500">Transformation</span>
                </h1>

                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed italic">
                    "Silicon Valley is coming and if banks don't up their game,
                    then tech companies will take over the industry's business.
                    There are hundreds of startups with a lot of brains and
                    money working on various alternatives to traditional
                    banking"
                  </p>

                  <div className="text-white">
                    <p className="font-semibold">
                      Jamie Dimon | Chairman, President
                    </p>
                    <p className="text-gray-400">and CEO of JPMorgan Chase</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
                >
                  Get Started
                </button>
                <button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold bg-transparent"
                >
                  Free Consultation
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
      <section className="min-h-screen container mx-auto">
        <div className="text-6xl flex items-center flex-col gap-5">
          <h1>Reasons to Choose TMK Computers </h1>
          <h1 className="text-[#666666]">Your Digital Journey</h1>
        </div>
        <div className="py-10 px-6">
          <p className="text-[#808080]">
            Partnering with TMK COMPUTERS means choosing innovation,
            reliability, and measurable growth. We help you boost your brand
            presence, enhance user experience, and drive better conversions
            through customized digital solutions. With a focus on strategy,
            creativity, and technology, we turn your vision into impactful
            results.
          </p>
        </div>
        <div className="px-6 py-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-20 max-w-7xl mx-auto py-5">
            {digitalJourney.map((service, index) => (
              <JourneyCard
                uniqueId={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
