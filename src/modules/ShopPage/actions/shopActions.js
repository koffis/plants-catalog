import { getAllItems } from "../api";
import {
    GET_SHOP_REQUEST,
    GET_SHOP_SUCCESS,
    GET_SHOP_FAILURE
} from "../const";

const request = () => ({ type: GET_SHOP_REQUEST });

const success = (shop) => ({
    type: GET_SHOP_SUCCESS,
    payload: { shop },
});
const failure = () => ({ type: GET_SHOP_FAILURE });

export const receiveShop = (code) => async (dispatch) => {
    dispatch(request());
    try {
        const { data: receiveShopData } = await getAllItems(code);

        dispatch(success(receiveShopData));
    } catch (e) {
        console.log(e);
        dispatch(failure());
    };
};