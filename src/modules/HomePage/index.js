import { DownOutlined } from "@ant-design/icons";
import Header from "../Header";
import GoodsItem from "../components/GoodsItem";

import "./index.scss";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home-categories">
          <div className="home-categories-item item-1">
            <span>Плодові</span>
          </div>
          <div className="home-categories-item item-2">
            <span>Декоративні</span>
          </div>
          <div className="home-categories-item item-3">
            <span>Ягідні</span>
          </div>
          <div className="home-categories-item item-4">
            <span>Екзотичні</span>
          </div>
          <div className="home-categories-item item-5">
            <span>Цибулини</span>
          </div>
          <div className="home-categories-item item-6">
            <span>Колоноподібні</span>
          </div>
        </div>
        <div className="home-fertilizers">Добрива</div>
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
    </div>
  );
};

export default HomePage;
