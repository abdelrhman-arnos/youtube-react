import {store} from '../index';
import {setSearchList as searchAction} from '../actions/searchResults';

const gapi = window.gapi;

const initialPath = '/youtube/v3/search';
const initialParams = {part: 'snippet', q: 'instabug'};

export function ytAPIRequest(path = initialPath, params = initialParams) {
    gapi.client.init({
        'apiKey': process.env.REACT_APP_YOUTUBE_API_KEY,
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    }).then(() => {
        return gapi.client.request({
            'method': 'GET',
            'path': path,
            'params': params
        });
    }).then(response => {
        store.dispatch(searchAction(response.result));
    });
}

gapi.load('client', ytAPIRequest);