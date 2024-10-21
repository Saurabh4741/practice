import React from "react";
import Head from "next/head";
import Link from "next/link"; // Ensure this is included
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import HeaderV2 from '../components/HeaderV2';
import ServicesOverview from '../components/ServicesOverview';
import ExpertiseSection from '../components/ExpertiseSection';
import ContactSection from '../components/ContactSection';

const XmCloudDevelopment = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/NikhilBidhuri' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhilbidhuri' },
    { name: 'Instagram', url: 'https://www.instagram.com/nikhilbidhuri19' },
    { name: 'Sitecore Solution', url: 'https://sitecoresolutionsbynikhil.blogspot.com' }
  ];

  // Service data for the ServicesOverview component
  const servicesData = [
    {
      title: 'Scalable Digital Experiences',
      description: 'Leverage Sitecore XM Cloud to create scalable digital experiences that can grow with your business needs, ensuring optimal performance and reliability.',
      link: '/scalable-experiences',
    },
    {
      title: 'Omni-Channel Personalization',
      description: 'Utilize powerful personalization capabilities of Sitecore XM Cloud to deliver tailored content across various channels, enhancing user engagement and satisfaction.',
      link: '/personalization',
    },
    {
      title: 'Content and Asset Management',
      description: 'Efficiently manage your content and assets with Sitecore XM Cloud, simplifying workflows and collaboration within your team for better productivity.',
      link: '/content-asset-management',
    },
    {
      title: 'Rapid Deployment and Iteration',
      description: 'Speed up your development lifecycle with Sitecore XM Cloud’s rapid deployment capabilities, allowing for quick iterations and feature releases.',
      link: '/rapid-deployment',
    },
    {
      title: 'Integration with Third-Party Services',
      description: 'Seamlessly integrate with various third-party services and APIs to enhance your Sitecore XM Cloud functionalities and deliver a comprehensive digital solution.',
      link: '/integration-services',
    },
  ];

  return (
    <>
      <Head>
        <title>NSB Consultancy | Sitecore XM Cloud Development</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Explore NSB Consultancy's Sitecore XM Cloud development services, creating tailored and scalable solutions for your digital experiences."
        />
        <meta name="keywords" content="Sitecore XM Cloud, scalable digital experiences, omni-channel personalization, content management, Sitecore integration" />
        <meta name="author" content="Nikhil Bidhuri" />

        {/* Open Graph Tags for social media sharing */}
        <meta property="og:title" content="NSB Consultancy | Sitecore XM Cloud Development" />
        <meta property="og:description" content="Transform your digital landscape with Sitecore XM Cloud, delivering powerful, personalized experiences at scale." />
        <meta property="og:image" content="/assets/xmcloud.png" />
        <meta property="og:url" content="https://www.nsbconsultancy.com/xmcloud" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NSB Consultancy | Sitecore XM Cloud Development" />
        <meta name="twitter:description" content="Explore NSB Consultancy's Sitecore XM Cloud development services for tailored digital experiences." />
        <meta name="twitter:image" content="/assets/xmcloud.png" />
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
          logoSrc="/assets/xmcloud.png"
          title="Sitecore XM Cloud Development"
          description="Transform your digital landscape with Sitecore XM Cloud, delivering powerful, personalized experiences at scale."
          buttonLabel="Get in Touch"
          buttonLink="/contactus"
        />

        {/* Services Overview Section */}
        <ServicesOverview services={servicesData} />

        {/* Expertise Section */}
        <ExpertiseSection 
          title="Why Choose Our Sitecore XM Cloud Solutions?" 
          description="Our team specializes in Sitecore XM Cloud, ensuring you receive top-tier solutions that drive engagement and optimize performance. From personalization to integration, we cover all aspects of your digital needs."
          buttonLabel="Contact Us"
          buttonLink="/contactus"
        />

        {/* Contact Section */}
        <ContactSection 
          title="Ready to Elevate Your Digital Experience?"
          description="Partner with NSB Consultancy to leverage the full potential of Sitecore XM Cloud for your business. Reach out today!"
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

export default XmCloudDevelopment;
