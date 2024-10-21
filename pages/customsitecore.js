import React from "react";
import Head from "next/head";
import Link from "next/link"; // Ensure this is included
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import HeaderV2 from '../components/HeaderV2';
import ServicesOverview from '../components/ServicesOverview';
import ExpertiseSection from '../components/ExpertiseSection';
import ContactSection from '../components/ContactSection';

const CustomImplementations = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/NikhilBidhuri' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhilbidhuri' },
    { name: 'Instagram', url: 'https://www.instagram.com/nikhilbidhuri19' },
    { name: 'Sitecore Solution', url: 'https://sitecoresolutionsbynikhil.blogspot.com' }
  ];

  // Service data for the ServicesOverview component
  const servicesData = [
    {
      title: 'Single Sign-On (SSO)',
      description: 'Implement seamless Single Sign-On solutions to provide users with a unified login experience across multiple applications, enhancing user satisfaction and security.',
      link: '/sso',
    },
    {
      title: 'Personalization',
      description: 'Utilize Sitecore’s powerful personalization features to deliver tailored content and experiences to users based on their behavior, preferences, and demographics.',
      link: '/personalization',
    },
    {
      title: 'Custom SMTP Setup',
      description: 'Configure custom SMTP solutions for your Sitecore environment, ensuring reliable and efficient email communication that aligns with your business needs.',
      link: '/smtp',
    },
    {
      title: 'Headless Multisite Setup',
      description: 'Create a flexible and scalable headless multisite architecture with Sitecore, enabling you to manage multiple sites from a single instance while providing a seamless user experience.',
      link: '/headless-multisite',
    },
    {
      title: 'Solr Search Implementation',
      description: 'Integrate Solr search capabilities within your Sitecore instance for advanced search functionalities, providing users with quick and accurate search results.',
      link: '/solr-search',
    },
  ];

  return (
    <>
      <Head>
        <title>NSB Consultancy | Sitecore Custom Implementations</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Discover NSB Consultancy's expertise in Sitecore custom implementations, delivering tailored solutions for Single Sign-On, personalization, SMTP setup, and more."
        />
        <meta name="keywords" content="Sitecore custom implementations, SSO, personalization, custom SMTP, headless multisite setup, Solr search, NSB Consultancy" />
        <meta name="author" content="Nikhil Bidhuri" />
        
        {/* Open Graph Tags for social media sharing */}
        <meta property="og:title" content="NSB Consultancy | Sitecore Custom Implementations" />
        <meta property="og:description" content="Transform your digital landscape with NSB Consultancy's custom Sitecore solutions tailored to your business needs." />
        <meta property="og:image" content="/assets/logo.jpg" />
        <meta property="og:url" content="https://www.nsbconsultancy.com/customsitecore" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NSB Consultancy | Sitecore Custom Implementations" />
        <meta name="twitter:description" content="Explore NSB Consultancy's specialized Sitecore custom implementations for enhanced digital solutions." />
        <meta name="twitter:image" content="/assets/logo.jpg" />
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
          logoSrc="/assets/vs.png"
          title="Expertise in Sitecore Custom Implementations"
          description="Transform your digital landscape with custom Sitecore implementations tailored for your business needs."
          buttonLabel="Get in Touch"
          buttonLink="/contactus"
        />

        {/* Services Overview Section */}
        <ServicesOverview services={servicesData} />

        {/* Expertise Section */}
        <ExpertiseSection 
          title="Why Choose Us for Sitecore Custom Implementations?" 
          description="Our experienced team specializes in creating custom Sitecore implementations that meet your unique business requirements. We prioritize quality, scalability, and performance to ensure your digital transformation is a success."
          buttonLabel="Contact Us"
          buttonLink="/contactus"
        />

        {/* Contact Section */}
        <ContactSection 
          title="Ready to Start Your Project?"
          description="Our team is here to assist you with your Sitecore custom implementation needs. Reach out to NSB Consultancy today!"
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

export default CustomImplementations;
