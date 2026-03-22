import React from 'react';
import { MdStar } from 'react-icons/md';
import { HiOutlineShoppingCart } from 'react-icons/hi2';

interface ProductCardProps {
  title: string;
  price: string;
  wholesalePrice: string;
  imageUrl: string;
  rating: number;
  specs: { icon: React.ReactNode; text: string }[];
  tag?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  wholesalePrice,
  imageUrl,
  rating,
  specs,
  tag,
}) => {
  return (
    <div className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col relative border border-gray-100">
      {tag && (
        <div className="absolute top-6 right-6 z-10">
          <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {tag}
          </span>
        </div>
      )}
      <div className="overflow-hidden rounded-lg mb-6 aspect-square bg-surface-container-low">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="px-2 flex-grow">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <MdStar
              key={i}
              className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <h3 className="text-lg font-bold text-on-background leading-tight mb-2">{title}</h3>
        <div className="space-y-2 mb-4">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-secondary">
              <span className="text-primary text-lg">{spec.icon}</span>
              <span>{spec.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <p className="text-2xl font-black text-primary">{price}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-bold text-secondary">
              MAYORISTA: {wholesalePrice}
            </span>
          </div>
        </div>
      </div>
      <button className="mt-6 w-full bg-surface-container-high text-on-surface py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors group/btn">
        <HiOutlineShoppingCart className="text-xl" />
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ProductCard;
