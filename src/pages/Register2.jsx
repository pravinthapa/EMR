import React from "react";

const Register2 = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Registration / New Patients</h1>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((step, index) => (
            <div
              key={index}
              className={`flex-1 flex items-center ${
                index < 3 ? "text-blue-500" : "text-gray-300"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                  index < 3 ? "bg-blue-500 text-white border-blue-500" : "border-gray-300"
                }`}
              >
                {index + 1}
              </div>
              {index < 3 && <div className="flex-1 border-t-2 border-gray-300"></div>}
            </div>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-blue-500 mb-6 text-center">
          Other Details
        </h2>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relationships
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="alive">Alive</option>
              <option value="deceased">Deceased</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register2;
