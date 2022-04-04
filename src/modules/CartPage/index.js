import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import GoodsItem from "./../components/GoodsItem/index";
import Delivery from "./delivery";
import { useWindow } from "../../utils";
import Footer from '../components/Footer';
import "./index.scss";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { header } = useWindow();
  const cart = useSelector(state => state.cart.cart);

  const cartList = cart.map(item => <GoodsItem
    key={item.code}
    image={item.image}
    name={item.name}
    price={item.price}
    code={item.code}
    amount={item.amount}
    cart={false}
    close={true}
  />);

  const listOfGoods = () => {
    let result = [];
    for (let i = 0; i < cart.length; i++) {
      result.push([cart[i].code, cart[i].amount]);
    }
    return Object.fromEntries(result);
  }

  const getSum = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += (cart[i].amount * cart[i].price);
    };
    return sum;
  };

  let price = getSum();
  let itemsList = listOfGoods();

  return (
    <div>
      <Header />
      <div className="cart">
        <h3 className="cart-current">Корзина</h3>
        <div className="cart-goods">
          {cartList}
        </div>
        <h4 className="cart-sum"><b>Загальна сума:</b> {price} ГРН</h4>
        <h5>Оформлення замовлення:</h5>
        <Delivery cart={itemsList} price={price} />
      </div>
      {header && <Footer />}
    </div>
  );
};

export default CartPage;
