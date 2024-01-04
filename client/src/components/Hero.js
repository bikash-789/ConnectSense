import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BGImg from "../assets/images/HomepageBG.svg";
import SignOut from "../assets/images/SignOut23X18.svg";
import RightArrow from "../assets/images/RightArrow18X18.svg";
import Logo from "../assets/images/logo55X55.svg";
import { isAuthenticated } from "../api/Auth_API";
import { signout } from "../api/Auth_API";

function Hero() {
  const navigate = useNavigate();
  // Handle signout
  const handleSignout = () => {
    signout(() => {
      return navigate("/login", { replace: true });
    });
  };
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BGImg})` }}
    >
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
      <div className="relative w-3/4 lg:w-1/3 top-[270px] md:top-[350px] left-[50px] ">
        <p className="text-5xl xl:text-7xl text-[#5F2700]">
          The eyes are useless when the mind is blind.
        </p>
        <a
          href="#features"
          className="rounded-xl md:rounded-xl relative top-10 py-2 md:py-3 px-4 w-[180px] md:w-[220px] md:px-10 bg-orange-500 text-orange-100 flex items-center justify-center text-xl"
        >
          Explore now &nbsp;
          <img src={RightArrow} alt="right-arrow" className="inline-block" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
