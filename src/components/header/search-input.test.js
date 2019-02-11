import React from 'react';
import SearchInput from './search-input';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Search input component', () => {
    it('starts with a instabug keyword', () => {
        const wrapper = shallow(<SearchInput/>);
        const keyword = wrapper.state().q;
        expect(keyword).toEqual('instabug');
    });

    it('change the keyword with the state', () => {
        const wrapper = mount(<SearchInput/>);
        wrapper.setState({q: 'google'});
        expect(wrapper.state().q).toEqual('google');
    });

    it('change the keyword with on change method', () => {
        const wrapper = mount(<SearchInput/>);
        const value = wrapper.find('#search__input--desktop').simulate('change', {target: {value: 'google'}});
        expect(wrapper.state().q).toEqual('google');
    });
});