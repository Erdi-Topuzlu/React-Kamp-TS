import { IncreasingCartNumber } from '../Actions/cartActions';
import { RootState } from '../ConfigureStore';
import { CartItemState, initialCartState } from '../InitialValues/cartItems';


export const getCartItemNumber = (state: RootState) => state.cartItem.value

export function cartItemReducer(state: CartItemState = initialCartState, action: IncreasingCartNumber): CartItemState {
  switch (action.type) {
    case 'INCREASING_CART_NUMBER':
      return {
        ...state,
        value: (state.value) + action.payload,
      };

    default:
      return state;
  }
}
