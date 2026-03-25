'use client';

import React from 'react';
import { HiMagnifyingGlass, HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0, filter: 'blur(10px)' }}
      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-inverse-surface/80 backdrop-blur-xl border-b border-white/10 shadow-2xl sticky top-0 z-50 flex justify-between items-center px-8 py-4 max-w-full"
    >
      <div className="flex items-center gap-12">
        <span className="text-2xl font-bold tracking-tighter text-white">Friends Hogar</span>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-primary-container font-semibold border-b-2 border-primary-container pb-1 transition-all duration-300"
            href="#"
          >
            Colchones
          </a>
          <a
            className="text-gray-300 hover:text-white transition-all hover:scale-105 duration-200"
            href="#"
          >
            Sommiers
          </a>
          <a
            className="text-gray-300 hover:text-white transition-all hover:scale-105 duration-200"
            href="#"
          >
            Almohadas
          </a>
          <a
            className="text-gray-300 hover:text-white transition-all hover:scale-105 duration-200"
            href="#"
          >
            Muebles
          </a>
          <a
            className="text-gray-300 hover:text-white transition-all hover:scale-105 duration-200"
            href="#"
          >
            Ofertas
          </a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative hidden lg:block">
          <input
            className="bg-white/10 border-none rounded-full px-6 py-2 text-white text-sm focus:ring-1 focus:ring-primary w-64 placeholder:text-gray-400 outline-none"
            placeholder="Buscar productos..."
            type="text"
          />
          <HiMagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        </div>
        <div className="flex items-center gap-4 text-white">
          <button className="hover:scale-110 transition-transform duration-200">
            <HiOutlineShoppingCart className="text-2xl" />
          </button>
          <button className="hover:scale-110 transition-transform duration-200">
            <HiOutlineUser className="text-2xl" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
