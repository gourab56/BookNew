// Navbar.jsx
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/70 border-b border-gray-200 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent"
        >
          Book Explorer
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-purple-600 transition">Home</Link>
          <Link to="/books" className="hover:text-teal-600 transition">Books</Link>
          <Link to="/about" className="hover:text-purple-600 transition">About</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 px-6 py-6 flex flex-col gap-4 text-center">
          <Link 
            to="/" 
            onClick={() => setOpen(false)} 
            className="text-gray-700 hover:text-purple-600 transition"
          >
            Home
          </Link>
          <Link 
            to="/books" 
            onClick={() => setOpen(false)} 
            className="text-gray-700 hover:text-teal-600 transition"
          >
            Books
          </Link>
          <Link 
            to="/about" 
            onClick={() => setOpen(false)} 
            className="text-gray-700 hover:text-purple-600 transition"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
