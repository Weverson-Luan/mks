/**
 * IMPORTS
 */
// import { useSelector } from 'react-redux';

import { CardProduct } from "@/components/card-product";
import { useAppDispatch } from "@/redux/hooks/useAppDispatch";
import { Container, ProductsFooter, WrapperProducts } from "./styles";
import { actions as ActionsWork } from "@/features/products";
import { useEffect } from "react";

const HomeTemplate = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    handleWork();
  }, []);

  const handleWork = async () => {
    const responseWork = await dispatch(ActionsWork.productsAll());

    return responseWork;
  };

  return (
    <Container>
      <WrapperProducts>
        <CardProduct />
      </WrapperProducts>

      <ProductsFooter>
        <p> MKS sistemas © Todos os direitos reservados</p>
      </ProductsFooter>
    </Container>
  );
};

/**
 * EXPORTS
 */
export { HomeTemplate };
