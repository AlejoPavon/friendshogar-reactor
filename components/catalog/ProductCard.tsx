'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product, formatPrice, categoryLabels } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const startingPrice = product.sizes?.[0]?.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      layout
    >
      <Link href={`/product/${product.id}`} className="block h-full">
        <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer">
          <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-primary/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wider uppercase">
                {categoryLabels[product.category]}
              </span>
            </div>

            {product.isCustomOnly && (
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-secondary/20 tracking-wider">
                  A PEDIDO
                </span>
              </div>
            )}

            {product.isOutOfStock && (
              <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                <span className="bg-error text-white text-xs font-black px-4 py-2 rounded-lg shadow-xl tracking-[0.2em] uppercase transform -rotate-12 border-2 border-white/20">
                  Sin Stock
                </span>
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight">
              {product.title}
            </h3>
            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
              {product.description}
            </p>

            <div className="mt-auto">
              {product.isCustomOnly ? (
                <div className="py-3 border-2 border-dashed border-gray-100 rounded-xl text-center">
                  <span className="text-primary font-bold text-sm">Consultar Presupuesto</span>
                </div>
              ) : startingPrice ? (
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                    Desde
                  </span>
                  <p className="text-2xl font-black text-gray-900 leading-none">
                    {formatPrice(startingPrice)}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
