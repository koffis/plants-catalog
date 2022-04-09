import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import FooterMobile from "../components/FooterMobile";
import car from "../../assets/images/car.svg";
import safe from "../../assets/images/safe.svg";
import credit from "../../assets/images/credit.svg";
import { useWindow } from "../../utils";
import { receiveHome } from "../HomePage/actions/homeActions";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import {Helmet} from "react-helmet";

import "./index.scss";
import MainBlock from "../components/MainBlock";

const GuaranteePage = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(receiveHome());
    setTimeout(() => setLoading(false), 500);
  }, []);
  const { header } = useWindow();



  return loading ? <Preloader /> : (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Зелений сад - Гарантії</title>
      </Helmet>
      <Header />
      <div className="guarantee">
        <h4>Гарантії</h4>
        <div className="guarantee-list">
          <div className="guarantee-item">
            <div className="guarantee-item-image">
              <img src={car} alt="car" />
            </div>
            <p>
              Доставка: <b>3-7 робочих дні</b>
              <br />
              Доставка по Україні: <b>Нова пошта, Укрпошта, Делівері</b>
              <br />
              Cамовивіз: <b>зі складу в м.Тернопіль</b>
            </p>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-item-image">
              <img src={safe} alt="safe" />
            </div>
            <p>
              Ми гарантуємо: <b>безпеку угоди!</b>
              <br /> Ми верифіковані <b>в Google My Business</b>
              <br /> Самовивіз: <b>з нашого складу!</b>
            </p>
          </div>
          <div className="guarantee-item">
            <div className="guarantee-item-image">
              <img src={credit} alt="credit" />
            </div>
            <p>
              Оплата: <b>на карту ПриватБанк, ОщадБанк, МоноБанк</b>
              <br />
              Готівка: <b>накладний платіж</b>
              <br />
              Ваші гроші: <b>в безпеці до підтвердження отримання товару</b>
            </p>
          </div>
        </div>
      </div>
      <div className="guarantee-videos">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OPjXx_Jzb64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/92G4mw2HYnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      {header && <MainBlock />}
      {header ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default GuaranteePage;
