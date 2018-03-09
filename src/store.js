import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { loadAuthToken } from "./local-storage";
import authReducer from "./reducers/auth";
import listReducer from "./reducers/list.reducer";
import protectedDataReducer from "./reducers/protected-data";
import { setAuthToken, refreshAuthToken } from "./actions/auth";

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    list: listReducer
  }),
  compose(
    applyMiddleware(thunk, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
