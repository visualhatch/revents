import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { reducer as ToastrReducer } from "react-redux-toastr";
import eventReducer from "./eventReducer";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";
import asyncReducer from "./asyncReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: ToastrReducer,
});

export default rootReducer;
