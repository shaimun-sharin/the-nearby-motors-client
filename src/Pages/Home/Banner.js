import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-secondary">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/QCymPBk/motor1.jpg"
            alt=""
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-3xl font-bold">
              Welcome to
              <span class="text-3xl text-blue-700 font-bold">
                The Nearby Motors
              </span>
            </h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
