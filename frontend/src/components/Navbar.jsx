// src/components/Navbar.jsx
import React, { useState } from "react";
import { Bell, UserCircle, Search, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ onMenuClick }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const userName = localStorage.getItem("userName") || "Sarthak";

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-background/70 backdrop-blur-md border-b border-border shadow-sm md:px-6 ">
      {/* Left Section - Menu Button and Search */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button - Hidden on desktop */}
        <button
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          onClick={onMenuClick}
        >
          <Menu size={20} />
        </button>

        {/* Search Box - Hidden on mobile when closed */}
        <div
          className={`relative ${isSearchOpen ? "block" : "hidden md:block"}`}
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64"
          />
          {/* Close search button for mobile */}
          {isSearchOpen && (
            <button
              className="md:hidden absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              onClick={() => setIsSearchOpen(false)}
            >
              ✕
            </button>
          )}
        </div>

        {/* Mobile Search Button - Shows only on mobile when search is closed */}
        {!isSearchOpen && (
          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={20} />
          </button>
        )}
      </div>

      {/* Right Section - User Info and Actions */}
      <div className="flex items-center gap-3 md:gap-5">
        <ThemeToggle />

        {/* Notifications - Hidden on small mobile */}
        <button className="relative text-muted-foreground hover:text-primary hidden sm:block">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Info - Compact on mobile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircle size={26} className="text-muted-foreground" />
          {/* Hide username on very small screens, show on sm and up */}
          <span className="hidden sm:block text-sm font-medium text-foreground">
            {userName}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
