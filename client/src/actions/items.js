const url = "http://localhost:3000/api";
const api = new Api(url);

// actions
//Add item
export const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
export const addItemRequest = () => ({
  type: ADD_ITEM_REQUEST
});

export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const addItemSuccess = items => ({
  type: ADD_ITEM_SUCCESS,
  items
});

export const ADD_ITEM_ERROR = "ADD_ITEM_ERROR";
export const addItemError = error => ({
  type: ADD_ITEM_ERROR,
  error
});
//add
// export const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
// export const addItemRequest = () => ({
//   type: ADD_ITEM_REQUEST
// });
//
// export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
// export const addItemSuccess = items => ({
//   type: ADD_ITEM_SUCCESS,
//   items
// });
//
// export const ADD_ITEM_ERROR = "ADD_ITEM_ERROR";
// export const addItemError = error => ({
//   type: ADD_ITEM_ERROR,
//   error
// });

export const addItem = item => dispatch => {
  dispatch({ type: "ADD_ITEM_REQUEST" });

  api
    ._addItem(item)
    .then(payload => {
      dispatch({ type: "ADD_ITEM_SUCCESS", payload });
    })
    .catch(err => dispatch({ type: "ADD_ITEM_ERROR", error }));
};

export const deleteItem = id => dispatch => {
  dispatch({ type: "ADD_DELETE_REQUEST" });

  api
    ._deleteItem(id)
    .then(payload => {
      dispatch({ type: "ADD_DELETE_SUCCESS", payload });
    })
    .catch(err => dispatch({ type: "ADD_DELETE_ERROR", error }));
};

export const updageItem = item => dispatch => {
  dispatch({ type: "UPDATE_ITEM_REQUEST" });

  api
    ._updateItem(id)
    .then(payload => {
      dispatch({ type: "UPDATE_ITEM_SUCCESS", payload });
    })
    .catch(err => dispatch({ type: "UPDATE_ITEM_ERROR", error }));
};
