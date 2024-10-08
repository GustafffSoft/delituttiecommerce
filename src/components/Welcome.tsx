import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-violet-400 to-pink-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-4xl font-bold text-white mb-4"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Bienvenido a nuestra dulcería
        </motion.h1>
        <motion.h2
          className="text-6xl font-extrabold text-white"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Deli Tutti
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Welcome;