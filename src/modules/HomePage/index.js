import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";
import { useWindow } from "../../utils";
import MainBlock from "../components/MainBlock";
import Slider from "../components/Slider";

import "./index.scss";

const HomePage = () => {
  const { header } = useWindow();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          {header ? (
            <div className="home-categories-item item-6">
              <span>Добрива</span>
            </div>
          ) : null}
        </div>
        {header ? null : <div className="home-fertilizers">Добрива</div>}
        {header && <Slider />}
        {header && <MainBlock />}
        {header ? <Footer /> : <FooterMobile />}
      </div>
    </div>
  );
};

export default HomePage;
