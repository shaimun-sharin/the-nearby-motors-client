import React from "react";
import Clock from "./Clock";

const Sale = () => {
  return (
    <div>
      <div
        class="hero w-full min-h-screen"
        style={{
          background: `url(https://i.ibb.co/Wtv6sm0/sale.jpg)`,
        }}
      >
        <div class="hero-overlay bg-opacity-80"></div>
        <div class="hero-content  text-neutral-content">
          <Clock></Clock>
        </div>
      </div>
    </div>
  );
};

export default Sale;
