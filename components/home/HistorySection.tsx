'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HistorySection = () => {
  return (
    <section className="bg-inverse-surface py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh92O0o3P1_9oCrxr3Cci0tFmOdAQosFWOorj0oQvVaBXx_zLLuMZz6jQV_skqeJK2KaZc2eoW4TVlEqNx02QuxpnUbWstQcNRnk1L0piopvAorqtZ2fPPFDBDcPVG9-E5ojNPFP05TdVcrMkIt7KOKC03ka2vlw3v9ohHsjbOOU152NbU5ebExVbVovm_jvzX5RwVvD8PunGba0kMJd8il8w37S7MwdrKxYJYLnL5culWoySsoT4rSBAAlqpV4y3rrdU5TK66xaez"
              alt="Black and white architectural furniture design detail"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-primary tracking-widest uppercase font-bold text-sm mb-4 block">
            Desde 1998
          </span>
          <h2 className="text-5xl font-bold mb-8 tracking-tighter">Nuestra Historia</h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
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
          <button className="mt-12 border-b-2 border-primary pb-2 font-bold hover:text-primary transition-colors">
            Conoce nuestra manufactura
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;
