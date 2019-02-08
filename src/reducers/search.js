import * as types from '../constants/ActionTypes';
import {ytAPIRequest} from "../services/gapi";

const initialState = {
    q: 'instabug',
    date: '',
    type: '',
    sort: '',
};

const setFilterSearch = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.SET_QUERY_SEARCH:
            ytAPIRequest('/youtube/v3/search',{
                part: 'snippet',q:payload
            });
            return {...state,q:payload};
        case types.SET_DATE_FILTER:
            return {...state,date:payload};
        case types.SET_TYPE_FILTER:
            return {...state,type:payload};
        case types.SET_SORT_FILTER:
            return {...state,sort:payload};
        default:
            return state;
    }
};

export default setFilterSearch;

