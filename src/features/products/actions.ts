/**
 * IMPORTS
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProductsResponse, types } from "./actions.types";

/**
 * Get fetch products.
 */

const productsAll = createAsyncThunk<IProductsResponse>(
  types.GET_ALL_PRODUCTS,

  // request fetch
  async () =>
    await axios.get(
      `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC`
    )
);

/**
 * EXPORTS
 */
export { productsAll };
