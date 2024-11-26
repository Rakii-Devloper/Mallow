import React from "react";
import { FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa"; // Importing icons from react-icons

const Header: React.FC = () => {
  const isLoggedIn = true; // You can toggle this value based on your authentication state
  
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <img src=".\src\assets\Logo.png" alt="App Logo" className="h-8" />
      </div>

      {/* Right side: User info and login/logout */}
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <span className="text-lg">Hello, John Doe</span>
            <button className="flex items-center space-x-2 p-2 bg-red-600 rounded-md hover:bg-red-700">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <button className="flex items-center space-x-2 p-2 bg-blue-600 rounded-md hover:bg-blue-700">
            <FaSignInAlt />
            <span>Login</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;



