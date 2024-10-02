import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, onLogout }) => {
  return (
    <nav style={{
      backgroundColor: '#007bff',
      padding: '0.5rem 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: '50px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Link to="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
        }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: '0.5rem' }}
          >
            <path
              d="M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7V17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 10H15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Medication Reminder
        </Link>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      }}>
        {currentUser ? (
          <>
            <span style={{ color: 'white', marginRight: '1rem' }}>Welcome, {currentUser.name}!</span>
            <NavButton onClick={onLogout}>Log Out</NavButton>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
        <NavLink to="/medications">My Medications</NavLink>
        <NavLink to="/add-medication">Add Medication</NavLink>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} style={{
    color: 'white',
    textDecoration: 'none',
    padding: '0.25rem 0.75rem',
    marginLeft: '0.5rem',
    fontWeight: 600,
    transition: 'background-color 200ms ease-in',
    borderRadius: '4px',
  }}>
    {children}
  </Link>
);

const NavButton = ({ onClick, children }) => (
  <button onClick={onClick} style={{
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 600,
    padding: '0.25rem 0.75rem',
    marginLeft: '0.5rem',
    transition: 'background-color 200ms ease-in',
    borderRadius: '4px',
  }}>
    {children}
  </button>
);

export default Navbar;