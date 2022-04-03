import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  LeftOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  CarOutlined,
  CreditCardOutlined,
  SafetyCertificateOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { InputNumber, Button } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import MainBlock from "../components/MainBlock";
import ImageGallery from "react-image-gallery";
import GoodsItem from "../components/GoodsItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useWindow } from "../../utils";
import { getRem } from "../../utils";
import car from "../../assets/images/car.svg";
import safe from "../../assets/images/safe.svg";
import credit from "../../assets/images/credit.svg";
import { addCartItem } from "../CartPage/actions/cartActions";
import { Alert } from 'antd';

import "./index.scss";

const RedButton = styled(Button)`
  background: #ce1c34;
  color: white;
  font-size: ${getRem(18)};
  margin-bottom: ${getRem(15)};
  margin-top: ${getRem(15)};
  padding-bottom: ${getRem(12)};
  height: ${getRem(40)};
`;

const GreenButton = styled(Button)`
  background: #1cce2e;
  color: white;
  font-size: ${getRem(18)};
  height: ${getRem(40)};
  margin-bottom: ${getRem(15)};
`;

const GoodPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  let history = useHistory();
  const { header } = useWindow();
  const [value, setValue] = useState(1);

  const { images, name, price, code, description } = useSelector(state => state.goods);

  return (
    <div>
      <Header />
      {header ? (
        <div className="goodPage-desktop">
          <h3>{name}</h3>
          <div className="goodPage-desktop-main">
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              thumbnailPosition="left"
              showNav={false}
              slideOnThumbnailOver={true}
            />
            <div className="goodPage-desktop-main-info">
              <h4>{price} ГРН</h4>
              <p>Код : {code}</p>
              <span>
                <InputNumber min={1} value={value} onChange={setValue} />
                <button onClick={() => dispatch(addCartItem({
                  image: images[0].original,
                  name,
                  code,
                  price,
                  amount: value
                }))}>Купити</button>
                <hr />
              </span>
              <div className="goodPage-desktop-main-info-item">
                <div className="goodPage-desktop-main-info-item-image">
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
              <div className="goodPage-desktop-main-info-item">
                <div className="goodPage-desktop-main-info-item-image">
                  <img src={safe} alt="safe" />
                </div>
                <p>
                  Ми гарантуємо: <b>безпеку угоди!</b>
                  <br /> Ми верифіковані <b>в Google My Business</b>
                  <br /> Самовивіз: <b>з нашого складу!</b>
                </p>
              </div>
              <div className="goodPage-desktop-main-info-item">
                <div className="goodPage-desktop-main-info-item-image">
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
          <div className="goodPage-desktop-description">
            <h4>Опис товару</h4>
            <p>{description}</p>
          </div>
          <MainBlock isGood={true} />
          <Footer />
        </div>
      ) : (
        <div className="goodPage">
          <span onClick={history.goBack} className="goodPage-back">
            <LeftOutlined /> Назад
          </span>
          <h4 className="goodPage-name">{name}</h4>
          <span className="goodPage-info">
            <span className="goodPage-info-code">Код: {code}</span>
            <span className="goodPage-info-price">{price} ГРН</span>
          </span>
          <div className="goodPage-goods">
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              thumbnailPosition="left"
            />
            <RedButton type="primary" onClick={() => dispatch(addCartItem({
              image: images[0].original,
              name,
              code,
              price
            }))}>
              <ShoppingCartOutlined /> Додати в корзину
            </RedButton>
            {/* <GreenButton type="primary">Купити зараз</GreenButton> */}
          </div>
          <hr />
          <h5 className="goodPage-description">
            <ShoppingOutlined className="goodPage-description-icon" />
            Опис товару
          </h5>
          <p className="goodPage-text">
            {description}
          </p>
          <hr />
          <h5 className="goodPage-delivery">
            <CarOutlined className="goodPage-delivery-icon" />
            Доставка
          </h5>
          <p className="goodPage-delivery-description">
            Доставка: <b>3-7 робочих дні</b>
            <br />
            Доставка по Україні: <b>Нова пошта, Укрпошта, Делівері</b>
            <br />
            Cамовивіз: <b>зі складу в м.Тернопіль</b>
          </p>
          <hr />
          <h5 className="goodPage-delivery">
            <CreditCardOutlined className="goodPage-delivery-icon" /> Оплата
          </h5>
          <p className="goodPage-delivery-description">
            Оплата: <b>на карту ПриватБанк, ОщадБанк, МоноБанк</b>
            <br />
            Готівка: <b>накладний платіж</b>
            <br />
            Ваші гроші: <b>в безпеці до підтвердження отримання товару</b>
          </p>
          <hr />
          <h5 className="goodPage-delivery">
            <SafetyCertificateOutlined className="goodPage-delivery-icon" />{" "}
            Гарантії і безпека
          </h5>
          <p className="goodPage-delivery-description">
            Ми гарантуємо: <b>безпеку угоди!</b>
            <br /> Ми верифіковані <b>в Google My Business</b>
            <br /> Самовивіз: <b>з нашого складу!</b>
          </p>
          <hr />
          <h3 className="goodPage-delivery">Схожі товари</h3>
          <div className="goodPage-sameGoods">
            <div className="goodPage-sameGoods-items">
              <GoodsItem />
              <GoodsItem />
            </div>
            <div className="goodPage-sameGoods-more">
              Показати ще <DownOutlined />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoodPage;
