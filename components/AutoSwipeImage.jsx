import React from 'react';
import { useState, useEffect } from 'react';

const AutoScrollImage = ({ images, intervalTime = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(true); // Auto-scroll status

  useEffect(() => {
    if (!isAutoScroll) return; // If auto-scroll is disabled, do nothing

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval); // Clean up on unmount
  }, [isAutoScroll, images.length, intervalTime]);

  // Function to handle manual scroll
  const handleManualScroll = (direction) => {
    setIsAutoScroll(false); // Disable auto-scroll when manual interaction happens
    if (direction === 'left') {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }

    // Re-enable auto-scroll after some time (e.g., 10 seconds)
    setTimeout(() => setIsAutoScroll(true), 10000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Left Button */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded"
        onClick={() => handleManualScroll('left')}
      >
        &larr;
      </button>

      {/* Image display */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`absolute top-20 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Right Button */}
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded"
        onClick={() => handleManualScroll('right')}
      >
        &rarr;
      </button>
    </div>
  );
};

export default AutoScrollImage;
