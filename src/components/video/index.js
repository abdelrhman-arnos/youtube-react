import React from 'react';
import likeIcon from '../../assets/img/like-icon.svg';
import dislikeIcon from '../../assets/img/dislike-icon.svg';
import plusIcon from '../../assets/img/plus-icon.png';
import flagIcon from '../../assets/img/flag-icon.png';
import shareIcon from '../../assets/img/share-icon.svg';
import playlistIcon from '../../assets/img/playlist-icon.svg';
import dotsIcon from '../../assets/img/dots-icon.svg';

function Video() {
    return (
        <div>
            <div className="video">
                <div className="video__container">
                    <div className="video__iframe">
                        <iframe width="100%" height="450" src="https://www.youtube.com/embed/5CZ6UbdcmLQ"
                                frameBorder="0" allowFullScreen={true}>
                        </iframe>
                    </div>
                    <div className="playlist_panel --desktop">
                        <div className="playlist_panel__head">
                            <div className="playlist__title">Playlist title</div>
                            <div className="playlist__publisher">
                                <a href="#">Channel title</a> - 1 / 15:39
                            </div>
                        </div>
                        <div className="playlist_panel__body">
                            <a href="#" className="playlist__video">
                                <div className="playlist__play_icon">12 ▶</div>
                                <div className="playlist__play_img">
                                    <img
                                        src="https://i.ytimg.com/vi/mcWZjUI-Ndg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7WLoj1omGjUT2G-ha_SpE3Ngpkg"/>
                                    <div className="video_comp__time">39:15</div>
                                </div>
                                <div className="playlist__info">
                                    <div className="playlist__info__title">Playlist title</div>
                                    <div className="playlist__info__cTitle">Channel title</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="video__info">
                    <div className="video__title">Video title</div>
                    <div className="video__count text --dark_gray flex-direction-column --mobile">
                        <div>Channel title</div>
                        <div>12k views</div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="video__count text --dark_gray --desktop">
                            10k views
                        </div>
                        <div className="video_actions">
                            <span className="video__action --pointer" title="I like this">
                                <img src={likeIcon} className="icon --invert" alt="Like"/>
                                14k
                            </span>
                            <span className="video__action --pointer" title="I dislike this">
                                <img src={dislikeIcon} className="icon --invert" alt="Dislike"/>
                                358
                            </span>
                            <span className="video__action --pointer --mobile" title="Save to">
                                <img src={plusIcon} className="icon" alt="Save to"/>
                            </span>
                            <span className="video__action --pointer --mobile" title="Flag">
                                <img src={flagIcon} className="icon" alt="Flag"/>
                            </span>
                            <span className="video__action --pointer" title="Share">
                            <img src={shareIcon} className="icon --invert" alt="Share"/>
                                <span className="--desktop">Share</span>
                            </span>
                            <span className="video__action --pointer --desktop" title="Add to">
                                <img src={playlistIcon} className="icon --invert" alt="Add-to"/>
                            </span>
                            <span className="video__action --pointer --desktop">
                                <img src={dotsIcon} className="icon --invert" alt="Dots"/>
                            </span>
                            <div className="like_bar --desktop">
                                <div className="like_bar--fill" style={{width: '80%'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="playlist_panel --mobile">
                    <div className="playlist_panel__head">
                        <div className="playlist__title">Playlist title</div>
                        <div className="playlist__publisher">
                            <a href="#">Channel title</a> - 1 / 10:60
                        </div>
                    </div>
                    <div className="playlist_panel__body">
                        <a href="#" className="playlist__video">
                            <div className="playlist__play_icon">▶ 123</div>
                            <div className="playlist__play_img">
                                <img
                                    src="https://i.ytimg.com/vi/mcWZjUI-Ndg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7WLoj1omGjUT2G-ha_SpE3Ngpkg"/>
                                <div className="video_comp__time">12:13</div>
                            </div>
                            <div className="playlist__info">
                                <div className="playlist__info__title">Playlist title</div>
                                <div className="playlist__info__cTitle">Channel title</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="channel__info --desktop">
                    <div className="channel__thumbnail channel__thumbnail--sm">
                        <a href="#">
                            <div className="channel__avatar channel__avatar--sm">
                                <img
                                    src='https://yt3.ggpht.com/a-/AAuE7mAA6XbiXyWcoPrrC2orJNcDeSX6EaILdrWoaw=s176-c-k-c0x00ffffff-no-rj-mo'
                                    alt=""/>
                            </div>
                        </a>
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
                <div className="video_comp">
                    <div className="video_comp__thumbnail">
                        <a href="#">
                            <img
                                src='https://i.ytimg.com/vi/mcWZjUI-Ndg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7WLoj1omGjUT2G-ha_SpE3Ngpkg'
                                alt=""/>
                            <div className="video_comp__time">40:26</div>
                        </a>
                    </div>
                    <div className="video_comp__text">
                        <div className="video_comp__header">
                            <a href="#">
                                <div className="video_comp__title">video title</div>
                            </a>
                            <div className="video_comp__details">
                                <div className="video_comp__channel-name">
                                    <a href="#">Channel title</a>
                                    <div className="details__separator">•</div>
                                </div>
                                <div className="video_comp__counts">
                                    <span>
                                        6k watching
                                    </span>
                                    <span>1,023,123 views</span>
                                    <div className="details__separator">•</div>
                                </div>
                                <div className="video_comp__date">4 months ago</div>
                            </div>
                            <div className="video_comp__description">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Accusamus dolorem fugiat omnis!
                            </div>
                            <div className="video_comp__live-now">Live Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video;