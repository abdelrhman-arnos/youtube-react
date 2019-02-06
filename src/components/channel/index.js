import React from 'react';
import VideoRenderer from '../list-renderer/video-renderer';

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
                <VideoRenderer />
            </div>
        </div>
    )
}

export default Channel;