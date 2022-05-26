import React from "react";
import Banner from "./Banner";

import Products from "./Products/Products";
import Sale from "./Sale";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Sale></Sale>
      <Summary></Summary>
    </div>
  );
};

export default Home;
