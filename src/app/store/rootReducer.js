import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";

const appReducer = combineReducers({
  auth: authReducer,
  // Add more slices here as the project grows
  // example: exampleReducer,
});

// Root reducer with global RESET_ALL support
const rootReducer = (state, action) => {
  if (action.type === "RESET_ALL") {
    state = undefined; // triggers all slices to use initialState
  }
  return appReducer(state, action);
};

export default rootReducer;










