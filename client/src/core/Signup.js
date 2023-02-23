import React from "react";
import { Link } from "react-router-dom";
function Signup() {
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
          name="fullName"
          placeholder="Full name"
          className="w-full outline-none py-2 border-b-2 border-slate-200"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full outline-none py-2 border-b-2 border-slate-200"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full outline-none py-2 border-b-2 border-slate-200"
        />
        <br />
        <br />
        <button className="p-2 border bg-black text-white text-xl rounded-md w-full">
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
