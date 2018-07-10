import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CombatPlannerContainer from './CombatPlannerContainer';

describe('CombatPlannerContainer', () => {
  it('renders ', () => {
    const component = shallow(<CombatPlannerContainer />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
