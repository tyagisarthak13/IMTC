import React, { useState, useEffect } from "react";
import { Search, User, Plus, Phone, Loader } from "lucide-react";

const BeneficiaryDashboard2 = () => {
  const [search, setSearch] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmedPhone, setConfirmedPhone] = useState("");
  const [amounts, setAmounts] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [remitterName, setRemitterName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);

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

  useEffect(() => {
    if (phone.length === 10) {
      if (phone === "9654009302" || phone === "9654742600") {
        setIsRegistered(true);
        if (!confirmedPhone) setConfirmedPhone(phone);
        else {
          setTableLoading(true);
          setTimeout(() => {
            setConfirmedPhone(phone);
            setTableLoading(false);
          }, 600);
        }
      } else {
        setIsRegistered(false);
        setConfirmedPhone(phone);
      }
    }
  }, [phone]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-4 mb-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 " />
              <input
                type="text"
                placeholder="Remitter Number"
                className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold text-gray-800"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                maxLength={10}
              />
            </div>

            {confirmedPhone && (
              <button
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    window.location.reload();
                  }, 500);
                }}
                className="bg-white text-blue-600 border-2 border-blue-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md"
              >
                {loading ? (
                  <Loader className="animate-spin w-4 h-4 text-blue-600" />
                ) : (
                  "Change Number"
                )}
              </button>
            )}
          </div>

          {confirmedPhone && isRegistered && (
            <>
              <div className="text-center sm:text-right">
                <div className="flex items-center justify-center sm:justify-end gap-2 mb-1">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-3 h-3 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-blue-800">SUMIT</h2>
                </div>
                <div className="bg-orange-50 border border-orange-200 px-3 py-1 rounded-lg">
                  <p className="text-orange-600 font-semibold text-sm">
                    Available Limit ₹25,000
                  </p>
                </div>
              </div>

              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition whitespace-nowrap cursor-pointer">
                <Plus className="w-4 h-4" />
                Add Beneficiary
              </button>
            </>
          )}
        </div>

        {confirmedPhone && !isRegistered && (
          <div className="flex flex-col items-start gap-1 mt-4">
            <p className="text-gray-700 font-semibold">Enter Remitter Name</p>
            <input
              type="text"
              placeholder="Enter Remitter Name"
              value={remitterName}
              onChange={(e) => setRemitterName(e.target.value)}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-700 font-semibold mt-2">
              Enter Aadhar Number
            </p>
            <input
              type="text"
              placeholder="Enter 12-digit Aadhar Number"
              value={aadhar}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 12) setAadhar(value);
              }}
              maxLength={12}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer mt-3"
              onClick={() => {
                if (remitterName.trim() && aadhar.trim().length === 12) {
                  alert("OTP Sent");
                } else if (!remitterName.trim()) {
                  alert("Please enter Remitter Name.");
                } else {
                  alert("Aadhar number must be 12 digits.");
                }
              }}
              disabled={!remitterName.trim() || !aadhar.trim()}
            >
              Send OTP
            </button>
          </div>
        )}

        {confirmedPhone && isRegistered && (
          <>
            {/* Search Bar Section */}
            <div className="flex items-center justify-between gap-6 mb-4">
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-[500px] bg-white">
                <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search by name, account, bank, IFSC..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 outline-none text-sm bg-transparent"
                />
              </div>

              {/* Image on right side */}
              <div className="hidden md:block flex-1 max-w-[200px]">
                <img
                  src="/fund-transfer.png"
                  alt="Promotional banner"
                  className="w-full h-20 object-cover"
                />
              </div>
            </div>

            {/* Scrollable Table */}
            <div className="overflow-auto max-h-[400px] border border-gray-200 rounded-lg">
              {tableLoading && (
                <div className="flex justify-center items-center py-10">
                  <Loader className="animate-spin w-6 h-6 text-blue-600" />
                </div>
              )}
              {!tableLoading && (
                <table className="w-full min-w-[600px] border-collapse text-xs">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-left">
                      <th className="py-2 px-4 rounded-l-lg font-medium"></th>
                      <th className="py-2 px-4 font-medium">Name</th>
                      <th className="py-2 px-4 font-medium">Account No.</th>
                      <th className="py-2 px-4 font-medium">Bank & IFSC</th>
                      <th className="py-2 px-4 font-medium">Transfer Amount</th>
                      <th className="py-2 px-4 rounded-r-lg font-medium text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="cursor-pointer">
                    {filtered.map((b, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                      >
                        <td className="py-3 px-4 text-gray-600 font-medium">
                          {i + 1}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-semibold text-gray-800">
                            {b.name}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-mono text-gray-700">
                            {b.account}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-medium text-gray-800">
                            {b.bank}
                          </div>
                          <div className="text-gray-500 text-xs font-mono mt-1">
                            {b.ifsc}
                          </div>
                        </td>
                        <td className="py-3 px-4 relative">
                          <div className="relative max-w-34">
                            <input
                              type="number"
                              placeholder="0"
                              min="0"
                              className="border border-gray-300 rounded-md pl-2 pr-2 py-1 w-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                              value={amounts[i] || ""}
                              onChange={(e) =>
                                setAmounts({
                                  ...amounts,
                                  [i]: e.target.value.replace(/\D/g, ""),
                                })
                              }
                            />
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2 justify-center">
                            <button className="bg-blue-900 hover:bg-blue-400 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors shadow-sm cursor-pointer">
                              IMPS
                            </button>
                            <button className="bg-green-500 hover:bg-green-700 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors shadow-sm cursor-pointer">
                              NEFT
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors shadow-sm cursor-pointer">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {filtered.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  <div className="mb-2">No beneficiaries found</div>
                  <div className="text-sm text-gray-400">
                    Try adjusting your search criteria
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BeneficiaryDashboard2;
