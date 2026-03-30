'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { HiArrowLeft, HiChevronDown } from 'react-icons/hi2';
import { Product, formatPrice, categoryLabels } from '@/data/products';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el producto: ${product.title}${selectedSize ? ` - Medida: ${selectedSize.label}` : ''}. ¿Podrían darme más info?`
  );

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-bold text-sm uppercase tracking-wider mb-10 group"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Volver al Catálogo
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative blur */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-full blur-[80px] opacity-10 pointer-events-none" />
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          {/* Category */}
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">
            {categoryLabels[product.category]}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-4 leading-tight">
            {product.title}
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
            {product.description}
          </p>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Price / Size Section */}
          <div className="space-y-6 mt-auto">
            {product.isOutOfStock ? (
              <div className="space-y-6">
                <div className="py-6 border-2 border-dashed border-error/20 bg-error/5 rounded-2xl text-center">
                  <span className="text-error font-bold text-lg">Próximamente / Sin Stock</span>
                  <p className="text-[10px] text-error/60 mt-1 uppercase tracking-widest font-bold">
                    Estamos renovando nuestro catálogo
                  </p>
                </div>
                <button
                  disabled
                  className="block w-full bg-gray-200 text-gray-500 py-4 rounded-xl font-bold text-sm text-center cursor-not-allowed shadow-inner"
                >
                  No disponible momentáneamente
                </button>
              </div>
            ) : (
              <>
                {product.isCustomOnly ? (
                  <div className="py-6 border-2 border-dashed border-gray-100 rounded-2xl text-center">
                    <span className="text-primary font-bold text-lg">Consultar Presupuesto</span>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">
                      Diseño Exclusivo
                    </p>
                  </div>
                ) : product.sizes && product.sizes.length > 0 && selectedSize ? (
                  <>
                    {/* Size Selector */}
                    <div className="relative">
                      <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-2">
                        Seleccionar medida
                      </label>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center justify-between px-5 py-4 border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-primary/30 transition-colors bg-white"
                      >
                        <span className="font-bold">{selectedSize.label}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-primary font-black">{formatPrice(selectedSize.price)}</span>
                          <HiChevronDown
                            className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                          />
                        </div>
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
                              className="absolute top-full mt-2 left-0 w-full bg-white border border-gray-100 rounded-xl shadow-2xl z-20 py-2 overflow-hidden"
                            >
                              {product.sizes.map((size) => (
                                <button
                                  key={size.label}
                                  onClick={() => {
                                    setSelectedSize(size);
                                    setIsDropdownOpen(false);
                                  }}
                                  className={`w-full text-left px-5 py-3 text-sm hover:bg-gray-50 transition-colors flex justify-between items-center ${
                                    selectedSize.label === size.label
                                      ? 'bg-primary/5 text-primary font-bold'
                                      : 'text-gray-600'
                                  }`}
                                >
                                  <span>{size.label}</span>
                                  <span className="font-bold">{formatPrice(size.price)}</span>
                                </button>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Price Display */}
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                        Precio sugerido
                      </span>
                      <p className="text-4xl font-black text-gray-900 leading-none">
                        {formatPrice(selectedSize.price)}
                      </p>
                    </div>
                  </>
                ) : null}

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/5491145678900?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-inverse-surface text-white py-4 rounded-xl font-bold text-sm text-center hover:bg-primary transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-primary/20"
                >
                  Consultar por WhatsApp
                </a>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
