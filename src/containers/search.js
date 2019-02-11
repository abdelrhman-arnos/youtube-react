import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as SearchActions from '../actions/search';
import FilterContainer from '../components/filter/filter-container';
import SearchInput from '../components/header/search-input';

const mapStateToProps = state => {
    return state
};

const mapActionsToProps = dispatch => ({
    actions: bindActionCreators(SearchActions, dispatch)
});

export const FilterSearchMap = connect(
    mapStateToProps,
    mapActionsToProps
)(withRouter(FilterContainer));

export const SearchInputMap = connect(
    mapStateToProps,
    mapActionsToProps
)(withRouter(SearchInput));
