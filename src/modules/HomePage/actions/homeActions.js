import { getHomeData } from "../api"
import {
    GET_HOME_REQUEST,
    GET_HOME_SUCCESS,
    GET_HOME_FAILURE,
} from "../const";

const request = () => ({ type: GET_HOME_REQUEST });

const success = (home) => ({
    type: GET_HOME_SUCCESS,
    payload: { home },
});
const failure = () => ({ type: GET_HOME_FAILURE });

export const receiveHome = () => async (dispatch) => {
    dispatch(request());
    try {
        const { data: receiveGoodsData } = await getHomeData();

        dispatch(success(receiveGoodsData));
    } catch (e) {
        console.log(e);
        dispatch(failure());
    };
};