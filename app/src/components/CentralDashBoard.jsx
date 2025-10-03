import React from 'react'
import { Link } from 'react-router-dom'
import emblem from "./ablem.jpeg";

function CentralDashBoard() {
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
          <div className="flex space-x-4">
          <Link
            to="/statereg"
            className="px-4 py-2 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-50 transition-colors">            
            Add State/UT
          </Link>
          <Link
            to="/centralpro"
            className="px-4 py-2 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-50 transition-colors">            
            Profile
          </Link>
          <Link
            to="/"
            className="px-4 py-2 bg-white text-red-900 font-medium rounded-full hover:bg-red-50 transition-colors">
            Logout
          </Link>
          </div>

        </nav>


          <div className="w-full min-h-screen bg-gray-100">

  {/* Cards Section Below Nav */}
  <div className="flex flex-col items-center gap-6 mt-8 px-6">
    <Link 
      to="/schemestate" 
      className="bg-blue-100 shadow-lg rounded-lg p-6 w-96 text-center hover:shadow-xl transition font-medium text-blue-800"
    >
      Schemes for States
    </Link>

    <Link 
      to="/schemeut" 
      className="bg-blue-100 shadow-lg rounded-lg p-6 w-96 text-center hover:shadow-xl transition font-medium text-blue-800"
    >
      Scheme for UT
    </Link>

    <Link 
      to="/loans" 
      className="bg-blue-100 shadow-lg rounded-lg p-6 w-96 text-center hover:shadow-xl transition font-medium text-blue-700"
    >
      Loans
    </Link>

    <Link 
      to="/statedetails" 
      className="bg-blue-100 shadow-lg rounded-lg p-6 w-96 text-center hover:shadow-xl transition font-medium text-blue-700"
    >
      State Details
    </Link>
  </div>
</div>

        </header>
  );
}

export default CentralDashBoard