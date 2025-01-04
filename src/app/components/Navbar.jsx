"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [account, setAccount] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    try {
      const token = sessionStorage.getItem("token");
      setIsLoggedIn(!!token);
      if (token) {
        const decoded = jwtDecode(token);
        // console.log(decoded)
        setAccount(decoded.user.accountType);
      }
    } catch (error) {
      console.error("Invalid or missing token:", error);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login")
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#1c2538] shadow-lg z-20 fixed w-full">
      <div className="container mx-auto flex justify-between px-6 items-center">
        {/* Logo */}
        <Link href="/"><img src="/png.png" className="mt-2 w-16 h-16 md:h-20 md:w-20" alt="" />
            </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200 font-thin"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200 font-thin"
          >
            About Us
          </Link>
          <Link
            href="/events"
            className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200 font-thin"
          >
            Events
          </Link>
          <Link
            href="/artists"
            className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200 font-thin"
          >
            Artists
          </Link>
          {isLoggedIn && account === "organizer" && (
            <Link
              href="/createEvents"
              className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200 font-thin"
            >
              Create Event
            </Link>
          )}
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white hover:bg-slate-900 px-2 py-2 rounded-md transition duration-200 font-thin"
          >
            Contact Us
          </Link>

          {/* Dropdown Menu */}
          {isLoggedIn ? (
            <div className="relative">
              <img
                src="https://avatar.iran.liara.run/public/41"
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-200 hover:shadow-lg"
                onClick={toggleDropdown}
              />
              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute -right-20 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <ul>
                    <li>
                      <Link
                        href={"/userEvents"}
                        className="block px-4 py-2 rounded-lg hover:text-gray-100 hover:bg-rose-500 transition"
                      >
                        Registered Events
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 rounded-lg hover:text-gray-100 hover:bg-rose-500 transition"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="block bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition duration-200"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Icon for mobile screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-slate-800 px-4 py-2 space-y-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        <Link
          href="/about"
          className="block text-gray-300 hover:text-white transition duration-200"
          onClick={closeMobileMenu}
        >
          About Us
        </Link>
        <Link
          href="/events"
          className="block text-gray-300 hover:text-white transition duration-200"
          onClick={closeMobileMenu}
        >
          Events
        </Link>
        <Link
          href="/artists"
          className="block text-gray-300 hover:text-white transition duration-200"
          onClick={closeMobileMenu}
        >
          Artists
        </Link>
        <Link
          href="/createEvents"
          className="block text-gray-300 hover:text-white transition duration-200"
          onClick={closeMobileMenu}
        >
          Create Event
        </Link>
        <Link
          href="/contact"
          className="block text-gray-300 hover:text-white transition duration-200"
          onClick={closeMobileMenu}
        >
          Contact Us
        </Link>
        {isLoggedIn ? (
          <button
            onClick={() => {
              handleLogout();
              closeMobileMenu();
            }}
            className="block bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="block bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg transition duration-200"
            onClick={closeMobileMenu}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
