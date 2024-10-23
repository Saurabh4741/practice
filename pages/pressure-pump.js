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

const product6 = () => {
  const images = [
    "/assets/products/FF-big.jpg",
    "/assets/products/industrial-RO-1.jpg",
    "/assets/products/ro-plant-1000-lph.png",
    "/assets/products/water-treatment-plant.jpg",
  ];

  const listItems = {
    listArray: [
      "Heat detector",
      "Smoke detector",
      "Flame Detector",
      "Multi-sensor detector",
      "Infrared (IR) detector",
      "Carbon Monoxide detector",
      "Wireless Fire Alarm system",
      "Manual fire alarm system",
      "Automatic fire alarm system",
      "Addressable fire alarm system",
      "Conventional fire alarm system",
    ],
    Description:
      "When you have your water tank below the tapthen you need water pressure pump system. Chemicx is the manufacturer and supplier of Pressure Pumps in India and also in other countries. Water is very essential to live life but when you live in a multistorey building then it is very difficult to get water all the times very easily. We need water pressure pumps in his case that pumps up water and you will get water easily at your floor. Chemicx supplies a full line of equipment and solutions designed specifically for Water Utility Applications. Pressure Pumps help you to Optimize, Treat and Pressure Manage Water Supply. It supplies tailored solutions for the entire Water Treatment Projects. Downtime is reduced and risk minimization is built into Reliable, Cost Effective and Energy Efficient Solutions. Also offers, low life cycle costs and the hydraulic stability necessary for effective mechanical, biological and chemical treatment.",
  };

  const BigbData = {
    Description:
      "When you have your water tank below the tapthen you need water pressure pump system. Chemicx is the manufacturer and supplier of Pressure Pumps. A Booster Pump is a piece of equipment which will increase the pressure of a fluid used to deliver pressurized water to machinery and equipment. It is placed just after the Clarified water collection tank/pit and connected to the water pipes circuit. The task is to keep constant pressure in the water pipes circuit indipendently from the quantity required. The booster pump represents the State-of-the-art technology for delivering water in a smart and controlled mode. Specifically, the variable speed pump group, use pressure feedback to electronically control motor speed to maintain a reasonably constant discharge pressure. Supply pressurized water to the workshop machines and equipment modulating in real time the quantity and the pressure required from the circuit throught a smart inverter that reads the fluid dynamics and acts in relation to the sequences installed specifically by the manufacturer. To control or personalize the group performance, there is an intuitive interactive panel on each pump.",
    Title: "Fire Sprinkler System:",
  };

  const listItems1 = {
    listArray: [
      "High pressure showers",
      "High pressure water supply to Bungalows/ small apartment complexes/ hostels/ hotels",
      "Gardening easily",
      "Domestic use of water in car washing",
      "Small Gardens",
      "Automatic on-off feature",
      "Ready for use",
      "Same water pressure at all floors of multi-storey Apartments",
      "Can be used to raise the water pressure which is supplied to your homes.",
      "High water pressure can be solved by employing a water pressure pump",
      "Whenever we open the tap once more, the pressure falls very rapidly and a little amount of water will come out.",
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
        LeftTitle="Commercial RO Plants"
        RightTitle="Our Area of Expertise"
        CTA=""
        url="/"
      />

      <BigBanner
        Img="/assets/products/PP.png"
        Title={BigbData?.Title}
        Description={BigbData?.Description}
        CTA=""
        url="/saurabhpatil"
      />
      <ListCollection
        listItems={listItems1?.listArray}
        Description={listItems1?.Description}
        LeftTitle="Feature:"
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

export default product6;
