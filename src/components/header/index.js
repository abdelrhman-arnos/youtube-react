import React, {Component} from 'react';

import Logo from './logo';
import SearchInput from './search-input';

export default class Header extends Component {
    render() {
        return (
            <nav>
                <Logo />
                <SearchInput />
            </nav>
        );
    }
}

