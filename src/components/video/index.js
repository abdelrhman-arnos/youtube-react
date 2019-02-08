import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import VideoRenderer from '../list-renderer/video-renderer';
import ChannelInfo from './channel-info';
import VideoInfo from './video-info';
import Iframe from './iframe';

export default class Video extends Component {
    render() {
        return (
            <div>
                <div className="video">
                    <Iframe/>
                    <VideoInfo/>
                    <div className="playlist_panel --mobile">
                        <div className="playlist_panel__head">
                            <div className="playlist__title">Playlist title</div>
                            <div className="playlist__publisher">
                                <Link to="/channel/123">Channel title</Link> - 1 / 10:60
                            </div>
                        </div>
                        <div className="playlist_panel__body">
                            <Link to="/video/123" className="playlist__video">
                                <div className="playlist__play_icon">▶ 123</div>
                                <div className="playlist__play_img">
                                    <img
                                        src="https://i.ytimg.com/vi/mcWZjUI-Ndg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7WLoj1omGjUT2G-ha_SpE3Ngpkg"
                                        alt=""/>
                                    <div className="video_comp__time">12:13</div>
                                </div>
                                <div className="playlist__info">
                                    <div className="playlist__info__title">Playlist title</div>
                                    <div className="playlist__info__cTitle">Channel title</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <ChannelInfo/>
                </div>
            </div>
        )
    }
}

