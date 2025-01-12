import React from "react";

const Register = () => {
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
                index < 1 ? "text-blue-500" : "text-gray-300"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center border rounded-full ${
                  index < 1 ? "bg-blue-500 text-white" : "border-gray-300"
                }`}
              >
                {step}
              </div>
              {index < 3 && <div className="flex-1 border-t-2 border-gray-300"></div>}
            </div>
          ))}
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="sm:col-span-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2">New Visit</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Middle Name</label>
            <input
              type="text"
              placeholder="Enter Middle Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Time of Birth</label>
            <input
              type="time"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth (B.S)</label>
            <input
              type="date"
              placeholder="MM/DD/YYYY"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <input
              type="number"
              placeholder="Age"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Annual ID</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Caste Details</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Janjati</option>
              <option value="1">Other</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Department to Send
            </label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2">OPD</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2">ER</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2">ANC</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
