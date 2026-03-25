'use client';

import React from 'react';
import EspaldarCard from '@/components/ui/EspaldarCard';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import { espaldares } from '@/data/espaldares';

const EspaldaresSection = () => {
  return (
    <section className="bg-white py-32 relative overflow-hidden" id="espaldares">
      {/* Decorative background labels */}
      <div className="absolute top-20 right-10 pointer-events-none select-none opacity-[0.03] scale-150 rotate-12">
        <span className="text-[200px] font-black leading-none">HEADBOARDS</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Colección Particular
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-none">
            Espaldares <br />
            <span className="text-secondary">Artesanales.</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
            Personaliza tu dormitorio con nuestra selección de espaldares. Elige tu modelo 
            favorito y selecciona la medida que mejor se adapte a tu espacio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {espaldares.map((espaldar, index) => (
            <AnimationWrapper key={espaldar.id} delay={index * 0.1} distance={40}>
              <EspaldarCard {...espaldar} />
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EspaldaresSection;
