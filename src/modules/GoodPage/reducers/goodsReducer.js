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
    images: [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ],
    loading: false
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
