"use client"

import { useState } from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e:unknown) => {
    setSearchTerm(e?.target.value);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">MyLogo</a>
        </div>

        {/* Search Bar */}
        <div className="flex flex-grow mx-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full p-2 rounded-l-md focus:outline-none"
          />
          <button className="p-2 bg-blue-500 rounded-r-md hover:bg-blue-600">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a href="/cart" className="relative">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1">
              1
            </span>
          </a>
          <a href="/profile">
            <FaUserCircle className="text-2xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
