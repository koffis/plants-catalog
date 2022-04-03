import {
    GET_HOME_REQUEST,
    GET_HOME_SUCCESS,
    GET_HOME_FAILURE,
} from "../const";


const initialState = {
    images: [],
    popular: [],
    season: [],
    discount: [],
    loading: false
};

const handlers = {
    [GET_HOME_REQUEST]: (state) => ({ ...state, loading: true }),
    [GET_HOME_SUCCESS]: (state, { payload: { home } }) => ({
        ...state,
        loading: false,
        ...home,
    }),
    [GET_HOME_FAILURE]: (state) => ({ ...state, loading: false }),
    DEFAULT: (state) => state,
};


const homeReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};

export default homeReducer;
