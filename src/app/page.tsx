// src/app/page.tsx
"use client";

import React from "react";
import Carousel from "./carousel";

export default function Home() {
  return (
    <div className="w-full h-full mt-8 space-y-16">
      {/* Hero section */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to My Modern Site</h1>
        <p className="max-w-xl mx-auto text-gray-400">
          Experience minimalistic dark mode design with smooth animations.
        </p>
      </section>

      {/* Image/Video Carousel */}
      <section id="gallery">
        <h2 className="text-2xl font-semibold text-center mb-4">Gallery</h2>
        <Carousel />
      </section>

      {/* Another placeholder - maybe a second carousel or more content */}
      <section id="videos" className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Video Showcase</h2>
        <p className="text-gray-400">
          Another section or placeholder for your videos. 
          Add more custom components here.
        </p>
      </section>
    </div>
  );
}
