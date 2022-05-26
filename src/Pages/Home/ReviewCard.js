import React from "react";

const ReviewCard = ({ r }) => {
  const { review, rating } = r;
  return (
    <div className="flex justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl  text-red-700">
            User Review:
            <span className="text-blue-700 text-2xl ">{review}</span>
          </h2>
          <p className=" text-red-700 font-bold">
            User Rating :
            <span className="text-blue-700 font-bold ">{rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
