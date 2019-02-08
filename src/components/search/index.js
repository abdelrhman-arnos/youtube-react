import React, {Component} from 'react';
import {SearchRendererMap} from '../../containers/SearchResults';
import Filter from '../filter';

export default class Search extends Component {
    render() {
        return (
            <div>
                <Filter/>
                <SearchRendererMap/>
            </div>
        )
    }
}