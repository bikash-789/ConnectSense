export const addToList = async (listItem) => {
  return fetch(process.env.REACT_APP_API_URL + "/addToList", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(listItem),
  });
};

export const getList = async () => {
  return fetch(process.env.REACT_APP_API_URL + "/getList", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export const deleteItem = async (id) => {
  return fetch(process.env.REACT_APP_API_URL + `/deleteItem/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res)
    .catch((err) => {
      console.log(err);
    });
};
