import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import Fighter from './Fighter';

describe('Fighter', () => {
  it('renders with no props', () => {
    const component = create(
      <ThemeProvider theme={theme}>
        <Fighter />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with fighter', () => {
    const item = {
      id: 1,
      name: 'Fighter'
    };
    const component = create(
      <ThemeProvider theme={theme}>
        <Fighter item={item} />
      </ThemeProvider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
