import React from "react";
import Banner from "./Banner";
import { Content } from "./Main/Content";
import Footer from "./Main/Footer";
import { Iconpage } from "./Main/Iconpage";
import MbBanner from "./Main/MbBanner";
import MbNav from "./Main/MbNav";
import NavbarXl from "./Main/NavbarXl";
import Para from "./Main/Para";

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
      <Footer />
    </div>
  );
}

export default Home;
