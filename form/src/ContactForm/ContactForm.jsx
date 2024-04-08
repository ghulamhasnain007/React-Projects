import React from "react";
import { useForm } from "react-hook-form";
import login from "../_lib/services/authService";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const response = await login(data);

      if (response.status !== 200) {
        throw new Error(response.data.message || "Login failed");
      }

      sessionStorage.setItem("user", JSON.stringify(response.data));
      alert("Login successful");
    } catch (error) {
      alert(error.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        type="text"
        placeholder="Username"
        {...register("username", {
          required: "Username is required",
          maxLength: { value: 20, message: "Username exceeds the limit" },
        })}
      />
      {errors.username && <span>{errors.username.message}</span>} <br />
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          maxLength: { value: 20, message: "Password exceeds the limit" },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>} <br />
      <button type="submit">LOGIN</button> <br />
    </form>
  );
};

export default LoginForm;
