import React from "react";
import LinkedColor from "../assets/images/LinkedColor.svg";

function Card({ name, image, profileLink }) {
  return (
    <div className="w-[350px] h-[550px] rounded-3xl bg-stone-100 flex flex-col items-center justify-around ml-2">
      {/* Image */}
      <img
        src={image}
        alt="developer"
        className="rounded-full bg-slate-50 h-[210px] w-[210px] object-cover"
        style={{ boxShadow: "0px 3px 16px 1px rgba(0, 0, 0, 0.25)" }}
      />
      {/* Description */}
      <div
        className="flex flex-col items-center justify-start text-black w-full py-10"
        style={{ background: "#FFE5BF" }}
      >
        <p className="text-2xl text-black"> {"<" + `${name}` + "/>"}</p>
        <br />
        <a href={profileLink} target="_blank" rel="noreferrer">
          <img
            src={LinkedColor}
            alt="linked-in"
            className="w-[35px] h-[35px]"
          />
        </a>
      </div>
    </div>
  );
}

export default Card;

// https://www.linkedin.com/in/harsh-rajpal/
