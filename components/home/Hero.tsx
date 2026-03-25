'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header className="relative h-[870px] w-full flex items-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh6lGk8bkxdRylnRuTjl3AO5zj1DGoSBsYk2Zj9CZB6JSpEleG_KVeU6gC2bUUm-t6We5tj3nRTKhu4gOWOXR0arBeR8WhP_vDT4R2Re8refwWQCEU4R8jpfRZlmxtLMOVG_UK9ggnFZO3TlIXtKbGM7zjGlB3D4mo5aTTUcbTgFtpVV5fkGDbu_UwDl2J9itDHje3Nm4U4Wf1TLmrA8i7tt-4rmUwlJtbXPqLjDzA-SZ2_HyB1ZDxXTyCrcBK5zMIiUmvcGht2M80"
          alt="Minimalist high-end master bedroom with blue accents"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/60 to-transparent"></div>
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-primary-fixed-dim uppercase tracking-[0.3em] font-bold text-sm mb-4 block"
          >
            Arquitectura del Descanso
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-6xl md:text-8xl font-bold leading-[1.1] mb-8 tracking-tighter"
          >
            Eleva tu
            <br />
            Bienestar.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-200 text-xl mb-10 max-w-lg font-light leading-relaxed"
          >
            Descubre la precisión técnica y el confort editorial en nuestra nueva colección de
            temporada.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4"
          >
            <button className="bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-[0px_20px_40px_rgba(0,90,183,0.3)] hover:-translate-y-1 transition-all duration-300">
              Explorar Colección
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Ver Catálogo
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
