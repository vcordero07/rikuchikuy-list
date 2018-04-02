import {
  ADD_USER_REQUEST,
  addUserRequest,
  ADD_USER_SUCCESS,
  addUserSuccess,
  ADD_USER_ERROR,
  addUserError
} from "./users";

describe("addUser", () => {
  it("Should make an addUser request action", () => {
    const action = addUserRequest();
    expect(action.type).toEqual(ADD_USER_REQUEST);
  });

  it("Should return addUser success action", () => {
    const user = "test user title";
    const action = addUserSuccess(user);
    expect(action.type).toEqual(ADD_USER_SUCCESS);
    expect(action.user).toEqual(user);
  });

  it("Should return an addUser error action", () => {
    const error = "Add list error here";
    const action = addUserError(error);
    expect(action.type).toEqual(ADD_USER_ERROR);
    expect(action.error).toEqual(error);
  });
});
