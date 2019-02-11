import * as types from '../constants/ActionTypes';

const initialState = {
    kind: "",
    etag: "",
    nextPageToken: "",
    regionCode: "EG",
    pageInfo: {
        totalResults: 0,
        resultsPerPage: 0
    },
    items: [],
    scrollLoading: true
};

const currentSearchResults = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.TOGGLE_SCROLL_LOADING:
            state.scrollLoading = !state.scrollLoading;
            return {...state};
        case types.GET_SEARCH_RESULTS:
            payload.items.forEach(searchElement => {
                searchElement.video = [];
                searchElement.channel = [];
                searchElement.playlist = [];
            });
            if (state.scrollLoading)
                return {...payload, scrollLoading: true};
            state.items.push(...payload.items);
            state.nextPageToken = payload.nextPageToken;
            return {...state};
        case types.GET_VIDEOS:
            let newStateVideos = state;
            newStateVideos.items.forEach(searchElement => {
                payload.items.forEach(element => {
                    if (searchElement.id.videoId === element.id) {
                        searchElement.video = element;
                    }
                });
            });
            return {...state, ...newStateVideos};
        case types.GET_CHANNELS:
            let newStateChannels = state;
            newStateChannels.items.forEach(searchElement => {
                payload.items.forEach(element => {
                    if (searchElement.snippet.channelId === element.id) {
                        searchElement.channel = element;
                    }
                });
            });
            return {...state, ...newStateChannels};
        default:
            return state;
    }
};

export default currentSearchResults;

