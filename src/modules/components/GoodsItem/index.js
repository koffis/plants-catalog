import { useEffect, useState } from "react";
import { ShoppingCartOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import goods from "../../../assets/images/fertilizers.png";
import { useWindow, getRem } from "../../../utils";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteCartItem, changeItemAmount, addCartItem } from "../../CartPage/actions/cartActions";
import { InputNumber } from "antd";


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
  amount,
  cart = true,
  close = false
}) => {
  const { header } = useWindow();
  const dispatch = useDispatch();
  const [value, setValue] = useState(amount);

  const handleAmount = (event) => {
    dispatch(changeItemAmount({ code, amount: event }))
  }

  return (
    <div className="goods">
      <Link to={{ pathname: "/goods", state: { code } }}>
        <img src={image} alt="goods" />
      </Link>
      {close && <CloseOutlined
        className="goods-cart"
        style={{ fontSize: 30, color: "red" }}
        onClick={() => {
          dispatch(deleteCartItem(code))
        }}
      />}
      {cart && header === false && (
        <Link to="/goods">
          <ShoppingCartOutlined
            className="goods-cart"
            style={{ fontSize: 30, color: "#3c9806" }}
          />
        </Link>
      )}
      {close && <InputNumber min={1} value={amount} onChange={handleAmount} />}
      <div className="goods-info">
        <h4>{name}</h4>
        {header && <span>Код:{code}</span>}
      </div>
      <span className="goods-price">
        <span className="goods-price-new">{price} ГРН</span>
        {discount && <span className="goods-price-old">{discount} ГРН</span>}
        {cart && header && (
          <GreenButton>Купити</GreenButton>
        )}
      </span>
    </div>
  );
};

export default GoodsItem;
