import { DownOutlined } from "@ant-design/icons";
import Header from "../components/Header";
import FooterMobile from "../components/FooterMobile";
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
        <FooterMobile />
      </div>
    </div>
  );
};

export default HomePage;
