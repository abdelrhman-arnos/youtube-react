import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchActions from '../actions';
import Filter from '../components/filter/filter-container';

const mapStateToProps = state => ({
    search: state
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(SearchActions, dispatch)
});

const FilterContainerSearch = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default FilterContainerSearch;
