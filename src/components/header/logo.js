import React,{Component} from 'react';
import {Link} from "react-router-dom";

import ytLogo from '../../assets/img/youtube-logo.svg';
import ytIcon from '../../assets/img/youtube-icon-white.png';

export default class Logo extends Component{
    render(){
        return(
            <div>
                <Link to="/search">
                    <div className="logo --desktop">
                        <img className="logo__img" src={ytLogo} alt="YouTube logo"/>
                        <span className="logo__localization">eg</span>
                    </div>
                    <div className="logo --mobile">
                        <img className="logo__img" src={ytIcon} alt="YouTube logo"/>
                    </div>
                </Link>
            </div>
        )
    }
}