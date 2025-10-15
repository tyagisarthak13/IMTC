import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  MonitorCog,
  Images,
  TableOfContents,
  LogOut,
  ChevronDown,
  X,
  Home,
} from "lucide-react";
import { useNavigate } from "react-router";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/dashboard" },
  { name: "Images", icon: Images, path: "/dashboard/images" },
  { name: "Content", icon: TableOfContents, path: "/dashboard/content" },
];

const serviceItems = [
  { name: "AEPS", path: "/dashboard/aeps" },
  { name: "Flight Booking", path: "/dashboard/flight" },
  { name: "Recharge", path: "/dashboard/recharge" },
  { name: "Hotel Booking", path: "/dashboard/hotel" },
  { name: "Utility Bill Payments", path: "/dashboard/utility" },
  { name: "Insurance", path: "/dashboard/insurance" },
];

const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userName");

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsMobileOpen(false);
    }
  };

  const handleLogoClick = () => {
    navigate("/dashboard");
    if (window.innerWidth < 768) {
      setIsMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 768 && isMobileOpen) {
        const sidebar = document.querySelector("aside");
        if (
          sidebar &&
          !sidebar.contains(event.target) &&
          !event.target.closest("button")
        ) {
          setIsMobileOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileOpen, setIsMobileOpen]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  const sidebarContent = (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <img
          src="/icon_logo.png"
          alt="Logo"
          className="h-10 w-32 cursor-pointer"
          onClick={handleLogoClick}
        />
        <button
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          onClick={() => setIsMobileOpen(false)}
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {/* Main Menu Items */}
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground font-medium shadow-sm"
                  : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"
              )}
              onClick={handleLinkClick}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}

        {/* Services Section */}
        <div className="pt-2">
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 w-full text-left hover:bg-accent hover:text-accent-foreground text-muted-foreground"
            )}
          >
            <MonitorCog size={20} />
            <span className="text-sm font-medium flex-1">Services</span>
            <ChevronDown
              size={16}
              className={cn(
                "transition-transform duration-200",
                isServicesOpen ? "rotate-180" : ""
              )}
            />
          </button>

          <AnimatePresence>
            {isServicesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="ml-6 mt-1 space-y-1">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      onClick={handleLinkClick}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <button
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-accent"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex w-64 h-screen bg-background border-r border-border text-foreground flex-col shadow-sm fixed left-0 top-0 z-40"
      >
        {sidebarContent}
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 w-64 h-screen bg-background border-r border-border text-foreground flex flex-col shadow-lg z-40 md:hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
