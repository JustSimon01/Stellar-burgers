import { ADD_CURRENT_ORDER_INFO, DELETE_CURRENT_ORDER_INFO } from "../actions/current-order";

const initialState = {
  information: null
}

export const currentOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_ORDER_INFO: {
      return { information: action.payload };
    }
    case DELETE_CURRENT_ORDER_INFO: {
      return { information: null };
    }
    default: {
      return state;
    }
  }
};
