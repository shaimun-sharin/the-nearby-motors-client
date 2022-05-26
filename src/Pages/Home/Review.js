import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h3 className="text-4xl text-center m-4 font-bold">Customer Reviews</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {reviews.map((r) => (
          <ReviewCard key={r._id} r={r}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
