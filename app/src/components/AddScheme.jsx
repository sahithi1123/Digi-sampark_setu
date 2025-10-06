import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function AddScheme() {
  const nav = useNavigate();
  const [form, setform] = useState({
    name: "",
    description: "",
    budget: "",
    releasedAmount: "",
    utilizedAmount: "",
    status: ""
  });

  const change = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const state = localStorage.getItem("state");
      const encodedState = encodeURIComponent(state);
      const centralE = localStorage.getItem("loggedInEmail");
      const res = await axios.post(
        `http://localhost:8082/api/scheme/add/${encodedState}/${centralE}`,
        form
      );
      console.log(res);
      toast.success("Scheme Successfully Added 🎉");
      nav('/schemes');
    } catch (err) {
      console.log(err);
      alert(err.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Add New Scheme</h2>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-blue-800 font-medium mb-1">Name</label>
            <input
              type='text'
              placeholder='Scheme name'
              name="name"
              onChange={change}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-blue-800 font-medium mb-1">Description</label>
            <input
              type='text'
              placeholder='Scheme description'
              name="description"
              onChange={change}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-blue-800 font-medium mb-1">Budget</label>
            <input
              type='text'
              placeholder='Scheme budget'
              name="budget"
              onChange={change}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-blue-800 font-medium mb-1">Fund Released</label>
            <input
              type='text'
              placeholder='Fund Released'
              name="releasedAmount"
              onChange={change}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-blue-800 font-medium mb-1">Fund Utilized</label>
            <input
              type='text'
              placeholder='Fund utilized'
              name="utilizedAmount"
              onChange={change}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-blue-800 font-medium mb-1">Status</label>
            <input
              type="text"
              placeholder='Status'
              name="status"
              onChange={change}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            Add Scheme
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddScheme;
