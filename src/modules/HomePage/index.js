import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";
import { useWindow } from "../../utils";
import MainBlock from "../components/MainBlock";
import Slider from "../components/Slider";
import Categories from "./categories";
import { receiveHome } from "./actions/homeActions";
import Preloader from "../components/Preloader";
import CategoriesBlock from "../components/Categories";
import {Helmet} from "react-helmet";

import "./index.scss";

const HomePage = () => {
  const { header } = useWindow();
  const dispatch = useDispatch();


  const loading = useSelector(state => state.home.loading);

  useEffect(() => {
    dispatch(receiveHome());
    window.scrollTo(0, 0);
  }, []);

  return loading ? <Preloader /> : (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Зелений сад - Головна</title>
      </Helmet>
      <Header />
      <div className="home">
        <CategoriesBlock />
        {header && <Slider />}
        {header && <MainBlock />}
        {header ? <Footer /> : <FooterMobile />}
      </div>
    </div>
  );
};

export default HomePage;
