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
  getItemError
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
