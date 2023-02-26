import React from "react";
import { Link } from "react-router-dom";
import BGImg from "../assets/images/HomepageBG.svg";
import SignOut from "../assets/images/SignOut23X18.svg";
import RightArrow from "../assets/images/RightArrow18X18.svg";

function Home() {
  return (
    <article
      className="h-[915px] text-white"
      id="header"
      style={{ backgroundImage: `url(${BGImg})` }}
    >
      <section>
        <nav className="w-3/4 mx-auto relative top-5">
          <ul className="flex items-center justify-around">
            <li className="px-5 py-2 text-sm hover:bg-button-color">
              <Link to="/home">
                <b>HOME</b>
              </Link>
            </li>
            <li className="px-5 py-2 text-sm hover:bg-button-color">
              <Link to="#about">
                <b>ABOUT</b>
              </Link>
            </li>
            <li className="px-5 py-2 text-sm hover:bg-button-color">
              <Link to="#contact">
                <b>CONTACT</b>
              </Link>
            </li>
            <li>
              <button className="px-5 py-2 text-sm hover:bg-button-color flex items-center">
                <b>SIGN OUT</b>&nbsp;&nbsp;
                <img src={SignOut} alt="out" className="inline-block" />
              </button>
            </li>
          </ul>
        </nav>
        <div className="relative w-1/3 top-[381px] left-[50px] ">
          <p
            className="text-7xl"
            style={{
              background:
                "linear-gradient(305.97deg, #BB780F 6.24%, #FFFFFF 6.25%, #FCE8D1 43.95%, #FF8E0D 117.61%, #FF9317 117.62%)",
              webkitBackgroundClip: "text",
              webkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            The eyes are useless when the mind is blind.
          </p>
          <button className="rounded-3xl relative top-10 py-3 px-10 bg-orange-500 text-orange-100 animate-bounce flex items-center">
            Explore now &nbsp;
            <img src={RightArrow} alt="right-arrow" className="inline-block" />
          </button>
        </div>
      </section>
      {/* <section id="about" className="border-2 border-slate-200">
        This is about us page!
      </section> */}
    </article>
  );
}

export default Home;
