import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchActions from '../actions';
import FilterContainer from '../components/filter/filter-container';
import SearchInput from '../components/header/search-input';

const mapStateToProps = state => ({
    search: state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(SearchActions, dispatch)
});

export const FilterSearchMap = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterContainer);

export const SearchInputMap = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInput);
