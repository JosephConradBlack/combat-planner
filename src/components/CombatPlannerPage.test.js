import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CombatPlannerPage from './CombatPlannerPage';

describe('CombatPlannerPage', () => {
  it('renders ', () => {
    const component = shallow(<CombatPlannerPage />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
