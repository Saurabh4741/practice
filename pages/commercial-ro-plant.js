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

const product4 = () => {

    const images = [
        "/assets/products/fire-fight.png", // Replace with your image URLs
        "/assets/products/industrial-RO-1.jpg",
        "/assets/products/ro-plant-1000-lph.png",
        "/assets/products/water-treatment-plant.jpg",
      ];

  const listItems = {
    listArray: [
    ],
    Description:
"Reverse Osmosis (RO) is a process of physical separation of dissolved solids and minerals present in water. This technology uses the principle of osmosis, wherein the mineral concentration of raw water is reduced by applying high pressure through a semi-permeable membrane. Chemicx offer a wide range of industrial and commercial water treatment equipment that purifies water by deploying advanced RO technology that meets the challenging environment of industries. One of the best commercial RO plant manufacturer in India. In the process of Reverse Osmosis, a high pressure pump is used to increase pressure on the salt side of RO and force water across the semi-permeable RO membrane that leaves around 95% to 99% of dissolved salts. Amount of Pressure required depends upon the concentration of salt in the feed water. Most of the Commercial RO Plants are maintained by Chemicx whose headquarter is situated in Delhi, India. Industries that require Commercial RO, can contact us for the best commercial RO plant supplier."    
};

  
  const BigbData = {
    Description:
   "We Provide digital Pen type TDS meter for water testing. Chemicx provides Commercial RO Membrane and membrane housing, Dosing pump, Anti scalant, Media( carbon, sand) and High pressure pump. Chemicx offers membrane anti-scalants, membrane cleaners, membrane biological control and membrane pre treatment chemicals.",
    Title:
      "Chemicx Offerings Commercial RO Plant Services:",
  };


  const listItems1 = {
    listArray: [
        "Complete New setup",
        "SS RO Plant",
        "RO Plant with Chiller",
        "1 Year Warranty",
        "RO + UV filter",
        "RO+UV+Ozonator",
        "24/7 Customer Support",
        "Fully Automatic RO Plant",
        "Provides Clean and Reusable Water",
        "Keeps Disease Away & Protect Environment",
        "We have more than 20 years of experience in Water Treatment",
        "We provide BIS standardised RO plant with certification. We provide UV filter and ozonator.",
        "Ozonator capacity- 2gm, 4gm, 6gm, 8gm, 10gm (1000 litre have 2 gram)",
        
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
            label: 'Products',
            subMenu: [
              { label: 'Sewage treatment plant', href: '/sewage-treatment-plant' },
              { label: 'Effluent treatment plant', href: '/effluent-treatment-plant' },
              { label: 'Domestic water softener', href: '/domestic-water-softener' },
              { label: 'Commercial RO plant', href: '/commercial-ro-plant' },
              { label: 'Domestic water softener', href: '/domestic-water-softener' },
              { label: 'Domestic water softener', href: '/domestic-water-softener' },
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
        LeftTitle="Commercial RO Plants"
        RightTitle="Our Area of Expertise"
        CTA=""
        url="/"
      />

      <BigBanner
        Img="/assets/products/RO.png"
        Title={BigbData?.Title}
        Description={BigbData?.Description}
        CTA=""
        url="/saurabhpatil"
      />
      <ListCollection
        listItems={listItems1?.listArray}
        Description={listItems1?.Description}
        LeftTitle="Commercial RO Plant plays an important role in water treatment industry."
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
      />
    </>
  );
};

export default product4;
