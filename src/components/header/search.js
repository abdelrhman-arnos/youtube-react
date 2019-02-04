import React, {Component} from 'react';

import searchIcon from '../../assets/img/search.png';

export default class Search extends Component{
    render(){
        return(
            <form method="post" className="search">
                <div className="search__container --mobile">
                    <input type="text"
                           className="search__input"
                           placeholder="Search YouTube" />
                    <div className="search__button--close">✖</div>
                </div>

                <div className="search__container --desktop">
                    <input type="text" autoComplete="off"
                           className="search__input"
                           id="search__input--desktop"
                           placeholder="Search YouTube" />
                </div>

                <button type="submit" className="search__button">
                    <img src={searchIcon} className="search__img" alt="search-icon" />
                </button>
            </form>
        )
    }
}