// components/ContactSection.js
import React from 'react';
import Link from 'next/link';

const ContactSection = ({ title, description, buttonLabel, buttonLink }) => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">{title}</h2>
                <p className="max-w-xl mx-auto mb-6">{description}</p>
                <Link
                    href={buttonLink}
                    className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-500 transition"
                >
                    {buttonLabel}
                </Link>
            </div>
        </section>
    );
};

export default ContactSection;
