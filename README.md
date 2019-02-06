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
* [react](https://github.com/facebook/react): 16.7.0
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom): 4.3.1
* [redux](https://github.com/reduxjs/redux): 4.0.1
* [react-redux](https://github.com/reduxjs/react-redux): 6.0.0

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
          │   └── containers
          │   └── reducers
          │   └── app.js
          │   └── app.test.js
          │   └── index.js
          │   └── serviceWorker.js
          
### License
React is [MIT licensed](./LICENSE).