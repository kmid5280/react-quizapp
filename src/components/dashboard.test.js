import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme'
import Dashboard from './dashboard';

it('renders without crashing', () => {
  shallow(<Dashboard />)
});

it('should display a question', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.hasClass('question-wrapper')).toEqual(true)
})

it('should display four answer buttons', () => {
    const wrapper = shallow(<Dashboard />)
    const findButtons = wrapper.find('.dashboard-answer-button')
    expect(findButtons).toHaveLength(4)
})