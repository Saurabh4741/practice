// components/Header.js
import React from 'react';
import Link from 'next/link';

const HeaderV2 = ({ logoSrc, title, description, buttonLabel, buttonLink }) => {
    return (
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24">
            <div className="container mx-auto text-center">
                <img src={logoSrc} alt="NSB Consultancy Logo" className="mx-auto mb-6 w-32" />
                <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
                <p className="text-lg mb-8 max-w-2xl mx-auto">{description}</p>
                <Link href={buttonLink} className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition">
                    {buttonLabel}
                </Link>
            </div>
        </section>
    );
};

export default HeaderV2;
