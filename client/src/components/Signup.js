import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../api/Auth_API";
import Banner from "./Banner";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    loading: false,
    redirect: false,
  });
  const { name, email, password, error, loading, redirect } = values;
  // Handle change method
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Handle submit method
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "" || name === "") {
      setValues({
        ...values,
        error: "All fields are required",
      });
      return;
    }
    const res = await signUp(values);
    setValues({ ...values, loading: true });
    if (res.error) {
      setValues({ ...values, error: res.error });
    } else {
      setValues({
        ...values,
        name: "",
        email: "",
        password: "",
        loading: false,
        redirect: true,
      });
    }
  };

  // Redirect function
  const RedirectUser = () => {
    const Navigate = useNavigate();
    if (redirect) {
      setValues({ ...values, loading: false });
      return Navigate("/signin");
    }
  };

  // Show banner function
  const showBanner = () => {
    if (loading) {
      return <Banner message="Loading, Just a moment..." />;
    }
    if (error) return <Banner message={error} />;
  };

  return (
    <div className="w-3/4 m-2 flex flex-col items-center p-2">
      <h1 className="text-5xl text-center">Welcome!</h1>
      <h6 className="text-slate-500 text-center text-lg">
        Please enter your details
      </h6>
      <br />
      {showBanner()}
      <br />
      <form
        className="flex flex-col items-center w-3/4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Full name"
          onChange={handleChange}
          className="w-full outline-none p-2 border-b-2 border-slate-200"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full outline-none p-2 border-b-2 border-slate-200"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full outline-none p-2 border-b-2 border-slate-200"
        />
        <br />
        <br />
        <button
          type="submit"
          className="p-2 bg-orange-500 text-orange-100 text-xl rounded-md w-full shadow-2xl"
        >
          Signup
        </button>
        <br />
      </form>
      <p className="text-slate-600">
        Already have an account? <Link to="/signin">Login</Link>
      </p>
      {RedirectUser()}
    </div>
  );
}

export default Signup;
