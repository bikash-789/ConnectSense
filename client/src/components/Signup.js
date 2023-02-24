import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../api/Auth_API";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle change method
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Handle submit method
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signUp(values);
    if (res.error) {
      console.log(res.error);
    }
    console.log(JSON.stringify(res.message));
  };

  return (
    <div className="w-3/4 m-2 flex flex-col items-center p-2">
      <h1 className="text-5xl text-center">Welcome!</h1>
      <h6 className="text-slate-500 text-center text-lg">
        Please enter your details
      </h6>
      <br />
      <form className="flex flex-col items-center w-3/4">
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
          className="p-2 bg-black text-white text-xl rounded-md w-full shadow-2xl"
          onClick={handleSubmit}
        >
          Signup
        </button>
        <br />
      </form>
      <p className="text-slate-600">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
