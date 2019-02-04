import React, {Component} from 'react';
import FilterContainer from './filter-container';
import filterIcon from '../../assets/img/filter.svg';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFilter: false
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
                        <div className="filter__button" onClick={()=>this.setState({showFilter:!this.state.showFilter})}>
                            <img src={filterIcon} className="filter__icon" alt="Filter icon"/>
                            <div className="filter__bTitle">Filter</div>
                        </div>
                    </div>
                    {this.state.showFilter ? <FilterContainer /> : null}
                </div>
                <div className="--mobile">
                    <div className="dropdown">
                        All
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">All</a>
                            <a href="#" className="dropdown-item">Channels</a>
                            <a href="#" className="dropdown-item">Playlists</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        Anytime
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Anytime</a>
                            <a href="#" className="dropdown-item">Today</a>
                            <a href="#" className="dropdown-item">This Week</a>
                            <a href="#" className="dropdown-item">This Month</a>
                        </div>
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