import React, { useState } from "react";
import { Search } from "lucide-react";

const BeneficiaryDashboard = () => {
  const [search, setSearch] = useState("");
  const [phone, setPhone] = useState("");
  const [amounts, setAmounts] = useState({});

  const beneficiaries = [
    {
      name: "PRADEEP KUMAR",
      account: "0413468718",
      bank: "Kotak Mahindra Bank",
      ifsc: "KKBKORTGSMI",
    },
    {
      name: "VIVEK KUMAR VIKEE",
      account: "82928573454",
      bank: "State Bank of India",
      ifsc: "SBIN0000001",
    },
    {
      name: "TREEMAP PAYMENT SOLUTION PRIVATE LIMITED",
      account: "259711791917",
      bank: "IndusInd Bank",
      ifsc: "INDB0000001",
    },
    {
      name: "TREEMAP PAYMENT SOLUTION PRIVATE LIMITED",
      account: "259711791917",
      bank: "IndusInd Bank",
      ifsc: "INDB0000001",
    },
    {
      name: "TREEMAP PAYMENT SOLUTION PRIVATE LIMITED",
      account: "259711791917",
      bank: "IndusInd Bank",
      ifsc: "INDB0000001",
    },
    {
      name: "TREEMAP PAYMENT SOLUTION PRIVATE LIMITED",
      account: "259711791917",
      bank: "IndusInd Bank",
      ifsc: "INDB0000001",
    },
    {
      name: "TREEMAP PAYMENT SOLUTION PRIVATE LIMITED",
      account: "259711791917",
      bank: "IndusInd Bank",
      ifsc: "INDB0000001",
    },
    {
      name: "TREEMAP PAYMENT SOLUTION PRIVATE LIMITED",
      account: "259711791917",
      bank: "IndusInd Bank",
      ifsc: "INDB0000001",
    },
    {
      name: "TREEMAP PAYMENT SOLUTION PRIVATE LIMITED",
      account: "259711791917",
      bank: "IndusInd Bank",
      ifsc: "INDB0000001",
    },
  ];

  const filtered = beneficiaries.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.account.includes(search) ||
      b.bank.toLowerCase().includes(search.toLowerCase()) ||
      b.ifsc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-4 mb-6">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter phone number"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              maxLength={10}
            />
            <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-50 transition">
              Change
            </button>
          </div>

          <div className="text-center sm:text-right">
            <h2 className="text-2xl font-semibold text-blue-800">SUMIT</h2>
            <p className="text-orange-500 font-medium">
              Available Limit ₹25,000
            </p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            + Add Beneficiary
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2 mb-6 w-full sm:w-96">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search Beneficiary by Name, Account, Bank, etc."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none text-sm"
          />
        </div>

        {/* Scrollable Table */}
        <div className="overflow-auto max-h-[400px] border border-gray-200 rounded-lg scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="py-3 px-4 rounded-l-lg font-medium"></th>
                <th className="py-3 px-4 font-medium">Name</th>
                <th className="py-3 px-4 font-medium">Account No.</th>
                <th className="py-3 px-4 font-medium">Bank & IFSC</th>
                <th className="py-3 px-4 font-medium">Amount</th>
                <th className="py-3 px-4 rounded-r-lg font-medium text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-4 text-gray-700">{i + 1}</td>
                  <td className="py-3 px-4 font-medium text-gray-800">
                    {b.name}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{b.account}</td>
                  <td className="py-3 px-4 text-gray-700">
                    <div>{b.bank}</div>
                    <div className="text-gray-500 text-xs mt-1">{b.ifsc}</div>
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="number"
                      placeholder="₹0"
                      min="0"
                      className="border border-gray-300 rounded-md px-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={amounts[i] || ""}
                      onChange={(e) =>
                        setAmounts({
                          ...amounts,
                          [i]: e.target.value.replace(/-/g, ""),
                        })
                      }
                    />
                  </td>
                  <td className="py-3 px-4 flex gap-2 justify-center">
                    <button className="text-white bg-blue-600 hover:bg-blue-800 px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer">
                      IMPS
                    </button>
                    <button className="text-white bg-blue-400 hover:bg-blue-500 px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer">
                      NEFT
                    </button>
                    <button className="text-white bg-orange-400 hover:bg-orange-600 px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-6">
              No beneficiaries found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeneficiaryDashboard;
