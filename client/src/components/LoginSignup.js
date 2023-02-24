import React from "react";
import Logo from "../assets/images/logo35X35.svg";
import Login from "./Login";
import Signup from "./Signup";

function LoginSignup(props) {
  return (
    <article className="absolute flex justify-start w-full h-full">
      {/* Signup / Login*/}
      <section className="w-full flex flex-col items-center">
        {/* Logo and Title */}
        <div className="flex justify-start m-2 self-start">
          <img src={Logo} alt="logo" />
          <h1 className="text-2xl mx-2">Invision</h1>
        </div>
        <br />
        <br />
        {/* Login/Signup component */}
        {props.element === "login" && <Login />}
        {props.element === "signup" && <Signup />}
      </section>

      {/* Image */}
      <section className="w-full">
        <img src="https://picsum.photos/900/920" alt="fig" />
        <div className="relative bottom-[200px] z-10">
          <p className="text-white text-6xl px-4 font-sans italic">
            Even without sight there is still Vision!
          </p>
        </div>
      </section>
    </article>
  );
}

export default LoginSignup;
