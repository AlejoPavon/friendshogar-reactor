'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import ProductCard from '@/components/catalog/ProductCard';
import {
  Product,
  ProductCategory,
  allCategories,
  categoryLabels,
  searchProducts,
  getProductsByCategory,
  getAllProducts,
} from '@/data/products';

const CatalogClient = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');

  const filteredProducts = useMemo(() => {
    let products: Product[];

    if (searchQuery.trim()) {
      products = searchProducts(searchQuery);
    } else if (activeCategory === 'all') {
      products = getAllProducts();
    } else {
      products = getProductsByCategory(activeCategory);
    }

    return products;
  }, [searchQuery, activeCategory]);

  const handleCategoryChange = (category: ProductCategory | 'all') => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-12">
        <div className="relative">
          <HiMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-12 py-4 bg-white border border-gray-200 rounded-2xl text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm hover:shadow-md"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <HiXMark className="text-xl" />
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => handleCategoryChange('all')}
          className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
            activeCategory === 'all' && !searchQuery
              ? 'bg-primary text-white shadow-lg shadow-primary/20'
              : 'bg-white text-gray-500 border border-gray-200 hover:border-primary/30 hover:text-primary'
          }`}
        >
          Todos
        </button>
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              activeCategory === cat && !searchQuery
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-white text-gray-500 border border-gray-200 hover:border-primary/30 hover:text-primary'
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Results Info */}
      {searchQuery && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-gray-400 mb-8"
        >
          {filteredProducts.length} resultado{filteredProducts.length !== 1 ? 's' : ''} para &ldquo;
          <span className="font-bold text-gray-600">{searchQuery}</span>&rdquo;
        </motion.p>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
            <HiMagnifyingGlass className="text-3xl text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Sin resultados</h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            No encontramos productos que coincidan con tu búsqueda. Intentá con otro término o explorá nuestras categorías.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors"
          >
            Ver todos los productos
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default CatalogClient;
