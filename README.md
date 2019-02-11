<img src="./src/assets/img/youtube-logo.svg" width="100"/>

### Build setup
```` bash
# install dependencies
npm install

# serve at localhost:3000
npm start

# deploy the app
npm run build

# e2e-tests
npm run test
````

### Built with
| Library | Version |
| ------------- | ------------- |
| [react](https://github.com/facebook/react) | 16.7.0  |
| [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) | 4.3.1  |
| [redux](https://github.com/reduxjs/redux) | 4.0.1  |
| [react-redux](https://github.com/reduxjs/react-redux) | 6.0.0  |
| [redux-thunk](https://github.com/reduxjs/redux-thunk) | 2.3.0  |
| [enzyme](https://github.com/airbnb/enzyme) | 3.8.0  |
| [sinon](https://github.com/sinonjs/sinon) | 7.2.3  |
| [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component) | 4.5.0  |
| [react-timeago](https://github.com/nmn/react-timeago) | 4.3.0  |
| [axios](https://github.com/axios/axios) | 0.18.0  |
| [query-string](https://github.com/sindresorhus/query-string) | 6.2.0  |


### Structure
The following is the example of directory:

    YouTube
          ├── src
          │   └── actions
          │   └── assets
          │   │   └── img
          │   │   └── sass
          │   └── components
          │   │   └── channel
          │   │   └── filter
          │   │   └── header
          │   │   └── list-renderer
          │   │   └── search
          │   │   └── video
          │   └── constants
          │   └── containers
          │   └── helper
          │   └── reducers
          │   └── store
          │   └── app.js
          │   └── app.test.js
          │   └── index.js
          │   └── serviceWorker.js
          
### License
React is [MIT licensed](./LICENSE).