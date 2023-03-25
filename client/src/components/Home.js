import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BGImg from "../assets/images/HomepageBG.svg";
import SignOut from "../assets/images/SignOut23X18.svg";
import RightArrow from "../assets/images/RightArrow18X18.svg";
import ObjectDetection from "../assets/images/object-detection.svg";
import TextSpeech from "../assets/images/textSpeech.svg";
import SpeechText from "../assets/images/speechText.svg";
import Logo from "../assets/images/logo55X55.svg";
import Instagram from "../assets/images/instagram25X25.svg";
import LinkedIn from "../assets/images/linked-in25X25.svg";
import Twitter from "../assets/images/twitter30X25.svg";
import ObjectCover from "../assets/images/object-detection.png";
import TTS from "../assets/images/TTS.png";
import STT from "../assets/images/STT.webp";

import { isAuthenticated, signout } from "../api/Auth_API";

function Home() {
  const navigate = useNavigate();
  // Handle signout
  const handleSignout = () => {
    signout(() => {
      return navigate("/login", { replace: true });
    });
  };

  return (
    <article className="text-white scroll-smooth" id="header">
      {/* Hero Image goes here */}
      <section
        className="h-screen"
        style={{ backgroundImage: `url(${BGImg})` }}
      >
        <nav className="mx-auto bg-black w-full text-white fixed py-1 z-10">
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

            {isAuthenticated() && (
              <li>
                <button
                  className="px-5 py-2 text-sm hover:bg-button-color transition-colors duration-150 ease-in flex items-center"
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
        <div className="relative w-1/3 top-[100px] md:top-[350px] left-[50px] ">
          <p
            className="text-xl md:text-3xl lg:text-5xl xl:text-7xl"
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
          <a
            href="#features"
            className="rounded-xl md:rounded-xl relative top-10 py-2 md:py-3 px-4 w-[150px] md:w-[200px] md:px-10 bg-orange-500 text-orange-100 flex items-center"
          >
            Explore now &nbsp;
            <img src={RightArrow} alt="right-arrow" className="inline-block" />
          </a>
        </div>
      </section>
      {/* Dashboard goes here! */}
      <section
        id="features"
        className="h-[712px]"
        style={{ fontFamily: `'Inter', sans-serif;` }}
      >
        <div className="flex w-full items-center text-black h-full overflow-hidden">
          <div className="w-2/6 h-full bg-slate-300 relative flex justify-center items-center hover:scale-110 transition-all  hover:cursor-pointer">
            <a href="#about-us" className="h-full">
              <img
                src={ObjectCover}
                alt="object-detection"
                className="opacity-20 h-full peer-img"
              />
            </a>
            <h1 className="mt-auto absolute text-5xl">Object Detection</h1>
          </div>
          <div className="w-2/6 h-full bg-slate-300 relative flex justify-center items-center hover:scale-110 transition-all hover:cursor-pointer">
            <a href="#contact-us" className="h-full">
              <img
                src={TTS}
                alt="object-detection"
                className="opacity-20 h-full"
              />
            </a>
            <h1 className="mt-auto absolute text-5xl">Text-to-Speech</h1>
          </div>
          <div className="w-2/6 h-full bg-slate-300 relative flex justify-center items-center hover:scale-110 transition-all hover:cursor-pointer">
            <a href="#contact-us" className="h-full">
              <img
                src={STT}
                alt="object-detection"
                className="opacity-20 h-full"
              />
            </a>
            <h1 className="mt-auto absolute text-5xl">Speech-to-Text</h1>
          </div>
        </div>
      </section>

      {/* Features explanation goes here*/}
      <section>
        <h3
          className="text-6xl text-black text-center py-3"
          style={{
            fontFamily: `'Tillana', cursive;`,
            background: `linear-gradient(89.77deg, #E7CCA4 26.41%, #DDA348 91.21%)`,
          }}
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

      {/* About US goes here*/}
      <section id="about-us">
        <h3
          className="text-6xl text-black text-center py-3"
          style={{
            fontFamily: `'Inter', sans-serif;`,
            background: `linear-gradient(89.77deg, #E7CCA4 26.41%, #DDA348 91.21%)`,
          }}
        >
          About us
        </h3>
        {/* Parent contianer */}
        <div className="border p-4 flex flex-col items-center overflow-scroll scroll-smooth">
          {/* Cards container */}
          <div className="flex items-center justify-evenly w-full">
            {/* #1 */}
            <div className="w-[350px] h-[550px] rounded-3xl bg-slate-100 flex flex-col items-center justify-around ml-2">
              {/* Image */}
              <div className="rounded-full bg-slate-50 h-[246px] w-[246px]"></div>
              {/* Description */}
              <div
                className="flex flex-col items-center justify-start text-black w-full py-10"
                style={{ background: "#FFE5BF" }}
              >
                <p className="text-2xl"> Developer Name </p>
                <p className="text-lg">Registraion No.</p>
              </div>
            </div>
            {/* #2 */}
            <div className="w-[350px] h-[550px] rounded-3xl bg-slate-100 flex flex-col items-center justify-around ml-2">
              {/* Image */}
              <div className="rounded-full bg-slate-50 h-[246px] w-[246px]"></div>
              {/* Description */}
              <div
                className="flex flex-col items-center justify-start text-black w-full py-10"
                style={{ background: "#FFE5BF" }}
              >
                <p className="text-2xl"> Developer Name </p>
                <p className="text-lg">Registraion No.</p>
              </div>
            </div>
            {/* #3 */}
            <div className="w-[350px] h-[550px] rounded-3xl bg-slate-100 flex flex-col items-center justify-around ml-2">
              {/* Image */}
              <div className="rounded-full bg-slate-50 h-[246px] w-[246px]"></div>
              {/* Description */}
              <div
                className="flex flex-col items-center justify-start text-black w-full py-10"
                style={{ background: "#FFE5BF" }}
              >
                <p className="text-2xl"> Developer Name </p>
                <p className="text-lg">Registraion No.</p>
              </div>
            </div>
            {/* #4 */}
            <div className="w-[350px] h-[550px] rounded-3xl bg-slate-100 flex flex-col items-center justify-around ml-2">
              {/* Image */}
              <div className="rounded-full bg-slate-50 h-[246px] w-[246px]"></div>
              {/* Description */}
              <div
                className="flex flex-col items-center justify-start text-black w-full py-10"
                style={{ background: "#FFE5BF" }}
              >
                <p className="text-2xl"> Developer Name </p>
                <p className="text-lg">Registraion No.</p>
              </div>
            </div>
          </div>
        </div>

        {/* About us description */}
        <div className="px-10 py-16">
          <p className="text-black text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            placeat sequi doloribus porro maxime asperiores voluptatum repellat
            reprehenderit sed non sint quasi ex sit eos natus vitae tempora
            delectus earum! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Eum iusto ab quibusdam tenetur officiis labore molestiae?
            Optio quia quibusdam quae beatae minima odio at distinctio
            architecto. Repellendus voluptatum veniam cum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Tempore enim autem maxime, sequi
            voluptatibus eveniet ad quisquam obcaecati explicabo fuga mollitia
            porro in suscipit, nemo beatae fugit perferendis. Voluptate,
            debitis?
          </p>
        </div>
      </section>
      <hr />
      {/* Footer / Contact us goes here*/}
      <section
        style={{ background: "#353434" }}
        className="w-full h-[206px]"
        id="contact-us"
      >
        {/* container */}
        <div className="flex items-center justify-evenly p-10">
          {/* Logo */}
          <div className="flex items-center justify-start px-10 ">
            <img src={Logo} alt="logo" />
            <p className="px-2 text-xl">
              <b>Assited Vision</b>
            </p>
          </div>
          {/* Address */}
          <div className="flex flex-col items-start justify-start px-10 ">
            <p>
              <b>Address</b>
            </p>
            <br />
            <address>
              Vellore Institute of Technology, Vellore <br /> Vellore, Tamil
              Nadu, 632014
            </address>
          </div>
          {/* Social media */}
          <div className="flex flex-col items-start justify-start px-10 ">
            <p className="mx-4">
              <b>Social</b>
            </p>
            <br />
            <ul className="block">
              <li className="inline-block mx-4">
                <a href="www.instagram.com" target="_blank">
                  <img src={Instagram} alt="instagram" />
                </a>
              </li>
              <li className="inline-block mx-4">
                <a href="www.linkedin.com" target="_blank">
                  <img src={LinkedIn} alt="linkedIn" />
                </a>
              </li>
              <li className="inline-block mx-4">
                <a href="www.twitter.com" target="_blank">
                  <img src={Twitter} alt="twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Home;
