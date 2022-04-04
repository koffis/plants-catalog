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
      <Header />
      <div className="home">
        <Categories header={header} />
        {header ? null : <div className="home-fertilizers">Добрива</div>}
        {header && <Slider />}
        {header && <MainBlock />}
        {header ? <Footer /> : <FooterMobile />}
      </div>
    </div>
  );
};

export default HomePage;
