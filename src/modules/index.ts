import {
  combineReducers,
  configureStore,
  Dispatch,
  getDefaultMiddleware,
  Middleware,
  MiddlewareAPI,
  ReducersMapObject,
  Action,
  ThunkAction,
} from '@reduxjs/toolkit';

import { CARD, cardReducer } from './card';

const rootReducer = combineReducers({
  [CARD]: cardReducer,
} as ReducersMapObject);

const persistMiddleware: Middleware = ({ getState }: MiddlewareAPI) => (
  next: Dispatch,
) => action => {
  const returnValue = next(action);

  return returnValue;
};

export type IRootState = ReturnType<typeof rootReducer>;
export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), persistMiddleware],
});
export type AppThunk = ThunkAction<void, IRootState, unknown, Action<string>>;
