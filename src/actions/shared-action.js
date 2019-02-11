import {API_KEY} from "../store";
import axios from "axios/index";
import store from "../store";
import {getChannels, getSearch, getVideos, toggleScrollLoading} from "./search-results";
import {setQuerySearch, setDateFilter, setOrderFilter, setTypeFilter} from "./search";

export const searchCall = (arg) => dispatch => {
    if (arg.scroll)
        dispatch(toggleScrollLoading());
    if (arg.query !== undefined)
        dispatch(setQuerySearch(arg.query));
    if (arg.date !== undefined)
        dispatch(setDateFilter({dateName: arg.dateName, date: arg.date}));
    if (arg.type !== undefined)
        dispatch(setTypeFilter(arg.type));
    if (arg.order !== undefined)
        dispatch(setOrderFilter(arg.order));
    return (
        axios(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: API_KEY,
                part: 'snippet', ...store.getState().search,
                publishedAfter: store.getState().search.date,
                pageToken: arg.scroll && store.getState().searchResults.nextPageToken
            }
        }).then(response => {
            dispatch(getSearch(response.data));
            const ids = {videos: [], channels: []};
            response.data.items.forEach(item => {
                item.id.videoId && ids.videos.push(item.id.videoId);
                item.snippet.channelId && ids.channels.push(item.snippet.channelId);
            });

            // Get new videos
            axios(`https://content.googleapis.com/youtube/v3/videos`, {
                params: {
                    key: API_KEY,
                    part: 'snippet,contentDetails,statistics,liveStreamingDetails,status',
                    id: ids.videos.toString()
                }
            }).then(res => {
                dispatch(getVideos(res.data));
            });

            // Get new channels
            axios(`https://content.googleapis.com/youtube/v3/channels`, {
                params: {
                    key: API_KEY,
                    part: 'snippet,statistics,brandingSettings',
                    id: ids.channels.toString()
                }
            }).then(res => {
                dispatch(getChannels(res.data));
                if (arg.scroll)
                    dispatch(toggleScrollLoading());
            })
        })
    )
};