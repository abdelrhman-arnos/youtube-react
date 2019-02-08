import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TimeAgo from 'react-timeago'

export default class VideoRenderer extends Component {
    render() {
        return (
            <div className="video_comp">
                <div className="video_comp__thumbnail">
                    <Link to={`/video/${this.props.data.id.videoId}`}>
                        <img src={this.props.data.snippet.thumbnails.medium.url} alt={this.props.data.snippet.title}/>
                        <div className="video_comp__time">
                            17:00
                        </div>
                    </Link>
                </div>
                <div className="video_comp__text">
                    <div className="video_comp__header">
                        <Link to={`/video/${this.props.data.id.videoId}`}>
                            <div className="video_comp__title">{this.props.data.snippet.title}</div>
                        </Link>
                        <div className="video_comp__details">
                            <div className="video_comp__channel-name">
                                <Link
                                    to={`/channel/${this.props.data.snippet.channelId}`}>{this.props.data.snippet.channelTitle}</Link>
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
                            <TimeAgo className="video_comp__date --desktop" date={this.props.data.snippet.publishedAt}/>
                        </div>
                        <div className="video_comp__description --desktop">{this.props.data.snippet.description}</div>
                        {this.props.data.snippet.liveBroadcastContent === 'none' ? null :
                            <div className="video_comp__live-now">Live Now</div>}
                    </div>
                </div>
            </div>
        )
    }
};