// src/pages/DashboardHome.jsx
import React, { useState, useEffect } from "react";
import {
  Users,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock Data (For demonstration purposes, this is where your combined, sorted data would be)
const mockTransactionData = {
  aeps: [
    {
      id: "A103",
      service: "AEPS",
      type: "Credit",
      amount: 8000,
      status: "Completed",
      timestamp: new Date("2025-10-13T16:55:00"),
    },
  ],
  flights: [
    {
      id: "F201",
      service: "Flight",
      type: "Debit",
      amount: 15700,
      status: "Completed",
      timestamp: new Date("2025-10-13T17:05:00"),
    },
  ],
  utility: [
    {
      id: "U305",
      service: "Utility",
      type: "Debit",
      amount: 1250,
      status: "Completed",
      timestamp: new Date("2025-10-13T17:10:00"),
    },
    {
      id: "C301",
      service: "Recharge",
      type: "Debit",
      amount: 500,
      status: "Completed",
      timestamp: new Date("2025-10-13T16:40:00"),
    },
    {
      id: "A101",
      service: "AEPS",
      type: "Debit",
      amount: 5000,
      status: "Failed",
      timestamp: new Date("2025-10-13T16:45:00"),
    },
  ],
};

const formatTime = (date) =>
  date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

const DashboardHome = () => {
  const [recentTransactions, setRecentTransactions] = useState([]);

  // Logic to combine and sort transactions by timestamp (descending)
  useEffect(() => {
    const allTransactions = [
      ...mockTransactionData.aeps,
      ...mockTransactionData.flights,
      ...mockTransactionData.utility,
    ];

    const sorted = allTransactions.sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );

    setRecentTransactions(sorted.slice(0, 5));
  }, []);

  const stats = [
    {
      title: "Active Users",
      value: "1,204",
      icon: <Users className="h-5 w-5 text-blue-500" />,
      color: "text-blue-500",
    },
    {
      title: "Total Revenue",
      value: "₹ 12.8L",
      icon: <DollarSign className="h-5 w-5 text-green-500" />,
      color: "text-green-500",
    },
    {
      title: "Transactions",
      value: "3,475",
      icon: <Activity className="h-5 w-5 text-amber-500" />,
      color: "text-amber-500",
    },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8 min-h-screen">
      {/* 1. Stat Cards Grid: Fully Responsive */}
      {/* The grid changes layout at 'md' (768px) and 'lg' (1024px) breakpoints */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className={stat.color + " text-2xl font-bold"}>
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 2. Recent Transactions Table: Handled for Overflow */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* KEY RESPONSIVE CHANGE: overflow-x-auto */}
          {/* This div allows the table to scroll horizontally on small screens */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50">
                  <TableHead>Time</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead className="text-right whitespace-nowrap">
                    Amount
                  </TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-semibold text-gray-700 whitespace-nowrap">
                      {formatTime(tx.timestamp)}
                    </TableCell>
                    <TableCell>{tx.service}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {tx.id}
                    </TableCell>
                    <TableCell
                      className={
                        tx.type === "Credit"
                          ? "text-green-600 font-medium text-right whitespace-nowrap"
                          : "text-red-600 font-medium text-right whitespace-nowrap"
                      }
                    >
                      <span className="inline-flex items-center gap-1">
                        {tx.type === "Credit" ? (
                          <ArrowUpRight size={14} />
                        ) : (
                          <ArrowDownRight size={14} />
                        )}
                        ₹ {tx.amount.toLocaleString()}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                          tx.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : tx.status === "Failed"
                            ? "bg-red-100 text-red-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {tx.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* 3. Optional Widgets Grid: Fully Responsive */}
      {/* The grid stacks vertically on small screens and splits into two columns at 'lg' (1024px) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Sales Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              [Chart Component Placeholder]
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Top Service Providers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              [List Component Placeholder]
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
