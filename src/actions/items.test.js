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

describe("addItemRequest", () => {
  it("Should make an add item request action", () => {
    const action = addItemRequest();
    expect(action.type).toEqual(ADD_ITEM_REQUEST);
  });
});
