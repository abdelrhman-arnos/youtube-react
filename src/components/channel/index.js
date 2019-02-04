import React from 'react';

function Channel() {
    return (
        <div>
            <div className="channel">
                <div className="channel_banner">
                    <img src="https://blog.placeit.net/wp-content/uploads/2018/05/YOUTUBE-BANNER-TEMPLATE-1024x576.png"
                         alt=""/>
                </div>
                <div className="channel__info mt-2">
                    <div className="channel_comp__thumbnail channel__thumbnail--sm --channel_av--sm --mobile">
                        <div className="channel_comp__avatar channel__avatar--sm">
                            <img
                                src="https://yt3.ggpht.com/a-/AAuE7mDgty-77F-80tGXnFut6OGsHxOfGxJV4Lfmnw=s288-mo-c-c0xffffffff-rj-k-no"
                                alt=""/>
                        </div>
                    </div>
                    <div className="channel_comp__thumbnail channel__thumbnail--md --desktop">
                        <div className="channel_comp__avatar channel__avatar--md">
                            <img
                                src="https://yt3.ggpht.com/a-/AAuE7mDgty-77F-80tGXnFut6OGsHxOfGxJV4Lfmnw=s288-mo-c-c0xffffffff-rj-k-no"
                                alt=""/>
                        </div>
                    </div>
                    <div className="channel__header header--scope">
                        <div className="channel__title">Channel title</div>
                        <div className="channel_count text --mobile --dark_gray">
                            <div className="button button__subscribe --subscribe__sm">►</div>
                            <span className="text --red mr-2">Subscribe</span>
                            13M
                        </div>
                    </div>
                    <div className="button button__subscribe --desktop">
                        Subscribe 14M
                    </div>
                </div>
                <div className="video_comp">
                    <div className="video_comp__thumbnail">
                        <a href="#">
                            <img
                                src='https://i.ytimg.com/vi/mcWZjUI-Ndg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7WLoj1omGjUT2G-ha_SpE3Ngpkg'
                                alt=""/>
                            <div className="video_comp__time">40:02</div>
                        </a>
                    </div>
                    <div className="video_comp__text">
                        <div className="video_comp__header">
                            <a href="#">
                                <div className="video_comp__title">Video title</div>
                            </a>
                            <div className="video_comp__details">
                                <div className="video_comp__channel-name">
                                    <a href="#">Channel title</a>
                                    <div className="details__separator --desktop">•</div>
                                </div>
                                <div className="video_comp__counts mt-3 --mobile">
                                    <span>
                                        1243 watching
                                    </span>
                                    <span>12 views</span>
                                </div>
                                <div className="video_comp__counts --desktop">
                                    <span>
                                        150 watching
                                    </span>
                                    <span>103 views</span>
                                    <div className="details__separator">•</div>
                                </div>
                                <div className="video_comp__date --desktop">10:23</div>
                            </div>
                            <div className="video_comp__description --desktop">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Delectus dolorem quisquam quod.
                            </div>
                            <div className="video_comp__live-now">Live Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Channel;