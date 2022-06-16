import React from "react";
import { useForm } from "react-hook-form";

const UserDataCollect = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("First name", {
            required: true,
            max: 50,
            min: 2,
            maxLength: 80,
          })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", {
            required: true,
            max: 50,
            min: 2,
            maxLength: 100,
          })}
        />
        <select {...register("Gender", { required: true })}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="datetime-local"
          placeholder="DateofBirth"
          {...register("DateofBirth", { required: true })}
        />
        <input type="text" placeholder="CIty" {...register("CIty", {})} />
        <input
          type="tel"
          placeholder="Phone"
          {...register("Phone", { maxLength: 12 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default UserDataCollect;
