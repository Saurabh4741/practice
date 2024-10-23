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

const product2 = () => {
  const images = [
    "/assets/products/FF-big.jpg",
    "/assets/products/industrial-RO-1.jpg",
    "/assets/products/ro-plant-1000-lph.png",
    "/assets/products/water-treatment-plant.jpg",
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
      "Effluent Treatment Plants or ETPs are used to remove any toxic substances from water and make water pure. Chemicx is the manufacturer of ETP Plants in Civil and Mechanical both.Industrial wastewater (effluent) is treated in a number of ways; the level of treatment decides which is appropriate. Basically there are four steps: Preliminary, Primary, Secondary and Tertiary. Preliminary Treatment: Screening, grit and oil removal are done at preliminary treatment process. Primary Treatment: Primary treatment involves removal of suspended solids up to 50% and reducing BOD level up to 30%. Secondary Treatment: This is sometimes referred to Biological Treatment. Through biological processes, dissolved and suspended organic wastes are converted to more stable solids and removed by settling.Tertiary Treatment: It is the final stage which involves physical, chemical and biological processes to remove residual suspended solids and dissolved solids.",
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
      "Because we are the best ETP Plant supplier in this segment and Chemicx is proud to be one of the India’s leading effluent treatment plant manufacturers and supplier, serving the needs of both public utilities and private companies Asia wide. Chemicx is well known, established 10 years back in Delhi, and Noida Our Company is recognized as a leading manufacturer and supplier of Effluent Treatment Plant (ETP) and Waste Water Treatment Plants conforming to Pollution Control board guidelines and undertakes projects on turnkey basis on a PAN India level. We offer a wide assortment of water sewage and industrial wastewater treatment plants. Our effluent treatment plants and water filtration systems are widely acclaimed in the market. Water and sewage treatment plants offered by us are superior in performance. We also provide industrial wastewater treatment plants that are best in the industry amongst others",
    Title:
      "Other Effluent Treatment Plant Manufacturers Don’t Compare to Chemicx ?Do you want really know why",
  };

  const listItems1 = {
    listArray: [
      "Preliminary Treatment: Screening, grit and oil removal are done at preliminary treatment process.",
      "Primary Treatment: Primary treatment involves removal of suspended solids up to 50% and reducing BOD level up to 30%.",
      "Secondary Treatment: This is sometimes referred to Biological Treatment. Through biological processes, dissolved and suspended organic wastes are converted to more stable solids and removed by settling.",
      "Tertiary Treatment: It is the final stage which involves physical, chemical and biological processes to remove residual suspended solids and dissolved solids.",
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
        LeftTitle="Effluent Treatment Plants(ETP)"
        RightTitle="Our Area of Expertise"
        CTA=""
        url="/"
      />

      <BigBanner
        Img="/assets/products/EffluentTreatmentPlant.png"
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

export default product2;
