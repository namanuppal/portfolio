import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const path = location.pathname === "/" ? "home" : location.pathname.slice(1);
    setActiveTab(path);
  }, [location]);

  const tabs = [
    { id: "home", label: "Home", icon: FaHome, path: "/" },
    { id: "project", label: "Projects", icon: FaProjectDiagram, path: "/project" },
    { id: "about", label: "About", icon: FaUser, path: "/about" },
    { id: "contact", label: "Contact", icon: FaEnvelope, path: "/contact" },
  ];

  const handleTabClick = (tabId, path) => {
    setActiveTab(tabId);
    window.location.pathname = path; // Programmatic navigation
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold">
            Nam<span className="text-red-700">an.</span>
          </Link>
          <div className="flex items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.path)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-600 focus:ring-white ${
                  activeTab === tab.id
                    ? "bg-white text-purple-600"
                    : "hover:bg-purple-500"
                }`}
                aria-current={activeTab === tab.id ? "page" : undefined}
                role="tab"
                aria-label={tab.label}
              >
                <tab.icon className={`${isMobile ? "text-xl" : "text-lg"}`} />
                {!isMobile && <span>{tab.label}</span>}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
