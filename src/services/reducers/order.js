import { GET_ORDER_NUMBER_REQUEST, GET_ORDER_NUMBER_SUCCESS, GET_ORDER_NUMBER_FAILED, ADD_ORDER_ITEMS, DELETE_ORDER_INFO } from '../actions/order'

// объект созданного заказа.
const initialState = {
  orderNumber: null,
  orderNumberRequest: false,
  orderNumberFailed: false,
  orderItems: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_NUMBER_REQUEST:
      return { ...state, orderNumberRequest: true };
    case GET_ORDER_NUMBER_SUCCESS:
      return { ...state, orderNumber: action.payload, orderNumberRequest: false, orderNumberFailed: false, };
    case GET_ORDER_NUMBER_FAILED:
      return { ...state, orderNumberRequest: false, orderNumberFailed: true, };
    case ADD_ORDER_ITEMS:
      return { ...state, orderItems: action.payload };
    case DELETE_ORDER_INFO:
      return { ...state, orderItems: [], orderNumber: null, orderNumberRequest: false, orderNumberFailed: false, };
    default:
      return state;
  }
}

//функция добавления ингридиента в массив бургер-конструктора
// export const setIngredientsConstructor = (payload) => ({ type: INGREDIENTS_CONSTRUCTOR, payload })
export const addOrderitems = (payload) => ({ type: ADD_ORDER_ITEMS, payload });
export const deleteOrderInfo = () => ({ type: DELETE_ORDER_INFO })