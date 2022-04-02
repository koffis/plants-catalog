import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import GoodsItem from "./../components/GoodsItem/index";
import Delivery from "./delivery";
import "./index.scss";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cart = useSelector(state => state.cart.cart);

  const cartList = cart.map(item => <GoodsItem
    key={item.code}
    image={item.image}
    name={item.name}
    price={item.price}
    code={item.code}
    cart={false}
  />);

  const getSum = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price;
    };
    return sum;
  };

  return (
    <div>
      <Header />
      <div className="cart">
        <h3 className="cart-current">Корзина</h3>
        <div className="cart-goods">
          {cartList}
        </div>
        <h4 className="cart-sum"><b>Загальна сума:</b> {getSum()} ГРН</h4>
        <h5>Оформлення замовлення:</h5>
        <Delivery />
      </div>
    </div>
  );
};

export default CartPage;
