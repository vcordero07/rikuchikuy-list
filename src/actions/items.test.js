import {
  ADD_ITEM_REQUEST,
  addItemRequest,
  ADD_ITEM_SUCCESS,
  addItemSuccess,
  ADD_ITEM_ERROR,
  addItemError,
  GET_ITEM_REQUEST,
  getItemRequest,
  GET_ITEM_SUCCESS,
  getItemSuccess,
  GET_ITEM_ERROR,
  getItemError,
  DELETE_ITEM_REQUEST,
  deleteItemRequest,
  DELETE_ITEM_SUCCESS,
  deleteItemSuccess,
  DELETE_ITEM_ERROR,
  deleteItemError,
  UPDATE_ITEM_REQUEST,
  updateItemRequest,
  UPDATE_ITEM_SUCCESS,
  updateItemSuccess,
  UPDATE_ITEM_ERROR,
  updateItemError
} from "./items";

describe("addItem", () => {
  it("Should make an add item request action", () => {
    const action = addItemRequest();
    expect(action.type).toEqual(ADD_ITEM_REQUEST);
  });

  it("Should return current item if action success", () => {
    const item = "fsadfasdfasdfasdfasdfasdfahsdf";
    const action = addItemSuccess(item);
    expect(action.type).toEqual(ADD_ITEM_SUCCESS);
    expect(action.item).toEqual(item);
  });

  it("Should return an addItem error action", () => {
    const error = "Add item error here";
    const action = addItemError(error);
    expect(action.type).toEqual(ADD_ITEM_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("getItem", () => {
  it("Should make an getItem request action", () => {
    const action = getItemRequest();
    expect(action.type).toEqual(GET_ITEM_REQUEST);
  });

  it("Should return getItem success action", () => {
    const item = "fsadfasdfasdfasdfasdfasdfahsdf";
    const action = getItemSuccess(item);
    expect(action.type).toEqual(GET_ITEM_SUCCESS);
    expect(action.item).toEqual(item);
  });

  it("Should return an getItem error action", () => {
    const error = "Add item error here";
    const action = getItemError(error);
    expect(action.type).toEqual(GET_ITEM_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("deleteItem", () => {
  it("Should make an deleteItem request action", () => {
    const action = deleteItemRequest();
    expect(action.type).toEqual(DELETE_ITEM_REQUEST);
  });

  it("Should return deleteItem success action", () => {
    const item = "fsadfasdfasdfasdfasdfasdfahsdf";
    const action = deleteItemSuccess(item);
    expect(action.type).toEqual(DELETE_ITEM_SUCCESS);
    expect(action.item).toEqual(item);
  });

  it("Should return an deleteItem error action", () => {
    const error = "Add item error here";
    const action = deleteItemError(error);
    expect(action.type).toEqual(DELETE_ITEM_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("updateItem", () => {
  it("Should make an updateItem request action", () => {
    const action = updateItemRequest();
    expect(action.type).toEqual(UPDATE_ITEM_REQUEST);
  });

  it("Should return updateItem success action", () => {
    const item = "fsadfasdfasdfasdfasdfasdfahsdf";
    const action = updateItemSuccess(item);
    expect(action.type).toEqual(UPDATE_ITEM_SUCCESS);
    expect(action.item).toEqual(item);
  });

  it("Should return an updateItem error action", () => {
    const error = "Add item error here";
    const action = updateItemError(error);
    expect(action.type).toEqual(UPDATE_ITEM_ERROR);
    expect(action.error).toEqual(error);
  });
});
