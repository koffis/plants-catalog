import {
    DELETE_GOOD,
    ADD_GOOD,
    CHANGE_AMOUNT,
    INCREASE_COUNT,
    DECREASE_COUNT
} from "../const";

const replaceAmount = (state, goods) => {
    let replaceObj = state.cart.find(element => element.code === goods.code);
    return replaceObj.amount = goods.amount;
}


const initialState = {
    cart: [],
    count: 0
};

const handlers = {
    [ADD_GOOD]: (state, { payload: { goods } }) => ({
        ...state,
        cart: [...state.cart, goods],
    }),
    [DELETE_GOOD]: (state, { payload: { code } }) => ({
        ...state,
        cart: state.cart.filter((item) => item.code !== code),
    }),
    [CHANGE_AMOUNT]: (state, { payload: { goods } }) => ({
        ...state,
        cart: state.cart.map(element => {
            if (element.code === goods.code) {
                element.amount = goods.amount
            }
            return element
        }),
    }),
    [INCREASE_COUNT]: (state) => ({ ...state, count: state.count += 1 }),
    [DECREASE_COUNT]: (state) => ({ ...state, count: state.count -= 1 }),

    DEFAULT: (state) => state,
};


const cartReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};

export default cartReducer;
