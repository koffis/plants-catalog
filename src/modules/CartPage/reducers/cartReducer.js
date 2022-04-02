import {
    GET_GOOD_REQUEST,
    GET_GOOD_SUCCESS,
    GET_GOOD_FAILURE,
} from "../const";


const initialState = {
    cart: [
        {
            image: 'https://www.eterex.lt/wp-content/uploads/2017/02/herman.jpg',
            name: 'Slyva',
            code: 1337228,
            price: 1500
        },
        {
            image: 'https://fruit-time.ua/images/cache/products/5a/yabluko__347-500x500.jpeg',
            name: 'Yabluko',
            code: 1332228,
            price: 500
        }
    ]
};

const handlers = {
    [GET_GOOD_REQUEST]: (state) => ({ ...state, loading: true }),
    [GET_GOOD_SUCCESS]: (state, { payload: { goods } }) => ({
        ...state,
        loading: false,
        goods,
    }),
    [GET_GOOD_FAILURE]: (state) => ({ ...state, loading: false }),
    DEFAULT: (state) => state,
};


const cartReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};

export default cartReducer;
