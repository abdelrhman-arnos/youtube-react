import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Iframe extends Component {
    render() {
        return (
            <div className="video__container">
                <div className="video__iframe">
                    <iframe width="100%" height="450" title="video" src={`https://www.youtube.com/embed/2`}
                            frameBorder="0" allowFullScreen={true}>
                    </iframe>
                </div>
                <div className="playlist_panel --desktop">
                    <div className="playlist_panel__head">
                        <div className="playlist__title">Playlist title</div>
                        <div className="playlist__publisher">
                            <Link to="">Channel title</Link> - 1 / 15:39
                        </div>
                    </div>
                    <div className="playlist_panel__body">
                        <Link to="" className="playlist__video">
                            <div className="playlist__play_icon">12 ▶</div>
                            <div className="playlist__play_img">
                                <img
                                    src="https://i.ytimg.com/vi/mcWZjUI-Ndg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7WLoj1omGjUT2G-ha_SpE3Ngpkg"
                                    alt=""/>
                                <div className="video_comp__time">39:15</div>
                            </div>
                            <div className="playlist__info">
                                <div className="playlist__info__title">Playlist title</div>
                                <div className="playlist__info__cTitle">Channel title</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

