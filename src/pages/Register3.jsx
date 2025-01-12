import React from "react";

const Register3 = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Registration / New Patients</h1>
          <div className="text-gray-700 flex items-center space-x-2">
            <span className="font-medium">General Ward</span>
            <i className="fas fa-user-circle text-xl"></i>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <div className="w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full">
            ✓
          </div>
          <div className="w-20 h-1 bg-blue-500"></div>
          <div className="w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full">
            ✓
          </div>
          <div className="w-20 h-1 bg-blue-500"></div>
          <div className="w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full">
            ✓
          </div>
          <div className="w-20 h-1 bg-blue-500"></div>
          <div className="w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full">
            ✓
          </div>
        </div>

        <h2 className="text-center text-lg font-semibold text-blue-500 mb-8">
          Summary
        </h2>

        {/* Summary Details */}
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <div className="grid grid-cols-2 gap-4 text-lg">
            <div>
              <span className="font-medium">Patient Name: </span>Test
            </div>
            <div>
              <span className="font-medium">Gender: </span>Female
            </div>
            <div className="col-span-2">
              <span className="font-medium">Department to Sent: </span>
              <div className="inline-flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4" defaultChecked />
                  <span>OPD</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>ER</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>ANC</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <span className="font-medium text-lg">Notes: </span>
            <button className="text-blue-500 font-medium ml-2">+</button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition">
            Print Sticker
          </button>
          <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register3;
