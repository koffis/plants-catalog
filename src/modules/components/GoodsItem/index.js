import { ShoppingCartOutlined } from "@ant-design/icons";
import goods from "../../../assets/images/fertilizers.png";
import { useWindow, getRem } from "../../../utils";
import styled from "styled-components";

import "./index.scss";

const GreenButton = styled.button`
  background: #078943;
  color: white;
  font-size: ${getRem(18)};
  line-height: ${getRem(18)};
  padding: ${getRem(8)} ${getRem(23)};
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const GoodsItem = ({
  image = goods,
  name = "Lorem ipsum",
  code = "1337228",
  price = "1560$",
  discount,
  cart = true,
}) => {
  const { header } = useWindow();
  return (
    <div className="goods">
      <img src={image} alt="goods" />
      {cart && header === false && (
        <ShoppingCartOutlined
          className="goods-cart"
          style={{ fontSize: 30, color: "white" }}
        />
      )}
      <div className="goods-info">
        <h4>{name}</h4>
        {header && <span>Код:{code}</span>}
      </div>
      <span className="goods-price">
        <span className="goods-price-new">{price}</span>
        {discount && <span className="goods-price-old">{discount}</span>}
        {header && <GreenButton>Купити</GreenButton>}
      </span>
    </div>
  );
};

export default GoodsItem;
