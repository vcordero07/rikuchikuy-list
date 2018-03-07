import {
  ADD_LIST_REQUEST,
  ADD_LIST_SUCCESS,
  ADD_LIST_ERROR,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_ERROR,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR
} from "../actions/lists";

const initialState = {
  listID: null,
  listTitle: "",
  items: [],
  loading: false,
  itemLoading: false,
  error: null,
  itemID: null,
  itemTitle: "",
  itemNote: ""
};

export default function reducer(state = initialState, action) {
  if (action.type === ADD_LIST_REQUEST || action.type === GET_LIST_REQUEST) {
    return { ...state, loading: true, error: null };
  } else if (
    action.type === ADD_LIST_SUCCESS ||
    action.type === GET_LIST_SUCCESS
  ) {
    return {
      ...state,
      listTitle: action.payload.title,
      listID: action.payload.id,
      items: [],
      loading: false,
      error: null
    };
  } else if (action.type === ADD_LIST_ERROR || action.type === GET_LIST_ERROR) {
    return { ...state, loading: false, error: action.error };
  } else if (
    action.type === ADD_ITEM_REQUEST ||
    action.type === GET_ITEM_REQUEST
  ) {
    return { ...state, itemLoading: true };
  } else if (action.type === ADD_ITEM_SUCCESS) {
    return {
      ...state,
      itemTitle: action.payload.title,
      itemID: action.payload.id,
      itemNote: action.payload.note,
      items: [...state.items, action.payload],
      itemLoading: false
    };
  } else if (action.type === GET_ITEM_SUCCESS) {
    return {
      ...state,
      itemTitle: action.payload.title,
      itemID: action.payload.id,
      itemNote: action.payload.note,
      items: [...state.items, ...action.payload],
      itemLoading: false
    };
  } else if (action.type === ADD_ITEM_ERROR || action.type === GET_ITEM_ERROR) {
    return { ...state, itemLoading: false, error: action.error };
  } else if (
    action.type === UPDATE_ITEM_REQUEST ||
    action.type === DELETE_ITEM_REQUEST
  ) {
    return { ...state, loading: true, error: null };
  } else if (
    action.type === UPDATE_ITEM_SUCCESS ||
    action.type === DELETE_ITEM_SUCCESS
  ) {
    return {
      ...state,
      itemTitle: action.payload.title,
      itemID: action.payload.id,
      itemNote: action.payload.note,
      items: [...state.items, action.payload],
      itemLoading: false
    };
  } else if (
    action.type === UPDATE_ITEM_ERROR ||
    action.type === DELETE_ITEM_ERROR
  ) {
    return { ...state, itemLoading: false, error: action.error };
  }
  return state;
}

// switch (action.type){
//   case ADD_ITEM_ERROR:
//     return;
//   default:
//     return state;
// }
