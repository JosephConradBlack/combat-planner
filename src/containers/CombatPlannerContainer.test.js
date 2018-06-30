import React from 'react';
import { create } from 'react-test-renderer';

import CombatPlannerContainer from './CombatPlannerContainer';

describe('CombatPlannerContainer', () => {
  it('renders ', () => {
    const component = create(<CombatPlannerContainer />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
