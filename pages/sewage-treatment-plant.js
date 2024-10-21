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
      imageSrc: "",
      title: "Mr. Raghuram Yadav",
      description:
        "“Would just like to take a moment and compliment the 3D Aqua Water Treatment Company. The Team guys were great to work with and very professional, yet easy to talk to. This was probably the most seamless install of RO Plant we have had in a long time.”",
      link: "/sitecore",
    },
    {
      imageSrc: "",
      title: "Mr. Sumit Yadav ",
      description:
        "“I called 3D Aqua for STP Plant in Noida Location and I got the best consultant Mr. Maharaj Singh for the same. He delivered the best product and services for STP Plant in Noida. Highly recommended for any type of work related to Sewage Treatment Plant.”I called 3D Aqua for STP Plant in Noida Location and I got the best consultant Mr. Maharaj Singh for the same. He delivered the best product and services for STP Plant in Noida. Highly recommended for any type of work related to Sewage Treatment Plant.",
      link: "/xmcloud",
    },
    {
      imageSrc: "",
      title: "Mrs. Rashmi Desai ",
      description:
        "“We just had a new water treatment system installed by 3D Aqua Water Treatment in Rajasthan & can’t speak highly enough about this company. From the initial call to the assessment & installation, they were top-notch - prompt, professional & courteous. If you’re looking for a water treatment system look them up, you won’t be disappointed!”",
      link: "/customsitecore",
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

  const BigbData = {
    Description:
      "As India hurtles towards a more developed economy one of the casualties has been the deteriorating state of our environment. Rapid industrialization has unfortunately hiked up the number of pollutants in our surroundings. One of these pollutants is wastewater or Sewage. Management of waste water through sewage treatment plants in India has become an imperative of our cities today.Water pollution in India is posing a significant threat to human health. Large volumes of unprocessed wastewater are being discharged by industries into freshwater sources, resulting in frequent outbreak of water-borne diseases and environmental degradation. This discharge of unprocessed waste into freshwater bodies is making water unfit not only for human consumption but also for industrial and agricultural use.India’s population of 1.3 billion is growing about 1.3 per cent annually and the demand for clean water by 2030 may exceed supply by 50 per cent. To ensure that this impending water crisis is avoided effective water and waste- water management highly crucial in India. Various authorities have initiated concentrated efforts towards wastewater management in India.",
    Title: "Sewage Treatment PlantManufacturer – 3D Aqua",
  };
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
  const listItems = {
    listArray: [
      "Basic innovation utilized is enacted slop process",
      "Compact with low foot print",
      "Completely expels hurtful components from modern effluents",
      "Easy to install",
      "Economical to use",
      "Energy proficient",
      "Fully automatic",
      "High speed processing",
    ],
    Description:
      "Sewage treatment or STP plant is used to remove contaminants from waste water. It involves physical, chemical and biological process to remove physical, chemical and biological contaminants.STP Plant is very effective and economical. 3D Aqua is the manufacturer of STP plants in civil and mechanical both. Our clients give positive feedback for the compact design, user friendly, durability, low maintenance, corrosion resistance and longer service life features of all our STP plant structures and performance.",
  };
  const listItems1 = {
    listArray: [
      "Submerged Aeration Fixed Film (SAFF) Technology",

      "Fixed Bed Biofilm Activated Sludge Process (FBAS)",
      "Rim flow Sludge Suction Clarifiers/Bio Tower",
      "Improved Circular Secondary Clarifier",
      "Eco-Bio Blocks",
      "Sequencing Batch Reactor (SBR)",
      "Moving Bed Bio Reactor (MBBR) / Fluidized Aerobic Bioreactor (FAB)",
      "Membrane Bio Reactor (MBR)",
      "BIOFOR Technology (Biological Filtration and Oxygenated Reactor)",
      "High Rate Activated Sludge BIOFOR-F Technology",
    ],
    Description: "",
  };
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

      <ListCollection
        listItems={listItems?.listArray}
        Description={listItems?.Description}
        LeftTitle="Sewage Treatment Plant(STP)"
        RightTitle="Our Area of Expertise"
        CTA=""
        url="/"
      />

      <BigBanner
        Img="/assets/products/STP.png"
        Title={BigbData?.Title}
        Description={BigbData?.Description}
        CTA=""
        url="/saurabhpatil"
      />
      <ListCollection
        listItems={listItems1?.listArray}
        Description={listItems1?.Description}
        LeftTitle="Technology We are Using"
        RightTitle="IMPORTANT ROLE"
        CTA=""
        url="/"
      />
      <SwipeCards cards={Clientcards} Title="Happy Clients" />
      <Services
        servicesData={servicesData}
        title=""
        subtitle="What Our Loving Clients Saying"
        description=""
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
