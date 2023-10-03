// src/components/Signup.js
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "confirm Password must be same as password";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data is valid:", formData);
      navigate("/");
    } else {
      console.log("Form data is invalid");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center border bg-gradient-to-r from-orange-100">
      <div className="w-full max-w-md  p-4 rounded-xl shadow-xl">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl text-center font-semibold mb-4">Sign Up</h2>
          <div className="mb-4">
            <label
              htmlFor="Name"
              className="block text-gray-700 font-medium mb-2 ml-2"
            >
              Name
            </label>
            <input
              type="text"
              id="firstName"
              name="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 focus:shadow"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2 ml-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 focus:shadow"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2 ml-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" 
            className="block text-gray-700 font-medium mb-2 ml-2">
                Confirm Password
            </label>
            
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Confirm your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 mt-1 rounded-full hover:bg-blue-600 focus:outline-none shadow-sm"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
          <div className="button-container">
            <button type="submit" className="submit mt-2" onSubmit={handleSubmit}>
              Sign Up with
            </button>
          </div>
        </form>
        <div className="bar"></div>
        {/* //  mt-4 items-center justify-center flex flex-col */}
        <div className="social-login">
          {/* w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 focus:outline-none */}
          <button type="button" className="mr-4 mt-2">
            <FcGoogle />
          </button>
          <button type="button" className="icons mr-4 mt-2">
            <AiFillGithub />
          </button>
          <button type="button" className="icons mr-4 mt-2">
            <BiLogoFacebook />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;