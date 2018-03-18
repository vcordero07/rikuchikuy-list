import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR
} from "../actions/users";

const initialState = {
  user: null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === ADD_USER_REQUEST) {
    return { ...state, loading: true, error: null };
  } else if (action.type === ADD_USER_SUCCESS) {
    return { ...state, loading: false, user: action.payload.user };
  } else if (action.type === ADD_USER_ERROR) {
    return { ...state, loading: false, error: action.error };
  }
  return state;
}
