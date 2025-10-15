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
  Download,
  User,
  CreditCard,
  Smartphone,
  Wifi,
  BarChart4,
  Clock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Recharge = () => {
  const [recharges, setRecharges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data - replace with actual API call (NO LOGIC CHANGE)
  useEffect(() => {
    const mockRecharges = [
      {
        id: "RCH001",
        userName: "Rahul Sharma",
        userId: "USER001",
        amount: 299,
        mobileNumber: "9876543210",
        operator: "Jio",
        type: "Mobile",
        plan: "299 Plan - 1.5GB/day",
        status: "success",
        transactionDate: "2024-01-15 14:30:25",
      },
      {
        id: "RCH002",
        userName: "Priya Patel",
        userId: "USER002",
        amount: 599,
        mobileNumber: "8765432109",
        operator: "Airtel",
        type: "Mobile",
        plan: "599 Plan - 2GB/day",
        status: "success",
        transactionDate: "2024-01-15 13:15:10",
      },
      {
        id: "RCH003",
        userName: "Amit Kumar",
        userId: "USER003",
        amount: 399,
        mobileNumber: "7654321098",
        operator: "Vi",
        type: "Mobile",
        plan: "399 Plan - 1GB/day",
        status: "failed",
        transactionDate: "2024-01-15 12:45:33",
      },
      {
        id: "RCH004",
        userName: "Neha Gupta",
        userId: "USER004",
        amount: 999,
        mobileNumber: "6543210987",
        operator: "BSNL",
        type: "Mobile",
        plan: "999 Plan - 3GB/day",
        status: "success",
        transactionDate: "2024-01-15 11:20:15",
      },
      {
        id: "RCH005",
        userName: "Sanjay Verma",
        userId: "USER005",
        amount: 199,
        mobileNumber: "5432109876",
        operator: "Jio",
        type: "DTH",
        plan: "Tata Sky - Monthly Pack",
        status: "pending",
        transactionDate: "2024-01-15 10:05:42",
      },
      {
        id: "RCH006",
        userName: "Anjali Singh",
        userId: "USER006",
        amount: 499,
        mobileNumber: "4321098765",
        operator: "Airtel",
        type: "Broadband",
        plan: "Airtel Xstream Fiber",
        status: "success",
        transactionDate: "2024-01-15 09:30:18",
      },
      {
        id: "RCH007",
        userName: "Rajesh Kumar",
        userId: "USER007",
        amount: 149,
        mobileNumber: "3210987654",
        operator: "Vi",
        type: "Mobile",
        plan: "149 Plan - 500MB/day",
        status: "success",
        transactionDate: "2024-01-15 08:45:22",
      },
      {
        id: "RCH008",
        userName: "Pooja Mehta",
        userId: "USER008",
        amount: 799,
        mobileNumber: "2109876543",
        operator: "Jio",
        type: "DTH",
        plan: "Dish TV - Super Family",
        status: "failed",
        transactionDate: "2024-01-15 07:55:10",
      },
    ];
    setRecharges(mockRecharges);
  }, []);

  // Filter and Search Logic
  const filteredRecharges = recharges.filter((recharge) => {
    const matchesSearch =
      recharge.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recharge.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recharge.mobileNumber.includes(searchTerm) ||
      recharge.operator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recharge.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || recharge.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Status/Icon Functions
  const getStatusVariant = (status) => {
    switch (status) {
      case "success":
        return "default";
      case "pending":
        return "secondary";
      case "failed":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "success":
        return "Success";
      case "pending":
        return "Pending";
      case "failed":
        return "Failed";
      default:
        return status;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Mobile":
        return <Smartphone className="h-4 w-4" />;
      case "DTH":
        return <Wifi className="h-4 w-4" />;
      case "Broadband":
        return <Wifi className="h-4 w-4" />;
      default:
        return <Smartphone className="h-4 w-4" />;
    }
  };

  // Stats Calculations
  const totalRevenue = recharges.reduce((sum, r) => sum + r.amount, 0);
  const successCount = recharges.filter((r) => r.status === "success").length;
  const failedCount = recharges.filter((r) => r.status === "failed").length;
  const pendingCount = recharges.filter((r) => r.status === "pending").length;

  // Icons use specific colors that look good in both modes
  const statItems = [
    {
      title: "Total Transactions",
      value: recharges.length,
      icon: (
        <BarChart4 className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
      ),
      subtext: "All recharge transactions",
    },
    {
      title: "Successful Recharges",
      value: successCount,
      icon: <User className="h-5 w-5 text-green-500 dark:text-green-400" />,
      subtext: "Completed without issues",
      valueClass: "text-green-600 dark:text-green-400",
    },
    {
      title: "Pending Recharges",
      value: pendingCount,
      icon: <Clock className="h-5 w-5 text-amber-500 dark:text-amber-400" />,
      subtext: "Currently awaiting confirmation",
      valueClass: "text-amber-600 dark:text-amber-400",
    },
    {
      title: "Failed Recharges",
      value: failedCount,
      icon: <Smartphone className="h-5 w-5 text-red-500 dark:text-red-400" />,
      subtext: "Recharges that could not be processed",
      valueClass: "text-red-600 dark:text-red-400",
    },
  ];

  return (
    // Use bg-background for the main wrapper
    <div className="p-4 md:p-8 space-y-8 bg-background min-h-screen">
      {/* 1. Header and Primary Metric */}
      <Card className="shadow-lg border-t-4 border-indigo-600">
        <CardHeader className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            {/* Use text-foreground for primary titles */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">
              Recharge Transaction Overview
            </h1>
            {/* Use text-muted-foreground for secondary text */}
            <p className="text-base text-muted-foreground mt-1">
              Comprehensive report of mobile and utility recharge history.
            </p>
          </div>

          {/* Primary Metric */}
          <div className="text-right">
            {/* Use text-muted-foreground for labels */}
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Total Revenue
            </p>
            <div className="flex items-center justify-end gap-2 text-4xl font-bold text-indigo-700 dark:text-indigo-400">
              <CreditCard className="h-7 w-7" />
              <span>₹{totalRevenue.toLocaleString()}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <Button className="flex items-center gap-2 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 transition-colors">
            <Download size={16} />
            Export Full Report
          </Button>
        </CardContent>
      </Card>

      {/* 2. Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statItems.map((stat) => (
          <Card
            key={stat.title}
            className="hover:shadow-md transition-shadow duration-300"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              {/* Use text-muted-foreground for stat titles */}
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              {/* Stat values use specific colors defined in statItems for both modes */}
              <div className={cn("text-2xl font-bold", stat.valueClass)}>
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.subtext}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 3. Filters, Search, and Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recharge History</CardTitle>
          <CardDescription>
            Use the search and filters to quickly find specific transactions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters and Search Container */}
          <div className="flex flex-col gap-4 mb-6 lg:flex-row lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              {/* text-muted-foreground for icon */}
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by user, mobile, operator, or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // Removed hardcoded border colors, relying on default Shadcn Input
                className="pl-10 h-10 w-full rounded-lg"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
              <Button
                variant={filterStatus === "all" ? "default" : "outline"}
                onClick={() => setFilterStatus("all")}
                className="h-10 text-sm rounded-lg"
              >
                All ({recharges.length})
              </Button>
              <Button
                variant={filterStatus === "success" ? "default" : "outline"}
                onClick={() => setFilterStatus("success")}
                className="h-10 text-sm rounded-lg"
              >
                Success ({successCount})
              </Button>
              <Button
                variant={filterStatus === "failed" ? "destructive" : "outline"}
                onClick={() => setFilterStatus("failed")}
                className="h-10 text-sm rounded-lg"
              >
                Failed ({failedCount})
              </Button>
              <Button
                variant={filterStatus === "pending" ? "secondary" : "outline"}
                onClick={() => setFilterStatus("pending")}
                className="h-10 text-sm rounded-lg"
              >
                Pending ({pendingCount})
              </Button>
            </div>
          </div>

          {/* Recharges Table - Key for Responsiveness */}
          <div className="rounded-lg border overflow-x-auto shadow-sm">
            <Table>
              <TableHeader>
                {/* bg-muted/50 for table header row background */}
                <TableRow className="bg-muted/50 border-b border-border">
                  {/* text-muted-foreground for table head text */}
                  <TableHead className="min-w-[150px] font-semibold text-muted-foreground">
                    User
                  </TableHead>
                  <TableHead className="min-w-[150px] font-semibold text-muted-foreground">
                    Details
                  </TableHead>
                  <TableHead className="min-w-[120px] font-semibold text-muted-foreground">
                    Mobile Number
                  </TableHead>
                  <TableHead className="min-w-[180px] font-semibold text-muted-foreground">
                    Operator & Plan
                  </TableHead>
                  <TableHead className="text-right min-w-[100px] font-semibold text-muted-foreground">
                    Amount
                  </TableHead>
                  <TableHead className="text-center min-w-[100px] font-semibold text-muted-foreground">
                    Status
                  </TableHead>
                  <TableHead className="min-w-[150px] font-semibold text-muted-foreground">
                    Date & Time
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRecharges.length > 0 ? (
                  filteredRecharges.map((recharge) => (
                    // hover:bg-muted/50 for hover state
                    <TableRow
                      key={recharge.id}
                      className="hover:bg-muted/50 transition-colors border-b last:border-b-0"
                    >
                      <TableCell>
                        {/* text-foreground for primary cell text */}
                        <div className="font-medium text-foreground">
                          {recharge.userName}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {recharge.userId}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTypeIcon(recharge.type)}
                          <div>
                            <div className="font-medium text-foreground">
                              {recharge.type}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {recharge.id}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium whitespace-nowrap text-indigo-600 dark:text-indigo-400">
                        {recharge.mobileNumber}
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-foreground">
                          {recharge.operator}
                        </div>
                        <div className="text-xs text-muted-foreground truncate max-w-[200px]">
                          {recharge.plan}
                        </div>
                      </TableCell>
                      <TableCell className="font-bold text-right whitespace-nowrap text-foreground">
                        ₹{recharge.amount.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant={getStatusVariant(recharge.status)}
                          className={cn(
                            "font-semibold text-xs py-1 px-3 rounded-full",
                            // Adjusted badge colors to be theme-aware (using light/dark variants)
                            recharge.status === "success" &&
                              "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800 border-green-300 dark:border-green-600",
                            recharge.status === "pending" &&
                              "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-300 dark:hover:bg-amber-800 border-amber-300 dark:border-amber-600",
                            recharge.status === "failed" &&
                              "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800 border-red-300 dark:border-red-600"
                          )}
                        >
                          {getStatusText(recharge.status)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                        {recharge.transactionDate}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center py-10 text-muted-foreground"
                    >
                      <p className="font-medium text-foreground">
                        No recharge transactions found.
                      </p>
                      <p className="text-sm mt-1">
                        Try adjusting your search term or status filter.
                      </p>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recharge;
