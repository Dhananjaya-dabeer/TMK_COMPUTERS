const GetInTouchCard = () => {
  return (
    <div className=" mx-auto rounded-2xl border border-[#1F1F1F]">
      <section className="relative min-h-40 w-full">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern
              id="linearPattern"
              x="-10"
              y="-10"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect width="40" height="40" fill="#4D4D4D" />
              <circle cx="10" cy="10" r="10" fill="#222" />
              <circle cx="30" cy="10" r="10" fill="#222" />
              <circle cx="10" cy="30" r="10" fill="#222" />
              <circle cx="30" cy="30" r="10" fill="#222" />
            </pattern>

            <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="black" stopOpacity="0" />
              <stop offset="60%" stopColor="black" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="fadeMask">
              <rect width="100%" height="100%" fill="url(#fadeGradient)" />
            </mask>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#linearPattern)"
            mask="url(#fadeMask)"
          />
        </svg>
      </section>

      <div>
        <div>
          <h1 className="text-4xl text-center mt-10 mb-7 ">
            <span className="text-[#666666] ">Get in </span>
            Touch with Us Today!
          </h1>
        </div>
        <div className="text-justify last-line-center p-12 text-[#808080]">
          At TMK COMPUTERS , we value your inquiries, feedback, and
          collaborations. Whether you are interested in our digital services,
          have questions about our projects, or want to explore potential
          partnerships, we encourage you to reach out to our dedicated team.
          Connect with us through any of the channels below, and we'll be
          delighted to assist you on your digital journey.
        </div>
        <div className="flex justify-center my-3">
          <p className="border border-[#1F1F1F] rounded-r-3xl rounded-l-3xl p-2">
            Feel free to contact us through any of the following channels
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchCard;
