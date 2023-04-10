import React, { useState, useEffect } from "react";
import FeatureTemplate from "./FeatureTemplate";
import Microphone from "../assets/images/Microphone.svg";

function STT() {
  const [listeningText, setListeningText] = useState(null);
  const [isListening, setIsListening] = useState(false);

  const handleReset = (event) => {
    const textBox = document.getElementById("text-box");
    textBox.innerHTML = null;
  };

  // Here goes the Speech to text code
  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    setListeningText(transcript);
    const textBox = document.getElementById("text-box");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = " ↳ " + transcript;
    textBox.appendChild(paragraph);
  };

  // handle start
  const handleStart = () => {
    setIsListening(true);
    recognition.start();
  };
  const handleStop = () => {
    setIsListening(false);
    recognition.abort();
  };

  const handleListening = () => {
    if (!isListening) {
      handleStart();
    } else {
      handleStop();
    }
  };

  // Handle speak function
  const [isPlaying, setisPlaying] = useState(false);
  const [synth, setSynth] = useState(null);
  useEffect(() => {
    const initSynth = () => {
      const synth = window.speechSynthesis;
      // Get the voices available on the system
      const voices = synth.getVoices();

      // Find the voice you want to use by name and language
      const voice = voices.find((v) => v.name === "Daniel");

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
  return (
    <FeatureTemplate>
      <div className="p-4 h-3/4">
        <h1 className="text-2xl font-semibold border-l-4 border-b-4 inline-block border-l-orange-400 border-b-orange-400 px-2 text-left">
          Live Caption
        </h1>
        <br />
        <br />
        <div className="flex items-center justify-center microphone-button">
          <button
            className={`bg-orange-500 w-28 h-28 py-1 rounded-full text-xl px-6 text-orange-100 items-center inline-block shadow-lg`}
            onClick={handleListening}
            style={
              isListening
                ? {
                    transform: "scale(1.1)",
                    transition: "transform 0.2s ease-in-out",
                  }
                : {
                    transform: "scale(1)",
                    transition: "transform 0.2s ease-in-out",
                  }
            }
          >
            <img
              src={Microphone}
              alt="microphone"
              width="35px"
              className="inline-block"
            />
          </button>
        </div>

        <br />
        <div className="flex items-center w-full mx-auto">
          <div
            className="bg-white p-4 w-1/2 mx-auto h-[408px] overflow-scroll"
            id="text-box"
          ></div>
        </div>
        <br />
        <div className="bg-white w-1/2 mx-auto flex p-4 justify-start">
          <button
            className="bg-black text-white w-24 px-2 py-1 rounded-md"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </FeatureTemplate>
  );
}

export default STT;
