import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import ChannelRenderer from './channel-renderer';
import VideoRenderer from './video-renderer';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../../assets/img/spinner.gif';
import store from "../../store";
import {searchCall} from "../../actions/shared-action";
import qs from "query-string";

class ListRenderer extends Component {
    fetchMoreData = () => {
        setTimeout(() => {
            store.dispatch(searchCall({scroll: true}));
        }, 2500);
    };

    render() {
        let parsed = qs.parse(this.props.history.location.search);
        return (
            <div>
                {!this.props.searchResults.items.length ?
                    <div style={{textAlign: 'center'}}>
                        <h3>No results found</h3>
                        <p>Try different keywords or remove search filters</p>
                    </div> :
                    <InfiniteScroll
                        dataLength={this.props.searchResults.items.length}
                        next={this.fetchMoreData}
                        hasMore={this.props.searchResults.scrollLoading}
                        loader={loader}
                    >
                        {this.props.searchResults.items.map(item => (
                            item.id.kind.split('youtube#')[1] === 'video' ?
                                parsed.type !== 'channel' && <VideoRenderer data={item} key={item.id.videoId}/> :
                                parsed.type !== 'video' && <ChannelRenderer data={item} key={item.id.channelId}/>
                        ))}
                    </InfiniteScroll>
                }
            </div>
        )
    }
}

export default withRouter(ListRenderer);

const loader = (
    <div style={{textAlign: 'center'}}>
        <img src={Spinner} style={{width: '30px'}} alt="Loading spinner"/>
    </div>
);