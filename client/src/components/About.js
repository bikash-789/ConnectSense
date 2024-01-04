import React from "react";
import Harsh from "../assets/images/Harsh.jpeg";
import Ayush from "../assets/images/Ayush.jpeg";
import Bikash from "../assets/images/Bikash.jpeg";
import Payal from "../assets/images/Payal.jpeg";
import Card from "./Card";
function About() {
  return (
    <section id="about-us" className="mt-6">
      <h3
        className="text-6xl text-black text-center py-3"
        style={{
          fontFamily: `'Inter', sans-serif;`,
          background: `linear-gradient(89.77deg, #E7CCA4 26.41%, #DDA348 91.21%)`,
        }}
      >
        About us
      </h3>
      {/* About us description */}
      <div className="py-10 px-[36px] lg:px-[70px]">
        <p className="text-black text-xl text-justify">
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
          detection, to ensure that students can interact with the content in a
          way that works best for them.
        </p>
      </div>
      {/* Cards container */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-evenly gap-4 w-full font-mono overflow-scroll scroll-smooth">
        <Card name={"Ayush Kanaujiya"} image={Ayush} profileLink={""} />
        <Card
          name={"Bikash Chauhan"}
          image={Bikash}
          profileLink={"https://www.linkedin.com/in/bikash-chauhan-9b5970167/"}
        />
        <Card name={"Payal Maheshwari"} image={Payal} profileLink={""} />
        <Card name={"Harsh Rajpal"} image={Harsh} profileLink={""} />
      </div>
    </section>
  );
}

export default About;
