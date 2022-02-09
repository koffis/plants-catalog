import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PhoneFilled,
  CloseOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import { Input } from "antd";

import "./index.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  return open ? (
    <div className="header">
      <div className="header-menu">
        <div className="header-menu-info">
          <span>
            <PhoneFilled style={{ fontSize: 20 }} />
            <span className="header-menu-info-phone">(093) 000-11-23</span>
          </span>
          <CloseOutlined
            style={{ fontSize: 25 }}
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>
        <div className="header-menu-main">
          <div className="header-menu-main-item">
            <div className="header-menu-main-item-icon">
              <AppstoreOutlined style={{ fontSize: 25 }} />
            </div>
            <span>Каталог товарів</span>
          </div>
          <Link to="/cart" className="header-menu-main-item">
            <div className="header-menu-main-item-icon">
              <ShoppingCartOutlined style={{ fontSize: 30 }} />
            </div>
            <span>Корзина</span>
          </Link>
        </div>
        <div className="header-menu-items">
          <Link to="/">
            <p>Головна</p>
          </Link>
          <p>Про магазин</p>
          <p>Доставка і оплата</p>
          <Link to="/guarantee">
            <p>Гарантії</p>
          </Link>
          <p>Відгуки клієнтів</p>
          <Link to="/contacts">
            <p>Контакти</p>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="header-closed">
      <MenuOutlined
        onClick={() => {
          setOpen(true);
        }}
        style={{ fontSize: 30, color: "white" }}
      />
      <Search
        className="header-closed-search"
        placeholder="Пошук..."
        onSearch={onSearch}
        enterButton
      />
      <Link to="/cart">
        <ShoppingCartOutlined style={{ fontSize: 30, color: "white" }} />
      </Link>
    </div>
  );
};

export default Header;
