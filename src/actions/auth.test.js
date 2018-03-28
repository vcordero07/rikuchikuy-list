import {
  SET_AUTH_TOKEN,
  setAuthToken,
  CLEAR_AUTH,
  clearAuth,
  AUTH_REQUEST,
  authRequest,
  AUTH_SUCCESS,
  authSuccess,
  AUTH_ERROR,
  authError
} from "./auth";

describe("setAuthToken", () => {
  it("Should set the Auth token action", () => {
    const authToken = "fsadfasdfasdfasdfasdfasdfahsdf";
    const action = setAuthToken(authToken);
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken);
  });
});

describe("clearAuth", () => {
  it("Should clear the Auth token action", () => {
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);
  });
});

describe("authRequest", () => {
  it("Should make an Auth request action", () => {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
  });
});

describe("authSuccess", () => {
  it("Should return the currentUser if action success", () => {
    const currentUser = "testDemo";
    const action = authSuccess(currentUser);
    expect(action.type).toEqual(AUTH_SUCCESS);
    expect(action.currentUser).toEqual(currentUser);
  });
});

describe("authError", () => {
  it("Should return an Auth error action", () => {
    const error = "auth error here";
    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error);
  });
});
