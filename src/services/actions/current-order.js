export const ADD_CURRENT_ORDER_INFO = 'ADD_CURRENT_ORDER_INFO';
export const DELETE_CURRENT_ORDER_INFO = 'DELETE_CURRENT_ORDER_INFO';

export const addCurrentOrderInfo = (payload) => ({ type: ADD_CURRENT_ORDER_INFO, payload })
export const deleteCurrentOrderInfo = () => ({ type: DELETE_CURRENT_ORDER_INFO })
