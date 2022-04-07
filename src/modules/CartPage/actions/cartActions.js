import {
    DELETE_GOOD,
    ADD_GOOD,
    CHANGE_AMOUNT,
    CLEAR_CART
} from "../const";

export const deleteCartItem = (code) => ({ type: DELETE_GOOD, payload: { code } });
export const clearCart = () => ({ type: CLEAR_CART });

export const addCartItem = (goods) => ({
    type: ADD_GOOD,
    payload: { goods },
});

export const changeItemAmount = (goods) => ({
    type: CHANGE_AMOUNT,
    payload: { goods },
});

