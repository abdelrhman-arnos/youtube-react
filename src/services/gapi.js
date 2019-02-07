const gapi = window.gapi;

export function ytAPIRequest(path, params) {
    gapi.client.init({
        'apiKey': process.env.REACT_APP_YOUTUBE_API_KEY,
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    }).then(function () {
        return gapi.client.request({
            'method': 'GET',
            'path': path,
            'params': params
        });
    });
}

gapi.load('client', ytAPIRequest);