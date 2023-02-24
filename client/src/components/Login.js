import React from "react";
import Google from "../assets/images/google25X25.svg";
import HRL from "../assets/images/hr_or_bar.svg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="w-3/4 m-2 flex flex-col items-center p-2">
      <h1 className="text-5xl text-center">Welcome back!</h1>
      <h6 className="text-slate-500 text-center text-lg">
        Please enter your details
      </h6>
      <br />
      <button className="py-2 text-lg border bg-slate-50 rounded-md w-3/4">
        <span>
          <img src={Google} alt="google" className="inline-block mx-3" />
        </span>
        Login with Google
      </button>
      <br />
      <br />
      <img src={HRL} alt="hr-line" />
      <br />
      <form className="flex flex-col items-center w-3/4">
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
          Login
        </button>
        <br />
      </form>
      {/* Ask for signup */}
      <p className="text-slate-600">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
