import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data, e) => {
    console.log("data", data);

    const education = data.education;
    const location = data.location;
    const linkedIn = data.linkedIn;
    const number = data.number;

    const profile = {
      education,
      location,
      linkedIn,
      number,
    };
    fetch("https://infinite-ocean-88607.herokuapp.com/profile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("info added successfully");
          reset();
        } else {
          toast.error("Failed to add info");
        }
      });
  };
  return (
    <div>
      <h3>Logged in User : {user?.displayName}</h3>
      <h3>User Email : {user?.email}</h3>
      <div className="flex  justify-center items-center">
        <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Education</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("education", {
                required: {
                  value: true,
                  message: "review is Required",
                },
              })}
            />
            <label className="label">
              {errors.education?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.education.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("location", {
                required: {
                  value: true,
                  message: "location is required ",
                },
              })}
            />
            <label className="label">
              {errors.location?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.location.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              {...register("number", {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "number is required ",
                },
              })}
            />
            <label className="label">
              {errors.number?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.number.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">LinkedIn Profile</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("linkedIn", {
                required: {
                  value: true,
                  message: "linkedIn is required ",
                },
              })}
            />
            <label className="label">
              {errors.linkedIn?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.linkedIn.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn btn-primary w-full max-w-xs "
            type="submit"
            value="Add Info"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
