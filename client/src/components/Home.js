import React from "react";
import Footer from "./Footer";
import About from "./About";
import Features from "./Features";
import Dashboard from "./Dashboard";
import Hero from "./Hero";

function Home() {
  const { SpeechSynthesisUtterance, speechSynthesis } = window;
  const text =
    "Welcome to ConnectSense application. We are here to help you with following features like Object Detection, Text-to-Speech, where you can listen to book contents which are in Text and Speech-to-text which will help like live caption. You can see what other person are speaking around you. To navigate to any page, just press the space bar and start speaking the command. The command to navigate to each page goes like this: \n 1. Go to 'home' for navigating to homepage \n 2. Go to 'object detection' for navigating to object detection. \n 3. Go to 'to do list' for navigating to To-do list app \n 4. Go to 'text to speech' for navigating to Text-to-Speech. \n 5. 'sign out' for signning out. ";

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
      <Hero />
      {/* Dashboard goes here! */}
      <Dashboard />
      {/* Features explanation goes here*/}
      <Features />
      {/* About us goes here*/}
      <About />
      {/* Footer / Contact us goes here*/}
      <Footer />
    </article>
  );
}

export default Home;
