import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function CitizenRegister() {
  const nav = useNavigate();
  const [form, setform] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    phone: "",
    verificationId: "",
    cstate: "",
    password: ""
  });

  const change = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:8082/api/citizen/register",
        form
      );
      console.log(result.data);
      toast.success(result.data);
      nav("/login");
    } catch (e) {
      console.log(e.response.data);
      toast.error(e.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-100 p-4">
      <form
        onSubmit={submit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
          Citizen Registration
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-blue-700 text-sm font-semibold mb-2">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            onChange={change}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-blue-700 text-sm font-semibold mb-2">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={change}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-blue-700 text-sm font-semibold mb-2">Address</label>
          <input
            name="address"
            type="text"
            placeholder="Enter Address"
            onChange={change}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-blue-700 text-sm font-semibold mb-2">Phone Number</label>
          <input
            name="phone"
            type="number"
            placeholder="Enter Phone Number"
            onChange={(e) => {
              if (e.target.value.length === 10) change(e);
            }}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Verification ID */}
        <div className="mb-4">
          <label className="block text-blue-700 text-sm font-semibold mb-2">
            Aadhar/RiceCard/Caste Certificate Number
          </label>
          <input
            name="verificationId"
            type="text"
            placeholder="Enter ID Number"
            onChange={change}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label className="block text-blue-700 text-sm font-semibold mb-2">State</label>
          <select
            name="cstate"
            onChange={change}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select State</option>
            <option value="Andhrapradesh">Andhra Pradesh</option>
            <option value="Arunachalpradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachalpradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhyapradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamilnadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttarpradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Westbengal">West Bengal</option>
            <option value="Jammuandkashmir">Jammu and Kashmir</option>
          </select>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-blue-700 text-sm font-semibold mb-2">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={change}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default CitizenRegister;
