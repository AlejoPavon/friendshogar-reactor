import React from 'react';
import ProductCard from '@/components/ui/ProductCard';
import {
  RiWeightLine,
  RiLayoutGridLine,
  RiRuler2Line,
  RiPaletteLine,
  RiSnowflakeLine,
  RiMedicineBottleLine,
} from 'react-icons/ri';
import { HiArrowRight } from 'react-icons/hi2';

const FeaturedProducts = () => {
  const products = [
    {
      title: "Sommier Platinum Pro",
      price: "$185.500",
      wholesalePrice: "$142.000",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXzppmmD4i7SrnMFO56Wf8KchXQ3HLw_1U2meLN42CSElFhj3VyFhucgHDgLLQWTQemBAl0wt0adxSo_pA2SKkA8q9KyKk3HtA6G3zp7sorcM5W5jy3j4kGmoIupDvQchoTg_79rpFFhJgrJSHz8127shk10adRse-F1s4mFLYtJThv7G5N2mFk4rTuPD8dM4AOai5r78YQWqC1r1u0N_6EgXtfJ3KJwHbjLll5ij8PUdeu-g9LFOjfEgvFU8gq-cQPMQQX5rsmgu-",
      rating: 5,
      specs: [
        { icon: <RiWeightLine />, text: "Soporta hasta 140kg" },
        { icon: <RiLayoutGridLine />, text: "Resortes Pocket" },
      ],
    },
    {
      title: "Colchón Ortho-Density 500",
      price: "$124.900",
      wholesalePrice: "$98.400",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVvxQq_9cfp7mP06m0WcOEuFDHlTYhuZMCuHS5G1WUYMZq6LZVjNIBA-AgOcf4rmimRcOHArQYTA_4aQOJtC2BbQqPQjYjl4dsg2BAnO0LF3cIZnQJ-b92JfSu1mBheGyjbWklpoGyUN0ZtViGWd-eGmFLaxujpdwSyUdlbnkOkTEOmnX-BGgEN3on7Hf5AC6uHo6PEsI1qyK0HfdrAVKu-kkoPZJGSsSUwpKFlvLGTTON_-rX2vZkMvSMNRDA7O4EEeU6M38d8WJm",
      rating: 4,
      tag: "ENVÍO GRATIS",
      specs: [
        { icon: <RiWeightLine />, text: "Soporta hasta 120kg" },
        { icon: <RiLayoutGridLine />, text: "Espuma Alta Densidad" },
      ],
    },
    {
      title: "Respaldo Minimalist Velvet",
      price: "$68.200",
      wholesalePrice: "$51.000",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLb8OW087FFYTUrmClW9Te69L9kZ1PMco1bd-SGIvpR3DkYaqPr_7vLVAhu7_tdyes4KOaN3tDyM7Zxl-5bZtSaN6Mga9Ow8l2l_4g83sY1HPPt4qPJNyitW78DttGmF2nJ3hlpK9YKTGnQC92qAeNV-iX6H01FiLhaJv2gu_xOzTFY9wJQVIB_IzGvLD37ygi9s8DJb8pfyXvTHZN9HTSM_1WgSe2RWz1n7TP9qy70-5krcgomYGpIPayMux3fIjDuO4NqD4bdc4I",
      rating: 5,
      specs: [
        { icon: <RiRuler2Line />, text: "Ancho: 1.60m - 2.00m" },
        { icon: <RiPaletteLine />, text: "Terciopelo Premium" },
      ],
    },
    {
      title: "Almohada Visco Gel",
      price: "$18.900",
      wholesalePrice: "$14.200",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnRCvxi9ycE9kwYgSrm7oP29abaQShjS8Dm8AOZXkix-WIyXgm7HeBD699Txt9c5VCKcTwYimrxc723ioha-7y9lTFNgIMsbQJnh4JqH-siLYG26UxPJQ8XekAZt6j_YVFejxX2rfUICF7I8I9e1IRCvEStLBFWaIemmqhYEHn8aboue4NuiW6ohtOeDm-9S3TISgXReJqjrf-DukJaWPv_WrOBMRMoCzmRl2uPUiRh9Qny7dHoddOE3p-G4QiRKwtUNBHYWEsPvtf",
      rating: 5,
      tag: "HOT DEAL",
      specs: [
        { icon: <RiSnowflakeLine />, text: "Tecnología Cold-Gel" },
        { icon: <RiMedicineBottleLine />, text: "Cervical Ergonómica" },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-on-background">Destacados del Mes</h2>
          <p className="text-secondary mt-2">Tecnología de vanguardia para tu descanso diario.</p>
        </div>
        <a
          href="#"
          className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group"
        >
          Ver todos los productos
          <HiArrowRight className="text-xl inline-block" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
