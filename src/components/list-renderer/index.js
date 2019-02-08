import React, {Component} from 'react';
import ChannelRenderer from './channel-renderer';
import VideoRenderer from './video-renderer';

export default class ListRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentWillReceiveProps(props) {
        this.setState({items: props.searchResults.items})
    }

    render() {
        return (
            <div>
                {this.state.items.map(item => {
                    return item.id.kind.split('youtube#')[1] === 'video' ?
                        <VideoRenderer data={item} key={item.id.videoId}/> :
                        <ChannelRenderer data={item} key={item.id.channelId}/>
                })};
            </div>
        )
    }
}