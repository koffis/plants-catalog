import GoodsItem from "../GoodsItem";
import "./index.scss";

const GoodsList = ({ title, goods }) => {
  const renderList = goods.map((good) => (
    <GoodsItem
      image={good.image}
      name={good.name}
      code={good.code}
      price={good.price}
      discount={good.discount !== good.price && good.discount}
      cart={good.cart}
    />
  ));
  return (
    <div className="goods-list">
      <h4 className="goods-list-title">{title}</h4>
      <div className="goods-list-block">{renderList}</div>
    </div>
  );
};

export default GoodsList;
