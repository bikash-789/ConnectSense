import React from "react";
import Logo from "../assets/images/logo35X35.svg";
import Login from "./Login";
import Signup from "./Signup";
import CoverImage from "../assets/images/CoverImage.svg";
function LoginSignup(props) {
  return (
    <article className="absolute flex justify-start w-full h-full">
      {/* Signup / Login*/}
      <section className="w-full flex flex-col items-center">
        {/* Logo and Title */}
        <div className="flex justify-start m-2 self-start">
          <img src={Logo} alt="logo" />
          <h1 className="text-2xl mx-2">
            <i>ConnectSense</i>
          </h1>
        </div>
        <br />
        <br />
        {/* Login/Signup component */}
        {props.element === "login" && <Login />}
        {props.element === "signup" && <Signup />}
      </section>

      {/* Image */}
      <section className="md:w-full">
        <img src={CoverImage} alt="cover-img" className="object-contain" />
        <div className="relative bottom-[150px] z-10">
          <p
            className="text-6xl px-4 font-sans italic"
            style={{
              background:
                "linear-gradient(90.54deg, #FF8800 16.98%, rgba(197, 191, 59, 0.61) 58.13%, rgba(0, 0, 0, 0) 109.94%)",
              webkitBackgroundClip: "text",
              webkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Even without sight there is still Vision!
          </p>
        </div>
      </section>
    </article>
  );
}

export default LoginSignup;
