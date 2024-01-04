import React from "react";
import ObjectCover from "../assets/images/object-detection.png";
import ToDoList from "../assets/images/to-do-list.png";
import TTS from "../assets/images/TTS.png";
import STT from "../assets/images/STT.webp";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section
      id="features"
      className=""
      style={{ fontFamily: `'Inter', sans-serif` }}
    >
      <div className="flex flex-col md:flex-row w-full items-center text-black h-full overflow-hidden">
        <div className="md:w-3/12 md:h-[712px] bg-slate-300 flex justify-center items-center hover:scale-110 transition-all  hover:cursor-pointer">
          <Link to="/object-detection" className="h-full">
            <img
              src={ObjectCover}
              alt="object-detection"
              className="opacity-20 h-full peer-img"
            />
          </Link>
          <h1 className="mt-auto absolute text-2xl lg:text-5xl font-bold">
            Object Detection
          </h1>
        </div>
        <div className="md:w-3/12 w-full md:h-[712px] bg-slate-300 relative flex justify-center items-center hover:scale-110 transition-all hover:cursor-pointer">
          <Link to="/tts" className="h-full">
            <img
              src={TTS}
              alt="object-detection"
              className="opacity-20 h-full"
            />
          </Link>
          <h1 className="mt-auto absolute text-2xl lg:text-5xl font-bold">
            Text-to-Speech
          </h1>
        </div>
        <div className="md:w-3/12 w-full md:h-[712px] bg-slate-300 relative flex justify-center items-center hover:scale-110 transition-all hover:cursor-pointer">
          <Link to="/stt" className="h-full">
            <img
              src={STT}
              alt="object-detection"
              className="opacity-20 h-full"
            />
          </Link>
          <h1 className="mt-auto absolute text-2xl lg:text-5xl font-bold">
            Speech-to-Text
          </h1>
        </div>
        <div className="md:w-3/12 w-full md:h-[712px] bg-slate-300 relative flex justify-center items-center hover:scale-110 transition-all hover:cursor-pointer">
          <Link to="/todo-list" className="h-full">
            <img
              src={ToDoList}
              alt="to-do-list"
              className="opacity-20 h-full"
            />
          </Link>
          <h1 className="mt-auto absolute text-2xl lg:text-5xl font-bold">
            To Do List
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
