import React, {Component} from 'react';

export default class ChannelRenderer extends Component {
    render() {
        return (
            <div className="channel_comp">
                <div className="channel_comp__thumbnail">
                    <a href="#">
                        <div className="channel_comp__avatar">
                            <img
                                src="https://i.ytimg.com/vi/mcWZjUI-Ndg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7WLoj1omGjUT2G-ha_SpE3Ngpkg"
                                alt=""/>
                        </div>
                    </a>
                </div>
                <div className="channel_comp__text">
                    <a href="#">
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
                    </a>
                </div>
            </div>
        )
    }
};