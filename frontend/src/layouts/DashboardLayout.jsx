import React, { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "../components/theme-provider";

const DashboardLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex min-h-screen bg-background">
        <Sidebar
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />
        <div className="flex-1 flex flex-col md:ml-64">
          <Navbar onMenuClick={() => setIsMobileOpen(!isMobileOpen)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;
