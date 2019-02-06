import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class VideoRenderer extends Component {
    render() {
        return (
            <div className="video_comp">
                <div className="video_comp__thumbnail">
                    <Link to="/video/123">
                        <img src="https://i.ytimg.com/vi/mcWZjUI-Ndg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7WLoj1omGjUT2G-ha_SpE3Ngpkg" alt=""/>
                        <div className="video_comp__time">
                            17:00
                        </div>
                    </Link>
                </div>
                <div className="video_comp__text">
                    <div className="video_comp__header">
                        <Link to="/video/123">
                            <div className="video_comp__title">Video title</div>
                        </Link>
                        <div className="video_comp__details">
                            <div className="video_comp__channel-name">
                                <Link to="/channel/123">Channel title</Link>
                                <div className="details__separator --desktop">•</div>
                            </div>
                            <div className="video_comp__counts --desktop">
                                <span>
                                    123 watching
                                </span>
                                <div className="details__separator">•</div>
                                <span>24M views</span>
                                <div className="details__separator">•</div>
                            </div>
                            <div className="video_comp__counts mt-3 --mobile">
                                <span>
                                    546 watching
                                </span>
                                <span>0234 views</span>
                            </div>
                            <div className="video_comp__date --desktop">3 months ago</div>
                        </div>
                        <div className="video_comp__description --desktop">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Atque earum eveniet porro.
                        </div>
                        <div className="video_comp__live-now">Live Now</div>
                    </div>
                </div>
            </div>
        )
    }
};