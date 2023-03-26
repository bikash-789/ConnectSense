export const extractText = async (formData) => {
  return fetch(process.env.REACT_APP_API_URL + "extract-text", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
