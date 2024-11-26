import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import UserDetail from './pages/UserDetail';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-details" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
