import React from "react";
// import Banner from "./Banner";
import { Content } from "./Main/Content";
// import Footer from "./Main/Footer";
import { Iconpage } from "./Main/Iconpage";
import MbBanner from "./Main/MbBanner";
// import MbNav from "./Main/MbNav";
// import MbTestMonial from "./Main/MbTestMonial";
// import NavbarXl from "./Main/NavbarXl";
import Para from "./Main/Para";
import Testimonal from "./Main/Testmonial";
import XlForm from "./Main/XlForm";
import MbTestMonialtest from "./MbTestMonialtest";
import BannerNew from "./Main/BannerNew";
import MdForm from "./Main/MdForm";

function Home() {
  return (
    <div>
      <MbBanner />
      <BannerNew />
      <XlForm />
      <MdForm />
      <Content />
      <Para />
      <Iconpage />
      <Testimonal />

      <MbTestMonialtest />
    </div>
  );
}

export default Home;
