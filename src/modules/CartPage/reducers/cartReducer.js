import {
    DELETE_GOOD,
    ADD_GOOD,
    CHANGE_AMOUNT,
} from "../const";

const initialState = {
    cart: [],
    count: 0
};

const addGood = (state, goods) => {
    if (state.cart.length != 0) {
        if (state.cart.filter(item => item.code === goods.code).length !== 0) {
            const newCart = state.cart.map(element => {
                if (element.code === goods.code) {
                    element.amount += goods.amount
                }
                return element
            })
            console.log(newCart)
            return [...newCart]
        }
        return [...state.cart, goods]
    }
    return [...state.cart, goods]
}


const handlers = {
    [ADD_GOOD]: (state, { payload: { goods } }) => ({
        ...state,
        cart: addGood(state, goods),
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

    DEFAULT: (state) => state,
};


const cartReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};

export default cartReducer;
