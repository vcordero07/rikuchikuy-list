import Api from "../api";

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

      dispatch({ type: "GET_ITEM_REQUEST" });
      Api._getAllItem(payload.id)
        .then(payload => {
          dispatch({ type: "GET_ITEM_SUCCESS", payload });
        })
        .catch(error => dispatch({ type: "GET_ITEM_ERROR", error }));
    })
    .catch(error => dispatch({ type: "GET_LIST_ERROR", error }));
};

export const DELETE_ITEM_REQUEST = "DELETE_ITEM_REQUEST";
export const deleteItemRequest = () => ({
  type: DELETE_ITEM_REQUEST
});

export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const deleteItemSuccess = item => ({
  type: DELETE_ITEM_SUCCESS,
  item
});

export const DELETE_ITEM_ERROR = "DELETE_ITEM_ERROR";
export const deleteItemError = error => ({
  type: DELETE_ITEM_ERROR,
  error
});

export const deleteItem = (listID, itemID) => dispatch => {
  dispatch({ type: "DELETE_ITEM_REQUEST" });
  Api._deleteItem(listID, itemID)
    .then(payload => {
      dispatch({ type: "DELETE_ITEM_SUCCESS", payload });
    })
    .catch(error => dispatch({ type: "DELETE_ITEM_ERROR", error }));
};

export const UPDATE_ITEM_REQUEST = "UPDATE_ITEM_REQUEST";
export const updateItemRequest = () => ({
  type: UPDATE_ITEM_REQUEST
});

export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const updateItemSuccess = item => ({
  type: UPDATE_ITEM_SUCCESS,
  item
});

export const UPDATE_ITEM_ERROR = "UPDATE_ITEM_ERROR";
export const updateItemError = error => ({
  type: UPDATE_ITEM_ERROR,
  error
});

export const updateItem = (listID, item) => dispatch => {
  dispatch({ type: "UPDATE_ITEM_REQUEST" });
  Api._updateItem(listID, item.id, item)
    .then(payload => {
      dispatch({ type: "UPDATE_ITEM_SUCCESS", payload });
    })
    .catch(error => dispatch({ type: "UPDATE_ITEM_ERROR", error }));
};
