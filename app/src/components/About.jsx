import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-8 px-4 space-y-6">
      
      {/* About the Scheme */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">About the Scheme</h1>
        <p className="mb-2">The objectives of the Scheme are:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>To reduce poverty of the SC communities by generation of additional employment opportunities through skill development, income generating schemes and other initiatives.</li>
          <li>To improve socio-economic developmental indicators by ensuring adequate infrastructure and requisite services in the SC dominated villages.</li>
          <li>To increase literacy and encourage enrolment of SCs in schools and higher educational institutions by providing adequate residential facilities in quality institutions, especially in the aspirational districts/SC dominated blocks and elsewhere in India.</li>
        </ul>
      </div>

      {/* Present Position */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Present Position</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>State needs to submit their Annual Action Plan (AAP) in online mode through the web-portal <a href="https://pmajay.dosje.gov.in" target="_blank" rel="noreferrer" className="text-blue-600 underline">https://pmajay.dosje.gov.in</a>.</li>
          <li>Login credentials for State and District Level Officers has been sent to email of Principal Secretary of the States.</li>
          <li>There are two id's for each level (State/District). One for creation of projects and another for its approval.</li>
          <li>De-centralised planning will be used for creation of projects.</li>
        </ul>
      </div>

      {/* Background */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Background</h1>
        <p className="mb-2">Over a period of time the Government has adopted a multi-pronged approach for the socio-economic development of the Scheduled Castes...</p>
        <p>The Department of Social Justice & Empowerment introduced the Centrally Sponsored Scheme of "Special Central Assistance (SCA) to Scheduled Castes Sub Plan (SCSP)" in 1980...</p>
      </div>

      {/* Objectives of the Existing Scheme */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Objectives of the Existing Scheme</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>The main objective of the scheme is to increase the income of the target population by way of various income generating schemes, skill development and infrastructure development.</li>
          <li>To reduce the poverty among the target population and bring them above the poverty lines.</li>
        </ul>
      </div>

      {/* Scheme Components */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Scheme Components</h1>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Income Generating Schemes:</strong> Boost Entrepreneurship among SCs with a subsidy of Rs 10000/- per beneficiary or 50% of loan.</li>
          <li><strong>Skill Development Programmes:</strong> Enhance Capacity Building through training and skill training in line with the National Framework.</li>
          <li><strong>Infrastructure Development:</strong> Development Programmes in SC majority villages that fill critical gaps in overall development.</li>
          <li><strong>Monitoring and Evaluation:</strong> Up to 4% of the total Grants-in-Aid released to the States/UTs can be utilized for supervision, monitoring and evaluation...</li>
        </ul>
      </div>

      {/* Eligibility Criteria */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Eligibility Criteria</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>The Scheduled Castes persons living below the poverty lines are eligible for getting benefits under the various Income Generating Schemes and Skill Development Programmes.</li>
          <li>In case of Infrastructure Development, the villages having 50% or more SC population are eligible for grants under the Scheme.</li>
          <li>The guidelines issued by the erstwhile Planning Commission and the procedure laid down by the Ministry of Rural Development for selecting beneficiaries through the Panchayati Raj institutions may be adopted.</li>
        </ul>
      </div>

      {/* Scheme Coverage */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Scheme Coverage</h1>
        <p className="mb-2">Scheme implemented in 28 States/UTs. Not covered States/UTs:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>States:</strong> Arunachal Pradesh, Nagaland, Meghalaya & Mizoram</li>
          <li><strong>UTs:</strong> A & N Islands, Dadra Nagar Haveli, Daman & Diu, Ladakh & Lakshadweep.</li>
        </ul>
      </div>

      {/* Scheme Performance Table */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4">Scheme Performance (Rs. In Crore)</h1>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Year</th>
              <th className="border px-4 py-2">Revised Estimate</th>
              <th className="border px-4 py-2">Actual Release</th>
              <th className="border px-4 py-2">Utilization w.r.t. RE (in %)</th>
              <th className="border px-4 py-2">Beneficiaries (Income Generating Schemes)</th>
              <th className="border px-4 py-2">Beneficiaries (Skill Development)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border px-4 py-2">2017-18</td>
              <td className="border px-4 py-2">800</td>
              <td className="border px-4 py-2">731.8500</td>
              <td className="border px-4 py-2">91.40</td>
              <td className="border px-4 py-2">2,64,209*</td>
              <td className="border px-4 py-2">1,12,678*</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">2018-19</td>
              <td className="border px-4 py-2">900</td>
              <td className="border px-4 py-2">897.2500</td>
              <td className="border px-4 py-2">99.69</td>
              <td className="border px-4 py-2">2,11,275*</td>
              <td className="border px-4 py-2">58,792*</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">2019-20</td>
              <td className="border px-4 py-2">1100</td>
              <td className="border px-4 py-2">1115.1450</td>
              <td className="border px-4 py-2">101.30</td>
              <td className="border px-4 py-2">1,68,446*</td>
              <td className="border px-4 py-2">43,288*</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">2020-21#</td>
              <td className="border px-4 py-2">300</td>
              <td className="border px-4 py-2">38699.83</td>
              <td className="border px-4 py-2">129.00</td>
              <td className="border px-4 py-2">57,474</td>
              <td className="border px-4 py-2">11020*</td>
            </tr>
            <tr className="text-center">
              <td className="border px-4 py-2">2021-22</td>
              <td className="border px-4 py-2">774</td>
              <td className="border px-4 py-2">Nil</td>
              <td className="border px-4 py-2">Nil</td>
              <td className="border px-4 py-2">Not reported</td>
              <td className="border px-4 py-2">500</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm mt-2">#as on 31-08-2021; *as reported up to 31-08-2021</p>
      </div>

      {/* Constraints Faced */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Constraints Faced</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>Implementation Guidelines were only issued during 2018-19.</li>
          <li>The proposal to enhance the subsidy from Rs. 10,000 to Rs. 50,000 for income generation schemes is pending.</li>
          <li>Works under the Infrastructure component are still not meeting expectations despite the allocation being enhanced from 10% to 30%.</li>
          <li>Non-release of funds by State Treasuries to implementing departments has resulted in poor implementation.</li>
          <li>Poor budgetary planning at the state level hinders fund release.</li>
        </ul>
      </div>

      {/* Action Initiated for Improvements */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Action Initiated for Improvements</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>Monitoring of the scheme has been enhanced with regular follow-ups and consultations with States/UTs.</li>
          <li>Letters have been sent to Chief Ministers of poor performing states.</li>
          <li>A new web-based system <a href="https://pmajay.dosje.gov.in" target="_blank" rel="noreferrer" className="text-blue-600 underline">https://pmajay.dosje.gov.in</a> has been developed for decentralized planning, proposal submission, evaluation, and financial tracking.</li>
          <li>A proposal is under consideration to merge PM-AJAY with similar schemes and to enhance the beneficiary income limit and the subsidy to Rs. 50,000.</li>
        </ul>
      </div>

    </div>
  );
}

export default About;
