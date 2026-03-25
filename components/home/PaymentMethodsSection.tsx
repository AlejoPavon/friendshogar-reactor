"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const PaymentMethodsSection = () => {
  const paymentMethods = [
    { 
      name: "Mercado Pago", 
      id: "mercadopago", 
      image: "/images/logos/extracted/mercadopago/Logos Mercado Pago 2025/Uso digital - RGB/PNGs/MP_RGB_HANDSHAKE_color_horizontal.png"
    },
    { 
      name: "Visa", 
      id: "visa", 
      image: "/images/logos/extracted/visa_svg/Visa_Brandmark_RGB_2021_SVG/Visa_Brandmark_Blue_RGB_2021.svg"
    },
    { 
      name: "Mastercard", 
      id: "mastercard", 
      image: "/images/logos/extracted/mastercard_svg/Mastercard Symbol - SVG/Artwork/ma_symbol.svg"
    },
    { 
      name: "Maestro", 
      id: "maestro", 
      image: "/images/logos/extracted/maestro_svg/Maestro - White and Light Backgrounds - SVG/Artwork/Maestro Horizontal/ms_hrz_pos.svg"
    },
    { 
      name: "Tarjeta Naranja", 
      id: "naranja", 
      image: "/images/logos/Logo_Naranja.png"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      filter: "blur(10px)",
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
      },
    },
  };

  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
      >
        {/* Decorative element */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter"
          >
            Medios de Pago
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-white/80 text-lg mb-16 max-w-xl mx-auto"
          >
            Aceptamos las principales tarjetas y plataformas del país para que tu compra sea simple y segura.
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
          >
            {paymentMethods.map((method) => (
              <motion.div 
                key={method.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md rounded-[2rem] p-2 border border-white/20 flex flex-col items-center justify-center group hover:bg-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="w-full h-24 md:h-32 bg-white rounded-[1.5rem] flex items-center justify-center overflow-hidden shadow-xl p-6 md:p-8">
                  <div className="relative w-full h-full">
                    <Image 
                      src={method.image} 
                      alt={method.name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="w-8 h-[1px] bg-white/20"></span>
            Transacciones Protegidas
            <span className="w-8 h-[1px] bg-white/20"></span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PaymentMethodsSection;
