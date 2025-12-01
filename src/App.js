import React from 'react';
import NavigationBar from './Component/NavigationBar.js';
import Hero from './Component/Hero.js';
import Support from './Component/Support.js';
import WhyUs from './Component/whyUs.js';
import Team from './Component/Team.js';
import Offer from './Component/Offer.js';
import Bill from './Component/Bill.js';
import Offer2 from './Component/Offer2.js';
import Testimonial from './Component/Testimonial.js';
import Global from './Component/Global.js';
import Trusted from "./Component/Trusted.js"
import Blog from "./Component/Blog.js"
import Contact from "./Component/Contact.js"
import StartUp from './Component/StartUp.js';
import Footer from './Component/Footer.js';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


  

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration (ms)
      once: true,     // animate only once on scroll
    });
  }, []);
  
  return (
    <>
     <NavigationBar />
     <Hero />
     <Support />
     <WhyUs />
     <Team />
     <Offer />
     <Bill />
     <Offer2 />
     <Testimonial />
     <Global />
     <Trusted />
     <Blog />
     <Contact />
     <StartUp />
     <Footer />
    
    </>
  );
}

export default App;
