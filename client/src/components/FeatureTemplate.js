import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SignOut from "../assets/images/SignOut23X18.svg";
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
    <article>
      <nav
        className="mx-auto w-full text-white fixed py-1 z-10"
        style={{
          backdropFilter: "blur(15px)",
          background: "rgba(25, 25, 25, 0.4)",
        }}
      >
        <ul className="flex items-center justify-center">
          <li>
            <Link
              to="/home"
              className="px-5 py-2 text-sm hover:bg-orange-500 text-orange-100 mx-5"
            >
              <b>HOME</b>
            </Link>
          </li>
          <li>
            <a
              href="#about-us"
              className="px-5 py-2 text-sm hover:bg-orange-500 text-orange-100 mx-5"
            >
              <b>ABOUT</b>
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="px-5 py-2 text-sm hover:bg-orange-500 text-orange-100 mx-5"
            >
              <b>CONTACT</b>
            </a>
          </li>
          {isAuthenticated() && (
            <li>
              <button
                className="px-5 py-2 text-sm hover:bg-orange-500 text-orange-100 mx-5 transition-colors duration-150 ease-in flex items-center"
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

      <div className="relative top-12 bg-stone-100 p-4 h-screen">
        {children}
      </div>
    </article>
  );
}

export default FeatureTemplate;
