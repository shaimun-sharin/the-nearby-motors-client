import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data, e) => {
    console.log("data", data);
    const rating = data.rating;
    const review = data.review;

    if (rating > 5) {
      toast.error("rating should be between 1-5");
      reset();
    } else {
      const reviews = {
        review: review,
        rating: rating,
      };
      fetch("http://localhost:5000/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reviews),
      })
        .then((res) => res.json())
        .then((inserted) => {
          if (inserted.insertedId) {
            toast.success("Review added successfully");
            reset();
          } else {
            toast.error("Failed to add review");
          }
        });
      navigate("/home");
    }
  };
  return (
    <div>
      <h5> add a product</h5>
      <div className="flex  justify-center items-center">
        <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Review Description</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("review", {
                required: {
                  value: true,
                  message: "review is Required",
                },
              })}
            />
            <label className="label">
              {errors.review?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.review.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              {...register("rating", {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "rating is required ",
                },
              })}
            />
            <label className="label">
              {errors.rating?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.rating.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn btn-primary w-full max-w-xs "
            type="submit"
            value="Add Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
