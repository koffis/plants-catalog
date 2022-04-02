import { getEquipment } from "../api"
import {
    GET_GOOD_REQUEST,
    GET_GOOD_SUCCESS,
    GET_GOOD_FAILURE,
} from "../const";

const request = () => ({ type: GET_GOOD_REQUEST });

const success = (goods) => ({
    type: GET_GOOD_SUCCESS,
    payload: { goods },
});
const failure = () => ({ type: GET_GOOD_FAILURE });

export const receiveGoods = () => async (dispatch) => {
    dispatch(request());
    try {
        const { data: receiveGoodsData } = await getEquipment();

        dispatch(success(receiveGoodsData));
    } catch (e) {
        console.log(e);
        dispatch(failure());
    };
};