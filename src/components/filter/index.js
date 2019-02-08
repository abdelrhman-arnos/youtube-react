import React, {Component} from 'react';
import {FilterSearchMap} from '../../containers/Search';
import {FilterCounerMap} from '../../containers/SearchResults';
import {Link} from "react-router-dom";
import filterIcon from '../../assets/img/filter.svg';

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFilter: false,
            showTypeDropdown: false,
            showTimeDropdown: false,
            dates: [
                'Last hour',
                'today',
                'this week',
                'this month',
                'this year',
            ],
            types: [
                'video',
                'channel',
                'playlist',
            ],
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="--desktop">
                    <div className="d-flex justify-content-between">
                        <FilterCounerMap/>
                        <div className="filter__button"
                             onClick={() => this.setState({showFilter: !this.state.showFilter})}>
                            <img src={filterIcon} className="filter__icon" alt="Filter icon"/>
                            <div className="filter__bTitle">Filter</div>
                        </div>
                    </div>
                    {this.state.showFilter ?
                        <FilterSearchMap dates={this.state.dates} types={this.state.types}/> : null}
                </div>
                <div className="--mobile">
                    <div className="dropdown"
                         onClick={() => this.setState({showTypeDropdown: !this.state.showTypeDropdown})}>
                        All
                        {this.state.showTypeDropdown ?
                            <div className="dropdown-menu">
                                {this.state.types.map(type => {
                                    return <Link to="/search" className="dropdown-item">{type}</Link>
                                })}
                            </div> : null}
                    </div>
                    <div className="dropdown"
                         onClick={() => this.setState({showTimeDropdown: !this.state.showTimeDropdown})}>
                        Anytime
                        {this.state.showTimeDropdown ?
                            <div className="dropdown-menu">
                                {this.state.dates.map(date => {
                                    return <Link to="/search" className="dropdown-item">{date}</Link>
                                })}
                            </div> : null}
                    </div>
                </div>
                <div className="separator"/>
            </div>
        )
    }
}