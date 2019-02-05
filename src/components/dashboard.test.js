import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme'
import Dashboard from './dashboard';

it('renders without crashing', () => {
  //const div = document.createElement('div');
  //ReactDOM.render(<Dashboard />, div);
  //ReactDOM.unmountComponentAtNode(div);
  shallow(<Dashboard />)
});

it('should display a question', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.hasClass('question-wrapper'))
})

it('should display buttons with answers', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.hasClass('dashboard-answer-button'))
})