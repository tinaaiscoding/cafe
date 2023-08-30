import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      <NavBar />
      {user ? (
        <Routes>
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />
        </Routes>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}
