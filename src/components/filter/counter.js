import React, {Component} from 'react';
import {numFormat} from "../../helper";

export default class FilterCounter extends Component {
    render() {
        return (
            <div className="result_count">
                About {numFormat(this.props.searchResults.pageInfo.totalResults)} results
            </div>
        )
    }
}

