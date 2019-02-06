import {SET_DATE_FILTER} from '../constants/ActionTypes';

const setDateFilter = (state = [], {type, payload}) => {
    switch (type) {
        case SET_DATE_FILTER:
            return payload;
        default:
            return state;
    }
};

export default setDateFilter;