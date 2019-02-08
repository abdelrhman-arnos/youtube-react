import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as SearchActions from '../actions/search';
import ListRenderer from '../components/list-renderer';
import FilterCounter from '../components/filter/counter';

const mapStateToProps = state => {
    return state
};

const mapActionsToProps = dispatch => ({
    actions: bindActionCreators(SearchActions, dispatch)
});

export const SearchRendererMap = connect(
    mapStateToProps,
    mapActionsToProps
)(withRouter(ListRenderer));

export const FilterCounerMap = connect(
    mapStateToProps,
    mapActionsToProps
)(withRouter(FilterCounter));
