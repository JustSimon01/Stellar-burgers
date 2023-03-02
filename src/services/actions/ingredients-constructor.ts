// список всех ингредиентов в текущем конструкторе бургера,
import { TIngredient } from "../../types/types";

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const INGREDIENT_MOVE: 'INGREDIENT_MOVE' = 'INGREDIENT_MOVE';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const ADD_BUNS: 'ADD_BUNS' = 'ADD_BUNS';
export const DELETE_ALL_INGREDIENTS: 'DELETE_ALL_INGREDIENTS' = 'DELETE_ALL_INGREDIENTS';

//типизация экшенов
export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  payload: TIngredient
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  payload: string
}

type IngredientOrder = {
  dragIndex: number,
  hoverIndex: number
};

export interface IIngredientMove {
  readonly type: typeof INGREDIENT_MOVE;
  payload: IngredientOrder
}

export interface IAddBuns {
  readonly type: typeof ADD_BUNS;
  payload: Array<TIngredient>
}

export interface IDeleteAllIngredient {
  readonly type: typeof DELETE_ALL_INGREDIENTS;
}

// Объединение типов
export type TIngrediensConstructorActions = 
  | IAddIngredient
  | IDeleteIngredient
  | IIngredientMove
  | IAddBuns
  | IDeleteAllIngredient
  ;

// Генераторы экшенов
export const addIngredientInConstructor = (payload: TIngredient): IAddIngredient => ({
  type: ADD_INGREDIENT,
  payload
});

export const deleteIngredient = (payload: string): IDeleteIngredient => ({
  type: DELETE_INGREDIENT,
  payload
});

export const moveIngredientInConstructor = (payload: IngredientOrder): IIngredientMove => ({
  type: INGREDIENT_MOVE,
  payload
});

export const addBunsInConstructor = (payload: Array<TIngredient>): IAddBuns => ({
  type: ADD_BUNS,
  payload
});

export const deleteAllIngredients = (): IDeleteAllIngredient => ({
  type: DELETE_ALL_INGREDIENTS
});

