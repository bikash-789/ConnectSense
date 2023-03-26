import React, { useState } from "react";
import FeatureTemplate from "./FeatureTemplate";
import { extractText } from "../api/PdfParser_API";

function TTS() {
  const [values, setValues] = useState({
    formData: new FormData(),
  });
  const { formData } = values;
  const [text, setText] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    formData.set("pdfFile", file);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const textResponse = await extractText(formData);
    setText(textResponse);
  };

  return (
    <FeatureTemplate>
      <div className="p-4 h-3/4">
        <h1 className="text-2xl font-semibold border-l-4 border-b-4 inline-block border-l-orange-400 border-b-orange-400 px-2 text-left">
          Text-to-Speech
        </h1>
        <br />
        <br />
        <form onSubmit={handleFileUpload}>
          <input type="file" name="pdfFile" onChange={handleFileChange} />
          <br />
          <button type="submit" className="bg-orange-300 px-3 py-1">
            Upload
          </button>
        </form>
        <div>{text}</div>
      </div>
    </FeatureTemplate>
  );
}

export default TTS;
