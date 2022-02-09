import { ShoppingCartOutlined } from "@ant-design/icons";
import goods from "../../../assets/images/fertilizers.png";

import "./index.scss";

const GoodsItem = ({
  image = goods,
  name = "Lorem ipsum lorem ipsum",
  price = "1560$",
  discount,
  cart = true,
}) => {
  return (
    <div className="goods">
      <img src={image} alt="goods" />
      {cart && (
        <ShoppingCartOutlined
          className="goods-cart"
          style={{ fontSize: 30, color: "white" }}
        />
      )}
      <h4>{name}</h4>
      <span className="goods-price">
        <span className="goods-price-new">{price}</span>
        <span className="goods-price-old">{discount}</span>
      </span>
    </div>
  );
};

export default GoodsItem;
