import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form className="flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-4"
          placeholder="supplier name"
          {...register("supplierName")}
        />
        <input
          className="mb-4"
          placeholder="Quantity"
          type="text"
          {...register("quantity")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
