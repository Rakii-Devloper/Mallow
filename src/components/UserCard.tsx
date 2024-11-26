import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa'; // Edit and delete icons
import { GrEdit} from 'react-icons/gr'; // Edit and delete icons


interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface UserCardProps {
  users: User[];
}

const UserCard: React.FC<UserCardProps> = ({ users }) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedUserId(id === selectedUserId ? null : id); // Toggle selection
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-5">
      {users.map((user) => (
        <div
          key={user.id}
          className="relative cursor-pointer aspect-square"
          onClick={() => handleCardClick(user.id)}
        >
          {/* Card Content */}
          <div
            className={`transition-all bg-white shadow-lg rounded-lg overflow-hidden duration-300 ${
              selectedUserId === user.id ? 'blur-sm' : ''
            }`}
            style={{
              height: '100%',
              width: '100%',
            }}
          >
            {/* Avatar - Circle */}
            <div className="flex justify-center items-center mt-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-60 h-60 rounded-full border-4 border-gray-200"
              />
            </div>

            {/* Name */}
            <div className="p-4 text-center">
              <h3 className="text-3xl font-semibold">{user.name}</h3>
            </div>

            {/* Email */}
            <div className="p-4 text-center text-2xl text-gray-500">
              <p>{user.email}</p>
            </div>
          </div>

          {/* Edit and Delete Icons - Centered and not affected by blur */}
          {selectedUserId === user.id && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
              <div className="flex text-5xl space-x-6">
                <button className="text-white p-8 bg-blue-500 rounded-full hover:bg-blue-600">
                  <GrEdit />
                </button>
                <button className="text-white p-8 bg-red-500 rounded-full hover:bg-red-600">
                  <FaTrash />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserCard;
