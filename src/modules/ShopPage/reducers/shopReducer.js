import {
    GET_SHOP_REQUEST,
    GET_SHOP_SUCCESS,
    GET_SHOP_FAILURE
} from "../const";


const initialState = {
    shop: [],
    total: 0,
    loading: false
};

const handlers = {
    [GET_SHOP_REQUEST]: (state) => ({ ...state, loading: true }),
    [GET_SHOP_SUCCESS]: (state, { payload: { shop } }) => ({
        ...state,
        loading: false,
        total: shop.length,
        shop,

    }),
    [GET_SHOP_FAILURE]: (state) => ({ ...state, loading: false }),
    DEFAULT: (state) => state,
};


const shopReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};

export default shopReducer;
