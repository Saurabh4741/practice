import React from 'react';

const AboutUs = ({ imageSrc, imagePosition, description, title }) => {
  return (
    <div id="about-us" className="w-full py-16 px-6 md:px-[12%] bg-gray-100 dark:bg-gray-800">
      <div 
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}
      >
        {/* Content Section */}
        <div className={`${imagePosition === 'right' ? 'md:order-1' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {description}
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
