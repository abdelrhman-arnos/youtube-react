import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/sass/app.css';



/*const gapi = window.gapi;
function start() {
    gapi.client.init({
        'apiKey': 'AIzaSyAS_qs9rGd2CChw2LZp-fmT0yxhf9klCy4',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    }).then(function() {
        return gapi.client.youtube.search.list({
            q: 'Car',
            maxResults: 10,
            part: 'snippet'
        });
    });
};
gapi.load('client', start);*/

export const store = createStore(
    allReducers,
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
