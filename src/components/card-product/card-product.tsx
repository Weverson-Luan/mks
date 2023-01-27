/**
 * IMPORTS
 */

import React from "react";
import Image from "next/image";

// styles
import {
  AlignRow,
  Container,
  DescProduct,
  Main,
  Price,
  TitleProduct,
} from "./styles";

import { ButtonPurchase } from "../buttons/button-purchase";
import { useAppSelector } from "@/redux/hooks/useAppSelector";

interface Products {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

const CardProduct = () => {
  const { products }: any = useAppSelector(state => state.reducer);

  return (
    <Container>
      {products.products.length > 0
        ? products?.products?.map((product: Products) => {
            return (
              <Main key={product.id}>
                <img src={product.photo} alt="image-product" />
                <AlignRow>
                  <TitleProduct>{product.name}</TitleProduct>
                  <Price> R${product.price}</Price>
                </AlignRow>
                <DescProduct>{product.description}</DescProduct>

                <ButtonPurchase />
              </Main>
            );
          })
        : "Carregando"}
    </Container>
  );
};

/**
 * EXPORTS
 */
export { CardProduct };
