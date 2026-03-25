'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Espaldar, sizes } from '@/data/espaldares';
import { HiChevronDown } from 'react-icons/hi2';

const EspaldarCard: React.FC<Espaldar> = ({ title, description, imageUrl, isCustomOnly }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
        
        {isCustomOnly && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-secondary/20 tracking-wider">
              A PEDIDO
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
          {description}
        </p>

        <div className="mt-auto space-y-4">
          {!isCustomOnly ? (
            <>
              {/* Size Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-primary/30 transition-colors"
                >
                  <span className="font-medium text-xs uppercase tracking-wider text-gray-400">Medida:</span>
                  <span className="font-bold">{selectedSize.label}</span>
                  <HiChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsDropdownOpen(false)} 
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-full mb-2 left-0 w-full bg-white border border-gray-100 rounded-xl shadow-2xl z-20 py-2 overflow-hidden"
                      >
                        {sizes.map((size) => (
                          <button
                            key={size.label}
                            onClick={() => {
                              setSelectedSize(size);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex justify-between items-center ${
                              selectedSize.label === size.label ? 'bg-primary/5 text-primary font-bold' : 'text-gray-600'
                            }`}
                          >
                            <span>{size.label}</span>
                            <span className="text-[10px] opacity-60">{formatPrice(size.price)}</span>
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Precio sugerido</span>
                <p className="text-2xl font-black text-gray-900 leading-none">
                  {formatPrice(selectedSize.price)}
                </p>
              </div>
            </>
          ) : (
            <div className="py-4 border-2 border-dashed border-gray-100 rounded-xl text-center">
              <span className="text-primary font-bold text-sm">Consultar Presupuesto</span>
              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">Diseño Exclusivo</p>
            </div>
          )}
          
          <button className="w-full bg-inverse-surface text-white py-3 rounded-xl font-bold text-sm hover:bg-primary transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-primary/20">
            Consultar por WhatsApp
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EspaldarCard;
