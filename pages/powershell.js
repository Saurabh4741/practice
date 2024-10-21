import React from "react";
import Head from "next/head";
import Link from "next/link"; // Ensure this is included
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import HeaderV2 from '../components/HeaderV2';
import ServicesOverview from '../components/ServicesOverview';
import ExpertiseSection from '../components/ExpertiseSection';
import ContactSection from '../components/ContactSection';

const PowerShellScripts = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/NikhilBidhuri' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhilbidhuri' },
    { name: 'Instagram', url: 'https://www.instagram.com/nikhilbidhuri19' },
    { name: 'Sitecore Solution', url: 'https://sitecoresolutionsbynikhil.blogspot.com' }
  ];

  // Service data for the ServicesOverview component
  const servicesData = [
    {
      title: 'Automated Sitecore Deployment',
      description: 'Utilize PowerShell scripts to automate your Sitecore deployment process, reducing the time and effort required to move changes from development to production environments.',
      link: '/automated-deployment',
    },
    {
      title: 'Content Migration',
      description: 'Streamline content migration between Sitecore instances with custom PowerShell scripts, ensuring data integrity and minimal downtime during migrations.',
      link: '/content-migration',
    },
    {
      title: 'Sitecore Item Management',
      description: 'Manage Sitecore items efficiently with scripts that allow bulk updates, deletions, and creations, helping you maintain your content library with ease.',
      link: '/item-management',
    },
    {
      title: 'Backup and Restore Solutions',
      description: 'Implement reliable backup and restore procedures using PowerShell, ensuring that your Sitecore environment can be quickly restored in case of data loss.',
      link: '/backup-restore',
    },
    {
      title: 'Performance Monitoring',
      description: 'Use PowerShell scripts to monitor the performance of your Sitecore environment, helping you identify bottlenecks and optimize your setup for better performance.',
      link: '/performance-monitoring',
    },
  ];

  return (
    <>
      <Head>
        <title>NSB Consultancy | PowerShell Scripts for Sitecore CM</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Explore NSB Consultancy's PowerShell script solutions for Sitecore Content Management, automating and optimizing your Sitecore experience."
        />
        <meta name="keywords" content="PowerShell scripts, Sitecore automation, Sitecore deployment, content migration, Sitecore performance monitoring" />
        <meta name="author" content="Nikhil Bidhuri" />
        
        {/* Open Graph Tags for social media sharing */}
        <meta property="og:title" content="NSB Consultancy | PowerShell Scripts for Sitecore CM" />
        <meta property="og:description" content="Enhance your Sitecore content management experience with our custom PowerShell scripts designed for efficiency and automation." />
        <meta property="og:image" content="/assets/powershell.png" />
        <meta property="og:url" content="https://www.nsbconsultancy.com/powershell" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NSB Consultancy | PowerShell Scripts for Sitecore CM" />
        <meta name="twitter:description" content="Discover custom PowerShell scripts to automate and optimize your Sitecore content management." />
        <meta name="twitter:image" content="/assets/powershell.png" />
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
          logoSrc="/assets/powershell.png"
          title="PowerShell Scripts for Sitecore CM"
          description="Enhance your Sitecore content management experience with our custom PowerShell scripts designed for efficiency and automation."
          buttonLabel="Get in Touch"
          buttonLink="/contactus"
        />

        {/* Services Overview Section */}
        <ServicesOverview services={servicesData} />

        {/* Expertise Section */}
        <ExpertiseSection 
          title="Why Choose Our PowerShell Scripts for Sitecore?" 
          description="Our PowerShell scripting solutions are crafted to enhance your Sitecore experience, offering automation, efficiency, and reliability. With our expertise, you can focus on delivering outstanding content while we handle the technical intricacies."
          buttonLabel="Contact Us"
          buttonLink="/contactus"
        />

        {/* Contact Section */}
        <ContactSection 
          title="Ready to Optimize Your Sitecore Experience?"
          description="Our team is ready to assist you with custom PowerShell scripts for your Sitecore content management needs. Reach out to NSB Consultancy today!"
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

export default PowerShellScripts;
