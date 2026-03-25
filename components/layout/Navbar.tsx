'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMagnifyingGlass, HiOutlineShoppingCart, HiOutlineUser, HiBars3, HiXMark } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Colchones', href: '#' },
    { name: 'Sommiers', href: '#' },
    { name: 'Almohadas', href: '#' },
    { name: 'Muebles', href: '#' },
    { name: 'Ofertas', href: '#' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="bg-inverse-surface/80 backdrop-blur-xl border-b border-white/10 shadow-2xl sticky top-0 z-50 flex justify-between items-center px-6 md:px-8 py-4 max-w-full"
      >
        <div className="flex items-center gap-4 md:gap-12">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <HiBars3 />
          </button>

          <Link href="/" className="flex items-center">
            <div className="bg-white p-1 rounded-full border-2 border-primary/20 shadow-lg">
              <img 
                src="/images/images/logo.png" 
                alt="Friends Hogar Logo" 
                className="h-8 md:h-10 w-8 md:w-10 object-contain rounded-full" 
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                className={`${
                  i === 0 
                  ? "text-primary-container border-b-2 border-primary-container pb-1" 
                  : "text-gray-300 hover:text-white"
                } font-semibold transition-all duration-300 whitespace-nowrap text-sm lg:text-base`}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="relative hidden lg:block">
            <input
              className="bg-white/10 border-none rounded-full px-6 py-2 text-white text-sm focus:ring-1 focus:ring-primary w-48 xl:w-64 placeholder:text-gray-400 outline-none"
              placeholder="Buscar productos..."
              type="text"
            />
            <HiMagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
          
          <div className="flex items-center gap-3 md:gap-4 text-white">
            <button className="hover:scale-110 transition-transform duration-200">
              <HiOutlineShoppingCart className="text-xl md:text-2xl" />
            </button>
            <button className="hover:scale-110 transition-transform duration-200">
              <HiOutlineUser className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-xs bg-inverse-surface z-[70] md:hidden p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="bg-white p-1 rounded-full border border-white/20 shadow-lg overflow-hidden shrink-0">
                  <img 
                    src="/images/images/logo.png" 
                    alt="Friends Hogar Logo" 
                    className="h-8 w-8 object-contain rounded-full" 
                  />
                </div>
                <button 
                  className="text-white text-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <HiXMark />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    className="text-gray-300 text-lg font-medium hover:text-white transition-colors"
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="relative w-full mb-6">
                  <input
                    className="bg-white/10 border-none rounded-full px-6 py-3 text-white text-sm focus:ring-1 focus:ring-primary w-full placeholder:text-gray-400 outline-none"
                    placeholder="Buscar productos..."
                    type="text"
                  />
                  <HiMagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                </div>
                <p className="text-gray-500 text-xs text-center">
                  © 2024 Friends Hogar
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
