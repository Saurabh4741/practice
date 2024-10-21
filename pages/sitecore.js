import React from "react";
import Head from "next/head";
import Link from "next/link"; // Ensure this is included
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import HeaderV2 from '../components/HeaderV2';
import ServicesOverview from '../components/ServicesOverview';
import ExpertiseSection from '../components/ExpertiseSection';
import ContactSection from '../components/ContactSection';

const Sitecore = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/NikhilBidhuri' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhilbidhuri' },
    { name: 'Instagram', url: 'https://www.instagram.com/nikhilbidhuri19' },
    { name: 'Sitecore Solution', url: 'https://sitecoresolutionsbynikhil.blogspot.com' }
  ];

  // Service data for the ServicesOverview component
  const servicesData = [
    {
      title: 'Custom Sitecore Development',
      description: 'Tailored Sitecore solutions that align with your business goals, enhancing user engagement and driving conversions.',
      link: '/customsitecore',
    },
    {
      title: 'Sitecore XM Cloud Solutions',
      description: 'Leverage the power of Sitecore XM Cloud for scalable and agile digital experiences that adapt to your needs.',
      link: '/xmcloud',
    },
    {
      title: 'Sitecore Maintenance & Support',
      description: 'Ongoing support and maintenance services to ensure your Sitecore platform runs smoothly and efficiently.',
      link: '/maintenance',
    },
  ];

  return (
    <>
      <Head>
        <title>NSB Consultancy | Sitecore Development Expertise</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Discover NSB Consultancy's expertise in Sitecore development, offering tailored solutions to enhance your digital presence."
        />
        <meta name="keywords" content="Sitecore development, custom Sitecore solutions, Sitecore maintenance, Sitecore support, Sitecore XM Cloud" />
        <meta name="author" content="Nikhil Bidhuri" />
        
        {/* Open Graph Tags for social media sharing */}
        <meta property="og:title" content="NSB Consultancy | Sitecore Development Expertise" />
        <meta property="og:description" content="Transform your digital landscape with cutting-edge Sitecore solutions tailored for your business needs." />
        <meta property="og:image" content="/assets/sitecore.png" />
        <meta property="og:url" content="https://www.nsbconsultancy.com/sitecore" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NSB Consultancy | Sitecore Development Expertise" />
        <meta name="twitter:description" content="Discover NSB Consultancy's expertise in Sitecore development for enhanced digital presence." />
        <meta name="twitter:image" content="/assets/sitecore.png" />
      </Head>

      {/* Navbar */}
      <Navbar
        logoSrc="/assets/logo.jpg"
        logoAlt="NSB Consultancy Logo"
        navLinks={[
          { href: '/', label: 'Home' },
          { href: '/services', label: 'Services' },
          { href: '/nikhilbidhuri', label: 'Developer' },
        ]}
        contactLink={{ href: '/contactus', label: 'Contact' }}
        menuIconSrc="/assets/menu-black.png"
        closeIconSrc="/assets/close-black.png"
      />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <HeaderV2 
          logoSrc="/assets/sitecore.png"
          title="Expertise in Sitecore Development"
          description="Transforming your digital landscape with cutting-edge Sitecore solutions tailored for your business needs."
          buttonLabel="Get in Touch"
          buttonLink="/contactus"
        />

        {/* Services Overview Section */}
        <ServicesOverview services={servicesData} />

        {/* Expertise Section */}
        <ExpertiseSection 
          title="Why Choose Us for Sitecore Development?" 
          description="Our dedicated team of Sitecore experts brings years of experience, ensuring that you receive top-notch solutions tailored to your specific requirements. We prioritize quality, performance, and scalability, making us the ideal partner for your digital transformation journey."
          buttonLabel="Contact Us"
          buttonLink="/contactus"
        />

        {/* Contact Section */}
        <ContactSection 
          title="Ready to Start Your Project?"
          description="Our team is here to assist you with your Sitecore development needs. Reach out to NSB Consultancy today!"
          buttonLabel="Get in Touch"
          buttonLink="/contactus"
        />

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

export default Sitecore;
