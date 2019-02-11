import {combineReducers} from 'redux';
import search from './search';
import searchResults from './search-results';

export default combineReducers({
    search, searchResults
});