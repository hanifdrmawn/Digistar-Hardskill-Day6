// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-yellow-50 p-4 shadow-sm flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-green-400"></div>
          <span className="text-xl font-bold text-gray-800">My Wallet</span>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-300"
        />
      </div>
      <div className="flex items-center space-x-3">
        <button className="bg-transparent border-none outline-none p-0">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/565/565422.png" 
            alt="Notif Icon" 
            className="w-5 h-5"
          />
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-500"></div>
      </div>
    </nav>
  );
};

export default Navbar;
