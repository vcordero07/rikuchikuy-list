// import { API_BASE_URL } from "../config";
// import { normalizeResponseErrors } from "./utils";
import Api from "../api";

export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const addUserRequest = () => ({
  type: ADD_USER_REQUEST
});

export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const addUserSuccess = user => ({
  type: ADD_USER_SUCCESS,
  user
});

export const ADD_USER_ERROR = "ADD_USER_ERROR";
export const addUserError = error => ({
  type: ADD_USER_ERROR,
  error
});

export const registerUser = user => dispatch => {
  console.log("registerUser user:", user);
  dispatch({ type: "ADD_USER_REQUEST" });

  Api._registerUser(user)
    .then(payload => {
      dispatch({ type: "ADD_USER_SUCCESS", payload });
    })
    .catch(error => {
      dispatch({ type: "ADD_USER_ERROR", error });
    });
  // return fetch(`${API_BASE_URL}/users`, {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json"
  //   },
  //   body: JSON.stringify(user)
  // })
  //   .then(res => normalizeResponseErrors(res))
  //   .then(res => res.json())
  //   .catch(error => {
  //     dispatch({ type: "ADD_USER_ERROR", error });
  //   });
};
