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
  reviews?: any[];
  createdAt?: string;
  updatedAt?: string;
}
export interface Payload {
  loading?: boolean;
  errors?: any;
  products?: ProductInterface[];
}
// export interface ProductArray extends Array<ProductInterface> {}
export interface ProductList {
  [index: number]: ProductInterface;
}
export interface ProductPayload extends ProductList {
  loading: boolean;
  error: any;
}
export interface Extras {
  loading: boolean;
  errors: any;
}
