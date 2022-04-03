import {
    DELETE_GOOD,
    ADD_GOOD,
    CHANGE_AMOUNT,
    INCREASE_COUNT,
    DECREASE_COUNT
} from "../const";

export const deleteCartItem = (code) => ({ type: DELETE_GOOD, payload: { code } });

export const addCartItem = (goods) => ({
    type: ADD_GOOD,
    payload: { goods },
});

export const changeItemAmount = (goods) => ({
    type: CHANGE_AMOUNT,
    payload: { goods },
});

export const increaseCount = () => ({ type: INCREASE_COUNT });
export const decreaseCount = () => ({ type: DECREASE_COUNT });
