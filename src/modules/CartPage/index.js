import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import GoodsItem from "./../components/GoodsItem/index";
import Delivery from "./delivery";
import { useWindow } from "../../utils";
import { Alert } from 'antd';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

import "./index.scss";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [success, setSuccess] = useState(false);


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

  // const listOfGoods = () => {
  //   let result = [];
  //   for (let i = 0; i < cart.length; i++) {
  //     result.push([cart[i].code, cart[i].amount]);
  //   }
  //   return Object.fromEntries(result);
  
  // }

  const listOfGoods = cart.map(item => {
    return { product_id: +item.code, quantity: item.amount}
  });

  const getSum = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += (cart[i].amount * cart[i].price);
    };
    return sum;
  };

  let price = getSum();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Зелений сад - Корзина</title>
      </Helmet>
      {success && <Alert style={{ position: "fixed", top: '50px', left: '30%' }} className="alert" message="Замовлення створене! Очікуйте дзвінка." type="success" showIcon />}
      <Header />
      <div className="cart">
        <h3 className="cart-current">Корзина</h3>
        {listOfGoods.length === 0 && <Link to='/shop' className="empty-cart">Корзина порожня</Link> }
        <div className="cart-goods">
          {cartList}
        </div>
        <h4 className="cart-sum"><b>Загальна сума:</b> {price} ГРН</h4>
        {price < 500 && <h5 style={{color: "red"}}>МІНІМАЛЬНА СУМА ЗАМОВЛЕННЯ 500 ГРН</h5>}
        <h5>Оформлення замовлення:</h5>
        <Delivery cart={listOfGoods} price={price} setSuccess={setSuccess} />
      </div>
      {header && <Footer />}
    </div>
  );
};

export default CartPage;
