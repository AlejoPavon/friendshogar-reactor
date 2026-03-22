import React from 'react';

const TopTicker = () => {
  const items = [
    "Sommier Platinum Pro",
    "Colchón Ortho-Density 500",
    "Almohada Visco Gel Premium",
    "Respaldo Minimalist Velvet",
  ];

  // Repeat items to ensure smooth loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-primary text-on-primary py-2 px-4 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center">
        <span className="font-bold text-xs uppercase tracking-widest mr-8 shrink-0">
          Los más vendidos
        </span>
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-scroll gap-12 text-sm font-medium opacity-90">
            {displayItems.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTicker;
