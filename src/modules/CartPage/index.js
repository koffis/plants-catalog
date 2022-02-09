import "./index.scss";
import Header from "../components/Header";
import GoodsItem from "./../components/GoodsItem/index";

const CartPage = () => {
  return (
    <div>
      <Header />
      <div className="cart">
        <h3 className="cart-current">Корзина</h3>
        <div className="cart-goods">
          <GoodsItem cart={false} />
          <GoodsItem cart={false} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
