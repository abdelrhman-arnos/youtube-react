import React, {Component} from 'react';
import store from "../../store";
import {viewsFormat} from "../../helper";

export default class Channel extends Component {
    render() {
        const self = this;
        let data = store.getState().searchResults.items.find(function (element) {
            return element.channel.id === self.props.match.params.id;
        });
        return (
            <div>
                <div className="channel">
                    <div className="channel_banner">
                        <img src={data.channel.brandingSettings.image.bannerImageUrl} alt={data.channel.snippet.title}/>
                    </div>
                    <div className="channel__info mt-2">
                        <div className="channel_comp__thumbnail channel__thumbnail--sm --channel_av--sm --mobile">
                            <div className="channel_comp__avatar channel__avatar--sm">
                                <img src={data.channel.snippet.thumbnails.medium.url} alt={data.channel.snippet.title}/>
                            </div>
                        </div>
                        <div className="channel_comp__thumbnail channel__thumbnail--md --desktop">
                            <div className="channel_comp__avatar channel__avatar--md">
                                <img src={data.channel.snippet.thumbnails.medium.url} alt={data.channel.snippet.title}/>
                            </div>
                        </div>
                        <div className="channel__header header--scope">
                            <div className="channel__title">{data.channel.snippet.title}</div>
                            <div className="channel_count text --mobile --dark_gray"
                                 title={data.channel.statistics.subscriberCount}>
                                <div className="button button__subscribe --subscribe__sm">►</div>
                                <span className="text --red mr-2">Subscribe</span>
                                {viewsFormat(data.channel.statistics.subscriberCount)}
                            </div>
                        </div>
                        <div className="button button__subscribe --desktop"
                             title={data.channel.statistics.subscriberCount}>
                            Subscribe {viewsFormat(data.channel.statistics.subscriberCount)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}