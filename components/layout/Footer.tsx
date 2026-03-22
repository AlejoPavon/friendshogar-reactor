import React from 'react';
import Link from 'next/link';
import { RiShareLine, RiGlobalLine, RiMailLine, RiVisaFill } from 'react-icons/ri';
import { SiMercadopago } from 'react-icons/si';
import { FaCcMastercard } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background dark:bg-[#1a1c1e] w-full py-12 px-8 border-t border-gray-200 dark:border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <span className="text-xl font-black text-inverse-surface dark:text-white uppercase tracking-tighter">
            Friends Hogar
          </span>
          <p className="text-secondary text-sm leading-relaxed">
            Arquitectura del descanso para hogares modernos. Calidad superior certificada para un
            bienestar sin precedentes.
          </p>
          <div className="flex gap-4">
            <button className="text-secondary hover:text-primary transition-colors cursor-pointer text-xl">
              <RiShareLine />
            </button>
            <button className="text-secondary hover:text-primary transition-colors cursor-pointer text-xl">
              <RiGlobalLine />
            </button>
            <button className="text-secondary hover:text-primary transition-colors cursor-pointer text-xl">
              <RiMailLine />
            </button>
          </div>
          <div className="pt-4 border-t border-gray-100 dark:border-white/5">
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-2">
              Medios de Pago
            </span>
            <div className="flex items-center gap-2">
              <div className="bg-white dark:bg-white/5 p-1.5 rounded-lg border border-gray-100 dark:border-white/10 flex items-center justify-center w-12 h-8 shadow-sm">
                <SiMercadopago className="text-2xl text-[#009EE3]" title="Mercado Pago" />
              </div>
              <div className="bg-white dark:bg-white/5 p-1.5 rounded-lg border border-gray-100 dark:border-white/10 flex items-center justify-center w-12 h-8 shadow-sm">
                <RiVisaFill className="text-xl text-[#1A1F71] dark:text-white" title="Visa" />
              </div>
              <div className="bg-white dark:bg-white/5 p-1.5 rounded-lg border border-gray-100 dark:border-white/10 flex items-center justify-center w-12 h-8 shadow-sm">
                <FaCcMastercard className="text-xl text-[#EB001B] dark:text-white" title="Mastercard" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-bold text-primary">Explorar</h4>
          <ul className="space-y-3">
            <li>
              <a
                className="text-secondary hover:text-on-background text-xs uppercase tracking-widest hover:translate-x-1 transition-transform duration-200 block"
                href="#"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                className="text-secondary hover:text-on-background text-xs uppercase tracking-widest hover:translate-x-1 transition-transform duration-200 block"
                href="#"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                className="text-secondary hover:text-on-background text-xs uppercase tracking-widest hover:translate-x-1 transition-transform duration-200 block"
                href="#"
              >
                Venta Mayorista
              </a>
            </li>
            <li>
              <a
                className="text-secondary hover:text-on-background text-xs uppercase tracking-widest hover:translate-x-1 transition-transform duration-200 block"
                href="#"
              >
                Términos y Condiciones
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-bold text-primary">Soporte</h4>
          <ul className="space-y-3">
            <li>
              <a
                className="text-secondary hover:text-on-background text-xs uppercase tracking-widest hover:translate-x-1 transition-transform duration-200 block"
                href="#"
              >
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a
                className="text-secondary hover:text-on-background text-xs uppercase tracking-widest hover:translate-x-1 transition-transform duration-200 block"
                href="#"
              >
                Envíos y Entregas
              </a>
            </li>
            <li>
              <a
                className="text-secondary hover:text-on-background text-xs uppercase tracking-widest hover:translate-x-1 transition-transform duration-200 block"
                href="#"
              >
                Garantía Platinum
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-bold text-primary">Ubicación</h4>
          <p className="text-secondary text-xs uppercase tracking-widest leading-loose">
            Av. Libertador 1250
            <br />
            Buenos Aires, Argentina
            <br />
            +54 11 4567-8900
          </p>
          <div className="w-full h-32 bg-surface-container-high rounded-xl overflow-hidden mt-4">
            <img
              className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Stylized map showing business location"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATidjDdgJzqEDEFUNcdNNAOSHozSKdmKtuwa2tlDad2luMUU-ddhoOhsxiR_t8eyApJo7l4gztjepqBV_LPq9ivKcvt1qwuK0F9nHEvFxP0mcx6QdTGd-NqeARF08z3QQYw0zy7Nbp0po53eGxskFhiHQdMTRrI0ZuDQ0drnXRe2rS30Ca9PF04VhHSB-k06JUaZFUjEOm49V92iIexhoNcp2c9eqHm9yR0dXDrxtdeScrGf0YtXoviZL4mS03sI56T1wrqPeC_CMj"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-xs uppercase tracking-widest font-semibold text-gray-400">
          © {new Date().getFullYear()} Friends Hogar. Arquitectura del Descanso.
        </p>

        <Link href="https://triumschemas.com.ar" target="_blank" rel="noopener noreferrer">
          <div className="relative group">
            <div className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-300 cursor-default flex items-center gap-2">
              <span>Desarrollado por</span>
              <span className="font-medium text-gray-400 bg-gradient-to-r from-blue-400/10 to-purple-400/10 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 group-hover:border-primary transition-all duration-300">
                Trium Schemas
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
            </div>

            <div className="absolute -top-10 right-0 bg-inverse-surface text-white text-[10px] px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
              Diseño y desarrollo web
              <div className="absolute -bottom-1 right-8 w-2 h-2 bg-inverse-surface rotate-45"></div>
            </div>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
