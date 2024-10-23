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

const product3 = () => {

    const images = [
        "/assets/products/fire-fight.png", // Replace with your image URLs
        "/assets/products/industrial-RO-1.jpg",
        "/assets/products/ro-plant-1000-lph.png",
        "/assets/products/water-treatment-plant.jpg",
      ];

  const listItems = {
    listArray: [
        "1 year warranty on complete system",
        "World class softeners",
        "Fully Automatic",
        "Specially designed for flats",
        "Softener for farm house, villas, apartments",
        "Call for regeneration",
        "Call for AMC",
        "You can get water hardness kit from us easily.",
        "Hardness kit + Resin + Vessel + Multiport valves + Rock Salt",
        "Our Manufacturing Unit is in Okhla Industrial area Phase-2, Delhi",
        "We have more than 20 years of experience in Water Treatment."
    ],
    Description:
    "Water Softener is a type of filter that removes the calcium and magnesium in hard water by using beads and cleans itself periodically by a important process called regeneration. The removal of calcium and magnesium from hard water is termed as water softening."      
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
    "Domestic Water Softener plays an important role in water treatment industry. The system prevents scaling/hard water stains on your taps, faucets and fixtures in your bathroom and kitchen ensuring that bathroom fittings look good as new for longer.The system also protects your water using appliances like geyser, washing machine, dishwasher etc. from internal damage and corrosion, thus extending their life. Not only this, the soft water protects your hair and skin from the harmful effects of hard water. 3D Aqua provide hardness testing kit and softener regeneration rock salt to check the water hardness also. 3D Aqua is the leading Domestic Water Softener manufacturer and supplier in India. Our service team is every time ready to help you. Both types of domestic water softeners are available – Semi-automatic and Automatic Water Softeners." ,
    Title:
      "What Chemicx Offers",
  };


  const listItems1 = {
    listArray: [
      "Complete New setup",
        "Best Water Softener",
        "Get Soft Water at Home",
        "1 Year Warranty",
        "Own manufacturing unit",
        "Best team of experts",
        "24/7 Customer Support",
        "Fully Automatic Water Softener",
        "Prevents build-up of minerals (scale) on the inside of pipes, fixtures, and hot water heaters.",
        "Provides Clean and Reusable Water",
        "Keeps Disease Away & Protect Environment",
        "We have more than 20 years of experience in Water Treatment",
        "Lengthens the life of some appliances.",
        "Reduces or prevents mineral spots on glassware.",
        "Prevents or reduces soap films and detergent curds in sinks, bathtubs, and washing machines.",
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
        LeftTitle="Domestic Water Softeners"
        RightTitle="Our Area of Expertise"
        CTA=""
        url="/"
      />

      <BigBanner
        Img="/assets/products/DomesticWaterSoft.png"
        Title={BigbData?.Title}
        Description={BigbData?.Description}
        CTA=""
        url="/saurabhpatil"
      />
      <ListCollection
        listItems={listItems1?.listArray}
        Description={listItems1?.Description}
        LeftTitle="Domestic Water Softener plays an important role in water treatment industry."
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

export default product3;
