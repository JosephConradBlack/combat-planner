import React from 'react';
import App from './App';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(toJson(component)).toMatchSnapshot();
  expect(component.instance()).toBeInstanceOf(App);
});
