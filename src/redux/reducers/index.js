import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./authReducers";
import postReducers from "./postReducers";

export default combineReducers({
  auth: authReducers,
  post: postReducers,
});
