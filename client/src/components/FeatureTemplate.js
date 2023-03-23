import React from "react";
import { Link } from "react-router-dom";

function FeatureTemplate({ children }) {
  return (
    <article>
      <nav className="mx-auto bg-black w-full text-white fixed py-1">
        <ul className="flex items-center justify-around">
          <li>
            <Link
              to="/home"
              className="px-5 py-2 text-sm hover:bg-button-color"
            >
              <b>HOME</b>
            </Link>
          </li>
          <li>
            <a
              href="#about-us"
              className="px-5 py-2 text-sm hover:bg-button-color"
            >
              <b>ABOUT</b>
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="px-5 py-2 text-sm hover:bg-button-color"
            >
              <b>CONTACT</b>
            </a>
          </li>
          <li>
            <button className="px-5 py-2 text-sm hover:bg-button-color flex items-center">
              <b>SIGN OUT</b>&nbsp;&nbsp;
              <img src="" alt="out" className="inline-block" />
            </button>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </article>
  );
}

export default FeatureTemplate;
