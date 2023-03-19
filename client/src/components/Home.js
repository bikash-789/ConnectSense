import React from "react";
import { Link } from "react-router-dom";
import BGImg from "../assets/images/HomepageBG.svg";
import SignOut from "../assets/images/SignOut23X18.svg";
import RightArrow from "../assets/images/RightArrow18X18.svg";
import ObjectDetection from "../assets/images/object-detection.svg";
import TextSpeech from "../assets/images/textSpeech.svg";
import SpeechText from "../assets/images/speechText.svg";

function Home() {
  return (
    <article className="text-white scroll-smooth" id="header">
      <section
        className="h-[915px]"
        style={{ backgroundImage: `url(${BGImg})` }}
      >
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
          <button className="rounded-3xl relative top-10 py-3 px-10 bg-orange-500 text-orange-100 flex items-center">
            Explore now &nbsp;
            <img src={RightArrow} alt="right-arrow" className="inline-block" />
          </button>
        </div>
      </section>
      {/* Dashboard goes here! */}
      <section
        className="h-[712px]"
        style={{ fontFamily: `'Inter', sans-serif;` }}
      >
        <h3
          className="bg-button-color h-full flex items-center justify-center text-6xl"
          style={{ fontFamily: `'Cedarville Cursive', cursive;` }}
        >
          What a blind person needs is not a teacher but another self!
        </h3>
      </section>

      {/* Features explanation */}
      <section>
        <h3
          className="text-6xl text-black text-center py-3"
          style={{ fontFamily: `'Inter', sans-serif;` }}
        >
          Features
        </h3>
        {/* Here goes Object detection */}
        <div
          style={{ backgroundImage: `url(${ObjectDetection})` }}
          className="h-[688px] relative border"
        >
          <h2
            className="text-black absolute top-28 px-10 font-bold text-2xl"
            style={{ fontFamily: `'Inter', sans-serif;` }}
          >
            Object Detection
          </h2>
          <br />
          <p
            className="px-10 text-black absolute top-40 w-[692px] text-xl"
            style={{ fontFamily: `'Inter', sans-serif;` }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            consectetur sit quia et. Laudantium a delectus quam, consectetur,
            deleniti quae enim impedit explicabo quibusdam tempora rem ex est
            sequi rerum. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Rerum optio dolorem corrupti cum perspiciatis sint mollitia
            beatae rem magni! Excepturi saepe iure nulla, non delectus dolorem
            omnis cum vitae odit.
            <br />
            <br />
            <button className="bg-black absolute top-50 border-none text-white w-[173px] px-4 py-1 rounded-3xl shadow-2xl">
              Try now
            </button>
          </p>
        </div>
        {/* Here goes Text-to-speech */}
        <div
          style={{ backgroundImage: `url(${TextSpeech})` }}
          className="h-[688px] border relative"
        >
          <div className="absolute top-28 right-0">
            <h2
              className="text-black px-10 font-bold text-2xl"
              style={{ fontFamily: `'Inter', sans-serif;` }}
            >
              Text-to-Speech
            </h2>
            <br />
            <p
              className="px-10 text-black w-[692px] text-xl"
              style={{ fontFamily: `'Inter', sans-serif;` }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo consectetur sit quia et. Laudantium a delectus quam,
              consectetur, deleniti quae enim impedit explicabo quibusdam
              tempora rem ex est sequi rerum. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Rerum optio dolorem corrupti cum
              perspiciatis sint mollitia beatae rem magni! Excepturi saepe iure
              nulla, non delectus dolorem omnis cum vitae odit.
              <br />
              <br />
              <button className="bg-black border-none text-white px-4 py-1 rounded-3xl shadow-2xl w-[173px]">
                Try now
              </button>
            </p>
          </div>
        </div>
        {/* Here goes Speech-to-text */}
        <div
          style={{ backgroundImage: `url(${SpeechText})` }}
          className="h-[688px] border relative"
        >
          <h2
            className="text-black absolute top-24 px-10 font-bold text-2xl"
            style={{ fontFamily: `'Inter', sans-serif;` }}
          >
            Speech-to-Text
          </h2>
          <br />
          <p
            className="px-10 text-black absolute top-40 w-[692px] text-xl"
            style={{ fontFamily: `'Inter', sans-serif;` }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            consectetur sit quia et. Laudantium a delectus quam, consectetur,
            deleniti quae enim impedit explicabo quibusdam tempora rem ex est
            sequi rerum. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Rerum optio dolorem corrupti cum perspiciatis sint mollitia
            beatae rem magni! Excepturi saepe iure nulla, non delectus dolorem
            omnis cum vitae odit.
            <br />
            <br />
            <button className="bg-black absolute top-50 border-none text-white w-[173px] px-4 py-1 rounded-3xl shadow-2xl">
              Try now
            </button>
          </p>
        </div>
      </section>
    </article>
  );
}

export default Home;
