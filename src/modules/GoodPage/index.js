import { useState, useEffect } from "react";
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
import { receiveGoods } from "./actions/goodsActions";
import { receiveHome } from "../HomePage/actions/homeActions";
import Preloader from '../components/Preloader';
import {Helmet} from "react-helmet";

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
  let history = useHistory();
  const dispatch = useDispatch();
  const { header } = useWindow();
  const [value, setValue] = useState(1);
  const [success, setSuccess] = useState(false);
  // const { state } = useLocation();

  // const code = state.code;

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(receiveGoods(code));
    dispatch(receiveHome())
  }, []);

  const { images, name, price, description, description_excerpt, loading, stock_status } = useSelector(state => state.goods);
  const popular = useSelector(state => state.home.popular);

  return loading ? <Preloader /> : (
    <div>
      <Helmet>
        <meta charset="utf-8"/>
        <meta name="nosnippet"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="Keywords" content="??????, ??????????????????????, ??????????????, ????????, ????????????, ??????????"/>
        <meta property="og:type" content="website"/>
        <meta name="description"content={description} />
        <title>?????????????? ?????? - {name}</title>
      </Helmet>
      <Header />
      {header ? (
        <div className="goodPage-desktop">
          {success && <Alert style={{ position: "fixed", top: '50px', left: '30%' }} className="alert" message="?????????? ?????????????? ???????????? ???? ????????????!" type="success" showIcon />}
          <h3>{name}</h3>
          <div className="goodPage-desktop-main">
            <ImageGallery
              className='goodPage-desktop-main-gallery'
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              thumbnailPosition="bottom"
              showNav={false}
              slideOnThumbnailOver={true}
            />
            <div className="goodPage-desktop-main-info">
              {stock_status === 'outofstock' && <h5 className="outofstock">?????????? ?? ??????????????????</h5> }
              <h4>{price} ??????</h4>
              <p>?????? : {code}</p>
              <span>
                <InputNumber min={1} value={value} onChange={setValue} />
                <button disabled={stock_status === 'outofstock' ? true : false} onClick={() => {
                  dispatch(addCartItem({
                    image: images[0].original,
                    name,
                    code,
                    price,
                    amount: value
                  }));
                  setSuccess(true);
                  setTimeout(() => setSuccess(false), 4000);
                }}>????????????</button>
                <hr />
              </span>
              <div className="goodPage-desktop-main-info-item">
                <div className="goodPage-desktop-main-info-item-image">
                  <img src={car} alt="car" />
                </div>
                <p>
                  ????????????????: <b>3-7 ?????????????? ??????</b>
                  <br />
                  ???????????????? ???? ??????????????: <b>???????? ??????????, ????????????????, ????????????????</b>
                  <br />
                  C????????????????: <b>???? ???????????? ?? ??.??????????????????</b>
                </p>
              </div>
              <div className="goodPage-desktop-main-info-item">
                <div className="goodPage-desktop-main-info-item-image">
                  <img src={safe} alt="safe" />
                </div>
                <p>
                  ???? ????????????????????: <b>?????????????? ??????????!</b>
                  <br /> ???? ???????????????????????? <b>?? Google My Business</b>
                  <br /> ??????????????????: <b>?? ???????????? ????????????!</b>
                </p>
              </div>
              <div className="goodPage-desktop-main-info-item">
                <div className="goodPage-desktop-main-info-item-image">
                  <img src={credit} alt="credit" />
                </div>
                <p>
                  ????????????: <b>???? ?????????? ????????????????????, ????????????????, ????????????????</b>
                  <br />
                  ??????????????: <b>?????????????????? ????????????</b>
                  <br />
                  ???????? ??????????: <b>?? ?????????????? ???? ?????????????????????????? ?????????????????? ????????????</b>
                </p>
              </div>
            </div>
          </div>
          <div className="goodPage-desktop-description">
            <h4>???????? ????????????</h4>
            <p>
              {description}
              <br/>
              <br/>
              {description_excerpt}
            </p>
          </div>
          <MainBlock isGood={true} popular={popular} />
          <Footer />
        </div>
      ) : (
        <div className="goodPage">
          {success && <Alert style={{ position: "fixed", top: '50px', left: '15%' }} className="alert" message="?????????? ?????????????? ???????????? ???? ????????????!" type="success" showIcon />}
          <span onClick={history.goBack} className="goodPage-back">
            <LeftOutlined /> ??????????
          </span>
          <h4 className="goodPage-name">{name}</h4>
          <span className="goodPage-info">
            {stock_status === 'outofstock' && <h5 className="outofstock">?????????? ?? ??????????????????</h5> }
            <span className="goodPage-info-code">??????: {code}</span>
            <span className="goodPage-info-price">{price} ??????</span>
          </span>
          <div className="goodPage-goods">
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              thumbnailPosition="bottom"
            />
            <GreenButton  disabled={stock_status === 'outofstock' ? true : false} type="primary" onClick={() => {
              dispatch(addCartItem({
                image: images[0].original,
                name,
                code,
                price,
                amount: value
              }));
              setSuccess(true);
              setTimeout(() => setSuccess(false), 4000);
            }}>
              <ShoppingCartOutlined
              /> ???????????? ?? ??????????????
            </GreenButton>
            {/* <GreenButton type="primary">???????????? ??????????</GreenButton> */}
          </div>
          <hr />
          <h5 className="goodPage-description">
            <ShoppingOutlined className="goodPage-description-icon" />
            ???????? ????????????
          </h5>
          <p className="goodPage-text">
            {description}
            <br/>
            <br/>
            {description_excerpt}
          </p>
          <hr />
          <h5 className="goodPage-delivery">
            <CarOutlined className="goodPage-delivery-icon" />
            ????????????????
          </h5>
          <p className="goodPage-delivery-description">
            ????????????????: <b>3-7 ?????????????? ??????</b>
            <br />
            ???????????????? ???? ??????????????: <b>???????? ??????????, ????????????????, ????????????????</b>
            <br />
            C????????????????: <b>???? ???????????? ?? ??.??????????????????</b>
          </p>
          <hr />
          <h5 className="goodPage-delivery">
            <CreditCardOutlined className="goodPage-delivery-icon" /> ????????????
          </h5>
          <p className="goodPage-delivery-description">
            ????????????: <b>???? ?????????? ????????????????????, ????????????????, ????????????????</b>
            <br />
            ??????????????: <b>?????????????????? ????????????</b>
            <br />
            ???????? ??????????: <b>?? ?????????????? ???? ?????????????????????????? ?????????????????? ????????????</b>
          </p>
          <hr />
          <h5 className="goodPage-delivery">
            <SafetyCertificateOutlined className="goodPage-delivery-icon" />{" "}
            ???????????????? ?? ??????????????
          </h5>
          <p className="goodPage-delivery-description">
            ???? ????????????????????: <b>?????????????? ??????????!</b>
            <br /> ???? ???????????????????????? <b>?? Google My Business</b>
            <br /> ??????????????????: <b>?? ???????????? ????????????!</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default GoodPage;
