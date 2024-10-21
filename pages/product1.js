import Head from "next/head";
import Navbar from "../components/Navbar"; // Adjust the path as needed
import Header from "../components/Header"; // Adjust the path as needed
import About from "../components/About"; // Adjust the path as needed
import Services from "../components/Services"; // Adjust the path as needed
import Work from "../components/Work"; // Adjust the path as needed
import Contact from "../components/Contact"; // Adjust the path as needed
import Footer from "../components/Footer"; // Adjust the path as needed
import BigBanner from "../components/BigBanner";
import SwipeCards from "../components/SwipeCards";
import ListCollection from "../components/ListCollection";

const product1 = () => {
  const servicesData = [
    {
      imageSrc: "/assets/sitecore.png",
      title: "Sitecore Development",
      description:
        "Comprehensive Sitecore development services, including custom solutions and integrations tailored to your business needs.",
      link: "/sitecore",
    },
    {
      imageSrc: "/assets/XMCloud.png",
      title: "XM Cloud Development",
      description:
        "Tailored solutions leveraging Sitecore XM Cloud for scalable, agile, and efficient digital experiences.",
      link: "/xmcloud",
    },
    {
      imageSrc: "/assets/vs.png",
      title: "Sitecore Custom Implementation",
      description:
        "Expert implementation of Sitecore solutions tailored to meet unique business requirements and enhance user experience.",
      link: "/customsitecore",
    },
    {
      imageSrc: "/assets/powershell.png",
      title: "PowerShell Scripts for CM",
      description:
        "Custom PowerShell scripts to automate and enhance content management processes within your Sitecore environment.",
      link: "/powershell",
    },
  ];


  const portfolioProjects = [
    {
      imageUrl: "/assets/allstateca.png",
      title: "AllState Canada",
      description: "Sitecore with NextJS",
      link: "https://www.allstate.ca",
    },
    {
      imageUrl: "/assets/saudia.png",
      title: "Saudi Airlines",
      description: "Sitecore with ReactJS",
      link: "https://www.saudia.com",
    },
    {
      imageUrl: "/assets/adanione.png",
      title: "Adani One",
      description: "Sitecore with ReactJS",
      link: "https://www.adanione.com",
    },
    {
      imageUrl: "/assets/VEC.png",
      title: "Victorian Electoral Commission",
      description: "Sitecore MVC",
      link: "https://www.vec.vic.gov.au",
    },
  ];

  const contactFormConfig = {
    title: "Connect with me",
    subtitle: "Get in touch",
    description:
      "I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.",
    subject: "New form submission",
    accessKey: "759ed992-77f4-4abb-97c2-3fd6c3759eb1", // Replace with your Web3 Forms Access Key
    submitURL: "https://api.web3forms.com/submit",
    captchaSiteKey: "50b2fe65-b00b-4b9e-ad62-3ba471098be2", // Replace with your hCaptcha site key
    fields: [
      {
        type: "text",
        placeholder: "Enter your name",
        required: true,
        name: "name",
      },
      {
        type: "email",
        placeholder: "Enter your email",
        required: true,
        name: "email",
      },
    ],
    buttonText: "Submit now",
    buttonIcon: "/assets/right-arrow-white.png",
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/NikhilBidhuri" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nikhilbidhuri" },
    { name: "Instagram", url: "https://www.instagram.com/nikhilbidhuri19" },
    {
      name: "Sitecore Solution",
      url: "https://sitecoresolutionsbynikhil.blogspot.com",
    },
  ];

  const Description =
    "Water Treatment Is Any Process That Improves The Quality Of Water To Make It More Acceptable For A Specific End-Use.The End Use May Be Drinking, Industrial Water Supply, Irrigation, River Flow Maintenance, Water Recreation Or Many Other Uses, Including Being Safely Returned To The Environment. Water Treatment Removes Contaminants And Undesirable Components";

  // Data for the Clientcards
  const Clientcards = [
    {
      id: 1,
      title: "Card Title 1",
      description: "Description for card 1.",
      imageUrl: "/assets/clients/SGI.jpeg",
      linkUrl: "/link1",
    },
    {
      id: 2,
      title: "Card Title 2",
      description: "Description for card 2.",
      imageUrl: "/assets/clients/Dmart.jpeg",
      linkUrl: "/link2",
    },
    {
      id: 3,
      title: "Card Title 3",
      description: "Description for card 3.",
      imageUrl: "/assets/clients/Indian-oil.png",
      linkUrl: "/link3",
    },
  ];
  const listItems = [
    "Responsive Design Interactive UI with Heroicons Interactive UI with Heroicons",
    "Next.js & Tailwind CSS",
    "Dynamic Content with Map Interactive UI with Heroicons Interactive UI with Heroicons",
    "Scalable Components Interactive UI with Heroicons ",
    "Interactive UI with Heroicons Interactive UI with Heroicons Interactive UI with Heroicons Interactive UI with Heroicons  ",
  ];
  return (
    <>
      <Head>
        <title>Nikhil Bidhuri | Certified Sitecore Consultant</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Nikhil Bidhuri is a certified Sitecore consultant with extensive experience in delivering custom Sitecore solutions and digital transformation."
        />
        <meta
          name="keywords"
          content="Sitecore development, XM Cloud, Sitecore consultant, custom implementations, web development, PowerShell scripts"
        />
        <meta name="author" content="Nikhil Bidhuri" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Nikhil Bidhuri | Certified Sitecore Consultant"
        />
        <meta
          property="og:description"
          content="Explore Nikhil Bidhuri's expert Sitecore services, including development, custom implementations, and digital transformation."
        />
        <meta property="og:image" content="/assets/NikhilPhoto.png" />
        <meta
          property="og:url"
          content="https://www.nsbconsultancy.com/nikhilbidhuri"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nikhil Bidhuri | Certified Sitecore Consultant"
        />
        <meta
          name="twitter:description"
          content="Explore Nikhil Bidhuri's expert Sitecore services, including development, custom implementations, and digital transformation."
        />
        <meta name="twitter:image" content="/assets/NikhilPhoto.png" />
      </Head>

      <Navbar
        logoSrc="/assets/logo.jpg"
        logoAlt="NSB Consultancy Logo"
        navLinks={[
          { href: "/", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#services", label: "Services" },
          { href: "#work", label: "My Work" },
          { href: "#contact", label: "Contact" },
        ]}
        contactLink={{ href: "#contact", label: "Contact" }}
        menuIconSrc="/assets/menu-black.png"
        closeIconSrc="/assets/close-black.png"
      />
      <BigBanner
        Img="/assets/products/water-treatment-plant.jpg"
        Title="Water TreatMent Plant"
        Description={Description}
        CTA="Check out"
        url="/saurabhpatil"
      />
      <SwipeCards cards={Clientcards} Title="Happy Clients" />

      <ListCollection
        listItems={listItems}
        LeftTitle="Know more about Chemix"
        RightTitle="Additional values"
        CTA="Know more"
        url="/"
      />
      <Contact formConfig={contactFormConfig} />
      <Footer
        email="Nikhilbidhuri1@gmail.com"
        phone="+91 9999455596"
        socialLinks={socialLinks}
      />
    </>
  );
};

export default product1;
