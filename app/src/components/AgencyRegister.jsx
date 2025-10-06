import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AgencyRegister() {
  const nav = useNavigate();
  const [form, setform] = useState({
    agencyName: "",
    agencyType: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const change = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const stateE=localStorage.getItem("loggedInEmail");
      const result = await axios.post(
        `http://localhost:8082/api/agency/register/${stateE}`,
        form
      );
      console.log(result.data);
      toast.success("Mail sent to the agency user");
      nav("/statedash");
    } catch (e) {
      console.log(e.response?.data);
      toast.error(e.response?.data || "Registration failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-100 p-4">
      <form
        onSubmit={submit}
        className="bg-white shadow-lg rounded-2xl w-full max-w-lg p-8 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Agency Registration
        </h2>

        {/* Agency Name */}
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-semibold mb-2">
            Agency Name
          </label>
          <input
            name="agencyName"
            type="text"
            placeholder="Enter agency name"
            value={form.agencyName}
            onChange={change}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Agency Type */}
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-semibold mb-2">
            Agency Type
          </label>
          <input
            name="agencyType"
            type="text"
            placeholder="Enter agency type"
            value={form.agencyType}
            onChange={change}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Contact Person */}
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-semibold mb-2">
            Contact Person
          </label>
          <input
            name="contactPerson"
            type="text"
            placeholder="Enter contact person"
            value={form.contactPerson}
            onChange={change}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Designation */}
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-semibold mb-2">
            Designation
          </label>
          <input
            name="designation"
            type="text"
            placeholder="Enter designation"
            value={form.designation}
            onChange={change}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={change}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-semibold mb-2">
            Phone
          </label>
          <input
            name="phone"
            type="text"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={change}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-blue-800 text-sm font-semibold mb-2">
            Address
          </label>
          <input
            name="address"
            type="text"
            placeholder="Enter address"
            value={form.address}
            onChange={change}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-blue-800 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={change}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Add Agency
        </button>
      </form>
    </div>
  );
}

export default AgencyRegister;
