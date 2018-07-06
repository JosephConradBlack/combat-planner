import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import testStore from '../utils/testStore';

import theme from '../theme';
import CombatPlannerContainer from './CombatPlannerContainer';

describe('CombatPlannerContainer', () => {
  const store = createStore(() => testStore);

  it('renders ', () => {
    const component = create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CombatPlannerContainer />
        </ThemeProvider>
      </Provider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
