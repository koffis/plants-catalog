import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import FooterMobile from "../components/FooterMobile";
import { useWindow } from "../../utils";
import Footer from "../components/Footer";
import MainBlock from "../components/MainBlock";
import { receiveHome } from "../HomePage/actions/homeActions";
import Preloader from "../components/Preloader";
import {Helmet} from "react-helmet";

import "./index.scss";

const ContactsPage = () => {
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
        <title>Зелений сад - Контакти</title>
      </Helmet>
      <Header />
      <div className="contacts">
        <h3>Контакти</h3>
        <p className="contacts-schedule">Графік роботи:</p>
        <p className="contacts-work">Пн - Сб 8:00 - 19:00</p>
        <p className="contacts-weekend">Нд - 9:00 - 17:00</p>
        <p className="contacts-number"><a href="tel:+380974933167">+38 (097) 493 31 67</a></p>
        <p className="contacts-address">м.Тернопіль вул. Анатолія Живова, 9В</p>
      </div>
      {header && <MainBlock />}
      {header ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default ContactsPage;
