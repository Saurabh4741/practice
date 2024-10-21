import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact'; // Adjust the path according to your project structure

const ContactPage = () => {
    const contactFormConfig = {
        title: "Connect with Me",
        subtitle: "Get in Touch",
        description: "I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.",
        subject: "New form submission",
        accessKey: "759ed992-77f4-4abb-97c2-3fd6c3759eb1", // Replace with your Web3 Forms Access Key
        submitURL: "https://api.web3forms.com/submit",
        captchaSiteKey: "50b2fe65-b00b-4b9e-ad62-3ba471098be2", // Replace with your hCaptcha site key
        fields: [
            {
                type: "text",
                placeholder: "Enter your name",
                required: true,
                name: "name"
            },
            {
                type: "email",
                placeholder: "Enter your email",
                required: true,
                name: "email"
            }
        ],
        buttonText: "Submit Now",
        buttonIcon: "/assets/right-arrow-white.png"
    };

    return (
        <>
            <Head>
                <title>Contact NSB Consultancy | Web Development Solutions</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Get in touch with NSB Consultancy for top-notch web development solutions. We'd love to hear your questions, comments, or feedback." />
                <meta name="keywords" content="Contact NSB Consultancy, web development, Sitecore solutions, custom implementations, digital transformation" />
                <meta name="author" content="Nikhil Bidhuri" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph Tags for social media sharing */}
                <meta property="og:title" content="Contact NSB Consultancy | Web Development Solutions" />
                <meta property="og:description" content="Reach out to NSB Consultancy for any questions or feedback regarding our web development services." />
                <meta property="og:image" content="/assets/logo.jpg" />
                <meta property="og:url" content="https://www.nsbconsultancy.com/contactus" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact NSB Consultancy | Web Development Solutions" />
                <meta name="twitter:description" content="Reach out to NSB Consultancy for any questions or feedback regarding our web development services." />
                <meta name="twitter:image" content="/assets/logo.jpg" />
            </Head>

            <Navbar
                logoSrc="/assets/logo.jpg"
                logoAlt="NSB Consultancy Logo"
                navLinks={[
                    { href: '/', label: 'Home' },
                    { href: '#services', label: 'Services' },
                    { href: '/nikhilbidhuri', label: 'Developer' },
                    { href: '#contact', label: 'Contact' },
                ]}
                contactLink={{ href: '#contact', label: 'Contact' }}
                menuIconSrc="/assets/menu-black.png"
                closeIconSrc="/assets/close-black.png"
            />
            <Contact formConfig={contactFormConfig} />
        </>
    );
};

export default ContactPage;
