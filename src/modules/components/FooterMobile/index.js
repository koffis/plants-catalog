import { useSelector } from "react-redux";
import GoodsItem from "../GoodsItem";

import "../../HomePage/index.scss";

const FooterMobile = () => {
  return (
    <div>
      <h3 className="home-popular">Популярні товари</h3>
      <div className="home-popular-goods">
        <div className="home-popular-goods-items">
          <GoodsItem />
          <GoodsItem />
        </div>
      </div>
      <div className="home-newsorts">Нові сорти</div>
      <h3 className="home-popular">Сезонний вибір</h3>
      <div className="home-popular-goods">
        <div className="home-popular-goods-items">
          <GoodsItem />
          <GoodsItem />
        </div>
      </div>
      <h3 className="home-popular">Акції</h3>
      <div className="home-popular-goods">
        <div className="home-popular-goods-items">
          <GoodsItem discount="1560" />
          <GoodsItem discount="1560" />
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
