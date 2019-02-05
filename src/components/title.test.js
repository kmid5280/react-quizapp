import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme'
import Title from './title';


it('renders without crashing', () => {
    shallow(<Title/>)
})

it('renders a start button', () => {
    const wrapper = shallow(<Title/>)
    expect(wrapper.find('.start-button')).toHaveLength(1)
    
})
