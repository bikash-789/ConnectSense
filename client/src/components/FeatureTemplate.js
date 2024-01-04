import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SignOut from "../assets/images/SignOut23X18.svg";
import Logo from "../assets/images/logo55X55.svg";
import { isAuthenticated, signout } from "../api/Auth_API";
function FeatureTemplate({ children }) {
  const navigate = useNavigate();
  // Handle signout
  const handleSignout = () => {
    signout(() => {
      return navigate("/login", { replace: true });
    });
  };

  return (
    <article className="">
      <nav
        className="mx-auto w-full text-white fixed py-1 z-10"
        style={{
          backdropFilter: "blur(15px)",
          background: "rgba(25, 25, 25, 0.4)",
        }}
      >
        <ul className="flex items-center justify-center">
          <li>
            <img src={Logo} alt="logo" className="w-[50px]" />
          </li>
          <li className="hidden lg:inline-block">
            <Link
              to="/home"
              className="px-5 py-2 text-sm hover:bg-orange-500 text-orange-100 mx-5"
            >
              <b>HOME</b>
            </Link>
          </li>
          <li className="hidden lg:inline-block">
            <a
              href="#about-us"
              className="px-5 py-2 text-sm hover:bg-orange-500 text-orange-100 mx-5"
            >
              <b>ABOUT</b>
            </a>
          </li>
          <li className="hidden lg:inline-block">
            <a
              href="#contact-us"
              className="px-5 py-2 text-sm hover:bg-orange-500 text-orange-100 mx-5"
            >
              <b>CONTACT</b>
            </a>
          </li>
          {isAuthenticated() && (
            <li className="self-center ml-auto lg:ml-0">
              <button
                className="px-5 py-2 mx-5 text-center text-sm hover:bg-slate-700 text-orange-100 transition-colors duration-150 ease-in flex items-center"
                onClick={() => {
                  handleSignout();
                }}
              >
                <b>SIGN OUT</b>&nbsp;&nbsp;
                <img src={SignOut} alt="out" className="inline-block" />
              </button>
            </li>
          )}
        </ul>
      </nav>
      <div className="relative top-12 bg-stone-100 p-4 h-[100%]">
        {children}
      </div>
    </article>
  );
}

export default FeatureTemplate;
