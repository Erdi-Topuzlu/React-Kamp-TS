import { combineReducers } from "redux";
import { cartItemReducer } from "./Reducers/CartItemReducer";

export const rootReducer = combineReducers({
  cartItem: cartItemReducer,
});

