import { authReducer } from "./auth";
import { eventReducer } from "./event";

export const mainReducer = {
  auth: authReducer,
  event: eventReducer
};