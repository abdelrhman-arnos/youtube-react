import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Iframe extends Component {
    render() {
        return (
            <div className="video__container">
                <div className="video__iframe">
                    <iframe width="100%" height="450" title="video"
                            src={`https://www.youtube.com/embed/${this.props.match.params.id}?autoplay=1&rel=0`}
                            frameBorder="0" allowFullScreen={true}>
                    </iframe>
                </div>
            </div>
        )
    }
}

export default withRouter(Iframe);

