import {
  ADD_LIST_REQUEST,
  addListRequest,
  ADD_LIST_SUCCESS,
  addListSuccess,
  ADD_LIST_ERROR,
  addListError,
  GET_LIST_REQUEST,
  getListRequest,
  GET_LIST_SUCCESS,
  getListSuccess,
  GET_LIST_ERROR,
  getListError
} from "./lists";

describe("addList", () => {
  it("Should make an addList request action", () => {
    const action = addListRequest();
    expect(action.type).toEqual(ADD_LIST_REQUEST);
  });

  it("Should return addList success action", () => {
    const title = "test list title";
    const action = addListSuccess(title);
    expect(action.type).toEqual(ADD_LIST_SUCCESS);
    expect(action.title).toEqual(title);
  });

  it("Should return an addList error action", () => {
    const error = "Add list error here";
    const action = addListError(error);
    expect(action.type).toEqual(ADD_LIST_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("getList", () => {
  it("Should make an getList request action", () => {
    const action = getListRequest();
    expect(action.type).toEqual(GET_LIST_REQUEST);
  });

  it("Should return getList success action", () => {
    const title = "test list title";
    const action = getListSuccess(title);
    expect(action.type).toEqual(GET_LIST_SUCCESS);
    expect(action.title).toEqual(title);
  });

  it("Should return an getList error action", () => {
    const error = "Add list error here";
    const action = getListError(error);
    expect(action.type).toEqual(GET_LIST_ERROR);
    expect(action.error).toEqual(error);
  });
});
