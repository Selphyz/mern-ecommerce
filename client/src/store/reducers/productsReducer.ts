import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Payload, ProductInterface } from '../types/product.interfaces';

export const getProducts = createAsyncThunk('products/getProducts', async (arg: string, { getState }) => {
  return fetch(arg)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(json => json) as ProductInterface;
});

const initialState: Payload = {
  products: [
    {
      rating: 4.5,
      numReviews: 12,
      price: 89.99,
      countInStock: 10,
      _id: '5fbc2fad4e5ea8687c2675c5',
      name: 'Airpods Wireless Bluetooth Headphones',
      image: '/images/airpods.jpg',
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      brand: 'Apple',
      category: 'Electronics',
      user: '5fbc2fad4e5ea8687c2675c2',
      reviews: [],
      createdAt: '2020-11-23T21:54:53.655Z',
      updatedAt: '2020-11-23T21:54:53.655Z',
    },
    {
      rating: 4,
      numReviews: 12,
      price: 29.99,
      countInStock: 0,
      _id: '5fbc2fad4e5ea8687c2675ca',
      name: 'Amazon Echo Dot 3rd Generation',
      image: '/images/alexa.jpg',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      user: '5fbc2fad4e5ea8687c2675c2',
      reviews: [],
      updatedAt: '2020-11-23T21:54:53.655Z',
      createdAt: '2020-11-23T21:54:53.655Z',
    },
  ],
  loading: false,
};

const productsSlice = createSlice({
  name: 'productsReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, (state, { payload }) => {
      state.products = [];
      state.loading = true;
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.errors = payload;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = Object.values(payload);
      state.loading = false;
    });
  },
});

export const selectProducts = (state: RootState) => state.productState;
export default productsSlice.reducer;
