import React from "react";
import Head from "next/head";
import Link from "next/link"; // Make sure this is included
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import Services from '../components/Services';
import AboutUs from "../components/AboutUs";

const Home = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/NikhilBidhuri' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhilbidhuri' },
    { name: 'Instagram', url: 'https://www.instagram.com/nikhilbidhuri19' },
    { name: 'Sitecore Solution', url: 'https://sitecoresolutionsbynikhil.blogspot.com' }
  ];
  const navLinks = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Products',
      subMenu: [
        { label: 'Sewage treatment plant', href: '/sewage-treatment-plant' },
        { label: 'Effluent treatment plant', href: '/effluent-treatment-plant' },
        { label: 'Domestic water softener', href: '/domestic-water-softener' },
        { label: 'Commercial RO plant', href: '/commercial-ro-plant' },
        { label: 'Ultra filtration', href: '/ultra-filtration' },
        { label: 'Pressure Pump', href: '/pressure-pump' },
        { label: 'Fire fighting', href: '/firefighting' },
        { label: 'Water cooler', href: '/water-cooler' },
      ],
    },
    {
      label: 'About Us',
      href: '/about',
    },
  ];
  
  const contactLink = { label: 'Contact Us', href: '/contact' };
  
  const servicesData = [
    {
      imageSrc: '/assets/products/watersoftenermain.jpg',
      title: 'Domestic Water Softeners',
      description: 'Water Softener is a type of filter that removes the calcium and magnesium in hard water by using beads. We are the manufacturer and supplier.',
      link: '/sitecore',
    },
    {
      imageSrc: '/assets/products/industrial-ro-plant-p11.jpg',
      title: 'Industrial RO Plant',
      description: 'Backed by our in-depth industry expertise, we are offering unmatched range of Industrial RO Water Plants. ',
      link: '/xmcloud',
    },
    {
      imageSrc: '/assets/products/commericial-ro-plant11.jpg',
      title: 'Commercial RO Plant',
      description: 'Reverse Osmosis (RO) is a process of physical separation of dissolved solids and minerals present in water.',
      link: '/customsitecore',
    },
    {
      imageSrc: '/assets/products/stp2.webp',
      title: 'Sewage Treatment Plant',
      description: 'Sewage treatment or STP plant is used to remove contaminants from waste water. It involves physical, chemical.ustom PowerShell scripts to automate and enhance content management processes within your Sitecore environment.',
      link: '/powershell',
    },
  ];

  return (
    <>
      <Head>
        <title>Chemicx</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="NSB Consultancy provides top-notch Sitecore development solutions, helping businesses thrive in the digital world with innovative services."
        />
        <meta name="keywords" content="Sitecore development, Sitecore XM Cloud, web development, custom Sitecore implementations, PowerShell scripts, digital solutions, NSB Consultancy" />
        <meta name="author" content="Nikhil Bidhuri" />
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content="NSB Consultancy | Best Sitecore Development Solutions" />
        <meta property="og:description" content="Explore NSB Consultancy's expert Sitecore development services for your digital transformation." />
        <meta property="og:image" content="/assets/logo.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NSB Consultancy | Best Sitecore Development Solutions" />
        <meta name="twitter:description" content="Explore NSB Consultancy's expert Sitecore development services for your digital transformation." />
        <meta name="twitter:image" content="/assets/logo.jpg" />
      </Head>

      {/* Navbar */}
      <Navbar
        logoSrc="/assets/logo.jpg"
        logoAlt="Logo"
        navLinks={navLinks}
        contactLink={contactLink}
        menuIconSrc="/assets/menu-black.png"
        closeIconSrc="/assets/close-black.png"
      />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to Chemicx</h1>
            <p className="text-lg mb-8 max-w-xl mx-auto">
            The most popular water treatment company in India
            </p>
            <Link href="#why-choose-nsb" className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition">
              Get Started
            </Link>
          </div>
        </section>

        <AboutUs 
            imageSrc="/assets/products/industrial-water-treatment-vector.png" 
            imagePosition="right" 
            title="Chemicx Water Treatment Company Overview" 
            description="Chemicx Water Treatment Company is an ISO-certified company with over 20 years of experience, providing products and services in 1050 cities across 9 countries."
        />

        {/* Services Section */}
        <Services 
          servicesData={servicesData}
          title="How We Are"
          subtitle="We Provide These Products"
        />

        {/* Contact Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="max-w-xl mx-auto mb-6">
              Ready to take your business to the next level? Reach out to NSB Consultancy for the best web development solutions.
            </p>
            <Link
              href="/contactus"
              className="bg-yellow-300 text-gray-900 px-8 py-3 rounded-full shadow-md hover:bg-yellow-200 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>



        {/* Footer */}
        <Footer 
          email="Nikhilbidhuri1@gmail.com"
          phone="+91 9999455596"
          socialLinks={socialLinks}
        />
      </div>
    </>
  );
};

export default Home;
