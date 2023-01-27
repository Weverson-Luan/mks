import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  gap: 20px;
`;

const Main = styled.div`
  width: 218px;
  height: 285px;
  background-color: ${({ theme }) => theme.natural};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  position: relative;
  img {
    max-height: 139px;
  }
`;

const AlignRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
`;

const TitleProduct = styled.h3`
  bottom: 27.02%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
`;
const Price = styled.span`
  background-color: ${({ theme }) => theme.black_150};
  text-align: center;
  padding: 5px;
  color: ${({ theme }) => theme.natural};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  font-family: "Montserrat";
  margin-left: 10px;
`;

const DescProduct = styled.h3`
  position: absolute;
  bottom: 35px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #2c2c2c;
`;
const WrapperImage = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

/**
 * EXPORTS
 */

export {
  Container,
  Main,
  TitleProduct,
  DescProduct,
  WrapperImage,
  Price,
  AlignRow,
};
