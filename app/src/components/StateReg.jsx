import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function StateReg() {
  const nav = useNavigate();
  const [form, setform] = useState({
    name: "",
    email: "",
    password: ""
  });

  const change = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8082/api/state/register", form);
      console.log(result.data);
      toast.success("Mail sent to the state user");
      nav("/centraldash");
    } catch (e) {
      console.log(e.response?.data);
      toast.error(e.response?.data);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-100p-4">
      <form
        onSubmit={submit}
        className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Register State/UT
        </h2>

        <div className="mb-4">
          <label className="block text-blue-700 text-sm font-semibold mb-2">
            Select State
          </label>
          <select
            name="name"
            onChange={change}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <option value="JammuandKashmir">Jammu and Kashmir</option>
            <option value="AndamanandNicobarIslands">Andaman and Nicobar Islands</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="DadraandNagarHaveliandDamanandDiu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-blue-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={change}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-blue-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={change}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default StateReg;
