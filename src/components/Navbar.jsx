// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">PLP Task Manager</Link>
        </h1>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/api" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">API Data</Link>
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={toggleTheme}
            className="flex items-center gap-2"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;