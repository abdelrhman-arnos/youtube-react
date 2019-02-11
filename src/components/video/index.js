import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import ChannelInfo from './channel-info';
import VideoInfo from './video-info';
import Iframe from './iframe';
import PlaylistInfo from "./playlist-info";
import store from '../../store';

class Video extends Component {
    render() {
        const self = this;
        let data = store.getState().searchResults.items.find(function(element) {
            return element.id.videoId === self.props.match.params.id;
        });
        return (
            <div>
                <div className="video">
                    <Iframe/>
                    <VideoInfo data={data}/>
                    <PlaylistInfo data={data}/>
                    <ChannelInfo data={data}/>
                </div>
            </div>
        )
    }
}

export default withRouter(Video);