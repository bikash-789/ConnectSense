import React, { useRef, useEffect, useState } from "react";
import * as cocossd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import Webcam from "react-webcam";

import FeatureTemplate from "./FeatureTemplate";
function ObjectDetection() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [object, setObject] = useState(null);
  const runCoco = async () => {
    const net = await cocossd.load();
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 5000);
  };

  // Draw rectangle box
  const drawRect = (detection, ctx) => {
    detection.forEach((prediction) => {
      // Get prediction results
      const [x, y, width, height] = prediction["bbox"];
      let text = prediction["class"];

      // Set styling
      const color = "red";
      ctx.strokeStyle = color;
      ctx.font = "20px Arial";
      ctx.fillStyle = "white";

      // Draw rectangles and text
      ctx.beginPath();
      ctx.fillText(text, x, y);
      ctx.rect(x, y, width, height);
      ctx.stroke();

      //Speech synthesis
      let utterance = new SpeechSynthesisUtterance(text);
      // speechSynthesis.speak(utterance);
      // console.log(utterance);
      text = text.toUpperCase();
      let str = text.slice(1, text.length);
      text = text.charAt(0) + str.toLowerCase();
      setObject(text);
    });
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      // e.g. const obj = await net.detect(video);

      const obj = await net.detect(video);
      //   console.log(obj);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)
      drawRect(obj, ctx);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <FeatureTemplate>
      <div className="p-4 h-3/4">
        <h1 className="text-2xl font-semibold border-l-4 border-b-4 inline-block border-l-orange-400 border-b-orange-400 px-2 text-left">
          Object Detection
        </h1>
        <div className="border my-2 p-2 h-full">
          <Webcam
            ref={webcamRef}
            muted={true}
            className="block"
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              width: 640,
              height: 480,
              borderRadius: "20px",
            }}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              width: 640,
              height: 480,
            }}
          />
        </div>

        {/* Here goes Object names */}
        <div className="h-28 flex justify-center items-start">
          <h1 className="text-2xl border-b-4 border-blue-300 inline-block border-l-4 p-2">
            {object}
          </h1>
        </div>
      </div>
    </FeatureTemplate>
  );
}

export default ObjectDetection;
