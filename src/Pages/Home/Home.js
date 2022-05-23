import React from "react";
import Banner from "./Banner";
import Clock from "./Clock";

import Products from "./Products/Products";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Clock></Clock>
      <Summary></Summary>
    </div>
  );
};

export default Home;
