import * as types from '../constants/ActionTypes';

export const setSearchList = searchResults => ({
    type: types.SET_SEARCH_RESULTS,
    payload: searchResults
});