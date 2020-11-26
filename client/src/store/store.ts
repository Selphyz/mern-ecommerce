import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { ProductReducer, ProductDetailsReducer } from './reducers';

// const reducer = combineReducers({
//   productsState: ProductReducer,
//   productState: ProductDetailsReducer,
// });
export const store = configureStore({
  reducer: {
    productsState: ProductReducer,
    productState: ProductDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
