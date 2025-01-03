"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type Slide = {
  id: number;
  type: "image" | "video";
  src: string;
};

const slides: Slide[] = [
  { id: 1, type: "image", src: "/images/familiefoto-kaffebar.jpg" },
  { id: 2, type: "image", src: "/images/maersk-line.jpg" },
  { id: 3, type: "video", src: "/videos/kenneth-showreel.mp4" },
  { id: 4, type: "image", src: "/images/stue-kjokken.jpg" },
  { id: 5, type: "image", src: "/images/blomsterskog.jpg" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      {/* Carousel container */}
      <div className="flex justify-center items-center relative overflow-hidden h-64">
        <AnimatePresence>
          {slides.map((slide, index) => {
            const isCurrent = index === currentIndex;

            return (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: isCurrent ? 1 : 0.5,
                  x: isCurrent ? 0 : index > currentIndex ? 150 : -150,
                  scale: isCurrent ? 1 : 0.8,
                }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`absolute w-full h-full flex items-center justify-center`}
                style={{ zIndex: isCurrent ? 20 : 10 }}
                onClick={() => goToSlide(index)}
              >
                {slide.type === "image" ? (
                  <img
                    src={slide.src}
                    alt={`Slide ${index}`}
                    className="object-contain h-full w-full rounded shadow-lg"
                  />
                ) : (
                  <video
                    src={slide.src}
                    controls
                    className="object-contain h-full w-full rounded shadow-lg"
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
