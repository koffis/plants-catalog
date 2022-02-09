import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./config";

import HomePage from "./modules/HomePage";
import CartPage from "./modules/CartPage";
import ContactsPage from "./modules/ContactsPage";
import GuaranteePage from "./modules/GuaranteePage";
import GoodsPage from "./modules/GoodsPage";

import "antd/dist/antd.css";
import "./index.scss";

const { root, cart, contacts, guarantee, goods } = ROUTES;

const App = () => {
  return (
    <Switch>
      <Route exact path={root} component={HomePage} />
      <Route exact path={cart} component={CartPage} />
      <Route exact path={contacts} component={ContactsPage} />
      <Route exact path={guarantee} component={GuaranteePage} />
      <Route exact path={goods} component={GoodsPage} />
    </Switch>
  );
};

export default App;
