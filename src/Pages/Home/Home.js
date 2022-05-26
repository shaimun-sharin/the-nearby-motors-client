import React from "react";
import WhyChoose from "../WhyChoose/WhyChoose";
import Banner from "./Banner";

import Products from "./Products/Products";
import Review from "./Review";
import Sale from "./Sale";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Sale></Sale>
      <Review></Review>
      <Summary></Summary>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;
