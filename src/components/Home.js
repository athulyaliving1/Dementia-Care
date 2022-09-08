import React from "react";
import Banner from "./Banner";
import { Content } from "./Main/Content";
import Footer from "./Main/Footer";
import { Iconpage } from "./Main/Iconpage";
import MbBanner from "./Main/MbBanner";
import MbNav from "./Main/MbNav";
// import MbTestMonial from "./Main/MbTestMonial";
import NavbarXl from "./Main/NavbarXl";
import Para from "./Main/Para";
import Testimonal from "./Main/Testmonial";
import MbTestMonialtest from "./MbTestMonialtest";

function Home() {
  return (
    <div>
      <MbNav />
      <NavbarXl />
      <Banner />
      <MbBanner />
      <Content />
      <Para />
      <Iconpage />
      <Testimonal />
    
      <MbTestMonialtest />
      <Footer />
    </div>
  );
}

export default Home;
