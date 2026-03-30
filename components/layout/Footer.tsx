import React from 'react';
import Link from 'next/link';
import { RiShareLine, RiGlobalLine, RiMailLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-background dark:bg-[#1a1c1e] w-full py-12 md:py-20 px-6 md:px-8 border-t border-gray-200 dark:border-white/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="space-y-6 text-center sm:text-left">
          <Link href="/" className="inline-block group">
            <div className="bg-white p-1.5 rounded-full border-2 border-primary/10 shadow-lg group-hover:border-primary/30 transition-all duration-500 mb-4 inline-block">
              <img 
                src="/images/images/logo.png" 
                alt="Friends Hogar Logo" 
                className="h-12 w-12 object-contain rounded-full" 
              />
            </div>
          </Link>
          <p className="text-secondary text-base leading-relaxed max-w-xs mx-auto sm:mx-0">
            Arquitectura del descanso para hogares modernos. Calidad superior certificada para un
            bienestar sin precedentes.
          </p>
          <div className="flex justify-center sm:justify-start gap-4">
            <button className="text-secondary hover:text-primary transition-colors cursor-pointer text-2xl">
              <RiShareLine />
            </button>
            <button className="text-secondary hover:text-primary transition-colors cursor-pointer text-2xl">
              <RiGlobalLine />
            </button>
            <button className="text-secondary hover:text-primary transition-colors cursor-pointer text-2xl">
              <RiMailLine />
            </button>
          </div>

        </div>

        {/* Explore Section */}
        <div className="space-y-6 text-center sm:text-left">
          <h4 className="text-xs uppercase tracking-[0.2em] font-black text-primary">Explorar</h4>
          <ul className="space-y-4">
            {['Nosotros', 'Contacto', 'Venta Mayorista', 'Términos y Condiciones'].map((link) => (
              <li key={link}>
                <a
                  className="text-secondary hover:text-on-background text-[11px] uppercase tracking-widest font-bold hover:translate-x-1 transition-transform duration-200 block"
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div className="space-y-6 text-center sm:text-left">
          <h4 className="text-xs uppercase tracking-[0.2em] font-black text-primary">Soporte</h4>
          <ul className="space-y-4">
            {['Preguntas Frecuentes', 'Envíos y Entregas'].map((link) => (
              <li key={link}>
                <a
                  className="text-secondary hover:text-on-background text-[11px] uppercase tracking-widest font-bold hover:translate-x-1 transition-transform duration-200 block"
                  href="#"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>


      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-100 dark:border-white/5 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <p className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">
          © {new Date().getFullYear()} Friends Hogar. Arquitectura del Descanso.
        </p>

        <Link href="https://triumschemas.com.ar" target="_blank" rel="noopener noreferrer">
          <div className="relative group">
            <div className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors duration-300 cursor-default flex items-center gap-3">
              <span className="uppercase tracking-widest font-bold">Desarrollado por</span>
              <span className="font-black text-gray-400 bg-gradient-to-r from-blue-400/5 to-purple-400/5 px-4 py-2 rounded-full border border-gray-100 dark:border-gray-800 group-hover:border-primary transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                Trium Schemas
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
