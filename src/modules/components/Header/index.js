import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PhoneFilled,
  CloseOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";
import { Input } from "antd";

import { useWindow } from "../../../utils";

import { getRem } from "../../../utils";
import logo from "../../../assets/images/logo.svg";
import "./index.scss";

const { Search } = Input;

const SearchCustom = styled(Search)`
  width: ${getRem(250)};
  margin-right: ${getRem(30)};
`;
const Header = () => {
  const [open, setOpen] = useState(false);

  const onSearch = (value) => console.log(value);

  const { header } = useWindow();

  return header ? (
    <div className="header-desktop">
      <div className="header-desktop-menu">
        <span className="header-desktop-menu-left">
          <Link to="/about">Про магазин</Link>
          <Link to="/">Доставка і оплата</Link>
          <Link to="/">Каталог</Link>
          <Link to="/guarantee">Гарантії</Link>
          <Link to="/">Відгуки клієнтів</Link>
          <Link to="contacts">Контакти</Link>
        </span>
        <span className="header-desktop-menu-right">
          <Link to="/cart">
            Кошик <ShoppingCartOutlined />
          </Link>
        </span>
      </div>
      <div className="header-desktop-more">
        <img src={logo} alt="tree" />
        <SearchCustom placeholder="Пошук..." onSearch={onSearch} enterButton />
        <Button ghost>Акції</Button>
      </div>
    </div>
  ) : open ? (
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
            <Link to="/">
              <span>Каталог товарів</span>
            </Link>
          </div>
          <Link to="/cart" className="header-menu-main-item">
            <div className="header-menu-main-item-icon">
              <ShoppingCartOutlined style={{ fontSize: 30 }} />
            </div>
            <span>Корзина</span>
          </Link>
        </div>
        <div className="header-menu-items">
          <Link to="/about">
            <p>Про магазин</p>
          </Link>
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
