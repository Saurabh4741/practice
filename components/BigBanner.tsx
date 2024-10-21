import React from "react";
import Image from "next/image";

const BigBanner = ({ Img, Title, Description, CTA, url }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8 lg:p-12">
      <div className="flex justify-center items-center">
        <Image
          src={Img}
          alt="Sample Image"
          width={500}
          height={500}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
      <div className="flex flex-col justify-center space-y-4 p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          {Title}
        </h1>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg">
          {Description}
        </p>
        {CTA !== "" && <a
          href={url}
          className=" text-center bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {CTA}
        </a>}
      </div>
    </div>
  );
};

export default BigBanner;
