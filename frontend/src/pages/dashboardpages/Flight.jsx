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
  Calendar,
  Plane,
  MapPin,
  XCircle,
  Clock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Utility function (assuming a simple local implementation or import from lib/utils)
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Flight = () => {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockBookings = [
      {
        id: "FLT001",
        userName: "Rahul Sharma",
        userId: "USER001",
        amount: 12500,
        airline: "IndiGo",
        flightNumber: "6E-205",
        from: "DEL",
        to: "BOM",
        departure: "2024-01-20 08:30",
        status: "confirmed",
        passengers: 2,
        bookingDate: "2024-01-15 14:30:25",
      },
      {
        id: "FLT002",
        userName: "Priya Patel",
        userId: "USER002",
        amount: 8900,
        airline: "Air India",
        flightNumber: "AI-801",
        from: "BOM",
        to: "DEL",
        departure: "2024-01-22 16:45",
        status: "confirmed",
        passengers: 1,
        bookingDate: "2024-01-15 13:15:10",
      },
      {
        id: "FLT003",
        userName: "Amit Kumar",
        userId: "USER003",
        amount: 15700,
        airline: "Vistara",
        flightNumber: "UK-925",
        from: "BLR",
        to: "DEL",
        departure: "2024-01-25 11:20",
        status: "pending",
        passengers: 3,
        bookingDate: "2024-01-15 12:45:33",
      },
      {
        id: "FLT004",
        userName: "Neha Gupta",
        userId: "USER004",
        amount: 7200,
        airline: "SpiceJet",
        flightNumber: "SG-415",
        from: "DEL",
        to: "GOI",
        departure: "2024-01-18 09:15",
        status: "cancelled",
        passengers: 1,
        bookingDate: "2024-01-15 11:20:15",
      },
      {
        id: "FLT005",
        userName: "Sanjay Verma",
        userId: "USER005",
        amount: 13400,
        airline: "Go First",
        flightNumber: "G8-301",
        from: "BOM",
        to: "BLR",
        departure: "2024-01-21 14:00",
        status: "confirmed",
        passengers: 2,
        bookingDate: "2024-01-15 10:05:42",
      },
      {
        id: "FLT006",
        userName: "Anjali Singh",
        userId: "USER006",
        amount: 9800,
        airline: "IndiGo",
        flightNumber: "6E-512",
        from: "HYD",
        to: "DEL",
        departure: "2024-01-23 19:30",
        status: "confirmed",
        passengers: 1,
        bookingDate: "2024-01-15 09:30:18",
      },
    ];
    setBookings(mockBookings);
  }, []);

  // Filter and Search Logic
  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.flightNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || booking.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Status/Icon Functions
  const getStatusVariant = (status) => {
    switch (status) {
      case "confirmed":
        return "default";
      case "pending":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "confirmed":
        return "Confirmed";
      case "pending":
        return "Pending";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  };

  // Stats Calculations
  const totalRevenue = bookings.reduce((sum, b) => sum + b.amount, 0);
  const confirmedCount = bookings.filter(
    (b) => b.status === "confirmed"
  ).length;
  const pendingCount = bookings.filter((b) => b.status === "pending").length;
  const cancelledCount = bookings.filter(
    (b) => b.status === "cancelled"
  ).length;
  const totalPassengers = bookings.reduce((sum, b) => sum + b.passengers, 0);

  const statItems = [
    {
      title: "Total Bookings",
      value: bookings.length,
      icon: <Plane className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />,
      subtext: "All flight transactions",
    },
    {
      title: "Confirmed Bookings",
      value: confirmedCount,
      icon: <User className="h-5 w-5 text-green-500 dark:text-green-400" />,
      subtext: "Tickets issued successfully",
      valueClass: "text-green-600 dark:text-green-400",
    },
    {
      title: "Total Passengers",
      value: totalPassengers,
      icon: <Calendar className="h-5 w-5 text-amber-500 dark:text-amber-400" />,
      subtext: "Cumulative seats booked",
      valueClass: "text-amber-600 dark:text-amber-400",
    },
    {
      title: "Cancelled Bookings",
      value: cancelledCount,
      icon: <XCircle className="h-5 w-5 text-red-500 dark:text-red-400" />,
      subtext: "Bookings that were refunded/voided",
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
              Flight Bookings Overview
            </h1>
            {/* Use text-muted-foreground for secondary text */}
            <p className="text-base text-muted-foreground mt-1">
              Comprehensive report of all flight booking transactions.
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

      {/* 2. Stats Cards (Responsive Grid) */}
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
          <CardTitle>Booking History</CardTitle>
          <CardDescription>
            View all flight bookings and filter by status or search.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters and Search Container (Responsive Flex) */}
          <div className="flex flex-col gap-4 mb-6 lg:flex-row lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              {/* text-muted-foreground for icon */}
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by user name, airline, or flight number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                All ({bookings.length})
              </Button>
              <Button
                variant={filterStatus === "confirmed" ? "default" : "outline"}
                onClick={() => setFilterStatus("confirmed")}
                className="h-10 text-sm rounded-lg"
              >
                Confirmed ({confirmedCount})
              </Button>
              <Button
                variant={filterStatus === "pending" ? "secondary" : "outline"}
                onClick={() => setFilterStatus("pending")}
                className="h-10 text-sm rounded-lg"
              >
                Pending ({pendingCount})
              </Button>
              <Button
                variant={
                  filterStatus === "cancelled" ? "destructive" : "outline"
                }
                onClick={() => setFilterStatus("cancelled")}
                className="h-10 text-sm rounded-lg"
              >
                Cancelled ({cancelledCount})
              </Button>
            </div>
          </div>

          {/* Bookings Table - CRITICAL: Added overflow-x-auto for responsiveness */}
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
                    Flight Details
                  </TableHead>
                  <TableHead className="min-w-[120px] font-semibold text-muted-foreground">
                    Route
                  </TableHead>
                  <TableHead className="text-center min-w-[80px] font-semibold text-muted-foreground">
                    Passengers
                  </TableHead>
                  <TableHead className="text-right min-w-[100px] font-semibold text-muted-foreground">
                    Amount
                  </TableHead>
                  <TableHead className="text-center min-w-[100px] font-semibold text-muted-foreground">
                    Status
                  </TableHead>
                  <TableHead className="min-w-[150px] font-semibold text-muted-foreground">
                    Booking Date
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((booking) => (
                    // hover:bg-muted/50 for hover state
                    <TableRow
                      key={booking.id}
                      className="hover:bg-muted/50 transition-colors border-b last:border-b-0"
                    >
                      <TableCell>
                        <div className="font-medium text-foreground">
                          {booking.userName}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {booking.userId}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-foreground">
                          {booking.airline}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {booking.flightNumber}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Departs: {booking.departure.split(" ")[1]}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-between max-w-[100px]">
                          <div className="text-center">
                            <div className="font-medium text-foreground">
                              {booking.from}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              From
                            </div>
                          </div>
                          <Plane
                            size={16}
                            className="text-indigo-500 dark:text-indigo-400"
                          />
                          <div className="text-center">
                            <div className="font-medium text-foreground">
                              {booking.to}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              To
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="font-medium text-foreground">
                          {booking.passengers}
                        </div>
                        <div className="text-xs text-muted-foreground">Pax</div>
                      </TableCell>
                      <TableCell className="font-bold text-right whitespace-nowrap text-foreground">
                        ₹{booking.amount.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant={getStatusVariant(booking.status)}
                          className={cn(
                            "font-semibold text-xs py-1 px-3 rounded-full",
                            // Explicit dark/light colors for better theme contrast
                            booking.status === "confirmed" &&
                              "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800 border-green-300 dark:border-green-600",
                            booking.status === "pending" &&
                              "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-300 dark:hover:bg-amber-800 border-amber-300 dark:border-amber-600",
                            booking.status === "cancelled" &&
                              "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800 border-red-300 dark:border-red-600"
                          )}
                        >
                          {getStatusText(booking.status)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                        {booking.bookingDate}
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
                        No flight bookings found.
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

export default Flight;
