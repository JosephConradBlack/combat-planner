import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ButtonGroup from './FighterList';

describe('ButtonGroup', () => {
  it('renders with no props', () => {
    const component = shallow(<ButtonGroup />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with empty items array', () => {
    const component = shallow(<ButtonGroup items={[]} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders with one items ', () => {
    const component = shallow(<ButtonGroup items={[{ id: 'id' }]} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
