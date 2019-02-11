import React, {Component} from 'react';
import {SearchRendererMap} from '../../containers/search-results';
import Filter from '../filter';
import qs from "query-string";

export default class Search extends Component {
    state = {type: qs.parse(this.props.history.location.search)};

    componentWillReceiveProps(props) {
        this.setState({type: qs.parse(props.history.location.search)})
    }

    render() {
        return (
            <div>
                <Filter/>
                <SearchRendererMap type={this.state.type}/>
            </div>
        )
    }
}