"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/Mutuelle Santé.png",
  "/Autos.png",
  "/Habitations.png",
  "/Animaux.png"
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-brand-bg-gray">
      {/* Container with subtle padding/border to feel more framed and premium */}
      <div className="absolute inset-0 overflow-hidden ">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${encodeURI(images[currentIndex])}')`
            }}
          >
            {/* Subtle overlay to keep content readable */}
            {/* <div className="absolute inset-4 bg-brand-navy/5"></div> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modern Gradient Overlay - stays constant over the moving images */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-bg-gray via-brand-bg-gray/60 to-transparent w-full z-10 pointer-events-none"></div>

      {/* Decorative Brand Accent */}
      {/* <div className="absolute bottom-10 right-10 w-24 h-24 bg-brand-green/20 rounded-full blur-3xl z-20"></div> */}
    </div>
  );
}
