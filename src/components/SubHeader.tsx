import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons
import { Link } from 'react-router-dom';
import { FaTableCells } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";

interface HeaderProps {
  toggleView: () => void;
  search: string;
  setSearch: (search: string) => void;
}

const SubHeader: React.FC<HeaderProps> = ({ toggleView, search, setSearch }) => {
  const [activeView, setActiveView] = useState<'table' | 'card'>('table'); // State to track active view

  const handleViewToggle = (view: 'table' | 'card') => {
    setActiveView(view);
    toggleView(); // Call the toggleView function when a button is clicked
  };

  return (
    <div className="flex justify-between p-4 bg-white shadow-md">
      {/* Left side */}
      <div className="flex flex-col items-start space-y-4">
        {/* "Users" Title */}
        <div className="text-2xl font-semibold">Users</div>

        {/* View Toggle - Table & Card with separate buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => handleViewToggle('table')}
            className={`flex items-center border-2 p-2 rounded-md ${activeView === 'table' ? 'border-blue-500 bg-blue-100' : 'border-gray-400'} hover:border-blue-500`}
          >
            <FaTableCells className="mr-2" /> Table
          </button>
          <button
            onClick={() => handleViewToggle('card')}
            className={`flex items-center border-2 p-2 rounded-md ${activeView === 'card' ? 'border-blue-500 bg-blue-100' : 'border-gray-400'} hover:border-blue-500`}
          >
            <FaListUl className="mr-2" /> Card
          </button>
        </div>
      </div>

      {/* Right side: Search bar and Create User */}
      <div className="flex space-x-4 items-center">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search users"
            className="px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* Search Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </div>
        </div>

        {/* Create User Button */}
        <Link to="/create-user">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Create User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubHeader;
