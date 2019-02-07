import React, {Component} from 'react';
import {ytAPIRequest} from '../../services/gapi';
import searchIcon from '../../assets/img/search.png';

export default class SearchInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    changeQuerySearch(){
        let query = this.state.query;
        console.log(this.props);
        this.props.actions.setQuerySearch(query);
    }
    render(){
        return(
            <form method="post" className="search">
                <div className="search__container --mobile">
                    <input type="text" onChange={e=>this.setState({query:e.target.value})}
                           className="search__input" value={this.state.query}
                           autoComplete="off" placeholder="Search YouTube" />
                    <div className="search__button--close">✖</div>
                </div>

                <div className="search__container --desktop">
                    <input type="text" onChange={e=>this.setState({query:e.target.value})}
                           autoComplete="off" value={this.state.query}
                           className="search__input"
                           id="search__input--desktop"
                           placeholder="Search YouTube" />
                </div>

                <button type="button" onClick={()=>this.changeQuerySearch()} className="search__button">
                    <img src={searchIcon} className="search__img" alt="search-icon" />
                </button>
            </form>
        )
    }
}