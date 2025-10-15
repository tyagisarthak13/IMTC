import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Download,
  User,
  CreditCard,
  Calendar,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AEPSPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockTransactions = [
      {
        id: 1,
        userName: "Rahul Sharma",
        userId: "USER001",
        amount: 2500,
        type: "Cash Withdrawal",
        status: "success",
        timestamp: "2024-01-15 14:30:25",
        bankName: "SBI",
        aadhaarNumber: "XXXX XXXX 1234",
      },
      {
        id: 2,
        userName: "Priya Patel",
        userId: "USER002",
        amount: 1500,
        type: "Balance Enquiry",
        status: "success",
        timestamp: "2024-01-15 13:15:10",
        bankName: "HDFC",
        aadhaarNumber: "XXXX XXXX 5678",
      },
      {
        id: 3,
        userName: "Amit Kumar",
        userId: "USER003",
        amount: 5000,
        type: "Cash Withdrawal",
        status: "failed",
        timestamp: "2024-01-15 12:45:33",
        bankName: "ICICI",
        aadhaarNumber: "XXXX XXXX 9012",
      },
      {
        id: 4,
        userName: "Neha Gupta",
        userId: "USER004",
        amount: 1000,
        type: "Mini Statement",
        status: "success",
        timestamp: "2024-01-15 11:20:15",
        bankName: "AXIS",
        aadhaarNumber: "XXXX XXXX 3456",
      },
      {
        id: 5,
        userName: "Sanjay Verma",
        userId: "USER005",
        amount: 3000,
        type: "Cash Withdrawal",
        status: "pending",
        timestamp: "2024-01-15 10:05:42",
        bankName: "PNB",
        aadhaarNumber: "XXXX XXXX 7890",
      },
    ];
    setTransactions(mockTransactions);
  }, []);

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.bankName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || transaction.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusVariant = (status) => {
    switch (status) {
      case "success":
        return "default";
      case "failed":
        return "destructive";
      case "pending":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "success":
        return "Success";
      case "failed":
        return "Failed";
      case "pending":
        return "Pending";
      default:
        return status;
    }
  };

  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);
  const successCount = transactions.filter(
    (t) => t.status === "success"
  ).length;
  const failedCount = transactions.filter((t) => t.status === "failed").length;

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            AEPS Transactions
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage and monitor all AEPS transactions
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Download size={16} />
          Export Report
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Transactions
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{transactions.length}</div>
            <p className="text-xs text-muted-foreground">
              All time transactions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₹{totalAmount.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Total transaction value
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Successful</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {successCount}
            </div>
            <p className="text-xs text-muted-foreground">
              Completed transactions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{failedCount}</div>
            <p className="text-xs text-muted-foreground">Failed transactions</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>
            View all AEPS transactions and filter by status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by user name, ID, or bank..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === "all" ? "default" : "outline"}
                onClick={() => setFilterStatus("all")}
              >
                All
              </Button>
              <Button
                variant={filterStatus === "success" ? "default" : "outline"}
                onClick={() => setFilterStatus("success")}
              >
                Success
              </Button>
              <Button
                variant={filterStatus === "failed" ? "default" : "outline"}
                onClick={() => setFilterStatus("failed")}
              >
                Failed
              </Button>
              <Button
                variant={filterStatus === "pending" ? "default" : "outline"}
                onClick={() => setFilterStatus("pending")}
              >
                Pending
              </Button>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Transaction Details</TableHead>
                  <TableHead>Bank & Aadhaar</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date & Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">
                          {transaction.userName}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.userId}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{transaction.type}</div>
                      <div className="text-sm text-muted-foreground">
                        TXN#{transaction.id}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{transaction.bankName}</div>
                      <div className="text-sm text-muted-foreground">
                        {transaction.aadhaarNumber}
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">
                      ₹{transaction.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(transaction.status)}>
                        {getStatusText(transaction.status)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {transaction.timestamp}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No transactions found matching your criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AEPSPage;
