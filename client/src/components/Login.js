import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authenticate, signIn } from "../api/Auth_API";
import Banner from "./Banner";

function Login() {
  // Useful hooks for state management
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: false,
    loading: false,
    redirect: false,
  });
  const Navigate = useNavigate();
  const { email, password, error, loading, redirect } = values;
  // Handle change method
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, error: false, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: "" }); // Reset error state

    if (email === "" || password === "") {
      setValues({
        ...values,
        error: "Enter email and password",
        loading: false,
      });
    } else {
      try {
        const res = await signIn({ email, password });
        if (res && res.error) {
          setValues({
            ...values,
            error: res.error,
            loading: false,
            redirect: false,
          });
        } else {
          authenticate(res, () => {
            Navigate("/");
          });
        }
      } catch (error) {
        console.error(error);
        setValues({
          ...values,
          error: "An error occured",
          loading: false,
          redirect: false,
        });
      }
    }
  };

  // Redirect function
  const RedirectUser = () => {
    const Navigate = useNavigate();
    if (redirect) {
      return Navigate("/");
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
      <h1 className="text-5xl text-center">Welcome back!</h1>
      <h6 className="text-slate-500 text-center text-lg">
        Please enter your details
      </h6>
      <br />
      {(loading || error) && showBanner()}
      <br />
      <form
        className="flex flex-col items-center w-3/4"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full outline-none py-2 border-b-2 border-slate-200"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full outline-none py-2 border-b-2 border-slate-200"
          onChange={handleChange}
        />
        <br />
        <br />
        <button
          type="submit"
          className="p-2 border bg-orange-500 text-orange-100 text-xl rounded-md w-full shadow-2xl"
        >
          Login
        </button>
        <br />
      </form>
      {/* Ask for signup */}
      <p className="text-slate-600">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
      {RedirectUser()}
    </div>
  );
}

export default Login;
