import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signout } from "../api/Auth_API";
function VoiceNavigation() {
  const navigate = useNavigate();
  // Here goes the Voice Navigation
  const [transcript, setTranscript] = useState("");

  const rcg = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const { transcript } = event.results[0][0];
      setTranscript(transcript);

      // Call the appropriate navigation function based on the voice command
      switch (transcript) {
        case "go to home":
          navigateToHomePage();
          break;
        case "go to object detection":
          navigateToObjectDetection();
          break;
        case "go to text to speech":
          navigateToTTS();
          break;
        case "go to todo list":
          navigateToToDoList();
          break;
        case "sign out":
          signoutCommand();
          break;
        default:
          break;
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended");
    };
    recognition.start();
  };

  const navigateToHomePage = () => {
    // Add logic to navigate to home page
    console.log("Navigating to home page");
    return navigate("/", { replace: true });
  };

  const navigateToObjectDetection = () => {
    // Add logic to navigate to Object detection
    console.log("Opening object detection");
    return navigate("/object-detection", { replace: true });
  };

  const navigateToTTS = () => {
    // Add logic to navigate to TTS
    return navigate("/tts", { replace: true });
  };

  const navigateToToDoList = () => {
    // Add logic to navigate to STT
    return navigate("/todo-list", { replace: true });
  };

  const signoutCommand = () => {
    signout(() => {
      return navigate("/signin", { replace: true });
    });
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        rcg();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}

export default VoiceNavigation;
