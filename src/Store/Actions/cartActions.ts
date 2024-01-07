import { productModel } from "../../Models/productModel";

export interface AddToCartAction {
  type: "ADD_TO_CART";
  payload: productModel;
}

export function addToCart(product: productModel): AddToCartAction {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
}

export interface IncreasingCartNumber {
  type: "INCREASING_CART_NUMBER";
  payload: number;
}

export const increasingCartNumber = (amount: number): IncreasingCartNumber => {
  return {
    type: "INCREASING_CART_NUMBER",
    payload: amount,
  };
};
