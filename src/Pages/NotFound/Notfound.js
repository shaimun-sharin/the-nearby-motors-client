import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound w-100 mx-auto h-100">
      <h1 className="animate__animated animate__shakeX p-4 text-5xl text-white text-center">
        404! page not found
      </h1>
      <br />
      <button className="animate__animated animate__backInUp btn btn-neutral mx-auto block text-center w-25">
        <Link className="text-decoration-none " to="/home">
          Go to Home Page
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
