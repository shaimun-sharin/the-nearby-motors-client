import React from "react";
import Banner from "./Banner";
import NewLaunch from "./NewLaunch";

import Products from "./Products/Products";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <NewLaunch></NewLaunch>
      <Summary></Summary>
    </div>
  );
};

export default Home;
