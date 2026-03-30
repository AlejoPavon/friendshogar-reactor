'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          className="w-full h-full object-cover opacity-80"
          src="/images/images/background.png"
          alt="Premium Bedroom Background"
        />
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full flex flex-col items-start pt-20">
        <div className="max-w-4xl">


          <motion.h1
            initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-6xl sm:text-8xl md:text-[110px] font-black leading-[0.9] mb-8 tracking-[ -0.05em]"
          >
            SUEÑOS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
              SIN LÍMITES.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 text-lg md:text-2xl mb-12 max-w-xl font-medium leading-relaxed"
          >
            Redefinimos la arquitectura del descanso con precisión artesanal y materiales de vanguardia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 p-2 md:p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] w-full sm:w-fit"
          >
            <button className="bg-primary text-white px-10 py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3 group shadow-2xl shadow-primary/20">
              Explorar Ahora
              <HiArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            <Link 
              href="/pdf"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Ver Catálogo
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero Stats/Features Floating */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 right-6 md:right-12 hidden lg:flex gap-12 text-white"
      >
        <div className="flex flex-col">
          <span className="text-4xl font-black">100%</span>
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Artesanal</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-black">10Y</span>
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Garantía</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-black">#01</span>
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">En Argentina</span>
        </div>
      </motion.div>

      {/* Mouse scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
