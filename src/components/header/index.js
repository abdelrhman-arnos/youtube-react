import React, {Component} from 'react';
import {SearchInputMap} from '../../containers/Search';
import Logo from './logo';

export default class Header extends Component {
    render() {
        return (
            <nav>
                <Logo />
                <SearchInputMap />
            </nav>
        );
    }
}

