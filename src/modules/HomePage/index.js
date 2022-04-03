import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";
import { useWindow } from "../../utils";
import MainBlock from "../components/MainBlock";
import Slider from "../components/Slider";
import Categories from "./categories";

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
