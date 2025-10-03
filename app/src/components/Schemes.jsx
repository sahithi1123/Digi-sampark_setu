import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // using react-icons for back arrow

function Schemes() {
  const nav = useNavigate();
  const [schemes, setSchemes] = useState([]);
  const role=localStorage.getItem("loggedInRole")
  const getData = async () => {
    try {
      const state = localStorage.getItem("state");
      const res = await axios.get("http://localhost:8082/api/scheme", {
        params: { state },
        withCredentials: true
      });

      let data = res.data;
      if (typeof data === "string") data = JSON.parse(data);
      setSchemes(data);
    } catch (err) {
      console.error("Failed to fetch schemes", err);
      setSchemes([]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-blue-50">
      {/* Buttons Row */}
      <div className="flex justify-between w-full max-w-6xl mb-6">
        <button
          className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={() => nav('/schemestate')}
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        {role === "CENTRAL" && (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={() => nav('/addscheme')}
        >
          Add Scheme
        </button>
      )}
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Schemes</h2>

      {/* Table Container */}
      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-300 bg-white shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-medium">Name</th>
              <th className="px-4 py-2 text-left font-medium">Description</th>
              <th className="px-4 py-2 text-left font-medium">Budget (Cr)</th>
              <th className="px-4 py-2 text-left font-medium">Funds Released (Cr)</th>
              <th className="px-4 py-2 text-left font-medium">Funds Utilized (Cr)</th>
              <th className="px-4 py-2 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schemes.length > 0 ? (
              schemes.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{s.name}</td>
                  <td className="px-4 py-2">{s.description}</td>
                  <td className="px-4 py-2">{s.budget}</td>
                  <td className="px-4 py-2">{s.releasedAmount}</td>
                  <td className="px-4 py-2">{s.utilizedAmount}</td>
                  <td className="px-4 py-2">{s.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No schemes found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schemes;
