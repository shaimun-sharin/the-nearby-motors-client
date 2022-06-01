import React from "react";

const Banner = () => {
  return (
    <div className="mb-30">
      <div class="hero h-[60vh] bg-secondary">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <h1 class="text-5xl font-bold text-blue-800">The Nearby Motors</h1>
            <p class="font-bold max-w-xl text-3xl py-6">
              We welcome our customers with wide range of products in reasonable
              prices. <br />
              Because your motorbike is important to us.
            </p>
          </div>
          <div className="h-[60vh]">
            <img
              src="https://i.ibb.co/NL1j7jf/motors2.webp"
              alt=""
              class="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
