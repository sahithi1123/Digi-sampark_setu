import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emblem from "./ablem.jpeg";
import scroll1 from "./scroll1.jpeg";
import scroll2 from "./scroll2.jpeg";
import scroll3 from "./pmgram.png";
import scroll4 from "./awasyog.png"

function ImageSlider() {
  const images = [scroll2, scroll1, scroll3,scroll4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full mt-8 relative">
      {/* Slide Image */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full object-contain"
      />

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-blue-400" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function MainDashboard() {
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

      {/* Main Nav Bar (padding reduced to move it up) */}
      <nav className="bg-blue-600 px-6 py-2 flex justify-between items-center">
        {/* Left Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200 font-medium">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200 font-medium">
            Contact
          </Link>
          <Link to="/report" className="text-white hover:text-gray-200 font-medium">
            Report
          </Link>
        </div>

        {/* Right Links */}
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-50 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/citizenRegister"
            className="px-4 py-2 bg-white text-blue-900 font-medium rounded-full hover:bg-blue-50 transition-colors"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* ✅ Image Slider shifted down */}
      <div className="mt-10">
        <ImageSlider />
      </div>
    </header>
  );
}

export default MainDashboard;
