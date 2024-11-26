import React from "react";

// Function to split full name into first and last names
const getFirstName = (name: string) => name.split(' ')[0];
const getLastName = (name: string) => name.split(' ')[1];

interface TableViewProps {
  users: { id: number, name: string, email: string, avatar: string }[];
}

const UserList: React.FC<TableViewProps> = ({ users }) => {
  return (
    <div className="overflow-x-auto bg-white">
      <table className="min-w-full table-auto ">
      <thead className="bg-gray-100">
  <tr>
    <th className="px-4 py-2 text-left"></th>
    <th className="px-4 py-2 text-left">Email</th>
    <th className="px-4 py-2 text-left">First Name</th>
    <th className="px-4 py-2 text-left">Last Name</th>
    <th className="px-4 py-2 text-left">Action</th>
  </tr>
</thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="px-4 py-2">
                <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
              </td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{getFirstName(user.name)}</td>
              <td className="px-4 py-2">{getLastName(user.name)}</td>
              <td className="px-4 py-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ml-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
