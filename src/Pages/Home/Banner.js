import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-300">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/NL1j7jf/motors2.webp"
            alt=""
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold text-blue-800">The Nearby Motors</h1>
            <p class="font-bold text-3xl py-6">
              We welcome our customers with wide range of products in reasonable
              prices. <br />
              Because your motorbike is important to us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
