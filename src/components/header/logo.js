import React,{Component} from 'react';

import ytLogo from '../../assets/img/youtube-logo.svg';
import ytIcon from '../../assets/img/youtube-icon-white.png';

export default class Logo extends Component{
    render(){
        return(
            <div className="d-flex">
                <a href="#">
                    <div className="logo --desktop">
                        <img className="logo__img" src={ytLogo} alt="YouTube logo"/>
                        <span className="logo__localization">eg</span>
                    </div>
                    <div className="logo --mobile">
                        <img className="logo_img" src={ytIcon} alt="YouTube logo"/>
                    </div>
                </a>
            </div>
        )
    }
}