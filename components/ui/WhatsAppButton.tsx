import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        <div className="bg-white dark:bg-zinc-900 text-on-background px-4 py-2 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-white/10 whitespace-nowrap relative">
          <p className="text-sm font-bold">Contacta con nosotros</p>
          {/* Arrow */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white dark:bg-zinc-900 border-r border-t border-gray-100 dark:border-white/10 rotate-45"></div>
        </div>
      </div>

      {/* Main Button */}
      <a
        href="https://wa.me/5491145678900"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 relative overflow-hidden"
      >
        <FaWhatsapp className="text-3xl" />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
