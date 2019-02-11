import React, {Component} from 'react';
import {BrowserRouter as Switch, Route, Redirect} from "react-router-dom";
import Header from './components/header';
import Search from './components/search';
import Channel from './components/channel';
import Video from './components/video';
import NotFound from './components/404';
import store from './store';
import {searchCall} from "./actions/shared-action";
import './assets/sass/app.css';

// store.dispatch(searchCall());

class App extends Component {
    render() {
        return (
            <Switch>
                <div className="App">
                    <Header/>
                    <div className="container">
                        <Redirect exact from="/" to="/search?query=instabug&order=relevance"/>
                        <Route path="/search" component={Search}/>
                        <Route path="/channel/:id" component={Channel}/>
                        <Route path="/video/:id" component={Video}/>
                        {/*<Route component={NotFound}/>*/}
                    </div>
                </div>
            </Switch>
        );
    }
}

export default App;
