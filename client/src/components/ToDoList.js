import React, { useState, useEffect } from "react";
import FeatureTemplate from "./FeatureTemplate";
import Add from "../assets/images/Add.svg";
import Microphone from "../assets/images/Microphone.svg";
import Speak from "../assets/images/Speak25X20.svg";
import { addToList, getList, deleteItem } from "../api/TodoList_API";

function ToDoList() {
  const [text, setText] = useState(null);
  const [listeningText, setListeningText] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [item, setItem] = useState({
    listItem: "",
  });
  const [items, setItems] = useState([]);
  const populateItems = async () => {
    const res = await getList();
    setItems(res.items);
    let itemLists = res.items.map((item, index) => {
      return item.listItem + "\n";
    });
    itemLists = itemLists.join("");
    setText(itemLists);
  };
  useEffect(() => {
    populateItems();
  }, []);
  const handleReset = (event) => {
    setText(null);
  };
  const handleAddToList = async (event) => {
    event.preventDefault();
    let res = await addToList(item);
    if (res.error) {
      console.log(res.error);
    } else {
      setItem({
        listItem: "",
      });
      console.log("Added successfully!");
      await populateItems();
    }
  };

  // Here goes the Speech to text code
  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    setListeningText(transcript);
    setItem({
      listItem: transcript,
    });
  };

  // Handle listening event
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

  // Handle delete function goes here
  const handleDelete = async (event) => {
    console.log(event.target.id);
    const res = await deleteItem(event.target.id);
    if (res.error) {
      console.log(res.error);
    }
    await populateItems();
  };

  // Handle speak function
  const [lastUtterance, setLastUtterance] = useState(null);
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

  const handleSpeak = () => {
    const voices = synth.getVoices();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    const voice = voices.find((v) => v.name === "Daniel");
    utterance.voice = voice;
    utterance.rate = 0.9;
    if (lastUtterance && isPlaying) {
      synth.resume();
    } else {
      synth.speak(utterance);
      setisPlaying(true);
    }
    setLastUtterance(utterance);
  };

  const handleStopSpeaking = () => {
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
      handleStopSpeaking();
    } else {
      setisPlaying(true);
      handleSpeak();
    }
  };

  return (
    <FeatureTemplate>
      <div className="p-4 h-3/4">
        <h1 className="text-2xl font-semibold border-l-4 border-b-4 inline-block border-l-orange-400 border-b-orange-400 px-2 text-left">
          Todo-List
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
        <div className="flex items-center w-1/2 mx-auto">
          <div className="bg-white p-4 w-3/4 mx-2 h-[408px] overflow-scroll">
            <p>
              {listeningText == null
                ? "Press on microphone icon to start listening!"
                : listeningText}
            </p>
          </div>
          <div className="bg-white p-4 w-2/4 mx-2 h-[408px] overflow-scroll relative">
            <h1 className="font-bold border-b-2 border-b-red-500">
              Todo List{" "}
              <img
                src={Speak}
                alt="speak"
                className="inline-block mx-1 w-5 h-5"
                onClick={handlePlay}
              />
            </h1>
            <br />
            <ul style={{ listStyleType: "square" }} className="px-2">
              {items &&
                items.map((item, index) => {
                  return (
                    <li
                      key={item._id}
                      className="px-2"
                      onClick={handleDelete}
                      id={item._id}
                    >
                      {item.listItem}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <br />
        <div className="bg-white w-1/2 mx-auto flex p-4 justify-start">
          <button
            className="bg-black text-white w-24 px-2 py-1 rounded-md"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="w-24 px-2 py-1 rounded-md mx-3 text-white flex items-center justify-center bg-blue-500"
            onClick={handleAddToList}
          >
            {"Add"}
            <img src={Add} alt="button" className="inline-block ml-3" />
          </button>
        </div>
      </div>
    </FeatureTemplate>
  );
}

export default ToDoList;
