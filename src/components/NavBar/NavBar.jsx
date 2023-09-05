import React from 'react';
import { Link } from 'react-router-dom';
import { removeUser } from '../../utilities/users-service';


import './NavBar.css'

const NavBar = ({ user, setUser }) => {
  function handleLogOut () {
    setUser(removeUser())
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/orders">Order History</Link>
      <Link to="/orders/new">New Order</Link>
      <p>Welcome, { user.name }</p>

      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
};

export default NavBar;
