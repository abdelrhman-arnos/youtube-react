import React, {Component} from 'react';
import qs from 'query-string';
import searchIcon from '../../assets/img/search.png';
import store from "../../store";
import {searchCall} from "../../actions/shared-action";

export default class SearchInput extends Component {
    state = {q: this.props.search.q};

    componentWillReceiveProps(props) {
        this.setState({q: props.search.q})
    }

    onSubmit(e) {
        if (this.state.q === '')
            return false;
        e.preventDefault();
        let parsed = qs.parse(this.props.history.location.search);
        parsed.query = this.state.q;
        store.dispatch(searchCall({query:this.state.q}));
        this.props.history.push(`/search?${qs.stringify(parsed)}`);
    }

    render() {
        return (
            <form method="post" className="search">
                <div className="search__container --mobile">
                    <input type="text" onChange={e => this.setState({q: e.target.value})}
                           className="search__input" value={this.state.q}
                           autoComplete="off" placeholder="Search YouTube"/>
                    <div className="search__button--close" onClick={() => this.setState({q: ''})}>✖</div>
                </div>

                <div className="search__container --desktop">
                    <input type="text" required={true} onChange={e => this.setState({q: e.target.value})}
                           autoComplete="off" value={this.state.q}
                           className="search__input"
                           id="search__input--desktop"
                           placeholder="Search YouTube"/>
                </div>

                <button type="submit" onClick={e => this.onSubmit(e)} className="search__button">
                    <img src={searchIcon} className="search__img" alt="search-icon"/>
                </button>
            </form>
        )
    }
}