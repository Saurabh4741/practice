// components/ExpertiseSection.js
import React from 'react';
import Link from 'next/link';

const ExpertiseSection = ({ title, description, buttonLabel, buttonLink }) => {
    return (
        <section className="py-16 bg-gray-800 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">{title}</h2>
                <p className="max-w-2xl mx-auto mb-8">{description}</p>
                <Link
                    href={buttonLink}
                    className="bg-yellow-300 text-gray-900 px-8 py-3 rounded-full shadow-md hover:bg-yellow-200 transition"
                >
                    {buttonLabel}
                </Link>
            </div>
        </section>
    );
};

export default ExpertiseSection;
