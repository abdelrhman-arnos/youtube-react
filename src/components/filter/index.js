import React, {Component} from 'react';
import {FilterSearchMap} from '../../containers/Search';
import {Link} from "react-router-dom";
import filterIcon from '../../assets/img/filter.svg';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFilter: false,
            showTypeDropdown: false,
            showTimeDropdown: false
        }
    }

    render() {
        return (
            <div>
                <div className="--desktop">
                    <div className="d-flex justify-content-between">
                        <div className="result_count">
                            About 12,200,000 results
                        </div>
                        <div className="filter__button"
                             onClick={() => this.setState({showFilter: !this.state.showFilter})}>
                            <img src={filterIcon} className="filter__icon" alt="Filter icon"/>
                            <div className="filter__bTitle">Filter</div>
                        </div>
                    </div>
                    {this.state.showFilter ? <FilterSearchMap /> : null}
                </div>
                <div className="--mobile">
                    <div className="dropdown"
                         onClick={() => this.setState({showTypeDropdown: !this.state.showTypeDropdown})}>
                        All
                        {this.state.showTypeDropdown ?
                            <div className="dropdown-menu">
                                <Link to="/search" className="dropdown-item">All</Link>
                                <Link to="/search" className="dropdown-item">Channels</Link>
                                <Link to="/search" className="dropdown-item">Playlists</Link>
                            </div> : null}
                    </div>
                    <div className="dropdown"
                         onClick={() => this.setState({showTimeDropdown: !this.state.showTimeDropdown})}>
                        Anytime
                        {this.state.showTimeDropdown ?
                        <div className="dropdown-menu">
                            <Link to="/search" className="dropdown-item">Anytime</Link>
                            <Link to="/search" className="dropdown-item">Today</Link>
                            <Link to="/search" className="dropdown-item">This Week</Link>
                            <Link to="/search" className="dropdown-item">This Month</Link>
                        </div> : null}
                    </div>
                </div>
                <div className="separator"/>
                <div>
                    <video-render/>
                    <channel-render/>
                    <playlist-render/>
                </div>
            </div>
        )
    }
}