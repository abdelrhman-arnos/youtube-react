import * as types from '../constants/ActionTypes';

const initialState = {
    query: '',
    date: '',
    type: '',
    sort: '',
};

const setSearchFilter = (state = initialState, {type, payload}) => {
    console.log(state,type,payload);
    switch (type) {
        case types.SET_DATE_FILTER:
            return {...state,date:payload};
        case types.SET_TYPE_FILTER:
            return {...state,type:payload};
        case types.SET_SORT_FILTER:
            return {...state,sort:payload};
        case types.SET_QUERY_SEARCH:
            return {...state,query:payload};
        default:
            return state;
    }
};
export default setSearchFilter;

