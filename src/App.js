import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./config";

import HomePage from "./modules/HomePage";
import GoodPage from "./modules/GoodPage";
import CartPage from "./modules/CartPage";
import AboutPage from "./modules/AboutPage";
import ContactsPage from "./modules/ContactsPage";
import GuaranteePage from "./modules/GuaranteePage";
import ShopPage from "./modules/ShopPage";

import "./index.scss";

import "antd/dist/antd.css";

const { root, cart, contacts, guarantee, goods, about, shop } = ROUTES;

const App = () => {
  return (
    <Switch>
      <Route exact path={root} component={HomePage} />
      <Route exact path={cart} component={CartPage} />
      <Route exact path={contacts} component={ContactsPage} />
      <Route exact path={goods} component={GoodPage} />
      <Route exact path={shop} component={ShopPage} />
      <Route exact path={guarantee} component={GuaranteePage} />
      <Route exact path={about} component={AboutPage} />
    </Switch>
  );
};

export default App;
