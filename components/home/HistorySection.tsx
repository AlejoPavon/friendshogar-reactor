'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HistorySection = () => {
  return (
    <section className="bg-inverse-surface py-20 md:py-32 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="aspect-[4/5] sm:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh92O0o3P1_9oCrxr3Cci0tFmOdAQosFWOorj0oQvVaBXx_zLLuMZz6jQV_skqeJK2KaZc2eoW4TVlEqNx02QuxpnUbWstQcNRnk1L0piopvAorqtZ2fPPFDBDcPVG9-E5ojNPFP05TdVcrMkIt7KOKC03ka2vlw3v9ohHsjbOOU152NbU5ebExVbVovm_jvzX5RwVvD8PunGba0kMJd8il8w37S7MwdrKxYJYLnL5culWoySsoT4rSBAAlqpV4y3rrdU5TK66xaez"
              alt="Black and white architectural furniture design detail"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-primary rounded-full blur-[80px] md:blur-[100px] opacity-20"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <span className="text-primary tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold text-xs md:text-sm mb-4 block text-center lg:text-left">
            Desde 1998
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter text-center lg:text-left">
            Nuestra Historia
          </h2>
          <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <p>
              En <span className="text-white font-bold">Friends Hogar</span>, creemos que el
              descanso no es un lujo, sino una arquitectura fundamental para la vida. Lo que comenzó
              como un pequeño taller familiar se ha transformado en el referente nacional de
              ingeniería aplicada al sueño.
            </p>
            <p>
              Nuestra misión es simple: fusionar el diseño editorial con la tecnología de materiales
              más avanzada del mundo, permitiendo que cada hogar acceda a una experiencia de hotel
              de cinco estrellas cada noche.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="mt-8 md:mt-12 border-b-2 border-primary pb-2 font-bold hover:text-primary transition-all hover:gap-4 flex items-center gap-2">
              Conoce nuestra manufactura
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;
