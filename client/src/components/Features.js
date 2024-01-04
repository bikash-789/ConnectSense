import React from "react";
import ObjectDetection from "../assets/images/ObjectDetection.png";
import TTSF from "../assets/images/tts-feat.png";
import STTF from "../assets/images/stt-feat.png";
import FeatureCard from "./FeatureCard";
function Features() {
  return (
    <section className="flex flex-col" id="features">
      <h3
        className="text-6xl text-black text-center py-3"
        style={{
          fontFamily: `'Tillana', cursive;`,
          background: `linear-gradient(89.77deg, #E7CCA4 26.41%, #DDA348 91.21%)`,
        }}
      >
        Features
      </h3>
      {/* Here goes Object detection */}
      <FeatureCard
        title="Object Detection"
        description="Object detection is a computer vision technique that uses
              algorithms and neural networks to recognize and locate objects
              within digital images or videos. It can help visually impaired
              students identify and understand the objects around them,
              providing greater access to information and context."
        link={"/object-detection"}
        image={ObjectDetection}
      />
      <br />
      <hr className="w-11/12 mx-auto" />
      {/* Here goes Text-to-speech */}
      <FeatureCard
        title="Text-to-Speech"
        description="Text-to-speech is a feature that converts written text into spoken
              words, helping visually impaired students access books and
              materials. Text-to-speech is an important feature for visually
              impaired students, as it provides a valuable alternative to
              traditional reading methods and helps them access the same
              materials as their sighted peers."
        link={"/tts"}
        image={TTSF}
      />
      <br />
      <hr className="w-11/12 mx-auto" />
      {/* Here goes Speech-to-text */}
      <FeatureCard
        title={"Speech-to-Text"}
        description="Speech-to-text is a technology that converts spoken words into
              written text. It helps visually impaired students follow along
              with conversations and lectures, take notes, and stay organized.
              Examples include Live Caption and speech-based to-do lists."
        link={"/todo-list"}
        image={STTF}
      />
    </section>
  );
}

export default Features;
