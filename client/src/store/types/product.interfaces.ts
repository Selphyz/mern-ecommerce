export interface ProductInterface {
  rating?: number;
  numReviews?: number;
  price?: number;
  countInStock?: number;
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
  brand?: string;
  category?: string;
  user?: string;
  reviews?: any;
  createdAt?: string;
  updatedAt?: string;
}
export interface ProductsPayload {
  loading?: boolean;
  error?: any;
  products?: ProductInterface[];
}
export interface ProductPayload extends ProductInterface {
  loading?: boolean;
  error?: any;
}
export interface ProductState {
  loading?: boolean;
  error?: any;
  product?: ProductInterface;
}

// export interface ProductArray extends Array<ProductInterface> {}
// export interface ProductList {
//   [index: number]: ProductInterface;
// }
