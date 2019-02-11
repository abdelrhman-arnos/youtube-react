import React, {Component} from 'react';
import qs from "query-string";
import store from "../../store";
import {searchCall} from "../../actions/shared-action";
import {parseDate} from "../../helper";

export default class FilterContainer extends Component {
    setDate(dateName) {
        const date = parseDate(dateName);
        const parsed = this.props.parsed;
        parsed.date = dateName;
        store.dispatch(searchCall({dateName, date}));
        this.props.history.push(`/search?${qs.stringify(parsed)}`);
    }

    setType(type) {
        const parsed = this.props.parsed;
        parsed.type = type;
        store.dispatch(searchCall({type}));
        this.props.history.push(`/search?${qs.stringify(parsed)}`);
    }

    setOrder(order) {
        const parsed = this.props.parsed;
        parsed.order = order;
        store.dispatch(searchCall({order}));
        this.props.history.push(`/search?${qs.stringify(parsed)}`);
    }

    render() {
        return (
            <div className="filter__container">
                <div id="filter__uploadDate" className="filter">
                    <div className="filter__title">Upload Date</div>
                    {this.props.dates.map(name => {
                        return <div className="filter__option" key={name}>
                            <span onClick={() => this.setDate(name)}
                                  className={`filter__name ${this.props.parsed.date === name ? '--active' : null}`}>{name}</span>
                            <span onClick={() => this.setDate('')}
                                  className={`filter__remove ${this.props.parsed.date === name ? '--show' : null}`}>✖</span>
                        </div>
                    })}
                </div>
                <div id="filter__type" className="filter">
                    <div className="filter__title">Type</div>
                    {this.props.types.map(name => {
                        return <div className="filter__option" key={name}>
                            <span onClick={() => this.setType(name)}
                                  className={`filter__name ${this.props.parsed.type === name ? '--active' : null}`}>{name}</span>
                            <span onClick={() => this.setType('')}
                                  className={`filter__remove ${this.props.parsed.type === name ? '--show' : null}`}>✖</span>
                        </div>
                    })}
                </div>
                <div id="filter__sort" className="filter">
                    <div className="filter__title">Sort By</div>
                    <div className="filter__option">
                        <span onClick={() => this.setOrder('relevance')}
                              className={`filter__name ${this.props.parsed.order === 'relevance' ? '--active' : null}`}>relevance</span>
                    </div>
                    <div className="filter__option">
                        <span onClick={() => this.setOrder('date')}
                              className={`filter__name ${this.props.parsed.order === 'date' ? '--active' : null}`}>upload date</span>
                    </div>
                    <div className="filter__option">
                        <span onClick={() => this.setOrder('viewcount')}
                              className={`filter__name ${this.props.parsed.order === 'viewcount' ? '--active' : null}`}>view count</span>
                    </div>
                    <div className="filter__option">
                        <span onClick={() => this.setOrder('rating')}
                              className={`filter__name ${this.props.parsed.order === 'rating' ? '--active' : null}`}>rating</span>
                    </div>
                </div>
            </div>
        )
    }
}