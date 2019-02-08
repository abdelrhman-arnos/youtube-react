import React, {Component} from 'react';

export default class FilterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: [
                'relevance',
                'upload date',
                'view count',
                'rating',
            ]
        }
    }

    setDate(date) {
        this.props.actions.setDateFilter(date);
        // this.props.history.push(`/search${this.props.history.location.search}&date=${date}`);
    }

    setType(type) {
        this.props.actions.setTypeFilter(type);
    }

    setSort(sort) {
        this.props.actions.setSortFilter(sort);
    }

    render() {
        return (
            <div className="filter__container">
                <div id="filter__uploadDate" className="filter">
                    <div className="filter__title">Upload Date</div>
                    {this.props.dates.map(dateName => {
                        return <div className="filter__option" key={dateName}>
                            <span onClick={() => this.setDate(dateName)} className="filter__name">{dateName}</span>
                            <span className="filter__remove">✖</span>
                        </div>
                    })}
                </div>
                <div id="filter__type" className="filter">
                    <div className="filter__title">Type</div>
                    {this.props.types.map(typeName => {
                        return <div className="filter__option" key={typeName}>
                            <span onClick={() => this.setType(typeName)} className="filter__name">{typeName}</span>
                            <span className="filter__remove">✖</span>
                        </div>
                    })}
                </div>
                <div id="filter__sort" className="filter">
                    <div className="filter__title">Sort By</div>
                    {this.state.sort.map(sortName => {
                        return <div className="filter__option" key={sortName}>
                            <span onClick={() => this.setSort(sortName)}
                                  className={`filter__name ${0 ? '--active' : null}`}>{sortName}</span>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}