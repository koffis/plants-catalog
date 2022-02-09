import { DownOutlined } from "@ant-design/icons";
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
        <div className="home-popular-goods-more">
          Показати ще <DownOutlined />
        </div>
      </div>
      <div className="home-newsorts">Нові сорти</div>
      <h3 className="home-popular">Рекомендовані</h3>
      <div className="home-popular-goods">
        <div className="home-popular-goods-items">
          <GoodsItem />
          <GoodsItem />
        </div>
        <div className="home-popular-goods-more">
          Показати ще <DownOutlined />
        </div>
      </div>
      <h3 className="home-popular">Знижки</h3>
      <div className="home-popular-goods">
        <div className="home-popular-goods-items">
          <GoodsItem discount="1560" />
          <GoodsItem discount="1560" />
        </div>
        <div className="home-popular-goods-more">
          Показати ще <DownOutlined />
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
