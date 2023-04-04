import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  LeftOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  CarOutlined,
  CreditCardOutlined,
  SafetyCertificateOutlined,
  DownOutlined,
  CloseOutlined,
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
import { Alert } from "antd";
import { receiveGoods } from "./actions/goodsActions";
import { receiveHome } from "../HomePage/actions/homeActions";
import Preloader from "../components/Preloader";
import { Helmet } from "react-helmet";

import "./index.scss";
import { makeOrder } from "./api";

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
  let history = useHistory();
  const dispatch = useDispatch();
  const { header } = useWindow();
  const [value, setValue] = useState(1);
  const [modalVindow, setModalVindow] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const fullname = useRef();
  const number = useRef();
  const email = useRef();

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(receiveGoods(code));
    dispatch(receiveHome());
  }, []);

  const order = () => {
    if (
      number.current.value == "" ||
      fullname.current.value == "" ||
      email.current.value == ""
    ) {
      setError(true);
    } else {
      makeOrder({
        name: fullname.current.value,
        number: number.current.value,
        email: email.current.value,
        line_items: [{ product_id: code, quantity: 1 }],
      }).then((res) => {
        setModalVindow(false);
        setSuccess(true);
      });
    }
  };

  const {
    images,
    name,
    price,
    description,
    description_excerpt,
    loading,
    stock_status,
    attributes,
  } = useSelector((state) => state.goods);
  const popular = useSelector((state) => state.home.popular);
  function stripHtml(html)
  {
     let tmp = document.createElement("DIV");
     tmp.innerHTML = html;
     return tmp.textContent || tmp.innerText || "";
  }
  return loading ? (
    <Preloader />
  ) : (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="nosnippet" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="Keywords"
          content="Сад, садівництво, розсада, кущі, дерева, квіти"
        />
        <meta property="og:type" content="website" />
        <meta name="description" content={description} />
        <title>Зелений сад - {name}</title>
      </Helmet>
      <Header />
      {header ? (
        <div className="goodPage-desktop">
          {success && (
            <Alert
              style={{ position: "fixed", top: "50px", left: "30%" }}
              className="alert"
              message={
                stock_status !== "outofstock"
                  ? "Товар успішно додано до кошику!"
                  : "Ваше замовлення прийняте!"
              }
              type="success"
              showIcon
            />
          )}
          <h3>{name}</h3>
          <div className="goodPage-desktop-main">
            <ImageGallery
              className="goodPage-desktop-main-gallery"
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              thumbnailPosition="bottom"
              showNav={false}
              slideOnThumbnailOver={true}
            />
            <div className="goodPage-desktop-main-info">
              {stock_status === "outofstock" && (
                <h5 className="outofstock">Немає в наявності</h5>
              )}
              <h4>{price} ГРН</h4>
              <p>Код : {code}</p>
              <span>
                <InputNumber min={1} value={value} onChange={setValue} />
                {stock_status !== "outofstock" && (
                  <button
                    disabled={stock_status === "outofstock" ? true : false}
                    onClick={() => {
                      dispatch(
                        addCartItem({
                          image: images[0].original,
                          name,
                          code,
                          price,
                          amount: value,
                        })
                      );
                      setSuccess(true);
                      setTimeout(() => setSuccess(false), 4000);
                    }}
                  >
                    Купити
                  </button>
                )}
                {stock_status === "outofstock" && (
                  <button onClick={() => setModalVindow(true)}>
                    Товар на замовлення
                  </button>
                )}
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
            <p>
              {stripHtml(description)}
              <br />
              <br />
              {stripHtml(description_excerpt)}
            </p>
            {attributes.length > 0 && (
              <>
                <h4>Характеристики товару</h4>
                {attributes.map((el) => (
                  <p>
                    <b>{el.AttrName.charAt(0).toUpperCase() + el.AttrName.slice(1)}: </b>
                    <span>{el.AttrValue}</span>
                  </p>
                ))}
              </>
            )}
          </div>
          <MainBlock isGood={true} popular={popular} />
          <Footer />
        </div>
      ) : (
        <div className="goodPage">
          {success && (
            <Alert
              style={{ position: "fixed", top: "50px", left: "15%" }}
              className="alert"
              message={
                stock_status !== "outofstock"
                  ? "Товар успішно додано до кошику!"
                  : "Ваше замовлення прийняте!"
              }
              type="success"
              showIcon
            />
          )}
          <span onClick={history.goBack} className="goodPage-back">
            <LeftOutlined /> Назад
          </span>
          <h4 className="goodPage-name">{name}</h4>
          <span className="goodPage-info">
            {stock_status === "outofstock" && (
              <h5 className="outofstock">Немає в наявності</h5>
            )}
            <span className="goodPage-info-code">Код: {code}</span>
            <span className="goodPage-info-price">{price} ГРН</span>
          </span>
          <div className="goodPage-goods">
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              thumbnailPosition="bottom"
            />
            {stock_status !== "outofstock" && (
              <GreenButton
                disabled={stock_status === "outofstock" ? true : false}
                type="primary"
                onClick={() => {
                  dispatch(
                    addCartItem({
                      image: images[0].original,
                      name,
                      code,
                      price,
                      amount: value,
                    })
                  );
                  setSuccess(true);
                  setTimeout(() => setSuccess(false), 4000);
                }}
              >
                <ShoppingCartOutlined /> Додати в корзину
              </GreenButton>
            )}
            {stock_status === "outofstock" && (
              <GreenButton
                type="primary"
                onClick={() => {
                  setModalVindow(true);
                }}
              >
                <ShoppingCartOutlined /> Товар на замовлення
              </GreenButton>
            )}
          </div>
          <hr />
          <h5 className="goodPage-description">
            <ShoppingOutlined className="goodPage-description-icon" />
            Опис товару
          </h5>
          <p className="goodPage-text">
            {stripHtml(description)}
            <br />
            <br />
            {stripHtml(description_excerpt)}
          </p>
          <hr />
          {attributes.length > 0 && (
            <>
              <h5 className="goodPage-description">
                <ShoppingOutlined className="goodPage-description-icon" />
                Характеристики товару
              </h5>
              <p className="goodPage-text">
                {attributes.map((el) => (
                  <p>
                    <b>{el.AttrName}: </b>
                    <span>{el.AttrValue}</span>
                  </p>
                ))}
              </p>
            </>
          )}
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
        </div>
      )}
      {modalVindow && (
        <div className="goodPage-modal">
          <div className="goodPage-modal-block">
            <CloseOutlined
              className="goodPage-modal-block-close"
              onClick={() => {
                setModalVindow(false);
              }}
            />
            <h3>
              Ви хочете оформити замовлення на {name}. Залиште ваші контактні
              дані, будь ласка.
            </h3>
            <input
              type="text"
              placeholder="Введіть ваше ім'я*"
              ref={fullname}
            />
            <input
              type="text"
              placeholder="Введіть ваш номер телефону*"
              ref={number}
            />
            <input type="email" placeholder="Введіть ваш email*" ref={email} />
            <button onClick={() => order()}>Замовити</button>
            {error && (
              <h4 style={{ color: "red" }}>Заповніть всі поля, будь ласка</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GoodPage;
