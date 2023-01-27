/**
 * IMPORTS
 */
import { IProductsState } from "./index.d";

/**
 * I am the products initial state.
 */
const initialState: IProductsState = {
  products: {
    id: 0,
    name: "",
    brand: "",
    description: "",
    photo: "",
    price: "",
    createdAt: "",
    updatedAt: "",
  },
};

/**
 * EXPORTS
 */
export { initialState };
