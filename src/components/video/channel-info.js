import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import TimeAgo from 'react-timeago'

class ChannelInfo extends Component{
    render(){
        let data = this.props.data;
        if (!Object.keys(data).length)
            return (null);
        return(
            <div className="channel__info --desktop">
                <div className="channel__thumbnail channel__thumbnail--sm">
                    <Link to={`/channel/${data.channel.id}`}>
                        <div className="channel__avatar channel__avatar--sm">
                            <img src={data.channel.snippet.thumbnails.medium.url} alt={data.channel.snippet.title}/>
                        </div>
                    </Link>
                </div>
                <div className="channel__header">
                    <div className="channel__title">{data.video.snippet.channelTitle}</div>
                    <TimeAgo className="video__date" date={data.video.snippet.publishedAt}/>
                    <div className="video__description">{data.video.snippet.description}</div>
                </div>
            </div>
        )
    }
}

export default withRouter(ChannelInfo);