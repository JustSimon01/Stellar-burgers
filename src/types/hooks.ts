import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import {AppDispatch, AppThunk, RootState } from './index';

// Теперь этот хук знает структуру хранилища
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

// Хук не даст отправить экшен, который ему не знаком
// варинт в одну строку почему-то выдает ошибку "export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>(); "
type AppDispatchFunc = () => AppDispatch | AppThunk;
export const useDispatch: AppDispatchFunc = dispatchHook;

