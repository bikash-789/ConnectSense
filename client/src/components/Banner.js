import React from "react";
import Info from "../assets/images/info25X25.svg";

function Banner(props) {
  return (
    <div className="rounded-lg w-3/4 h-12 bg-slate-900 py-2 px-3 flex items-center text-white shadow-lg">
      <p className="text-slate-200 w-full">
        <img src={Info} alt="info" className="inline-block" />
        &nbsp; {props.message}
      </p>
    </div>
  );
}

export default Banner;
