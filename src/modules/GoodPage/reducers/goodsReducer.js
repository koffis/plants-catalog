import {
    GET_GOOD_REQUEST,
    GET_GOOD_SUCCESS,
    GET_GOOD_FAILURE,
} from "../const";


const initialState = {
    name: '',
    price: 0,
    code: 0,
    description: '',
    images: [],
    loading: false,
    category: '',
    description_excerpt: '',
    discount: '',
    attributes: [],
    stock_status: 'instock'
};

const handlers = {
    [GET_GOOD_REQUEST]: (state) => ({ ...state, loading: true }),
    [GET_GOOD_SUCCESS]: (state, { payload: { goods } }) => ({
        ...state,
        loading: false,
        ...goods,
    }),
    [GET_GOOD_FAILURE]: (state) => ({ ...state, loading: false }),
    DEFAULT: (state) => state,
};


const goodsReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};

export default goodsReducer;
