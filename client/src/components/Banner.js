import React from "react";
import Info from "../assets/images/info25X25.svg";
import Cross from "../assets/images/cross20X20.svg";

function Banner(props) {
  return (
    <div className="rounded-lg w-3/4 h-12 bg-slate-900 py-2 px-3 flex items-center text-white shadow-lg">
      <p className="text-slate-200 w-full">
        <img src={Info} alt="info" className="inline-block" />
        &nbsp; {props.message}
        <img
          src={Cross}
          alt="cross"
          className="inline-block relative float-right cursor-pointer"
          onClick={(e) => {
            e.target.parentNode.parentNode.style.display = "none";
          }}
        />
      </p>
    </div>
  );
}

export default Banner;
