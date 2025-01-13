import React from "react";

const Summary= () => {
  return (
    <div className=" bg-white ">
    

        {/* Summary Details */}
        <div className="bg-white p-6 rounded-lg mb-8">
          <div className="grid grid-cols-2 gap-4 text-lg">
            <div className="flex flex-col gap-4">

            <div>
              <span className="font-medium">Patient Name: </span>Test
            </div>
            <div>
              <span className="font-medium">Gender: </span>Female
            </div>
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
        <div className="flex justify-end gap-6 pt-10">
          <button className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition">
            Print Sticker
          </button>
          <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Save
          </button>
        </div>
      </div>
  );
};

export default Summary;
