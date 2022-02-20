import "./index.scss";
import Header from "../components/Header";
import FooterMobile from "../components/FooterMobile";
import { useWindow } from "../../utils";
import Footer from "../components/Footer";
import MainBlock from "../components/MainBlock";

const ContactsPage = () => {
  const { header } = useWindow();

  return (
    <div>
      <Header />
      <div className="contacts">
        <h3>Контакти</h3>
        <p className="contacts-schedule">Графік роботи:</p>
        <p className="contacts-work">Пн - Сб 8:00 - 19:00</p>
        <p className="contacts-weekend">Нд - вихідний</p>
        <p className="contacts-number">+38 (067) 60 360 52</p>
        <p className="contacts-number">+38 (067) 60 360 52</p>
        <p className="contacts-address">м.Тернопіль вул, Джерельна, 35</p>
      </div>
      {header && <MainBlock />}
      {header ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default ContactsPage;
