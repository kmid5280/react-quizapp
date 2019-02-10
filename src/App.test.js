import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a start button', () => {
  const wrapper = mount(<App/>)
  expect(wrapper.find('.start-button')).toHaveLength(1)
})

it('starts quiz when start button is clicked', () => {
  const wrapper = mount(<App/>)
  const findButton = wrapper.find('.start-button')
  findButton.simulate('click')
  expect(wrapper.find('Dashboard')).toHaveLength(1)
})