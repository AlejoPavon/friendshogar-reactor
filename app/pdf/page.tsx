'use client';

import React from 'react';
import { HiPrinter, HiArrowLeft } from 'react-icons/hi2';
import Link from 'next/link';

const CatalogoPage = () => {
  const handlePrint = () => {
    window.print();
  };

  const categories = [
    {
      title: "PARTICULARES - ESPALDARES",
      description: "Precios final consumidor final. Tela Pana Premium.",
      items: [
        { label: "Medida 0.80 / 0.90 / 1.00 m", price: "$50.000" },
        { label: "Medida 1.40 m", price: "$60.000" },
        { label: "Medida 1.60 m", price: "$70.000" },
        { label: "Medida 1.80 m", price: "$80.000" },
        { label: "Medida 2.00 m", price: "$90.000" },
      ]
    },
    {
      title: "PARTICULARES - BASES",
      description: "Patas de madera a rosca. Tela Pana Premium.",
      items: [
        { label: "Medida 0.80 / 0.90 / 1.00 m", price: "$50.000" },
        { label: "Medida 1.40 m", price: "$65.000" },
      ]
    },
    {
      title: "PARTICULARES - BAULERAS",
      description: "Tela Pana Premium.",
      items: [
        { label: "Medida 0.80 m", price: "$50.000" },
        { label: "Medida 1.00 m", price: "$60.000" },
        { label: "Medida 1.40 m", price: "$70.000" },
      ]
    },
    {
      title: "MAYORISTAS - ESPALDARES",
      description: "Venta por mayor. Tela Pana Premium.",
      items: [
        { label: "Medida 0.80 / 0.90 / 1.00 m", price: "$37.000" },
        { label: "Medida 1.40 m", price: "$50.000" },
        { label: "Medida 1.60 m", price: "$55.000" },
        { label: "Medida 1.80 m", price: "$60.000" },
        { label: "Medida 2.00 m", price: "$70.000" },
      ]
    },
    {
      title: "MAYORISTAS - BASES",
      description: "Incluye patas de madera. Tela Pana Premium.",
      items: [
        { label: "Medida 0.80 / 0.90 / 1.00 m", price: "$42.000" },
        { label: "Medida 1.40 m", price: "$48.000" },
      ]
    },
    {
      title: "MAYORISTAS - BAULERAS",
      description: "Venta por mayor. Tela Pana Premium.",
      items: [
        { label: "Medida 0.80 m", price: "$45.000" },
        { label: "Medida 1.00 m", price: "$55.000" },
        { label: "Medida 1.40 m", price: "$65.000" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 print:bg-white print:p-0">
      {/* Controls - Hidden when printing */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-bold"
        >
          <HiArrowLeft />
          Volver al Inicio
        </Link>
        <button 
          onClick={handlePrint}
          className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          <HiPrinter className="text-xl" />
          Imprimir / Guardar PDF
        </button>
      </div>

      {/* PDF Document Style */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-2xl min-h-[297mm] p-[20mm] relative border border-gray-100 print:shadow-none print:border-none print:m-0 print:w-full">
        {/* Header */}
        <div className="flex justify-between items-start border-b-2 border-primary pb-8 mb-12">
          <div className="flex items-center gap-6">
            <div className="bg-white p-2 rounded-full border-2 border-primary shadow-xl">
              <img 
                src="/images/images/logo.png" 
                alt="Logo" 
                className="h-16 w-16 object-contain rounded-full" 
              />
            </div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tighter uppercase leading-[0.9]">
              Lista de <br/>
              Precios <span className="text-primary italic">2026</span>
            </h1>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-2">Arquitectura del Descanso</p>
            <p className="text-sm text-gray-500"></p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {categories.map((cat, i) => (
            <div key={i} className="break-inside-avoid">
              <h2 className="text-sm font-black text-white bg-gray-900 px-4 py-2 border-l-4 border-primary mb-4">
                {cat.title}
              </h2>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4 italic">
                {cat.description}
              </p>
              <div className="space-y-3">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-end border-b border-gray-100 pb-1">
                    <span className="text-xs text-gray-700 font-medium">{item.label}</span>
                    <span className="text-sm font-black text-gray-900">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notes Section */}
        <div className="mt-16 bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Notas y Personalización</h3>
          <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
            <li>Todos los productos publicados están confeccionados en <span className="font-bold text-gray-900 uppercase">Tela Pana Premium</span>.</li>
            <li>
              Consulte presupuestos por las siguientes telas alternativas: 
              <span className="font-bold text-gray-700 ml-1 italic">Rústico, Chenille, Cuero Tex, Talampaya</span>.
            </li>
            <li>Los precios están sujetos a cambios sin previo aviso según condiciones de mercado.</li>
            <li>Entrega inmediata sujeta a disponibilidad de stock al momento de la compra.</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="absolute bottom-[20mm] left-[20mm] right-[20mm] border-t border-gray-100 pt-8 flex justify-between items-center opacity-40">
          <p className="text-[10px] uppercase font-bold tracking-widest">© 2026 Friends Hogar</p>
          <p className="text-[10px] font-black tracking-tighter">WWW.FRIENDSHOGAR.COM.AR</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogoPage;
