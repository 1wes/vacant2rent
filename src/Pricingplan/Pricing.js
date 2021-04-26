import React from "react";
import Navbar from '../components/Navbar/Navbar'
import Pricing from "./pricing/TwoPlansWithDurationSwitcher.js";
import Footer from "../components/Footer/Footer";

export default () => {
  return (
    <>
      
      <Navbar/>
      <div className="bg-dark text-white">
      <Pricing />
      <Footer/>

      </div>
     
     
     
    </>
  );
};
