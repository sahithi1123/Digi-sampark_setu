import React from "react";

function Contact() {
  return (
    <main className="flex flex-col items-center bg-gray-100 py-8 px-4 space-y-6">

      {/* Contact Support */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Contact Support</h1>

        {/* Technical Support */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Email:</strong> Contactsupport[dot]pmagy-msje[at]gov[dot]in</li>
            <li><strong>Phone:</strong> +91-11-24364468</li>
            <li><strong>Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM</li>
          </ul>
        </div>

        {/* Administrative Support */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Administrative Support</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Email:</strong> N/A</li>
            <li><strong>Contact:</strong> N/A</li>
          </ul>
        </div>
      </div>

      {/* Officers Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4">Officers Details</h1>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Designation</th>
              <th className="border px-4 py-2">Contact</th>
              <th className="border px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="border px-4 py-2">Shri Amit Yadav</td>
              <td className="border px-4 py-2">Secretary</td>
              <td className="border px-4 py-2">+91-11-23382683/84<br/>+91-11-23385180 (F)</td>
              <td className="border px-4 py-2">secretary-msje[at]gov.in</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Ms. Caralyn Khongwar Deshmukh</td>
              <td className="border px-4 py-2">Additional Secretary</td>
              <td className="border px-4 py-2">011-23383956</td>
              <td className="border px-4 py-2">as2-msje[at]gov.in</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shri Narender Singh</td>
              <td className="border px-4 py-2">Deputy Secretary</td>
              <td className="border px-4 py-2">011-23382857</td>
              <td className="border px-4 py-2">narender.singh67[at]gov.in</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shri Sewak Paul</td>
              <td className="border px-4 py-2">Under Secretary</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">sewak.paul[at]nic.in</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shri Nishant Pandey</td>
              <td className="border px-4 py-2">Section Officer</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">pandey.nishant[at]gov.in</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shri Anuj Kumar</td>
              <td className="border px-4 py-2">Section Officer</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">anuj.kr88[at]gov.in</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shri Deepak Khoda</td>
              <td className="border px-4 py-2">Section Officer</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">deepak.khoda[at]gov.in</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* NIC Officers */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4">NIC - Dept. of Social Justice and Empowerment</h1>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Designation</th>
              <th className="border px-4 py-2">Contact</th>
              <th className="border px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="border px-4 py-2">Shri Bhupinder Pathak</td>
              <td className="border px-4 py-2">Senior Director (IT)</td>
              <td className="border px-4 py-2">+91-11-24360791</td>
              <td className="border px-4 py-2">hod-sje[at]nic.in</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Shri Anand Verma</td>
              <td className="border px-4 py-2">Joint Director (IT)</td>
              <td className="border px-4 py-2">+91-11-24364468</td>
              <td className="border px-4 py-2">officer1.sje[at]nic.in</td>
            </tr>
          </tbody>
        </table>
      </div>

    </main>
  );
}

export default Contact;
