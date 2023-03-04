import { GET_ORDER_NUMBER_REQUEST, GET_ORDER_NUMBER_SUCCESS, GET_ORDER_NUMBER_FAILED, ADD_ORDER_ITEMS, DELETE_ORDER_INFO } from '../actions/order'
import { TOrderActions } from '../actions/order';


// объект созданного заказа.
type TinitialState = {
  orderNumber: number | null,
  orderNumberRequest: boolean,
  orderNumberFailed: boolean,
  isLoaded: boolean,
  orderItems: string[] | [],
};

const initialState: TinitialState = {
  orderNumber: null,
  orderNumberRequest: false,
  orderNumberFailed: false,
  isLoaded: false,
  orderItems: [],
};

export const orderReducer = (state = initialState, action: TOrderActions) => {
  switch (action.type) {
    case GET_ORDER_NUMBER_REQUEST:
      return { ...state, orderNumberRequest: true };
    case GET_ORDER_NUMBER_SUCCESS:
      return { ...state, orderNumber: action.payload, orderNumberRequest: false, orderNumberFailed: false, isLoaded: true };
    case GET_ORDER_NUMBER_FAILED:
      return { ...state, orderNumberRequest: false, orderNumberFailed: true, };
    case ADD_ORDER_ITEMS:
      return { ...state, orderItems: action.payload };
    case DELETE_ORDER_INFO:
      return { ...state, orderItems: [], orderNumber: null, orderNumberRequest: false, orderNumberFailed: false, isLoaded: false };
    default:
      return state;
  }
}
