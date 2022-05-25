import React from "react";
import Banner from "./Banner";
import Clock from "./Clock";
import Form from "./Form";

import Products from "./Products/Products";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Clock></Clock>
      <Summary></Summary>
      <Form></Form>
    </div>
  );
};

export default Home;
