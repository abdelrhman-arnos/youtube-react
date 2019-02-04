import React, {Component} from 'react';
import ListRenderer from '../list-renderer';
import Filter from '../filter';

export default class Search extends Component {
    render() {
        return (
            <div>
                <Filter />
                <ListRenderer/>
            </div>
        )
    }
}