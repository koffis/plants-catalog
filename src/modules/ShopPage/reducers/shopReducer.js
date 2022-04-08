import {
    GET_SHOP_REQUEST,
    GET_SHOP_SUCCESS,
    GET_SHOP_FAILURE
} from "../const";


const initialState = {
    shop: [],
    total: 0,
    filter: '',
    loading: false
};

const handlers = {
    [GET_SHOP_REQUEST]: (state) => ({ ...state, loading: true }),
    [GET_SHOP_SUCCESS]: (state, { payload: { shop, filter } }) => ({
        ...state,
        loading: false,
        total: shop.total,
        shop: filter === state.filter ? [...state.shop, ...shop.shop] : [...shop.shop],
        filter: filter,
    }),
    [GET_SHOP_FAILURE]: (state) => ({ ...state, loading: false }),
    DEFAULT: (state) => state,
};


const shopReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};

export default shopReducer;
