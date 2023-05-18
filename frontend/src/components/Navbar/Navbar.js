import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ auth, logout }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className='navbar_container'>    
        <img src="https://logodix.com/logo/67439.png" alt="Logo" className="logo-img" />
  
    
    <nav >
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/cinemas">Cinemas</Link>
        </li>
        <li>
          <Link to="/offers">Offers</Link>
        </li>
        {auth && (
          <li>
            <Link to="/profile">{auth.UserName}</Link>
          </li>
        )}
        {auth && auth.role === 'admin' && (
          <li>
            <Link to="/dashboard"></Link>
          </li>
        )}
        {auth ? (
          <li>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <div>
          <input className="search_input" type="text" placeholder="Search Movie..."/>

            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Create Account</Link>
            </li>
          </div>
        )}

      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
