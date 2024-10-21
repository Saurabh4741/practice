import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Services = ({ servicesData = [], title, subtitle, description }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  // Auto-scrolling functionality
  useEffect(() => {
    const slide = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    };

    const interval = setInterval(slide, 2000);
    setAutoSlideInterval(interval);

    return () => clearInterval(interval);
  }, [servicesData]);

  const stopAutoSlide = () => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      setAutoSlideInterval(null);
    }
  };

  const handleMouseDown = (e) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const scrollLeftClick = () => {
    stopAutoSlide();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRightClick = () => {
    stopAutoSlide();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20 relative">
      <h4 className="text-center mb-2 text-lg font-Ovo">{title}</h4>
      <h2 className="text-center text-5xl font-Ovo">{subtitle}</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        {description}
      </p>

      {/* Left arrow */}
      <button
        className="absolute left-[5%] top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        onClick={scrollLeftClick}
        aria-label="Scroll left"
      >
        &#10094;
      </button>

      <div
        className="overflow-x-hidden cursor-grab active:cursor-grabbing"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex gap-6 my-10">
          {servicesData.length > 0 ? (
            servicesData.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 border border-gray-400 rounded-xl px-8 py-12 w-[300px] hover:shadow-lg hover:-translate-y-2 transform transition-transform duration-300 cursor-pointer bg-white dark:bg-gray-800"
              >
                {service.imageSrc !== "" && <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={274}
                  height={274}
                  className="w-[274px] h-[274px] mx-auto mb-4 object-cover rounded-full shadow-md"
                />}
                <h3 className="text-lg my-4 text-gray-700 dark:text-white text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-5 dark:text-white/80 text-center">
                  {service.description}
                </p>
                <Link href={service.link} className="flex items-center justify-center gap-2 text-sm mt-5 text-blue-500">
                  Read more <Image src="/assets/right-arrow.png" alt="Right Arrow" width={16} height={16} className="w-4" />
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No services available.</p>
          )}

          {/* Clone the cards to create an infinite scroll effect */}
          {servicesData.length > 0 &&
            servicesData.map((service, index) => (
              <div
                key={`clone-${index}`}
                className="flex-shrink-0 border border-gray-400 rounded-xl px-8 py-12 w-[300px] hover:shadow-lg hover:-translate-y-2 transform transition-transform duration-300 cursor-pointer bg-white dark:bg-gray-800"
              >
                {service.imageSrc !== "" && <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={274}
                  height={274}
                  className="w-[274px] h-[274px] mx-auto mb-4 object-cover rounded-full shadow-md"
                />}
                <h3 className="text-lg my-4 text-gray-700 dark:text-white text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-5 dark:text-white/80 text-center">
                  {service.description}
                </p>
                <Link href={service.link} className="flex items-center justify-center gap-2 text-sm mt-5 text-blue-500">
                  Read more <Image src="/assets/right-arrow.png" alt="Right Arrow" width={16} height={16} className="w-4" />
                </Link>
              </div>
            ))}
        </div>
      </div>

      {/* Right arrow */}
      <button
        className="absolute right-[5%] top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gradient-to-l from-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        onClick={scrollRightClick}
        aria-label="Scroll right"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Services;
