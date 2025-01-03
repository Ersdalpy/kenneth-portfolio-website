// src/app/carousel.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type Slide = {
  id: number;
  type: "image" | "video";
  src: string;
};

const slides: Slide[] = [
  { id: 1, type: "image", src: "/images/pic1.jpg" },
  { id: 2, type: "video", src: "/videos/video1.mp4" },
  { id: 3, type: "image", src: "/images/pic2.jpg" },
  // Add more slides as you like
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto p-4">
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prevSlide}
          className="text-white bg-black/50 px-2 py-1 rounded hover:bg-black/70"
        >
          Prev
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={nextSlide}
          className="text-white bg-black/50 px-2 py-1 rounded hover:bg-black/70"
        >
          Next
        </button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center w-full h-64 sm:h-80 bg-black"
          >
            {slides[currentIndex].type === "image" ? (
              <img
                src={slides[currentIndex].src}
                alt={`Slide ${currentIndex}`}
                className="h-full object-contain"
              />
            ) : (
              <video
                src={slides[currentIndex].src}
                className="h-full"
                controls
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
