import { combineReducers } from "redux";
import goodsReducer from "../modules/GoodPage/reducers/goodsReducer";
import cartReducer from "../modules/CartPage/reducers/cartReducer";
import homeReducer from "../modules/HomePage/reducers/homeReducer";
import shopReducer from "../modules/ShopPage/reducers/shopReducer";

/**
 * @desc Reducer function that invokes every reducer inside the passed object.
 * @const
 * @type {object}
 */
const rootReducer = combineReducers({
    goods: goodsReducer,
    cart: cartReducer,
    home: homeReducer,
    shop: shopReducer
});

export default rootReducer;
