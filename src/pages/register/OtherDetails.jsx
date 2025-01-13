import React from "react";

const OtherDetails = () => {
  return (
    <div className=" bg-white flex items-center justify-center ">
      
        {/* Form */}
        <div className="w-[100%] grid  grid-cols-2 pl-24 ">
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relationships
            </label>
            <select
              className="w-[75%] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="parent">Parent</option>
              <option value="spouse">Spouse</option>
              <option value="child">Child</option>
              <option value="sibling">Sibling</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Death Information
            </label>
            <select
              className="w-[75%] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="alive">Alive</option>
              <option value="deceased">Deceased</option>
            </select>
          </div>
        </div>
      </div>
  );
};

export default OtherDetails;
