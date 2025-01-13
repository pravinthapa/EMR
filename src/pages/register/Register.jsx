import React, { useState } from "react";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import OtherDetails from "./OtherDetails";
import Summary from "./Summary";
import { Link } from "react-router-dom";

const Register = () => {
  const [active, setActive] = useState(1);
  const Slider = [
    {
      title: "Personal Details",
      id: 1,
    },
    {
      title: "AddressDetails",
      id: 2,
    },
    {
      title: "Other Details",
      id: 3,
    },
    {
      title: "Summary",
      id: 4,
    },
  ];

  return (
    <div className=" bg-white-50 h-[100vh] ">
      <div className="flex justify-between border shadow-md px-6 ">
        <h1 className="text-2xl font-bold py-4 ">
          Registration / New Patients
        </h1>
        <div className="flex gap-2 items-center">
          <div className="flex gap-10 items-center border rounded-lg h-10 px-2">
            <div>
              <h1>General Ward</h1>
            </div>
            <div>
              <CiLocationOn />
            </div>
          </div>

          <button className="flex items-center gap-1 text-gray-700">
            <FaUserCircle className="text-2xl" />
            <FaChevronDown className="text-xs" />
          </button>
        </div>
      </div>

      {/* Stepper */}
      <div className="border-2  h-[70%] w-[75%] ml-[12.5%]  mt-10 px-20 ">
        <div className="flex justify-center items-center gap-32 ">
          {Slider.map((item, index) => (
            <div className="flex flex-col items-center  gap-2" key={index}>
              <div
                onClick={() => setActive(item?.id)}
                className="w-8 h-8 flex items-center justify-center border rounded-full text-blue-500 bg-white "
              >
                {item.id}
              </div>
              <div className={` ${active === item?.id ? " opacity-100" : "opacity-0"}`}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mb-8  ml-32 mt-20"></div>
        {active === 1 ? (
          <PersonalDetails />
        ) : active === 2 ? (
          <AddressDetails />
        ) : active === 3 ? (
          <OtherDetails />
        ) : (
          <Summary />
        )}
      </div>
    </div>
  );
};

export default Register;
