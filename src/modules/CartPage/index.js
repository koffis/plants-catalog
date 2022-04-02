import { useEffect } from "react";
import Header from "../components/Header";
import GoodsItem from "./../components/GoodsItem/index";
import Delivery from "./delivery";
import "./index.scss";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className="cart">
        <h3 className="cart-current">Корзина</h3>
        <div className="cart-goods">
          <GoodsItem cart={false} />
          <GoodsItem cart={false} />
        </div>
        <h4>Загальна сума: {"3120$"}</h4>
        <Delivery />
      </div>
    </div>
  );
};

export default CartPage;
