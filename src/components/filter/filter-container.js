import React, {Component} from 'react';

export default class FilterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            type: '',
            sort: ''
        }
    }

    changeVal(date){
        this.props.actions.setDateFilter(date);
    }

    render() {
        return (
            <div className="filter__container">
                <div id="filter__uploadDate" className="filter">
                    <div className="filter__title">Upload Date</div>
                    <div className="filter__option">
                        <span onClick={()=>this.changeVal('hour')}
                              data-value="hour" className="filter__name">Last hour</span>
                        <span className="filter__remove">✖</span>
                    </div>
                    <div className="filter__option">
                        <span data-value="today" className="filter__name">today</span>
                        <span className="filter__remove">✖</span>
                    </div>
                    <div className="filter__option">
                        <span data-value="week" className="filter__name">this week</span>
                        <span className="filter__remove">✖</span>
                    </div>
                    <div className="filter__option">
                        <span data-value="month" className="filter__name">this month</span>
                        <span className="filter__remove">✖</span>
                    </div>
                    <div className="filter__option">
                        <span data-value="year" className="filter__name">this year</span>
                        <span className="filter__remove">✖</span>
                    </div>
                </div>
                <div id="filter__type" className="filter">
                    <div className="filter__title">Type</div>
                    <div className="filter__option">
                        <span data-value="video" className="filter__name">video</span>
                        <span className="filter__remove">✖</span>
                    </div>
                    <div className="filter__option">
                        <span data-value="channel" className="filter__name">channel</span>
                        <span className="filter__remove">✖</span>
                    </div>
                    <div className="filter__option">
                        <span data-value="playlist" className="filter__name">playlist</span>
                        <span className="filter__remove">✖</span>
                    </div>
                </div>
                <div id="filter__sort" className="filter">
                    <div className="filter__title">Sort By</div>
                    <div className="filter__option">
                        <span data-value="relevance" className="filter__name --active">relevance</span>
                    </div>
                    <div className="filter__option">
                        <span data-value="date" className="filter__name">upload date</span>
                    </div>
                    <div className="filter__option">
                        <span data-value="viewCount" className="filter__name">view count</span>
                    </div>
                    <div className="filter__option">
                        <span data-value="rating" className="filter__name">rating</span>
                    </div>
                </div>
            </div>
        )
    }
}