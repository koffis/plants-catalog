import Header from "../components/Header";
import FooterMobile from "../components/FooterMobile";
import car from "../../assets/images/car.svg";
import safe from "../../assets/images/safe.svg";
import credit from "../../assets/images/credit.svg";

import "./index.scss";

const GuaranteePage = () => {
  return (
    <div>
      <Header />
      <div className="guarantee">
        <h4>Гарантії</h4>
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
      <FooterMobile />
    </div>
  );
};

export default GuaranteePage;
