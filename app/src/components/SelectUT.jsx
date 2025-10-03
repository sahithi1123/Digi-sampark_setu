import { useNavigate } from "react-router-dom";

function SchemeUT() {
  const nav = useNavigate();

  const handleChange = (e) => {
    localStorage.setItem("state", e.target.value);
    nav("/schemes");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-4">
      <form className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Select Union Territory
        </h2>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Union Territory
          </label>
          <select
            name="ut"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Union Territory</option>
            <option value="AndamanandNicobarIslands">Andaman and Nicobar Islands</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="DadraandNagarHaveliandDamanandDiu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SchemeUT;
