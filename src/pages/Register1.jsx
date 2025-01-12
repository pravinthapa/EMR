import React from "react";

const Register1 = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Registration / New Patients</h1>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((step, index) => (
            <div
              key={index}
              className={`flex-1 flex items-center ${
                index < 2 ? "text-blue-500" : "text-gray-300"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center border rounded-full ${
                  index < 2 ? "bg-blue-500 text-white" : "border-gray-300"
                }`}
              >
                {index + 1}
              </div>
              {index < 3 && <div className="flex-1 border-t-2 border-gray-300"></div>}
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold text-blue-500 mb-4">
          Address Details
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">District</label>
            <input
              type="text"
              placeholder="Enter District"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              type="text"
              placeholder="Enter Country"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">VDC/Municipality</label>
            <input
              type="text"
              placeholder="Enter VDC/Municipality"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ward</label>
            <input
              type="text"
              placeholder="Enter Ward"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Province</label>
            <input
              type="text"
              placeholder="Enter Province"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">National ID</label>
            <input
              type="text"
              placeholder="Enter National ID"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Alternative Number
            </label>
            <input
              type="text"
              placeholder="Enter Alternative Number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register1;
