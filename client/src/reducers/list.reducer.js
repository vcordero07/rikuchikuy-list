import {
  ADD_LIST_REQUEST,
  ADD_LIST_SUCCESS,
  ADD_LIST_ERROR,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR
  // ADD_ITEM_REQUEST,
  // ADD_ITEM_SUCCESS,
  // ADD_ITEM_ERROR
} from "../actions/lists";

const initialState = {
  id: null,
  title: "",
  items: [],
  loading: false,
  itemLoading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === ADD_LIST_REQUEST || action.type === GET_LIST_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (
    action.type === ADD_LIST_SUCCESS ||
    action.type === GET_LIST_SUCCESS
  ) {
    return {
      ...state,
      title: action.payload.title,
      id: action.payload.id,
      items: [],
      loading: false,
      error: null
    };
  } else if (action.type === ADD_LIST_ERROR || action.type === GET_LIST_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }

  // } else if (action.type === ADD_ITEM_REQUEST) {
  //   return {
  //     ...state,
  //     itemLoading: true
  //   };
  // } else if (action.type === ADD_ITEM_SUCCESS) {
  //   return {
  //     ...state,
  //     items: [...state.items, action.items],
  //     itemLoading: false
  //   };
  // } else if (action.type === ADD_ITEM_ERROR) {
  //   return {
  //     ...state,
  //     itemLoading: false,
  //     error: action.error
  //   };
  // }
  return state;
}
