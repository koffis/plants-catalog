import {
    GET_SHOP_REQUEST,
    GET_SHOP_SUCCESS,
    GET_SHOP_FAILURE
} from "../const";


const initialState = {
    shop: [],
    total: 0,
    filter: '',
    search: '',
    loading: false
};

const getShop = ({ state, shop, filter, search, page }) => {
    if (filter) {
        return filter === state.filter && page != 1 ? [...state.shop, ...shop.shop] : [...shop.shop];
    } else if (search) {
        return search === state.search && page != 1 ? [...state.shop, ...shop.shop] : [...shop.shop];
    }
    return [...state.shop, ...shop.shop];
}

const handlers = {
    [GET_SHOP_REQUEST]: (state) => ({ ...state, loading: true }),
    [GET_SHOP_SUCCESS]: (state, { payload: { shop, filter, search, page } }) => ({
        ...state,
        loading: false,
        total: shop.total,
        shop: getShop({ state, shop, filter, search, page }),
        search: search,
        filter: filter,
    }),
    [GET_SHOP_FAILURE]: (state) => ({ ...state, shop: [], loading: false }),
    DEFAULT: (state) => state,
};


const shopReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};

export default shopReducer;
