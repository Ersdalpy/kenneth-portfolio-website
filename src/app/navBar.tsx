"use client";

import React from "react";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage on initial load and set the theme
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      savedDarkMode ? "dark" : "light"
    );
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));
    document.documentElement.setAttribute("data-theme", newMode ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-40 bg-gray-900 text-white flex items-center justify-between px-6 py-4 shadow-lg">
      <div className="font-bold text-xl">My Portfolio</div>
      <ul className="flex gap-4">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#videos">Videos</a>
        </li>
      </ul>
      <button
        onClick={toggleDarkMode}
        className="border border-white px-3 py-1 rounded hover:bg-gray-700"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
