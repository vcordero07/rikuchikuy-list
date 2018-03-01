export const AddList = (token, title) => dispatch => {
  return fetch(`/api/lists/add/`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json;"
    },
    body: JSON.stringify(title)
  })
    .then(res => res.json())
    .then(res => {
      console.log("dispatch");
    });

  type: "ADD_LIST", title;
};

export const UpdateList = (token, listID, title) => ({
  type: "UPDATE_LIST",
  id: listID,
  title: title
});

export const GetAllList = (token, userId) => ({
  type: "GET_ALL_LIST"
});

export const GetSingleList = (token, listID) => ({
  type: "GET_SINGLE_LIST",
  id: listID
});

export const DeleteList = (token, listID) => ({
  type: "DELETE_LIST",
  id: listID
});
