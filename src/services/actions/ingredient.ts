
// объект текущего просматриваемого ингредиента,
import { TIngredient } from "../../types/types";

export const ADD_INGREDIENT_INFO: 'ADD_INGREDIENT_INFO' = 'ADD_INGREDIENT_INFO';
export const DELETE_INGREDIENT_INFO: 'DELETE_INGREDIENT_INFO' = 'DELETE_INGREDIENT_INFO';

//типизация экшенов
export interface IAddIngredientInfo {
  readonly type: typeof ADD_INGREDIENT_INFO;
  payload: TIngredient
}

export interface IDeleteIngredientInfo {
  readonly type: typeof DELETE_INGREDIENT_INFO;
}

// Объединение типов
export type TIngredientInfoActions = 
  | IAddIngredientInfo
  | IDeleteIngredientInfo
  ;

// Генераторы экшенов
export const addIngredientInfo = (payload: TIngredient): IAddIngredientInfo => ({
  type: ADD_INGREDIENT_INFO,
  payload
})

export const deleteIngredientInfo = (): IDeleteIngredientInfo => ({
  type: DELETE_INGREDIENT_INFO
})
