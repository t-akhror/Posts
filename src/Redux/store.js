import {  combineReducers, createStore } from "redux";
import { commentReducer } from "./commentReducer";
import { userReducer } from "./userReducer";
import { postReducer } from "./postReducer";

export const store=createStore(combineReducers({userReducer,postReducer,commentReducer}));