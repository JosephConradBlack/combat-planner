import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import configureMockStore from 'redux-mock-store

import theme from '../theme';
import CombatPlannerContainer from './CombatPlannerContainer';

describe('CombatPlannerContainer', () => {
  const store = createStore(() => ({}));

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
