import React, { useState } from "react";
import SubHeader from "../components/SubHeader";
import UserCard from "../components/UserCard";
import UserList from "../components/UserList";


// Dummy data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Alice Brown", email: "alice@example.com", avatar: "https://i.pravatar.cc/150?img=3" },
];

const UserDetail: React.FC = () => {
  const [view, setView] = useState<'list' | 'card'>('list'); // Default view is list
  const [search, setSearch] = useState(''); // State to store search term

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-10 ">
      <SubHeader search={search} setSearch={setSearch} toggleView={() => setView(view === 'list' ? 'card' : 'list')} />
      
      <div className="flex-grow  ">
        {view === 'list' ? <UserList users={filteredUsers} /> : <UserCard users={filteredUsers} />}
      </div>
    </div>
  );
};

export default UserDetail;


