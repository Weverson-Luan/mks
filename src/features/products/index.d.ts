/**
 * Products types.
 */

export interface Products {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * User state interface.
 */
export interface IProductsState extends IRequestTrack {
  [x: string]: any;
  id?: boolean | nul;
  products: Products;
}

/**
 * User slice name.
 */
export const NAME = "products";
