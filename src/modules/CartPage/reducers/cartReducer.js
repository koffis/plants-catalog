import {
    DELETE_GOOD,
    ADD_GOOD,
    CHANGE_AMOUNT,
    CLEAR_CART
} from "../const";

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
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
            localStorage.setItem('cart', JSON.stringify([...newCart]));
            return JSON.parse(localStorage.getItem('cart'));
        }
        localStorage.setItem('cart',  JSON.stringify([...state.cart, goods]));
        return JSON.parse(localStorage.getItem('cart'));
    }
    localStorage.setItem('cart',  JSON.stringify([...state.cart, goods]));
    return JSON.parse(localStorage.getItem('cart'));
};

const deleteGood = (state, code) => {
    localStorage.setItem('cart',  JSON.stringify(state.cart.filter((item) => item.code != code)));
    return JSON.parse(localStorage.getItem('cart'));
};

const changeAmount = (state, goods) => {
    localStorage.setItem('cart',  JSON.stringify(state.cart.map(element => {
        if (element.code === goods.code) {
            element.amount = goods.amount
        }
        return element
    })));
    return JSON.parse(localStorage.getItem('cart'));
};

const clearCart = () => {
    localStorage.setItem('cart', '[]');
    return JSON.parse(localStorage.getItem('cart'));
}


const handlers = {
    [CLEAR_CART]: () => ({cart: clearCart()}),
    [ADD_GOOD]: (state, { payload: { goods } }) => ({
        ...state,
        cart: addGood(state, goods),
    }),
    [DELETE_GOOD]: (state, { payload: { code } }) => ({
        ...state,
        cart: deleteGood(state, code),
    }),
    [CHANGE_AMOUNT]: (state, { payload: { goods } }) => ({
        ...state,
        cart: changeAmount(state, goods),
    }),

    DEFAULT: (state) => state,
};


const cartReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};

export default cartReducer;
