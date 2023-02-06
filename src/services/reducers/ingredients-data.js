import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from '../actions/ingresients-data';

// список всех полученных ингредиентов,
const initialState = {
  items: null,
  itemsRequest: false,
  itemsFailed: false,
  itemsLoaded: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, itemsRequest: true };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, itemsFailed: false, items: action.items, itemsRequest: false, itemsLoaded: true, };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }
    default: {
      return state;
    }
  }
};
