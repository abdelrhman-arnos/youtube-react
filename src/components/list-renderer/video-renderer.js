import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TimeAgo from 'react-timeago'
import {durationFormat, viewsFormat} from "../../helper";

export default class VideoRenderer extends Component {
    render() {
        let data = this.props.data;
        if (!Object.keys(data.video).length)
            return (null);
        return (
            <div className="video_comp">
                <div className="video_comp__thumbnail">
                    <Link to={`/video/${data.id.videoId}`}>
                        <img src={data.snippet.thumbnails.medium.url} alt={data.snippet.title}/>
                        <div className="video_comp__time">
                            {durationFormat(data.video.contentDetails.duration)}
                        </div>
                    </Link>
                </div>
                <div className="video_comp__text">
                    <div className="video_comp__header">
                        <Link to={`/video/${data.id.videoId}`}>
                            <div className="video_comp__title">{data.snippet.title}</div>
                        </Link>
                        <div className="video_comp__details">
                            <div className="video_comp__channel-name">
                                <Link to={`/channel/${data.snippet.channelId}`}>{data.snippet.channelTitle}</Link>
                                <div className="details__separator --desktop">•</div>
                            </div>
                            <div className="video_comp__counts --desktop">
                                {data.video.liveStreamingDetails ?
                                    <span>{data.video.liveStreamingDetails.concurrentViewers} watching</span> :
                                    <span>{viewsFormat(data.video.statistics.viewCount)} views</span>
                                }
                                <div className="details__separator">•</div>
                            </div>
                            <div className="video_comp__counts mt-3 --mobile">
                                {data.video.liveStreamingDetails ?
                                    <span>{data.video.liveStreamingDetails.concurrentViewers} watching</span> :
                                    <span>{viewsFormat(data.video.statistics.viewCount)} views</span>
                                }
                            </div>
                            <TimeAgo className="video_comp__date --desktop" date={data.snippet.publishedAt}/>
                        </div>
                        <div className="video_comp__description --desktop">{data.snippet.description}</div>
                        {data.snippet.liveBroadcastContent === 'none' ? null :
                            <div className="video_comp__live-now">Live Now</div>}
                    </div>
                </div>
            </div>
        )
    }
};