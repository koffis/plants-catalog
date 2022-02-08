import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./config";

import HomePage from "./modules/HomePage";
import CartPage from "./modules/CartPage";

import "antd/dist/antd.css";
import "./index.scss";

const { root, cart } = ROUTES;

const App = () => {
  return (
    <Switch>
      <Route exact path={root} component={HomePage} />
      <Route exact path={cart} component={CartPage} />
    </Switch>
  );
};

export default App;
