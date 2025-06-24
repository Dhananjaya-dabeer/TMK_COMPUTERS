import { Clock, Shield } from "lucide-react";
const FeatureCard = ({ icon, title, description }) => {
  const IconComponent = icon === "clock" ? Clock : Shield;

  return (
    <div className="bg-black border border-[#1F1F1F] text-white p-8 rounded-2xl h-80 justify-center items-center">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-gray-900" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
