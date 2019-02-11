import * as types from '../constants/ActionTypes';

const initialState = {
    q: 'instabug'
};

const setFilterSearch = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.SET_QUERY_SEARCH:
            return {...state, q: payload};
        case types.SET_DATE_FILTER:
            return {...state, ...payload};
        case types.SET_TYPE_FILTER:
            return {...state, type: payload};
        case types.SET_ORDER_FILTER:
            return {...state, order: payload};
        default:
            return state;
    }
};

export default setFilterSearch;

