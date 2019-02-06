import React from 'react';
import {Link} from "react-router-dom";

function ChannelInfo(){
    return(
        <div className="channel__info --desktop">
            <div className="channel__thumbnail channel__thumbnail--sm">
                <Link to="/channel/123">
                    <div className="channel__avatar channel__avatar--sm">
                        <img src='https://yt3.ggpht.com/a-/AAuE7mAA6XbiXyWcoPrrC2orJNcDeSX6EaILdrWoaw=s176-c-k-c0x00ffffff-no-rj-mo'
                            alt=""/>
                    </div>
                </Link>
            </div>
            <div className="channel__header">
                <div className="channel__title">Channel title</div>
                <span className="video__date">Published on Sep 28, 2018</span>
                <div className="video__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium beatae consectetur cum illo, iusto magnam neque omnis quae sit, tempore
                    temporibus, ut!
                </div>
            </div>
        </div>
    )
}

export default ChannelInfo;