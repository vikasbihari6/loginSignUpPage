import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

const LoginForm = () => {
  const initialvalues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    console.log(name , value)
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
  };

  const validate = (values) => {
    const errors = {};
    if(!values.email) {
      errors.email = "Email is required!";
    } else if(!values.email.includes('@')) {
      errors.email = "Invalid Email address!"
    }
    if(!values.password) {
      errors.password = "password is required!"
    } else if(values.password.length < 6) {
      errors.password = "Invalid password. minimum length should be 6.!"
    } 

    return errors;
  };

  useEffect(()=> {
    if(Object.keys(formErrors).length === 0 && isSubmit ) {
      console.log("Form submited")
    }
  }, [formErrors, isSubmit])

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(formValues));
  };

  return (
    <div className="min-h-screen flex items-center justify-center border bg-gradient-to-r from-orange-100">
      <form className="w-full max-w-md  p-4 rounded-xl shadow-xl">
        <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 focus:shadow"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <p className="">{formErrors.email}</p>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        <p>{formErrors.password}</p>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none shadow-sm"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <div className="mt-2 mx-5">
          <a href="/signup" className="text-blue-500 hover:underline  text-left">
            Sign up
          </a>
          <a href="/forgot" className="text-blue-500 hover:underline  float-right">
            Forgot Password?
          </a>
        </div>
        {/* <div className="mt-2 text-right mx-5">
          
        </div> */}
        <div className="mt-4 items-center justify-center flex flex-col">
          <button
            type="button"
            className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 focus:outline-none"
            onClick={() => {
              // Handle Google Sign In here
              console.log("Sign In with Google clicked");
            }}
          >
            Sign In with Google
          </button>
          <button
            type="button"
            className="w-full bg-gray-800 text-white py-2 rounded-full mt-2 hover:bg-gray-900 focus:outline-none"
            onClick={() => {
              // Handle GitHub Sign In here
              console.log("Sign In with GitHub clicked");
            }}
          >
            Sign In with GitHub
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
