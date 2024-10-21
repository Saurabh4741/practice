import React from 'react';

const ImageGallery = ({ title, images }) => {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      {/* Title Section */}
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-white tracking-wide">
        {title}
      </h2>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center items-center gap-12 px-6 md:px-12">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="w-[300px] aspect-[40/53] relative group transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />

            {/* Image Overlay for Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
