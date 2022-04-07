import { useState } from "react";
import { useSelector } from "react-redux";
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
  const count = useSelector(state => state.cart.cart);

  const onSearch = (value) => console.log(value);

  const { header } = useWindow();

  return header ? (
    <div className="header-desktop">
      <div className="header-desktop-menu">
        <span className="header-desktop-menu-left">
          <Link to="/">
            <img src={logo} alt="tree" />
          </Link>
          <Link to="/shop">Каталог</Link>
          <Link to="contacts">Контакти</Link>
          <Link to="/guarantee">Гарантії</Link>
          <Link to="/about">Про магазин</Link>
        </span>
        <span className="header-desktop-menu-right">
        <SearchCustom placeholder="Пошук..." onSearch={onSearch} enterButton />
        <Button ghost>Акції</Button>
          <Link style={{ display: "flex" }} to="/cart">
            <ShoppingCartOutlined style={{ fontSize: 35, color: "white" }} />
            {count.length !== 0 && <div className="header-desktop-menu-right-count">
              {count.length}
            </div>}
          </Link>
        </span>
      </div>
    </div>
  ) : open ? (
    <div className="header">
      <div className="header-menu">
        <div className="header-menu-info">
          <span>
            <PhoneFilled style={{ fontSize: 20 }} />
            <span className="header-menu-info-phone">(097) 49 331 67</span>
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
        {count.length !== 0 ? <div className="header-desktop-menu-right-count">
          {count.length}
        </div> : <ShoppingCartOutlined style={{ fontSize: 30, color: "white" }} />}
      </Link>
    </div>
  );
};

export default Header;
