import React from "react";
import Logo from "../assets/images/logo55X55.svg";
function Footer() {
  return (
    <section
      style={{ background: "#353434" }}
      className="w-full mt-10 relative bottom-0"
      id="contact-us"
    >
      {/* container */}
      <div className="flex items-center justify-evenly p-10">
        {/* Logo */}
        <div className="flex flex-col lg:flex-row items-center justify-start px-10 ">
          <img src={Logo} alt="logo" />
          <p className="px-2 text-xl">
            <b>
              <i>ConnectSense</i>
            </b>
          </p>
        </div>
        {/* Address */}
        <div className="flex flex-col items-start justify-start ">
          <p>
            <b>Address</b>
          </p>
          <br />
          <address>
            Vellore Institute of Technology <br /> Vellore, Tamil Nadu, 632014
          </address>
        </div>
      </div>
    </section>
  );
}

export default Footer;
