import React from 'react'
import { Link } from 'react-router-dom'
import emblem from "./ablem.jpeg";

function StateDashBoard() {
  return (
    <header className="w-full">
      {/* Top Nav */}
      <div className="flex justify-between items-center px-4 py-1 mt-4">
      {/* Title Section */}
        <div className="flex flex-col">
          <p className="relative text-4xl font-extrabold sm:text-3xl md:text-4xl tracking-tight">
            {/* Thick Black Border Layer */}
            <span className="absolute top-[2.5px] left-[2.5px] text-black opacity-90">
              <span>Digi-</span>
              <span>Sampark </span>
              <span>Setu</span>
            </span>

            {/* Inner Colored Layer */}
            <span className="relative">
              <span className="text-orange-500">Digi-</span>
              <span className="text-[#BBD3FF]">Sampark </span>
              <span className="text-green-600">Setu</span>
            </span>
          </p>

          {/* Subtitle */}
          <span className="block text-[11px] text-gray-500 sm:text-[10px] md:text-xs mt-0.5">
            Centralized Communication platform for Central-State-Agency coordination
          </span>
        </div>

        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img src={emblem} alt="Emblem" className="h-12 w-12 object-contain" />
          <div className="text-left">
            <p className="text-sm font-semibold">
              Ministry of Social Justice and Empowerment
            </p>
            <p className="text-sm font-semibold">Government of India</p>
          </div>
        </div>
      </div>

  
        {/* Main Nav Bar */}
        <nav className="bg-blue-600 px-6 py-3 flex justify-between items-center">
          {/* Left Links */}
          <div className="flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200 font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-200 font-medium">About</Link>
            <Link to="/contact" className="text-white hover:text-gray-200 font-medium">Contact</Link>
            <Link to="/report" className="text-white hover:text-gray-200 font-medium">Report</Link>
          </div>
  
          {/* Right Links */}
          <div className="flex space-x-6">
            <Link to="/agencyreg" className="px-4 py-2 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-50 transition-colors">            
              Add Agency</Link>
            <Link to="/statepro"  className="px-4 py-2 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-50 transition-colors">            
              Profile</Link>
            <Link
              to="/"
              className="px-4 py-2 bg-white text-red-900 font-medium rounded-full hover:bg-red-50 transition-colors">
              Logout
            </Link>
          </div>
        </nav>

        <div className="flex flex-col items-center mt-6 gap-6 px-4">
  <Link
    to="/schemes"
    className="bg-blue-100 shadow-lg rounded-xl px-6 py-8 w-80 text-center hover:bg-blue-200 transition"
  >
    <h3 className="text-lg font-semibold text-blue-700">Schemes</h3>
  </Link>

  <Link
    to="/agency"
    className="bg-blue-100 shadow-lg rounded-xl px-6 py-8 w-80 text-center hover:bg-blue-200 transition"
  >
    <h3 className="text-lg font-semibold text-blue-700">Agencies</h3>
  </Link>
</div>

        </header>
  );
}

export default StateDashBoard