import React, { useState, useEffect } from "react";
import FeatureTemplate from "./FeatureTemplate";
import Upload from "../assets/images/Upload.svg";
import Play from "../assets/images/Play.svg";
import Pause from "../assets/images/Pause.svg";
import { Link } from "react-router-dom";
import Prev from "../assets/images/back.png";

function TTS() {
  const [file, setFile] = useState(null);
  const [lastUtterance, setLastUtterance] = useState(null);
  const [text, setText] = useState("");
  const [isPlaying, setisPlaying] = useState(false);
  const [synth, setSynth] = useState(null);
  useEffect(() => {
    const initSynth = () => {
      const synth = window.speechSynthesis;
      // Get the voices available on the system
      const voices = synth.getVoices();

      // Find the voice you want to use by name and language
      const voice = voices.find((v) => v.name === "Alex" && v.lang === "en-US");

      // Set the voice for the SpeechSynthesisUtterance object
      const utterance = new SpeechSynthesisUtterance("Hello, World!");
      utterance.voice = voice;
      utterance.rate = 1;
      setSynth(synth);
    };

    if (!synth) {
      initSynth();
    }

    return () => {
      if (synth && isPlaying) {
        synth.cancel();
        setisPlaying(false);
      }
    };
  }, [synth, isPlaying]);

  const handleSpeak = () => {
    const voices = synth.getVoices();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    const voice = voices.find((v) => v.name === "Daniel");
    utterance.voice = voice;

    if (lastUtterance && isPlaying) {
      synth.resume();
    } else {
      synth.speak(utterance);
      setisPlaying(true);
    }
    setLastUtterance(utterance);
  };

  const handleStop = () => {
    if (synth && isPlaying) {
      setLastUtterance(null);
      synth.cancel();
      setisPlaying(false);
    }
  };

  const handlePlay = (event) => {
    if (isPlaying) {
      setisPlaying(false);
      // function call to stop speaking
      handleStop();
    } else {
      setisPlaying(true);
      handleSpeak();
    }
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();
    // console.log(file);
    const formData = new FormData();
    formData.append("pdfFile", file);
    formData.append("fileName", file.name);
    console.log(file.size.toString());
    fetch(process.env.REACT_APP_API_URL + "extract-text", {
      method: "POST",
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((err) => console.log(err));
  };

  const handleReset = (event) => {
    setText(null);
  };

  return (
    <FeatureTemplate>
      <div className="p-4 h-3/4">
        <div className="flex">
          <Link to="/" className="inline-block">
            <img src={Prev} width={30} height={30} alt="go back" />
          </Link>
          <p className="text-2xl font-semibold inline-block ml-3">
            Text-to-Speech
          </p>
        </div>
        <br />
        <br />
        <form onSubmit={handleFileUpload}>
          <div className="flex flex-col justify-center items-center">
            <input
              type="file"
              name="pdfFile"
              onChange={handleFileChange}
              className="outline-none bg-slate-300 p-10 text-2xl file:border-none file:bg-slate-100 file:px-4 file:text-xl rounded-lg w-11/12 lg:w-7/12"
            />
            <br />
            <button
              type="submit"
              className="bg-orange-500 w-11/12 lg:w-7/12 h-12 py-1 rounded-lg text-xl px-6 text-orange-100 items-center inline-block shadow-md"
            >
              Upload &nbsp;
              <img
                src={Upload}
                width="30px"
                alt="upload"
                className="inline-block"
              />
            </button>
          </div>

          <br />

          <div className="bg-white p-4 w-11/12 lg:w-7/12 mx-auto h-[408px] overflow-scroll">
            <p className="text-justify">
              {text == null ? "Nothing to show!" : text}
            </p>
          </div>
          <br />
          <div className="w-11/12 lg:w-7/12 mx-auto flex py-4 justify-start">
            <input
              type="reset"
              value="Reset"
              className="bg-black text-white w-24 px-2 py-1 rounded-md"
              onClick={handleReset}
            />
            <button
              className="w-24 px-2 py-1 rounded-md mx-3 text-white flex items-center justify-center"
              onClick={handlePlay}
              style={{
                backgroundColor: isPlaying
                  ? "rgb(239,68,68)"
                  : "rgb(59 130 246)",
              }}
            >
              {isPlaying ? "Pause" : "Play"}
              <img
                src={isPlaying ? Pause : Play}
                alt="button"
                className="inline-block ml-3"
              />
            </button>
          </div>
        </form>
      </div>
    </FeatureTemplate>
  );
}

export default TTS;
