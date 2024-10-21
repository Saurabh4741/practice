// components/ServicesOverview.js
import React from 'react';
import Link from 'next/link';

const ServicesOverview = ({ services }) => {
    return (
        <section className="py-16 bg-white shadow-lg">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Services</h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                    At NSB Consultancy, we specialize in providing comprehensive services designed to meet your unique business challenges.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.title} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <Link href={service.link} className="text-blue-600 hover:underline">Learn More</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
