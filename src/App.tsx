import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Cart from './components/Cart';
import Franchises from './components/Franchises';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-violet-800 dark:text-pink-300 transition-colors duration-300">
          {showWelcome ? (
            <Welcome />
          ) : (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/franchises" element={<Franchises />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;