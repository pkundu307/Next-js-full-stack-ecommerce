"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import Navbar from '../general/Navbar';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/627ab1121502531.60c775945f4bf.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2twgclZN0bbq3L0H5ujcmVOWfEmg2r6bviA&s',
    'https://static.vecteezy.com/system/resources/thumbnails/007/456/400/small/5-may-shopping-day-poster-or-banner-with-5-over-on-product-podium-scene-5-may-sales-banner-template-design-for-social-media-and-website-vector.jpg',
    '/docs/images/carousel/carousel-4.svg',
    '/docs/images/carousel/carousel-5.svg',
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>

    <div className="relative w-screen mt-2" data-carousel="slide">
  {/* Carousel wrapper */}
  <div className="relative h-64 overflow-hidden rounded-lg md:h-96 ml-5 mr-5"> {/* Adjust height as needed */}
    <div className="relative w-full h-full overflow-hidden"> {/* Ensure it takes full height */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentIndex ? 'block' : 'hidden'
          }`}
          data-carousel-item
        >
          <Image
            src={src}
            layout="fill"
            objectFit="cover"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </div>
  </div>
  {/* Slider indicators */}
  <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    {images.map((_, index) => (
      <button
        key={index}
        type="button"
        className={`w-3 h-3 rounded-full ${
          currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        aria-label={`Slide ${index + 1}`}
        onClick={() => setCurrentIndex(index)}
      ></button>
    ))}
  </div>
  {/* Slider controls */}
  <button
    type="button"
    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    onClick={handlePrev}
    aria-label="Previous"
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white focus:outline-none">
      <svg
        className="w-4 h-4 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 1 1 5l4 4"
        />
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button
    type="button"
    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    onClick={handleNext}
    aria-label="Next"
  >
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white focus:outline-none">
      <svg
        className="w-4 h-4 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>

    </>
  );
};

export default Carousel;
