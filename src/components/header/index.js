import React, {Component} from 'react';

import Logo from './logo';
import Search from './search';

import '../../assets/sass/header.css';

export default class Header extends Component {
    render() {
        return (
            <nav>
                <Logo />
                <Search />
            </nav>
        );
    }
}

