import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ProductPayload, ProductState } from '../types/product.interfaces';

export const getProduct = createAsyncThunk('products/getProduct', async (arg: string, { getState }) => {
  return fetch(arg)
    .then(response => {
      if (!response.ok) throw Error('Error al buscar el producto');
      return response.json() as ProductPayload;
    })
    .then(json => json);
});

const initialState: ProductState = {
  loading: true,
  error: null,
  product: {},
};

const productDetailsSlice = createSlice({
  name: 'productDetailsReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProduct.pending, (state, { payload }) => {
      return { loading: true, ...state };
    });
    builder.addCase(getProduct.rejected, (state, { payload }) => {
      return { loading: false, error: payload };
    });
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      return { product: payload };
    });
  },
});

export const selectProduct = (state: RootState) => state.productState;
export default productDetailsSlice.reducer;
