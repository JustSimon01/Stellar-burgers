import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED } from '../actions/ingresients-data';
import { TIngredientsDataActions } from '../actions/ingresients-data';
import { TIngredient } from '../../types/types';

// список всех полученных ингредиентов,
type TInitialState = {
  items: Array<TIngredient> | null,
  itemsRequest: boolean,
  itemsFailed: boolean,
  itemsLoaded: boolean,
}

const initialState: TInitialState = {
  items: null,
  itemsRequest: false,
  itemsFailed: false,
  itemsLoaded: false,
};

export const ingredientsReducer = (state = initialState, action: TIngredientsDataActions) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return { ...state, itemsRequest: true };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, itemsFailed: false, items: action.payload, itemsRequest: false, itemsLoaded: true, };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }
    default: {
      return state;
    }
  }
};
