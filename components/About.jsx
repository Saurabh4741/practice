import React from 'react';

const About = ({ title, subtitle, imageSrc, bio, highlights, tools }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">{title}</h4>
      <h2 className="text-center text-5xl font-Ovo">{subtitle}</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img src={imageSrc} alt="Profile Picture" className="w-64 sm:w-80 rounded-3xl max-w-none" />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img src="/assets/circular-text.png" alt="Circular Text" className="w-full animate-spin_slow" />
            <img src="/assets/sitecore.png" alt="Sitecore Logo" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">{bio}</p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {highlights.map((highlight, index) => (
              <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                <img src={highlight.icon} alt={`${highlight.title} Icon`} className="w-7 mt-3 dark:hidden" />
                <img src={highlight.iconDark} alt={`${highlight.title} Dark Icon`} className="w-7 mt-3 hidden dark:block" />

                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{highlight.title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{highlight.description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I Use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {tools.map((tool, index) => (
              <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
