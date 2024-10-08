import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingCart, Store, UserPlus, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-violet-500 dark:bg-violet-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Deli Tutti</Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-pink-200"><Home /></Link>
          <Link to="/cart" className="hover:text-pink-200"><ShoppingCart /></Link>
          <Link to="/franchises" className="hover:text-pink-200"><Store /></Link>
          <Link to="/register" className="hover:text-pink-200"><UserPlus /></Link>
          <button onClick={toggleTheme} className="hover:text-pink-200">
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;