import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imgStorageKey = "5ff392201d3c6c09fd7c845f02b29212";
  const onSubmit = async (data) => {
    console.log("data", data);
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    console.log(url);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            about: data.about,
            availableQuantity: data.availableQuantity,
            minimumQuantity: data.minimumQuantity,
            price: data.price,
            img: img,
          };
          fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfuly");
                reset();
              } else {
                toast.error("Failed to add product");
              }
            });
        }
      });
  };

  return (
    <div>
      <h5> add a product</h5>
      <div className="flex  justify-center items-center">
        <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("about", {
                required: {
                  value: true,
                  message: "Description is required ",
                },
              })}
            />
            <label className="label">
              {errors.about?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.about.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control  w-full max-w-xs">
            <label className="label">
              <span className="label-text">Available Quantity </span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              {...register("availableQuantity", {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "Quantity is required ",
                },
              })}
            />
            <label className="label">
              {errors.availableQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.availableQuantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control  w-full max-w-xs">
            <label className="label">
              <span className="label-text">Minimum Quantity </span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              {...register("minimumQuantity", {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "Quantity is required ",
                },
              })}
            />
            <label className="label">
              {errors.minimumQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minimumQuantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control  w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price </span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              {...register("price", {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "Price is required ",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("img", {
                required: {
                  value: true,
                  message: "image is Required",
                },
              })}
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.img.message}
                </span>
              )}
            </label>
          </div>

          <input
            className="btn btn-primary w-full max-w-xs "
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
