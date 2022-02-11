import {
  LeftOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  CarOutlined,
  CreditCardOutlined,
  SafetyCertificateOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import GoodsItem from "../components/GoodsItem";
import Header from "../components/Header";

import "./index.scss";

const getRem = (size) => {
  return `${size / 16}rem`;
};

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

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

  return (
    <div>
      <Header />
      <div className="goodPage">
        <span onClick={history.goBack} className="goodPage-back">
          <LeftOutlined /> Назад
        </span>
        <h4 className="goodPage-name">Lorem ipsum</h4>
        <span className="goodPage-info">
          <span className="goodPage-info-code">Код: 1223049582</span>
          <span className="goodPage-info-price">1560$</span>
        </span>
        <div className="goodPage-goods">
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            thumbnailPosition="left"
          />
          <RedButton type="primary">
            <ShoppingCartOutlined /> Додати в корзину
          </RedButton>
          <GreenButton type="primary">Купити зараз</GreenButton>
        </div>
        <hr />
        <h5 className="goodPage-description">
          <ShoppingOutlined className="goodPage-description-icon" />
          Опис товару
        </h5>
        <p className="goodPage-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
    </div>
  );
};

export default GoodPage;
