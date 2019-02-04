import React, {Component} from 'react';

import ChannelRenderer from './channel-renderer';
import VideoRenderer from './video-renderer';

import '../../assets/sass/list-renderer.css';

export default class ListRenderer extends Component{
    render(){
        return(
            <div>
                <VideoRenderer />
                <ChannelRenderer />
            </div>
        )
    }
}