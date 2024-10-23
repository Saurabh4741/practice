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
import AutoSwipeImage from "../components/AutoSwipeImage";

const product5 = () => {
  const images = [
    "/assets/products/FF-big.jpg",
    "/assets/products/industrial-RO-1.jpg",
    "/assets/products/ro-plant-1000-lph.png",
    "/assets/products/water-treatment-plant.jpg",
  ];

  const listItems = {
    listArray: [],
    Description:
      "In wastewater treatment, ultrafiltration (UF) devices are used to recycle and reuse water that contains virtually no physical solids. Ultrafiltration definition, applications and industries using these process units are covered below. Ultrafiltration (UF) is a variety of membrane filtration in which forces like pressure or concentration gradients lead to a separation through a semipermeable membrane. Suspended solids and solutes of high molecular weight are retained in the so-called retentate, while water and low molecular weight solutes pass through the membrane in the permeate.",
  };

  const BigbData = {
    Description:
      "UF can be used for removal of particulates and macromolecules from raw water, to produce potable water. It has been used to either replace existing secondary (coagulation, flocculation, sedimentation) and tertiary filtration (sand filtration and chlorination) systems employed in water-treatment plants or as standalone systems in isolated regions with growing populations. When treating water with high suspended solids, UF is often integrated into the process, using primary (screening, flotation and filtration) and some secondary treatments as pre-treatment stages. Ultrafiltration processes are preferred over traditional treatment methods for the following reasons: No chemicals required (aside from cleaning) Constant product quality regardless of feed quality Compact plant size Capable of exceeding regulatory standards of water quality, achieving 90-100% pathogen removal. When water recycling is simple, it often needs very little processing. However, when more intensive processing is required, the industry standard procedures include using UF, which is meant to remove physical solids from water by passing it through a semi-permeable membrane. Using ultrafiltration, solids are primarily captured by the filter and discarded.",
    Title: "Chemicx Offerings Commercial RO Plant Services:",
  };

  const listItems1 = {
    listArray: [
      "No requirement for chemicals (coagulants, flocculants, disinfectants, pH adjustment)",
      "Media depth filtration as opposed to size-exclusion filtration",
      "Consistent quality of treated water in terms of the particle removal and microorganism removal",
      "Compactness of the process and plant",
      "Easy automation",
      "Eco-friendly",
      "Systems with modules help with easy installation",
      "Efficient system of separation",
      "Plant uses less energy",
      "Excellent grade of treated water",
      "Long-lasting membrane with low fouling conditions",
      "Control panel with a manual or PLC.",
      "Advanced controlling and monitoring system installed",
    ],
    Description: "",
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

  const servicesData = [
    {
      imageSrc: "",
      title: "Mr. Raghuram Yadav",
      description:
        "“Would just like to take a moment and compliment the Chemicx Water Treatment Company. The Team guys were great to work with and very professional, yet easy to talk to. This was probably the most seamless install of RO Plant we have had in a long time.”",
      link: "/sitecore",
    },
    {
      imageSrc: "",
      title: "Mr. Sumit Yadav ",
      description:
        "“I called Chemicx for STP Plant in Noida Location and I got the best consultant Mr. Maharaj Singh for the same. He delivered the best product and services for STP Plant in Noida. Highly recommended for any type of work related to Sewage Treatment Plant.”I called Chemicx for STP Plant in Noida Location and I got the best consultant Mr. Maharaj Singh for the same. He delivered the best product and services for STP Plant in Noida. Highly recommended for any type of work related to Sewage Treatment Plant.",
      link: "/xmcloud",
    },
    {
      imageSrc: "",
      title: "Mrs. Rashmi Desai ",
      description:
        "“We just had a new water treatment system installed by Chemicx Water Treatment in Rajasthan & can’t speak highly enough about this company. From the initial call to the assessment & installation, they were top-notch - prompt, professional & courteous. If you’re looking for a water treatment system look them up, you won’t be disappointed!”",
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
          {
            label: "Products",
            subMenu: [
              {
                label: "Sewage treatment plant",
                href: "/sewage-treatment-plant",
              },
              {
                label: "Effluent treatment plant",
                href: "/effluent-treatment-plant",
              },
              {
                label: "Domestic water softener",
                href: "/domestic-water-softener",
              },
              { label: "Commercial RO plant", href: "/commercial-ro-plant" },
              { label: "Ultra filtration", href: "/ultra-filtration" },
              { label: "Pressure Pump", href: "/pressure-pump" },
              { label: "Fire fighting", href: "/firefighting" },
              { label: "Water cooler", href: "/water-cooler" },
            ],
          },
          { href: "#contact", label: "Contact" },
        ]}
        contactLink={{ href: "#contact", label: "Contact" }}
        menuIconSrc="/assets/menu-black.png"
        closeIconSrc="/assets/close-black.png"
      />

      <AutoSwipeImage images={images} />

      <ListCollection
        listItems={listItems?.listArray}
        Description={listItems?.Description}
        LeftTitle="Ultra Filtration"
        RightTitle="Our Area of Expertise"
        CTA=""
        url="/"
      />

      <BigBanner
        Img="/assets/products/UF.png"
        Title={BigbData?.Title}
        Description={BigbData?.Description}
        CTA=""
        url="/saurabhpatil"
      />
      <ListCollection
        listItems={listItems1?.listArray}
        Description={listItems1?.Description}
        LeftTitle="Benefits and features of ultrafiltration plants"
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
      <Footer />
    </>
  );
};

export default product5;
