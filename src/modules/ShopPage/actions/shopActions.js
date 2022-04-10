import { getAllItems } from "../api";
import {
    GET_SHOP_REQUEST,
    GET_SHOP_SUCCESS,
    GET_SHOP_FAILURE
} from "../const";

const request = () => ({ type: GET_SHOP_REQUEST });

const success = (shop, filter, search, page) => ({
    type: GET_SHOP_SUCCESS,
    payload: { shop, filter, search, page },
});
const failure = () => ({ type: GET_SHOP_FAILURE });

export const receiveShop = (params) => async (dispatch) => {
    dispatch(request());
    try {
        const { data: receiveShopData } = await getAllItems(params);

        dispatch(success(receiveShopData, params.category, params.search, params.page));
    } catch (e) {
        console.log(e);
        dispatch(failure());
    };
};