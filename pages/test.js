import React from "react";
import Head from "next/head";
import Link from "next/link"; // Make sure this is included
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Adjust the path as needed
import Services from '../components/Services';
import AboutUs from "../components/Aboutus";

const Home = () => {
  

  return (
    <>
        <AboutUs imageSrc="/assets/work-1.png" />
      
    </>
  );
};

export default Home;
