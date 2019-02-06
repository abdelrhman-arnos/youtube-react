import React from 'react';
import likeIcon from '../../assets/img/like-icon.svg';
import dislikeIcon from '../../assets/img/dislike-icon.svg';
import plusIcon from '../../assets/img/plus-icon.png';
import flagIcon from '../../assets/img/flag-icon.png';
import shareIcon from '../../assets/img/share-icon.svg';
import playlistIcon from '../../assets/img/playlist-icon.svg';
import dotsIcon from '../../assets/img/dots-icon.svg';

function VideoInfo(){
    return(
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
    )
}

export default VideoInfo;