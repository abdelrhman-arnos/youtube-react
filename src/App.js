import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/header';
import Search from './components/search';
import Channel from './components/channel';
import Video from './components/video';
import './assets/sass/app.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <div className="container">
                        <Route path="/search" component={Search}/>
                        <Route path="/channel/:id" component={Channel}/>
                        <Route path="/video/:id" component={Video}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
