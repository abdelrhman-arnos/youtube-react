import React, {Component} from 'react';

export default class FilterCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="result_count">
                About 12,200,000 results
            </div>
        )
    }
}