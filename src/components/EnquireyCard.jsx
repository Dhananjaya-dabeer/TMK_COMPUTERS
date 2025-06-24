import { MoveRight } from "lucide-react";
import React from "react";

const EquireyCard = () => {
  return (
    <div className=" flex flex-col justify-between space-y-16  border border-[#1F1F1F] rounded-2xl py-10 px-20">
      <div className="flex justify-between">
        <div>
          <p>Name</p>
          <input
            type="text"
            className="bg-black text-[#666666] border border-[#1F1F1F] rounded-r-3xl rounded-l-3xl py-3 px-5"
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            className="bg-black text-[#666666] border border-[#1F1F1F] rounded-r-3xl rounded-l-3xl py-3 px-5"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <p>Phone Number</p>
          <input
            type="number"
            className="bg-black text-[#666666] border border-[#1F1F1F] rounded-r-3xl rounded-l-3xl py-3 px-5"
            placeholder="Enter your Phone Number"
          />
        </div>
      </div>
      <div className="flex justify-around">
        <div>
          <p>Select Services</p>
          <select
            name=""
            id=""
            className="bg-black text-[#666666] border border-[#1F1F1F] rounded-r-3xl rounded-l-3xl py-3 px-5 "
          >
            <option value="">Select your Service</option>
          </select>
        </div>
        <div>
          <p>Company / Organization Name</p>
          <input
            type="text"
            className="bg-black text-[#666666] border border-[#1F1F1F] rounded-r-3xl rounded-l-3xl py-3 px-5"
            placeholder="Enter Name "
          />
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        <p>Message</p>
        <input
          placeholder="Enter Your Message"
          className="bg-black text-[#666666] border border-[#1F1F1F] rounded-r-3xl rounded-l-3xl p-20"
          name=""
          id=""
        />
      </div>

      <div className="flex justify-center mb-5">
        <button className="flex p-3 bg-[#1A1A1A] border-[#262626] border rounded-r-3xl rounded-l-3xl">
          Send Your Enquiry <MoveRight className="ml-2" />{" "}
        </button>
      </div>
    </div>
  );
};

export default EquireyCard;
