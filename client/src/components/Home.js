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
import ToDoList from "../assets/images/to-do-list.png";
import TTS from "../assets/images/TTS.png";
import STT from "../assets/images/STT.webp";

import { isAuthenticated, signout } from "../api/Auth_API";

function Home() {
  const { SpeechSynthesisUtterance, speechSynthesis } = window;
  const text =
    "Welcome to ConnectSense application. We are here to help you with following features like Object Detection, Text-to-Speech, where you can listen to book contents which are in Text and Speech-to-text which will help like live caption. You can see what other person are speaking around you. To navigate to any page, just press the space bar and start speaking the command. The command to navigate to each page goes like this: \n 1. Go to 'home' for navigating to homepage \n 2. Go to 'object detection' for navigating to object detection. \n 3. Go to 'to do list' for navigating to To-do list app \n 4. Go to 'text to speech' for navigating to Text-to-Speech. \n 5. 'sign out' for signning out. ";
  const navigate = useNavigate();
  // Handle signout
  const handleSignout = () => {
    signout(() => {
      return navigate("/login", { replace: true });
    });
  };
  const handleSpeakInstruction = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    // Find the voice you want to use by name and language
    const voice = voices.find((v) => v.name === "Daniel");
    utterance.voice = voice;
    utterance.rate = 1;
    speechSynthesis.speak(utterance);

    // Stop speaking when the S key is pressed
    document.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(event) {
      if (event.code === "Space") {
        speechSynthesis.cancel();
        document.removeEventListener("keydown", handleKeyDown);
      }
    }
  };
  // handleSpeakInstruction();
  // Give voice based instruction to user
  setTimeout(() => {
    handleSpeakInstruction();
    console.log("speaking");
  }, 2000);

  // Finally return the Homepage
  return (
    <article className="text-white scroll-smooth" id="header">
      {/* Hero Image goes here */}
      <section
        className="h-screen"
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
              <img src={Logo} alt="logo" className="w-[40px]" />
            </li>
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
            className="rounded-xl md:rounded-xl relative top-10 py-2 md:py-3 px-4 w-[180px] md:w-[220px] md:px-10 bg-orange-500 text-orange-100 flex items-center justify-center text-xl"
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
        style={{ fontFamily: `'Inter', sans-serif` }}
      >
        <div className="flex w-full items-center text-black h-full overflow-hidden">
          <div className="w-2/8 h-full bg-slate-300 relative flex justify-center items-center hover:scale-110 transition-all  hover:cursor-pointer">
            <Link to="/object-detection" className="h-full">
              <img
                src={ObjectCover}
                alt="object-detection"
                className="opacity-20 h-full peer-img"
              />
            </Link>
            <h1 className="mt-auto absolute text-5xl">Object Detection</h1>
          </div>
          <div className="w-2/8 h-full bg-slate-300 relative flex justify-center items-center hover:scale-110 transition-all hover:cursor-pointer">
            <Link to="/tts" className="h-full">
              <img
                src={TTS}
                alt="object-detection"
                className="opacity-20 h-full"
              />
            </Link>
            <h1 className="mt-auto absolute text-5xl">Text-to-Speech</h1>
          </div>
          <div className="w-2/8 h-full bg-slate-300 relative flex justify-center items-center hover:scale-110 transition-all hover:cursor-pointer">
            <Link to="/stt" className="h-full">
              <img
                src={STT}
                alt="object-detection"
                className="opacity-20 h-full"
              />
            </Link>
            <h1 className="mt-auto absolute text-5xl">Speech-to-Text</h1>
          </div>
          <div className="w-2/8 h-full bg-slate-300 relative flex justify-center items-center hover:scale-110 transition-all hover:cursor-pointer">
            <Link to="/todo-list" className="h-full">
              <img
                src={ToDoList}
                alt="to-do-list"
                className="opacity-20 h-full"
              />
            </Link>
            <h1 className="mt-auto absolute text-5xl">To Do List</h1>
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
            Object detection is a computer vision technique that uses algorithms
            and neural networks to recognize and locate objects within digital
            images or videos. It can help visually impaired students identify
            and understand the objects around them, providing greater access to
            information and context.
            <br />
            <br />
            <Link
              to="/object-detection"
              className="bg-black absolute top-50 border-none text-white w-[173px] px-4 py-1 rounded-3xl shadow-2xl text-center"
            >
              Try now
            </Link>
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
              Text-to-speech is a feature that converts written text into spoken
              words, helping visually impaired students access books and
              materials. Text-to-speech is an important feature for visually
              impaired students, as it provides a valuable alternative to
              traditional reading methods and helps them access the same
              materials as their sighted peers.
              <br />
              <br />
              <Link
                to="/tts"
                className="bg-black border-none text-white px-10 py-1 rounded-3xl shadow-2xl w-[173px] text-center"
              >
                Try now
              </Link>
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
            Speech-to-text is a technology that converts spoken words into
            written text. It helps visually impaired students follow along with
            conversations and lectures, take notes, and stay organized. Examples
            include Live Caption and speech-based to-do lists.
            <br />
            <br />
            <Link
              to="/todo-list"
              className="bg-black absolute top-50 border-none text-white w-[173px] px-4 py-1 rounded-3xl shadow-2xl text-center"
            >
              Try now
            </Link>
          </p>
        </div>
      </section>

      {/* About us goes here*/}
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
            <div className="w-[350px] h-[550px] rounded-3xl bg-stone-100 flex flex-col items-center justify-around ml-2">
              {/* Image */}
              <div className="rounded-full bg-slate-50 h-[246px] w-[246px]"></div>
              {/* Description */}
              <div
                className="flex flex-col items-center justify-start text-black w-full py-10"
                style={{ background: "#FFE5BF" }}
              >
                <p className="text-2xl"> Ayush Kanaujiya </p>
                <p className="text-lg">20BCE2748</p>
              </div>
            </div>
            {/* #2 */}
            <div className="w-[350px] h-[550px] rounded-3xl bg-stone-100 flex flex-col items-center justify-around ml-2">
              {/* Image */}
              <div className="rounded-full bg-slate-50 h-[246px] w-[246px]"></div>
              {/* Description */}
              <div
                className="flex flex-col items-center justify-start text-black w-full py-10"
                style={{ background: "#FFE5BF" }}
              >
                <p className="text-2xl">Payal Maheshwari</p>
                <p className="text-lg">20BCE2759</p>
              </div>
            </div>
            {/* #3 */}
            <div className="w-[350px] h-[550px] rounded-3xl bg-stone-100 flex flex-col items-center justify-around ml-2">
              {/* Image */}
              <div className="rounded-full bg-slate-50 h-[246px] w-[246px]"></div>
              {/* Description */}
              <div
                className="flex flex-col items-center justify-start text-black w-full py-10"
                style={{ background: "#FFE5BF" }}
              >
                <p className="text-2xl">Bikash Chauhan</p>
                <p className="text-lg">20BCE2769</p>
              </div>
            </div>
            {/* #4 */}
            <div className="w-[350px] h-[550px] rounded-3xl bg-stone-100 flex flex-col items-center justify-around ml-2">
              {/* Image */}
              <div className="rounded-full bg-slate-50 h-[246px] w-[246px]"></div>
              {/* Description */}
              <div
                className="flex flex-col items-center justify-start text-black w-full py-10"
                style={{ background: "#FFE5BF" }}
              >
                <p className="text-2xl"> Harsh Rajpal </p>
                <p className="text-lg">20BCI0271</p>
              </div>
            </div>
          </div>
        </div>

        {/* About us description */}
        <div className="px-10 py-16">
          <p className="text-black text-xl">
            We're Computer Science students pursuing our B.Tech at Vellore
            Institute of Technology. Our flagship app,{" "}
            <b>
              <i>ConnectSense,</i>
            </b>
            is designed specifically for visually disabled students. With{" "}
            <b>
              <i>ConnectSense,</i>
            </b>
            students can access textbooks, take notes, can have knowledge about
            things around them all without barriers. The app features advanced
            technologies like speech-to-text, text-to-speech, and object
            detection, to ensure that students can interact with the content in
            a way that works best for them.
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
              <b>
                <i>ConnectSense</i>
              </b>
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
