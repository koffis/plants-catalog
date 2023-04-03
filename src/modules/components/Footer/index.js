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
          <p>+38 (097) 49 331 67</p>
          <h4>Графік роботи:</h4>
          <p>Пн - Сб 8:00 - 19:00</p>
          <p>Нд - 9:00 - 17:00</p>
        </div>
      </div>
      <div className="footer-map">
        <EnvironmentOutlined className="footer-map-icon" />
        <p>
          м.Тернопіль
          <br /> вул. Анатолія Живова, 9В
        </p>
      </div>
      <div className="footer-links">
        <Link to="/about">Про нас</Link>
        <Link to="/contacts">Контакти</Link>
      </div>
      <div className="footer-other">
        <Link className="footer-other-links" to="/shop">
          Каталог
        </Link>
        <div className="footer-other-block">
          <a
            className="footer-other-block-icon"
            target="_blank" rel="noopener noreferrer"
            href="https://www.facebook.com/green.garden.ternopil/"
          >
            <FacebookOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
