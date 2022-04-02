import { Link } from "react-router-dom";
import {
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookOutlined,
  MailOutlined,
} from "@ant-design/icons";
import logo from "../../../assets/images/logo.svg";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="tree" />
      </div>
      <div className="footer-info">
        <PhoneOutlined
          className="footer-info-icon"
          rotate={90}
          style={{ color: "white" }}
        />
        <div className="footer-info-contacts">
          <p>+38 (067) 60 360 52</p>
          <p>+38 (067) 60 360 52</p>
          <h4>Графік роботи:</h4>
          <p>Пн - Сб 8:00 - 19:00</p>
          <p>Нд - вихідний</p>
        </div>
      </div>
      <div className="footer-map">
        <EnvironmentOutlined className="footer-map-icon" />
        <p>
          м.Тернопіль
          <br /> вул, Джерельна, 35
        </p>
      </div>
      <div className="footer-links">
        <Link to="/about">Про нас</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/">Доставка і оплата</Link>
      </div>
      <div className="footer-other">
        <Link className="footer-other-links" to="/">
          Каталог
        </Link>
        <Link className="footer-other-links" to="/">
          Відгуки клієнтів
        </Link>
        <Link className="footer-other-links" to="/">
          Підтримка
        </Link>
        <div className="footer-other-block">
          <a
            className="footer-other-block-icon"
            href="https://www.facebook.com/SagSimyBoyko/"
          >
            <FacebookOutlined />
          </a>
          <a href="/" className="footer-other-block-icon">
            <MailOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
