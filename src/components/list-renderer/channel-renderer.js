import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class ChannelRenderer extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div className="channel_comp">
                <div className="channel_comp__thumbnail">
                    <Link to={`/channel/${this.props.data.id.channelId}`}>
                        <div className="channel_comp__avatar">
                            <img src={this.props.data.snippet.thumbnails.medium.url} alt={this.props.data.snippet.title}/>
                        </div>
                    </Link>
                </div>
                <div className="channel_comp__text">
                    <Link to={`/channel/${this.props.data.id.channelId}`}>
                        <div className="channel_comp__header">
                            <div className="channel_comp__title">{this.props.data.snippet.title}</div>
                            <div className="channel_comp__details --desktop">
                                <span>5641 subscribers</span>
                                <div className="details__separator">•</div>
                                20 videos
                            </div>
                            <div className="channel_comp__details --mobile">
                                <div className="mr-3">20 videos</div>
                                <span>5641 subscribers</span>
                            </div>
                            <div className="channel_comp__description --desktop">{this.props.data.snippet.description}</div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
};