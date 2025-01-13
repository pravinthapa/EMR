import React from "react";

export default function PersonalDetails() {
  return (
    <div>
      {/* Form */}
      <div className="flex justify-between">
        <div className="sm:col-span-2 ml-12">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span className="ml-2">New Visit</span>
          </label>
        </div>
        <div className="mr-12">
          <label className="block text-sm font-medium mb-1">
            Department to Send
          </label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2">OPD</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2">ER</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2">ANC</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-around ">
        <div className="w-[25%]">
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-[25%]">
          <label className="block text-sm font-medium mb-1">Middle Name</label>
          <input
            type="text"
            placeholder="Enter Middle Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-[25%]">
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-around">
        <div className="w-[25%]">
          <label className="block text-sm font-medium mb-1">
            Time of Birth
          </label>
          <input
            type="time"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-[25%]">
          <label className="block text-sm font-medium mb-1">
            Date of Birth (B.S)
          </label>
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-[25%]">
          <label className="block text-sm font-medium mb-1">Age</label>
          <input
            type="number"
            placeholder="Age"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="w-[25%]">
          <label className="block text-sm font-medium mb-1">Annual ID</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-[25%]">
          <label className="block text-sm font-medium mb-1">
            Caste Details
          </label>
          <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Janjati</option>
            <option value="1">Other</option>
          </select>
        </div>

        <div className="sm:col-span-2 w-[25%]">
          <label className="block text-sm font-medium mb-1">Gender</label>
          <div className="flex flex-col ">
            <label className="flex  items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                className="form-radio text-blue-500"
              />
              <span className="">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="form-radio text-blue-500"
              />
              <span className="">Female</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
