import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header section with company name and social media */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <h2 className="text-2xl font-bold mb-4 lg:mb-0">TMK COMPUTERS</h2>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Follow Us On Social Media</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Home section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Home</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Services section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  IT Consultation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  IT Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Market Research
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Startup Consultation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Private Equity and Venture Capital Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Crowdfunding Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Media & Streaming Platform
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Maker's Lab
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  E-commerce, Retail & Loyalty Platform
                </a>
              </li>
            </ul>
          </div>

          {/* About Us section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Awards
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and legal links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 lg:mb-0">
              ©2025 TMK Computers Pvt. Ltd.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
