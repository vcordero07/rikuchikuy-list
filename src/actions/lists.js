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
