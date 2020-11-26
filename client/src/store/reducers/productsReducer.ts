import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ProductsPayload } from '../types/product.interfaces';

export const getProducts = createAsyncThunk('products/getProducts', async (arg: string, { getState }) => {
  return fetch(arg)
    .then(response => {
      if (!response.ok) throw Error('Error al buscar productos');
      return response.json();
    })
    .then(json => json) as ProductsPayload;
});

const initialState: ProductsPayload = {
  loading: true,
};

const productsSlice = createSlice({
  name: 'productsReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, (state, { payload }) => {
      return { loading: true };
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      return { loading: false, error: action.error.message };
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      return { loading: false, products: Object.values(payload) };
    });
  },
});

export const selectProducts = (state: RootState) => state.productsState;
export default productsSlice.reducer;
