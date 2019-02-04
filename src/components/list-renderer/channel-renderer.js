import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class ChannelRenderer extends Component {
    render() {
        return (
            <div className="channel_comp">
                <div className="channel_comp__thumbnail">
                    <Link to="/channel/123">
                        <div className="channel_comp__avatar">
                            <img
                                src="https://yt3.ggpht.com/a-/AAuE7mAA6XbiXyWcoPrrC2orJNcDeSX6EaILdrWoaw=s176-c-k-c0x00ffffff-no-rj-mo"
                                alt=""/>
                        </div>
                    </Link>
                </div>
                <div className="channel_comp__text">
                    <Link to="/channel/123">
                        <div className="channel_comp__header">
                            <div className="channel_comp__title">Channel title</div>
                            <div className="channel_comp__details --desktop">
                                <span>5641 subscribers</span>
                                <div className="details__separator">•</div>
                                20 videos
                            </div>
                            <div className="channel_comp__details --mobile">
                                <div className="mr-3">20 videos</div>
                                <span>5641 subscribers</span>
                            </div>
                            <div className="channel_comp__description --desktop">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto delectus sapiente vel.
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
};