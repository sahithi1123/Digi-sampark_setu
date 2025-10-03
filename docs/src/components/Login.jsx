import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

function Login() {
  const nav = useNavigate();
  const [form, setform] = useState({
    email: "",
    password: ""
  });

  const change = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8082/api/user/login", form);
      console.log(res.data);
      const role = res.data.role;
      localStorage.setItem("loggedInRole",res.data.role)
      localStorage.setItem("loggedInId",res.data.id);
      localStorage.setItem("loggedInEmail",res.data.email);
      toast.success("Logged In Successfully 🎉");
      localStorage.setItem("role", role);

      if (role === "CITIZEN") nav("/citizendash");
      else if (role === "AGENCY") nav("/agencydash");
      else if (role === "STATE") nav("/statedash");
      else if (role === "CENTRAL") nav("/centraldash");
    }
    catch (e) {
      console.log(e.response?.data);
      toast.error(e.response?.data || "Login failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-100 p-4">
      <form
        onSubmit={submit}
        className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 border border-gray-300"
      >
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-blue-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={change}
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-blue-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={change}
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
