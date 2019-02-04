import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/sass/App.css';

import Header from './components/header';
import Search from './components/search';
import Channel from './components/channel';
import Video from './components/video';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={Search}/>
                        <Route path="/channel" component={Channel}/>
                        <Route path="/video" component={Video}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
