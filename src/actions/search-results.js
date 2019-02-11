import * as types from '../constants/ActionTypes';

export const toggleScrollLoading = () => ({
    type: types.TOGGLE_SCROLL_LOADING
});

export const getSearch = searchResults => ({
    type: types.GET_SEARCH_RESULTS,
    payload: searchResults
});

export const getVideos = videos => ({
    type: types.GET_VIDEOS,
    payload: videos
});

export const getChannels = channels => ({
    type: types.GET_CHANNELS,
    payload: channels
});