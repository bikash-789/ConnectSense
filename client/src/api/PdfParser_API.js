export const extractText = async (formData) => {
  // return fetch(process.env.REACT_APP_API_URL + "extract-text", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/pdf",
  //   },
  //   body: formData,
  // })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return err;
  //   });

  try {
    const res = await fetch(process.env.REACT_APP_API_URL + "/extract-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/pdf",
      },
      body: formData,
    });

    if (res.ok) {
      const contentType = res.headers.get("Content-Type");
      console.log(contentType);
      if (contentType && contentType.includes("application/json")) {
        const json = await res.json();
        return json;
      } else if (contentType && contentType.includes("text/plain")) {
        const text = await res.text();
        return text;
      } else {
        // handle other content types if needed
        return res;
      }
    } else {
      throw new Error("Failed to extract text from PDF");
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
