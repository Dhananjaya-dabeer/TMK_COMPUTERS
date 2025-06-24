import { Mail, MoveRight, Phone } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="flex space-x-52 p-5 border border-[#1F1F1F] rounded-2xl">
      <div>
        <p className="text-[#808080]">By Mail</p>
        <div className="flex justify-between items-center border border-[#1F1F1F] rounded-l-3xl rounded-r-3xl p-3 min-w-96">
          <div className="flex">
            <Mail className="mr-2" />
            <p>avadhut.kore@tmkcomputers.in</p>
          </div>
          <div className="bg-[#1A1A1A] rounded-r-3xl rounded-l-3xl w-14 h-10 flex justify-center items-center">
            <MoveRight className="rounded-l-3xl rounded-r-3xl" />
          </div>
        </div>
      </div>
      <div className="border border-[#1F1F1F]"></div>
      <div>
        <p className="text-[#808080]">By Phone</p>
        <div className="flex justify-between items-center border border-[#1F1F1F] rounded-l-3xl rounded-r-3xl p-3 min-w-96">
          <div className="flex">
            <Phone className="mr-2" />
            <p>+91 9945282119</p>
          </div>
          <div className="bg-[#1A1A1A] rounded-r-3xl rounded-l-3xl w-14 h-10 flex justify-center items-center">
            <MoveRight className="rounded-l-3xl rounded-r-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
