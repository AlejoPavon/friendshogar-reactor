'use client';

import React from 'react';
import TeamMemberCard from '@/components/ui/TeamMemberCard';
import { motion, Variants } from 'framer-motion';

const TeamSection = () => {
  const members = [
    {
      name: "Martin Gomez",
      role: "Director Ejecutivo",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8TTntz0lRbB2wtqT_gSrSb8-zOxlXs7k5xoA_Grwow7H4ex0GFXVYPi5JZ5xQiVynCwv7PDnTh7TToWxPgEqp6sId0oQOiidnEoB-a9O8WxxpfMjg-7h1_Udjs0TfXKHXxIC19So1xEMXrQr1tjGHpHeUd6NOr81NacwBROCK-74y43_9-g9KG8VOJdo0qOAxQQMSuQ_nqmwdGpZN3keSCvJK-vcjwWebXGuE0e3YmmmTW6EyieGCSn4QJiIPxkeFqAqC3qkJSDnY",
    },
    {
      name: "Laura Rossini",
      role: "Directora Creativa",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4eUA4UFF-g3VX9umNEBjBLCyPzgYN4raCGwWWvRJPAzvSc9aIRNQxOp6S0ob_d57atWZ5GIafss-_hqi8S4XdfVpG5cyejQWTNEoLoAAhst_GFmY1iGbHRiRJSR3_XIgJFPWNDtJul2x_QJC3Y31F1hyWTyO_wGzIVx-st6b5R4fmjJYFASdyXAYTCfL2LlqDmCo0NPzj5uK8Syad31tA23hXvv_Aj1cdFOIYtU2qs4NzHOtc6sYyh9J_Vee12Lr7rXTNBy1AXXHT",
    },
    {
      name: "Santiago Mendez",
      role: "Logística y Expansión",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsIukpNQf-i_jV6yOK_QJXcEqQDqLEzDL_VH-ZDeWoNdl02-5Y0yW49DzZSp6D_CsL-EEJZ_pLJ_3mCm8-ONzEABNmkUooRP14i32Ra2xEhlr2pBWt-LnCntMmnStqM4NJ9xNjlIXoVYMmuy5pVav3zSTAsg2oHmJ-2s7iDgf1tPbg1Z9entXmvegysC5ukH2wPoKMBPD2WtYubcNzN4a1vg1cuqF5SAQW6nxUB1S3EJo-PJkFGQCkoOT-cz63B_jWKEMiS5Mcl3Hb",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-on-background tracking-tight">El Equipo</motion.h2>
          <motion.p variants={itemVariants} className="text-secondary mt-4 max-w-xl mx-auto">
            Los arquitectos detrás de tu próximo descanso perfecto. Directores comprometidos con la
            excelencia operativa.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {members.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
