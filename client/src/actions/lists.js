import Api from "../api";

// actions
export const ADD_LIST_REQUEST = "ADD_LIST_REQUEST";
export const addListRequest = () => ({
  type: ADD_LIST_REQUEST
});

export const ADD_LIST_SUCCESS = "ADD_LIST_SUCCESS";
export const addListSuccess = title => ({
  type: ADD_LIST_SUCCESS,
  title
});

export const ADD_LIST_ERROR = "ADD_LIST_ERROR";
export const addListError = error => ({
  type: ADD_LIST_ERROR,
  error
});

export const addList = title => dispatch => {
  dispatch({ type: "ADD_LIST_REQUEST" });

  Api._addList(title)
    .then(payload => {
      dispatch({ type: "ADD_LIST_SUCCESS", payload });
    })
    .catch(error => dispatch({ type: "ADD_LIST_ERROR", error }));
};

export const GET_LIST_REQUEST = "GET_LIST_REQUEST";
export const getListRequest = () => ({
  type: GET_LIST_REQUEST
});
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const getListSuccess = title => ({
  type: GET_LIST_SUCCESS,
  title
});
export const GET_LIST_ERROR = "GET_LIST_ERROR";
export const getListError = error => ({
  type: GET_LIST_ERROR,
  error
});

export const getList = () => dispatch => {
  dispatch({ type: "GET_LIST_REQUEST" });

  Api._getList()
    .then(payload => {
      dispatch({ type: "GET_LIST_SUCCESS", payload });
    })
    .catch(error => dispatch({ type: "GET_LIST_ERROR", error }));
};

export const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
export const addItemRequest = () => ({
  type: ADD_ITEM_REQUEST
});
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const addItemSuccess = item => ({
  type: ADD_ITEM_SUCCESS,
  item
});
export const ADD_ITEM_ERROR = "ADD_ITEM_ERROR";
export const addItemError = error => ({
  type: ADD_ITEM_ERROR,
  error
});

export const addItem = (listID, item) => dispatch => {
  dispatch({ type: "ADD_ITEM_REQUEST" });
  Api._addItem(listID, item)
    .then(payload => {
      dispatch({ type: "ADD_ITEM_SUCCESS", payload });
    })
    .catch(error => dispatch({ type: "ADD_ITEM_ERROR", error }));
};

export const GET_ITEM_REQUEST = "GET_ITEM_REQUEST";
export const getItemRequest = () => ({
  type: GET_ITEM_REQUEST
});
export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const getItemSuccess = item => ({
  type: GET_ITEM_SUCCESS,
  item
});
export const GET_ITEM_ERROR = "GET_ITEM_ERROR";
export const getItemError = error => ({
  type: GET_ITEM_ERROR,
  error
});

export const getItems = listID => dispatch => {
  console.log("getItem listID:", listID);
  dispatch({ type: "GET_ITEM_REQUEST" });
  Api._getAllItem(listID)
    .then(payload => {
      dispatch({ type: "GET_ITEM_SUCCESS", payload });
    })
    .catch(error => dispatch({ type: "GET_ITEM_ERROR", error }));
};

export const getListAndItems = () => dispatch => {
  dispatch({ type: "GET_LIST_REQUEST" });

  Api._getList()
    .then(payload => {
      dispatch({ type: "GET_LIST_SUCCESS", payload });
      //getItems changed listId to payload.id
      console.log("getItem listID:", payload.id);
      dispatch({ type: "GET_ITEM_REQUEST" });
      Api._getAllItem(payload.id)
        .then(payload => {
          dispatch({ type: "GET_ITEM_SUCCESS", payload });
        })
        .catch(error => dispatch({ type: "GET_ITEM_ERROR", error }));
    })
    .catch(error => dispatch({ type: "GET_LIST_ERROR", error }));
};

// export const ADD_LIST_ERROR = "GET_LIST_REQUEST";
//
// export const updateList = (token, listID, title) => ({
//   // return fetch(`/api/lists/${listID}/`, {
//   //   method: "PUT",
//   //   headers: {
//   //     Authorization: `Bearer ${token}`,
//   //     "Content-type": "application/json;"
//   //   },
//   //   body: JSON.stringify(title)
//   // })
//   //   .then(res => res.json())
//   //   .then(res => {
//   //     console.log("dispatch");
//   //   });
//   type: "UPDATE_LIST",
//   id: listID,
//   title: title
// });
//
// export const getAllList = (token, userId) => ({
//   // return fetch(`/api/lists/`, {
//   //   method: "GET",
//   //   headers: {
//   //     Authorization: `Bearer ${token}`,
//   //     "Content-type": "application/json;"
//   //   },
//   //   body: JSON.stringify(title)
//   // })
//   //   .then(res => res.json())
//   //   .then(res => {
//   //     console.log("dispatch");
//   //   });
//   type: "GET_ALL_LIST"
// });
//
// export const getSingleList = (token, listID) => ({
//   // return fetch(`/api/lists/${listID}`, {
//   //   method: "GET",
//   //   headers: {
//   //     Authorization: `Bearer ${token}`,
//   //     "Content-type": "application/json;"
//   //   },
//   //   body: JSON.stringify(title)
//   // })
//   //   .then(res => res.json())
//   //   .then(res => {
//   //     console.log("dispatch");
//   //   });
//   type: "GET_SINGLE_LIST",
//   id: listID
// });
//
// export const deleteList = (token, listID) => ({
//   // return fetch(`/api/lists/${listID}`, {
//   //   method: "DELETE",
//   //   headers: {
//   //     Authorization: `Bearer ${token}`,
//   //     "Content-type": "application/json;"
//   //   },
//   //   body: JSON.stringify(title)
//   // })
//   //   .then(res => res.json())
//   //   .then(res => {
//   //     console.log("dispatch");
//   //   });
//   type: "DELETE_LIST",
//   id: listID
// });
