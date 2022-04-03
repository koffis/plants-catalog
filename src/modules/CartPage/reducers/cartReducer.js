import {
    DELETE_GOOD,
    ADD_GOOD,
    CHANGE_AMOUNT
} from "../const";

const replaceAmount = (state, goods) => {
    let replaceObj = state.cart.find(element => element.code === goods.code);
    return replaceObj.amount = goods.amount;
}


const initialState = {
    cart: [
        {
            image: 'https://www.eterex.lt/wp-content/uploads/2017/02/herman.jpg',
            name: 'Slyva',
            code: 1337228,
            price: 1500,
            amount: 2
        },
        {
            image: 'https://fruit-time.ua/images/cache/products/5a/yabluko__347-500x500.jpeg',
            name: 'Yabluko',
            code: 1332228,
            price: 500,
            amount: 3
        },
        {
            image: 'https://myexoticfruit.com/____impro/1/webshopmedia/pomelo%20red%20flesh-1561304476719.jpg?&withoutEnlargement&resize=960,9999',
            name: 'Zalupa',
            code: 13318,
            price: 200,
            amount: 1
        },
    ]
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
    DEFAULT: (state) => state,
};


const cartReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};

export default cartReducer;
