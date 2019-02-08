import * as types from '../constants/ActionTypes';

const currentSearchResults = (state = {}, {type, payload}) => {
    switch (type) {
        case types.SET_SEARCH_RESULTS:
            return payload;
        default:
            return state;
    }
};

export default currentSearchResults;

