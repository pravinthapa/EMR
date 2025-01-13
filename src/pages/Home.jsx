import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaChevronDown, FaSearch, FaUserCircle } from "react-icons/fa";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Table = () => {
  const data = Array(10).fill({
    id: "RAJPURA900487",
    fullName: "Sushma Tamrakar",
    age: 25,
    contact: "9806010602",
    address: "Marai Khola",
    gender: "Female",
    municipality: "Rajpur",
    ward: 5,
    registrationDate: "२०७९ भदौ, ३",
  });

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Full Name</th>
              <th className="px-4 py-2 border">Age</th>
              <th className="px-4 py-2 border">Contact</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">Gender</th>
              <th className="px-4 py-2 border">VDC/Municipality</th>
              <th className="px-4 py-2 border">Ward No.</th>
              <th className="px-4 py-2 border">Registration Date</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.fullName}</td>
                <td className="px-4 py-2 border">{item.age}</td>
                <td className="px-4 py-2 border">{item.contact}</td>
                <td className="px-4 py-2 border">{item.address}</td>
                <td className="px-4 py-2 border">{item.gender}</td>
                <td className="px-4 py-2 border">{item.municipality}</td>
                <td className="px-4 py-2 border">{item.ward}</td>
                <td className="px-4 py-2 border">{item.registrationDate}</td>
                <td className="px-4 py-2 border text-center">
                  <button className="text-blue-500 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
            Previous
          </button>
          <div className="space-x-2">
            {[...Array(10)].map((_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded ${
                  i === 0 ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const summaryCards = [
    {
      id: 1,
      value: "35",
      label: "Total Patients Today",
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
      date: "15th Shrawan 2080",
    },
    {
      id: 2,
      value: "14",
      label: "Follow Up Patients",
      bgColor: "bg-red-100",
      iconColor: "text-red-500",
      date: "15th Shrawan 2080",
    },
    {
      id: 3,
      value: "14",
      label: "Patients in Queue",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      date: "15th Shrawan 2080",
    },
  ];

  return (
    <div className="bg-gray-50 max-h-screen">
      <div className="max-w-8xl mx-auto px-3 sm:px-2 lg:px-8 py-3">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-custom focus:border-custom">
                <option>General Ward</option>
                <option>Emergency Ward</option>
                <option>ICU</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <FaChevronDown className="text-gray-400" />
              </div>
            </div>
            <div className="relative">
              <button className="flex items-center gap-2 text-gray-700">
                <FaUserCircle className="text-2xl" />
                <FaChevronDown className="text-xs" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <div className="flex gap-6">
            {summaryCards.map((card) => (
              <div
                key={card.id}
                className={`p-4 w-56 flex flex-col gap-3 rounded-lg cursor-pointer hover:shadow-lg ${card.bgColor}`}
              >
                <div className="flex items-center gap-1">
                  <div
                    className={`text-lg text-white w-7 h-7 flex items-center justify-center rounded-md bg-gray-50`}
                  >
                    <BsFillPeopleFill
                      className={`text-sm  ${card.iconColor}`}
                    />
                  </div>
                  <h1 className=" text-sm font-semibold">{card.label}</h1>
                </div>
                <h3 className="text-3xl font-bold -mt-1">{card.value}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm font-gilroyMedium">
                    {card.date}
                  </p>
                  <h1 className="flex items-center text-green-600">
                    <HiMiniArrowTrendingUp className="text-xl" />
                    <p>8.5%</p>
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <Link to={"/register"}>
            <div>
              <button className="bg-custom hover:bg-custom/90 bg-blue-900 rounded-md text-white px-4 py-2 !rounded-button">
                New Registration
              </button>
            </div>
          </Link>
        </div>

        <div className="mt-6 flex justify-end">
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom focus:border-custom"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <Table />
      </div>
    </div>
  );
};

export default Home;
