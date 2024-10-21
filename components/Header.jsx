import React from 'react';

const Header = ({ profileImage, name, title, description, resumeLink, contactSection }) => {
  return (
    <header className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
      {/* Profile Image */}
      <img 
        src={profileImage} 
        alt={`Profile of ${name}`} 
        className="rounded-full w-32 shadow-lg hover:shadow-xl transition-shadow duration-300" 
        loading="lazy"
      />

      {/* Greeting */}
      <h3 className="flex items-center gap-2 text-xl md:text-2xl font-Ovo text-gray-700 dark:text-gray-300">
        Hi! I&apos;m {name} 
        <img src="/assets/hand-icon.png" alt="Hand waving icon" className="w-6 animate-waving" />
      </h3>

      {/* Title */}
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-gray-900 dark:text-white">
        {title}
      </h1>

      {/* Description */}
      <p className="max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-gray-400">
        {description}
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        {/* Contact Me Button */}
        <a 
          href={contactSection}
          className="px-10 py-3 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
        >
          Contact me 
          <img src="/assets/right-arrow-white.png" alt="Right arrow icon" className="w-4" loading="lazy" />
        </a>

        {/* Download Resume Button */}
        <a 
          href={resumeLink} 
          download
          className="px-10 py-3 rounded-full border border-gray-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
        >
          My Resume 
          <img src="/assets/download-icon.png" alt="Download icon" className="w-4" loading="lazy" />
        </a>
      </div>
    </header>
  );
};

export default Header;
